'use client';

import Image from 'next/image';
import ContentSection from './components/ContentSection';
import {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

type SectionInfo = {
	sectionName: string;
	buttonPosition: number;
	passed: boolean;
};

const animation = {
	idle: '/idle.gif',
	walk: '/walking.gif',
	jump: '/jump.gif',
};

export default function Home() {
	const [sections, setSections] = useState<SectionInfo[]>([]);
	const [isEnd, setIsEnd] = useState(false);
	const [reachedSections, setReachedSections] = useState<string[]>([]);
	const [status, setStatus] = useState<keyof typeof animation>('idle');
	const walkingTimeout = useRef<ReturnType<typeof setTimeout>>(null);

	const ref = useRef<HTMLDivElement>(null);

	const toggleEnd = () => {
		setIsEnd(draft => !draft);
		const el = ref.current;
		if (!el) return;

		setTimeout(() => {
			el.scrollTop = el.scrollHeight;
		}, 0);
	};

	const initializeSection = (sectionName: string, buttonPosition: number) => {
		setSections(draft => [
			...draft,
			{
				sectionName,
				buttonPosition,
				passed: false,
			},
		]);
	};

	const passSection = (sectionName: string) => {
		setSections(draft => {
			const sectionIndex = draft.findIndex(
				section => section.sectionName === sectionName,
			);

			if (sectionIndex !== -1) {
				return [
					...draft.slice(0, sectionIndex),
					{...draft[sectionIndex], passed: true},
					...draft.slice(sectionIndex + 1),
				];
			}

			return draft;
		});
	};

	const jump = () => {
		if (walkingTimeout.current) {
			clearTimeout(walkingTimeout.current);
		}

		setStatus('jump');

		walkingTimeout.current = setTimeout(() => setStatus('idle'), 2000);
	};

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const nextStopIndex = sections.findIndex(({passed}) => !passed);
		const nextStop = sections[nextStopIndex];
		const {width} = el.getBoundingClientRect();

		const onWheel = (e: WheelEvent) => {
			e.preventDefault();

			const delta = Math.abs(e.deltaY);

			const newPosition = el.scrollLeft + delta * 0.6;

			if (nextStop && nextStop.buttonPosition - width / 2 < newPosition) {
				el.scrollLeft = nextStop.buttonPosition - width / 2;
				setReachedSections(draft => [...draft, nextStop.sectionName]);
				return;
			}

			if (walkingTimeout.current) {
				clearTimeout(walkingTimeout.current);
			}

			setStatus('walk');

			walkingTimeout.current = setTimeout(() => setStatus('idle'), 300);
			el.scrollLeft = newPosition;
		};

		let startX = 0;

		const onDown = (e: TouchEvent) => {
			startX = e.touches[0].clientX;
		};

		const onMove = (e: TouchEvent) => {
			e.preventDefault();

			const delta = startX - e.touches[0].clientX;

			startX = e.touches[0].clientX;

			if (delta < 0 || !nextStop) {
				return;
			}

			const newPosition = el.scrollLeft + delta * 0.7;

			if (nextStop && nextStop.buttonPosition - width / 2 < newPosition) {
				el.scrollLeft = nextStop.buttonPosition - width / 2;
				setReachedSections(draft => [...draft, nextStop.sectionName]);
				return;
			}

			if (walkingTimeout.current) {
				clearTimeout(walkingTimeout.current);
			}

			setStatus('walk');

			walkingTimeout.current = setTimeout(() => setStatus('idle'), 300);
			el.scrollLeft = newPosition;
		};

		if (!isEnd && status !== 'jump') {
			el.addEventListener('wheel', onWheel, {passive: false});
			el.addEventListener('touchstart', onDown);
			el.addEventListener('touchmove', onMove);
		}

		return () => {
			el.removeEventListener('wheel', onWheel);
			el.removeEventListener('touchstart', onDown);
			el.removeEventListener('touchmove', onMove);
		};
	}, [sections, isEnd, status]);

	return (
		<div className={`${styles.body} h-screen `}>
			<main
				ref={ref}
				className={`
					${styles.container} 
					${styles.sky} 
					${isEnd ? 'touch-auto' : 'touch-none'} 
					${isEnd ? 'flex-col' : 'flex-row'} 
					pb-32 static flex items-end h-11/12 overflow-y-visible overflow-x-auto`}
			>
				{/* Обо мне */}
				<section className='w-screen min-w-screen p-8'>
					<div className='flex flex-col gap-8 w-full h-full border-4 rounded-4xl p-8 lg:p-12 border-black bg-white'>
						<h2 className='text-2xl'>👋 Привет, я</h2>

						<div className='flex flex-col lg:flex-row items-center gap-8'>
							<div className='rounded-full overflow-hidden'>
								<Image
									src='/profile.jpg'
									width={128}
									height={128}
									alt='Красавчик'
								/>
							</div>
							<div>
								<p className='text-2xl lg:text-4xl'>Гаврилов Илья Юрьевич</p>
								<p className='text-xl'>Frontend Developer</p>
							</div>
						</div>
					</div>
				</section>

				{/* Информация */}
				<ContentSection
					sectionName={'info'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('info', buttonPosition)
					}
					passSection={() => passSection('info')}
				/>

				{/* Навыки */}
				<ContentSection
					sectionName={'skills'}
					isClickable={reachedSections.includes('skills')}
					initializeSection={buttonPosition =>
						initializeSection('skills', buttonPosition)
					}
					passSection={() => passSection('skills')}
				/>

				{/* Проект 1 */}
				<ContentSection
					sectionName={'projectOne'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('projectOne', buttonPosition)
					}
					passSection={() => passSection('projectOne')}
				/>

				{/* Проект 2 */}
				{/* <ContentSection
					sectionName={'projectTwo'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('projectTwo', buttonPosition)
					}
					
					passSection={() => passSection('projectTwo')}
				/> */}

				{/* Проект 3 */}
				{/* <ContentSection
					sectionName={'projectThree'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('projectThree', buttonPosition)
					}
					
					passSection={() => passSection('projectThree')}
				/> */}

				{/* Проект 4 */}
				{/* <ContentSection
					sectionName={'projectFour'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('projectFour', buttonPosition)
					}
					
					passSection={() => passSection('projectFour')}
				/> */}

				{/* Проект 5 */}
				{/* <ContentSection
					sectionName={'projectFive'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('projectFive', buttonPosition)
					}
					
					passSection={() => passSection('projectFive')}
				/> */}

				{/* Проект 6 */}
				{/* <ContentSection
					sectionName={'projectSix'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('projectSix', buttonPosition)
					}
					
					passSection={() => passSection('projectSix')}
				/> */}

				{/* Контакты */}
				<ContentSection
					sectionName={'contacts'}
					isClickable={reachedSections.includes('info')}
					initializeSection={buttonPosition =>
						initializeSection('contacts', buttonPosition)
					}
					passSection={() => {
						toggleEnd();
						passSection('contacts');
					}}
				/>

				<div
					onClick={jump}
					className={`${status === 'jump' && styles.jump} ${styles.character}`}
				>
					<Image src={animation[status]} width={128} height={128} alt='' />
				</div>
			</main>
			<div className={`${styles.grass} w-screen h-1/12`} />
		</div>
	);
}
