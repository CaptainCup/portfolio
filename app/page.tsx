'use client';

import Image from 'next/image';
import {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';
import Point from './components/Point/Point';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import {PointRef} from './components/Point/types';

const SCROLL_CONTAINER_WIDTH = 2000;

const animation = {
	idle: '/idle.gif',
	walk: '/walking.gif',
};

const POINTS = [
	{
		name: 'mirror',
		position: 400,
	},

	{
		name: 'mirror',
		position: 800,
	},
];

export default function Home() {
	'use no memo';

	const [status, setStatus] = useState<keyof typeof animation>('idle');
	const [direction, setDirection] = useState('forward');
	const [activePoint, setActivePoint] = useState('');
	const [isInteract, setIsInteract] = useState(false);

	const walkingTimeout = useRef<ReturnType<typeof setTimeout>>(null);
	const moveButtonIntervalRef = useRef<ReturnType<typeof setInterval>>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const groundRef = useRef<HTMLDivElement>(null);
	const characterRef = useRef<HTMLDivElement>(null);
	const distanceWithoutScroll = useRef<number>(0);
	const characterPosition = useRef<number>(0);
	const pointsRef = useRef<{[pointName: string]: PointRef}>({});

	const createPointRef = (pointName: string) => (el: PointRef) => {
		pointsRef.current[pointName] = el;
	};

	const moveCharacter = useCallback(
		(direction: string, delta: number) => {
			const characterEl = characterRef.current;
			const containerEl = containerRef.current;
			const groundEl = groundRef.current;
			const noScrollDistance = distanceWithoutScroll.current;

			if (!containerEl || !groundEl || !characterEl) return;

			const calcPosition =
				direction === 'back'
					? characterPosition.current - delta
					: characterPosition.current + delta;

			if (calcPosition < 0) {
				characterPosition.current = 0;
			} else if (calcPosition > SCROLL_CONTAINER_WIDTH) {
				characterPosition.current = SCROLL_CONTAINER_WIDTH;
			} else {
				characterPosition.current = calcPosition;
			}

			const newPosition = characterPosition.current;

			if (newPosition < noScrollDistance) {
				characterEl.style.left = `${newPosition}px`;
			}
			if (newPosition > SCROLL_CONTAINER_WIDTH - noScrollDistance) {
				characterEl.style.left = `${newPosition + noScrollDistance * 2 - SCROLL_CONTAINER_WIDTH}px`;
			} else {
				const newScrollPosition = newPosition - noScrollDistance;

				containerEl.scrollLeft = newScrollPosition;
				groundEl.style.backgroundPositionX = `-${newScrollPosition * 0.7}px`;
			}

			if (newPosition !== 0 && newPosition !== SCROLL_CONTAINER_WIDTH) {
				if (walkingTimeout.current) {
					clearTimeout(walkingTimeout.current);
				}

				setStatus('walk');
				setDirection(direction);

				walkingTimeout.current = setTimeout(() => setStatus('idle'), 300);
			}

			const closePoint = POINTS.find(
				({position}) =>
					newPosition > position - 100 && newPosition < position + 20,
			);

			if (!closePoint && activePoint) {
				setActivePoint('');
			}

			if (closePoint && activePoint !== closePoint.name) {
				setActivePoint(closePoint.name);
			}
		},
		[activePoint],
	);

	const moveCharacterByKeyboard = useCallback(
		(event: KeyboardEvent) => {
			const delta = 12;
			const {key} = event;

			if (key === 'ArrowLeft' || key === 'a' || key === 'ф') {
				event.preventDefault();
				moveCharacter('back', delta);
			}

			if (key === 'ArrowRight' || key === 'd' || key === 'в') {
				event.preventDefault();
				moveCharacter('forward', delta);
			}
		},
		[moveCharacter],
	);

	const interactWithPoint = useCallback(() => {
		if (activePoint) {
			isInteract
				? pointsRef.current[activePoint]?.cancel()
				: pointsRef.current[activePoint]?.interact();
		}
	}, [activePoint, isInteract]);

	const interactWithPointByKeyboard = useCallback(
		(event: KeyboardEvent) => {
			const {key} = event;

			if (key === 'e' || key === 'у') {
				event.preventDefault();
				interactWithPoint();
			}
		},
		[interactWithPoint],
	);

	const moveCharacterByButton = (direction: string) => {
		moveButtonIntervalRef.current = setInterval(() => {
			moveCharacter(direction, 8);
		}, 20);
	};

	const stopMoveCharacterByButton = () => {
		if (moveButtonIntervalRef.current) {
			clearInterval(moveButtonIntervalRef.current);
		}
	};

	useEffect(() => {
		const width = characterRef?.current?.getBoundingClientRect().width || 0;

		distanceWithoutScroll.current = (window.innerWidth - width) / 2;

		if (!isInteract) {
			window.addEventListener('keydown', moveCharacterByKeyboard);
		}

		return () => {
			if (!isInteract) {
				window.removeEventListener('keydown', moveCharacterByKeyboard);
			}
		};
	}, [moveCharacterByKeyboard, isInteract]);

	useEffect(() => {
		window.addEventListener('keydown', interactWithPointByKeyboard);

		return () => {
			window.removeEventListener('keydown', interactWithPointByKeyboard);
		};
	}, [interactWithPointByKeyboard]);

	return (
		<div className={`${styles.body} h-screen`}>
			<main
				ref={containerRef}
				className={`
					${styles.container}
					touch-none
					overflow-y-hidden overflow-x-auto`}
			>
				{/* Местность */}
				<div
					className={`relative ${styles.background} ${styles.sky} h-full`}
					style={{width: `${SCROLL_CONTAINER_WIDTH}px`}}
				>
					{POINTS.map(point => (
						<Point
							key={point.position}
							isActive={activePoint === point.name}
							toggleInteract={() => setIsInteract(draft => !draft)}
							ref={createPointRef(point.name)}
							{...point}
						/>
					))}
				</div>

				{/* Персонаж */}
				<div
					ref={characterRef}
					className={`${styles.character} ${direction === 'back' && styles.back}`}
				>
					<Image src={animation[status]} width={128} height={128} alt='' />
				</div>
			</main>
			<div ref={groundRef} className={`${styles.grass} w-screen`} />

			{/* Кнопки управления */}
			<div className='absolute left-1/2 bottom-0 '>
				<div className='flex gap-8 -translate-x-1/2 -translate-y-2'>
					<button
						onPointerDown={() => moveCharacterByButton('back')}
						onPointerUp={stopMoveCharacterByButton}
						className='opacity-70 py-2 px-4 rounded-xl bg-black text-white'
					>
						<ArrowBackIosNewIcon />
					</button>
					<button
						onPointerDown={interactWithPoint}
						className={`${activePoint ? 'opacity-70' : 'opacity-50 '}  py-2 px-4 rounded-xl bg-black text-white`}
					>
						<LocalPizzaIcon />
					</button>
					<button
						onPointerDown={() => moveCharacterByButton('forward')}
						onPointerUp={stopMoveCharacterByButton}
						className='opacity-70 py-2 px-4 rounded-xl bg-black text-white'
					>
						<ArrowForwardIosIcon />
					</button>
				</div>
			</div>
		</div>
	);
}
