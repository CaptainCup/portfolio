import Image from 'next/image';
import {InfoModalProps} from '../types';

const Stats = ({page}: Partial<InfoModalProps>) => {
	return (
		<div className='h-full w-full py-4 px-8 flex flex-col items-center bg-black text-white text-xl '>
			{page === 1 && (
				<>
					<div className='w-full pb-4 mb-8 border-b-2 border-white'>
						<p className='text-2xl '>Это я :)</p>
					</div>

					<div className='w-40 h-48 relative'>
						<Image
							alt='Красавчик'
							src='/profile.jpg'
							fill
							style={{objectFit: 'cover'}}
						/>
					</div>
				</>
			)}

			{page === 2 && (
				<>
					<div className='w-full pb-4 border-b-2 border-white'>
						<p className='text-2xl '>Характеристики</p>
					</div>

					<div className='p-4 flex flex-col gap-4'>
						<div className='flex flex-col gap-1 items-center'>
							<h3>Стаж работы</h3>
							<p>5 лет</p>
						</div>

						<div className='flex flex-col gap-1 items-center'>
							<h3>Английский язык</h3>
							<p>B2</p>
						</div>

						<div className='flex flex-col gap-1 items-center'>
							<h3>Образование</h3>
							<p>Высшее</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Stats;
