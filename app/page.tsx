'use client';

import Image from 'next/image';
import {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';
import Point from './components/Point/Point';
import StatsModal from './components/StatsModal/StatsModal';
import UtilsModal from './components/UtilsModal/UtilsModal';

type PointInfo = {
	name: string;
	position: number;
	text: string;
	pages: number;
};

const SCROLL_CONTAINER_WIDTH = 2000;

const animation = {
	idle: '/idle.gif',
	walk: '/walking.gif',
};

const POINTS = [
	{
		name: 'mirror',
		position: 320,
		text: 'Посмотреть на зеркало',
		pages: 0,
	},

	{
		name: 'board',
		position: 820,
		text: 'Посмотреть на доску',
		pages: 3,
	},
];

export default function Home() {
	'use no memo';

	const [status, setStatus] = useState<keyof typeof animation>('idle');
	const [direction, setDirection] = useState('forward');
	const [activePoint, setActivePoint] = useState<PointInfo | null>(null);
	const [openedPoint, setOpenedPoint] = useState<PointInfo | null>(null);
	const [page, setPage] = useState(1);

	const walkingTimeout = useRef<ReturnType<typeof setTimeout>>(null);
	const moveButtonIntervalRef = useRef<ReturnType<typeof setInterval>>(null);

	const containerRef = useRef<HTMLDivElement>(null);
	const characterRef = useRef<HTMLDivElement>(null);
	const screenRef = useRef<HTMLDivElement>(null);

	const distanceWithoutScroll = useRef<number>(0);
	const characterPosition = useRef<number>(0);

	const moveCharacter = useCallback(
		(direction: string, delta: number) => {
			const characterEl = characterRef.current;
			const containerEl = containerRef.current;
			const noScrollDistance = distanceWithoutScroll.current;

			if (!containerEl || !characterEl) return;

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
				setActivePoint(null);
			}

			if (closePoint && activePoint?.name !== closePoint.name) {
				setActivePoint(closePoint);
			}
		},
		[activePoint],
	);

	const moveCharacterByKeyboard = useCallback(
		(event: KeyboardEvent) => {
			const delta = 10;
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
		if (activePoint && !openedPoint) {
			setOpenedPoint({...activePoint});
		}

		if (openedPoint && openedPoint.pages && openedPoint.pages > page) {
			setPage(page + 1);
		}
	}, [activePoint, openedPoint, page]);

	const interactWithPointByKeyboard = useCallback(
		(event: KeyboardEvent) => {
			const {key} = event;

			if (key === 'Enter' || key === 'e' || key === 'у') {
				event.preventDefault();
				interactWithPoint();
			}
		},
		[interactWithPoint],
	);

	const cancelInteractWithPoint = useCallback(() => {
		setOpenedPoint(null);
		setPage(1);
	}, []);

	const cancelInteractWithPointByKeyboard = useCallback(
		(event: KeyboardEvent) => {
			const {key} = event;

			if (key === 'Escape' || key === 'q' || key === 'й') {
				event.preventDefault();
				cancelInteractWithPoint();
			}
		},
		[cancelInteractWithPoint],
	);

	const moveCharacterByButton = (direction: string) => {
		moveButtonIntervalRef.current = setInterval(() => {
			moveCharacter(direction, 7);
		}, 20);
	};

	const stopMoveCharacterByButton = () => {
		if (moveButtonIntervalRef.current) {
			clearInterval(moveButtonIntervalRef.current);
		}
	};

	// Перемещение
	useEffect(() => {
		const characterWidth =
			characterRef?.current?.getBoundingClientRect().width || 0;
		const screenWidth = screenRef?.current?.getBoundingClientRect().width || 0;

		distanceWithoutScroll.current = (screenWidth - characterWidth) / 2;

		if (!openedPoint) {
			window.addEventListener('keydown', moveCharacterByKeyboard);
		}

		return () => {
			if (!openedPoint) {
				window.removeEventListener('keydown', moveCharacterByKeyboard);
			}
		};
	}, [moveCharacterByKeyboard, openedPoint]);

	// Использовать
	useEffect(() => {
		window.addEventListener('keydown', interactWithPointByKeyboard);

		return () => {
			window.removeEventListener('keydown', interactWithPointByKeyboard);
		};
	}, [interactWithPointByKeyboard]);

	// Отмена
	useEffect(() => {
		window.addEventListener('keydown', cancelInteractWithPointByKeyboard);

		return () => {
			window.removeEventListener('keydown', cancelInteractWithPointByKeyboard);
		};
	}, [cancelInteractWithPointByKeyboard]);

	return (
		<div className={`h-dvh flex items-center justify-center bg-gray-800`}>
			<div
				className={`w-full sm:w-xl h-full sm:h-208 bg-gray-400 p-6 sm:p-16 sm:rounded-4xl shadow-xl/30 shadow-black`}
			>
				<div
					ref={screenRef}
					className={`${styles.screen} bg-sky-600 rounded-4xl overflow-hidden`}
				>
					<div className='bg-black h-1/12 w-full flex items-center justify-between px-8 text-white text-xl'>
						<p>Гаврилов И.</p>

						<p>Frontend</p>
					</div>

					<main
						ref={containerRef}
						className={`${styles.container} max-w-full touch-none overflow-y-hidden overflow-x-auto h-10/12`}
					>
						{/* Местность */}
						<div
							className={`relative ${styles.background} ${styles.sky} h-full`}
							style={{width: `${SCROLL_CONTAINER_WIDTH}px`}}
						>
							{POINTS.map(point => (
								<Point
									key={point.position}
									isActive={activePoint?.name === point.name}
									{...point}
								/>
							))}
						</div>

						{/* Персонаж */}
						<div
							ref={characterRef}
							className={`${styles.character} ${direction === 'back' && styles.back}`}
						>
							<Image src={animation[status]} width={140} height={140} alt='' />
						</div>
					</main>

					<div className='bg-black text-xl text-white h-1/12 w-full flex justify-end items-center px-8 gap-8'>
						{activePoint && !openedPoint && <p>A - {activePoint.text}</p>}

						{openedPoint && openedPoint?.pages > page && <p>A - дальше</p>}

						{openedPoint && <p>B - закрыть</p>}
					</div>

					{openedPoint?.name === 'mirror' && <StatsModal />}
					{openedPoint?.name === 'board' && <UtilsModal page={page} />}
				</div>

				{/* Кнопки управления */}
				<div className='flex justify-between mt-16'>
					<div className='grid grid-cols-3 grid-rows-3'>
						<div />
						<button className='h-8 w-8 sm:h-12 sm:w-12 rounded-t-xl  bg-gray-800 text-white' />
						<div />

						<button
							onPointerDown={() => moveCharacterByButton('back')}
							onPointerUp={stopMoveCharacterByButton}
							className='h-8 w-8 sm:h-12 sm:w-12 rounded-l-xl bg-gray-800 text-white'
						/>
						<div className='h-8 w-8 sm:h-12 sm:w-12 bg-gray-800 text-white' />
						<button
							onPointerDown={() => moveCharacterByButton('forward')}
							onPointerUp={stopMoveCharacterByButton}
							className='h-8 w-8 sm:h-12 sm:w-12 rounded-r-xl bg-gray-800 text-white'
						/>

						<div />
						<button className='h-8 w-8 sm:h-12 rounded-b-xl sm:w-12 bg-gray-800 text-white' />
						<div />
					</div>

					<div className='flex items-center gap-4 sm:gap-6'>
						<div className='translate-y-4 sm:translate-y-6 -rotate-30 flex flex-col items-center gap-2'>
							<button
								onPointerDown={cancelInteractWithPoint}
								className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-pink-600`}
							/>
							<p className='text-2xl text-blue-800'>B</p>
						</div>

						<div className='-translate-y-4 sm:-translate-y-6 -rotate-30 flex flex-col items-center gap-2'>
							<button
								onPointerDown={interactWithPoint}
								className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-pink-600`}
							/>
							<p className='text-2xl text-blue-800'>A</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
