import {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {PointRef, PointProps} from '../types';
import styles from '../styles.module.css';
import Image from 'next/image';

const Mirror = forwardRef<PointRef, Partial<PointProps>>(
	({isActive, toggleInteract}, ref) => {
		const modalRef = useRef<HTMLDialogElement>(null);

		const openDialog = () => {
			if (modalRef.current) {
				modalRef.current.showModal();
				toggleInteract?.();
			}
		};

		const closeDialog = () => {
			if (modalRef.current) {
				modalRef.current.close();
				toggleInteract?.();
			}
		};

		useImperativeHandle(ref, () => ({
			interact: openDialog,
			cancel: closeDialog,
		}));

		useEffect(() => {
			if (!isActive && modalRef.current) {
				modalRef.current.close();
			}
		}, [isActive]);

		return (
			<div className='pb-8 relative'>
				<dialog className={styles.modal} ref={modalRef}>
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col items-center lg:flex-row gap-8'>
							<div className='w-40 h-60 border-8 border-amber-800 relative'>
								<Image
									alt='Красавчик'
									src='/profile.jpg'
									fill
									style={{objectFit: 'cover'}}
								/>
							</div>

							<div className='bg-white p-4 border-2 border-black flex flex-col gap-4 '>
								<div className='flex flex-col gap-1 '>
									<h3>Стаж работы</h3>
									<p>
										Более 5ти лет (старт работы frontend разработчиком - август
										2020)
									</p>
								</div>

								<div className='flex flex-col gap-1'>
									<h3>Иностранный язык</h3>
									<p>Английский язык — Upper-Intermediate B2</p>
								</div>

								<div className='flex flex-col gap-1'>
									<h3>Образование</h3>
									<p>Высшее (специалитет)</p>
								</div>
							</div>
						</div>
						<button
							onClick={closeDialog}
							className='bg-white px-4 py-2 border-2 border-black'
						>
							Отойти от зеркала
						</button>
					</div>
				</dialog>
				{isActive && (
					<div className='absolute bg-white border-2 border-black p-4 bottom-full right-1/2 translate-x-1/2 mb-4 rounded-2xl'>
						Посмотреть в зеркало
					</div>
				)}
				<div
					className={`h-20 w-12 ${isActive ? 'bg-blue-200' : 'bg-blue-300'} border-4 border-amber-800`}
				/>
			</div>
		);
	},
);

Mirror.displayName = 'Mirror';

export default Mirror;
