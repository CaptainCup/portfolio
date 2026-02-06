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

	const containerRef = useRef<HTMLDivElement>(null);
	const groundRef = useRef<HTMLDivElement>(null);

	const toggleEnd = () => {
		setIsEnd(draft => !draft);
		const el = containerRef.current;
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
		const containerEl = containerRef.current;
		const groundEl = groundRef.current;
		if (!containerEl || !groundEl) return;

		const nextStopIndex = sections.findIndex(({passed}) => !passed);
		const nextStop = sections[nextStopIndex];
		const {width} = containerEl.getBoundingClientRect();
		let startX = 0;

		const updatePosition = (newPosition: number) => {
			if (nextStop && nextStop.buttonPosition - width / 2 < newPosition) {
				containerEl.scrollLeft = nextStop.buttonPosition - width / 2;
				setReachedSections(draft => [...draft, nextStop.sectionName]);
				return;
			}

			if (walkingTimeout.current) {
				clearTimeout(walkingTimeout.current);
			}

			setStatus('walk');

			walkingTimeout.current = setTimeout(() => setStatus('idle'), 300);
			containerEl.scrollLeft = newPosition;
			groundEl.style.backgroundPositionX = `-${newPosition * 0.7}px`;
		};

		const onWheel = (e: WheelEvent) => {
			e.preventDefault();

			const delta = Math.abs(e.deltaY);

			const newPosition = containerEl.scrollLeft + delta * 0.6;

			updatePosition(newPosition);
		};

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

			const newPosition = containerEl.scrollLeft + delta;

			updatePosition(newPosition);
		};

		if (!isEnd && status !== 'jump') {
			containerEl.addEventListener('wheel', onWheel, {passive: false});
			containerEl.addEventListener('touchstart', onDown);
			containerEl.addEventListener('touchmove', onMove);
		}

		return () => {
			containerEl.removeEventListener('wheel', onWheel);
			containerEl.removeEventListener('touchstart', onDown);
			containerEl.removeEventListener('touchmove', onMove);
		};
	}, [sections, isEnd, status]);

	return (
		<div className={`${styles.body} h-screen`}>
			<main
				ref={containerRef}
				className={`
					${styles.container} 
					${styles.sky} 
					${isEnd ? 'touch-auto' : 'touch-none'} 
					${isEnd ? 'flex-col' : 'flex-row'} 
					pb-32 static flex items-end overflow-y-visible overflow-x-auto`}
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

				{/* Сферы */}
				<ContentSection
					sectionName={'spheres'}
					isClickable={reachedSections.includes('spheres')}
					initializeSection={buttonPosition =>
						initializeSection('spheres', buttonPosition)
					}
					passSection={() => passSection('spheres')}
				/>

				{/* Задачи */}
				<ContentSection
					sectionName={'tasks'}
					isClickable={reachedSections.includes('tasks')}
					initializeSection={buttonPosition =>
						initializeSection('tasks', buttonPosition)
					}
					passSection={() => passSection('tasks')}
				/>

				{/* Контакты */}
				<ContentSection
					sectionName={'contacts'}
					isClickable={reachedSections.includes('contacts')}
					initializeSection={buttonPosition =>
						initializeSection('contacts', buttonPosition)
					}
					passSection={() => {
						toggleEnd();
						passSection('contacts');
					}}
				/>

				<div
					className={`${status === 'jump' && styles.jump} ${styles.character}`}
				>
					<Image src={animation[status]} width={128} height={128} alt='' />
				</div>
			</main>
			<div ref={groundRef} className={`${styles.grass} w-screen`} />
		</div>
	);
}
