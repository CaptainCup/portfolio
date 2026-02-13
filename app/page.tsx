'use client';

import Image from 'next/image';
import {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';
import Point from './components/Point/Point';
import InfoModal from './components/InfoModal/InfoModal';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

type PointInfo = {
	name: string;
	position: number;
	text: string;
	pages: number;
};

const SCROLL_CONTAINER_WIDTH = 1200;
const CHARACTER_SIZE = 140;
const MAX_SCROLL_DISTANCE = SCROLL_CONTAINER_WIDTH - CHARACTER_SIZE;

const animation = {
	idle: '/idle.gif',
	walk: '/walking.gif',
	sit: '/sitting.png',
};

const POINTS = [
	{
		name: 'mirror',
		position: 200,
		text: 'Посмотреть на себя',
		pages: 2,
	},
	{
		name: 'board',
		position: 480,
		text: 'Посмотреть на доску',
		pages: 3,
	},
	{
		name: 'tasks',
		position: 680,
		text: 'Посмотреть задачи',
		pages: 2,
	},
	{
		name: 'closet',
		position: 880,
		text: 'Посмотреть дела',
		pages: 2,
	},
	{
		name: 'pc',
		position: 1010,
		text: 'Приступить к работе',
		pages: 0,
	},
];

export default function Home() {
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
			} else if (calcPosition > MAX_SCROLL_DISTANCE) {
				characterPosition.current = MAX_SCROLL_DISTANCE;
			} else {
				characterPosition.current = calcPosition;
			}

			const newPosition = characterPosition.current;

			if (newPosition < noScrollDistance) {
				characterEl.style.left = `${newPosition}px`;
			} else if (newPosition > MAX_SCROLL_DISTANCE - noScrollDistance) {
				characterEl.style.left = `${newPosition + noScrollDistance * 2 - MAX_SCROLL_DISTANCE}px`;
			} else {
				containerEl.scrollLeft = newPosition - noScrollDistance;
			}

			if (newPosition !== 0 && newPosition !== MAX_SCROLL_DISTANCE) {
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
		if (activePoint?.name === 'pc') {
			if (walkingTimeout.current) {
				clearTimeout(walkingTimeout.current);
			}

			setStatus('sit');
			setDirection('back');
			setOpenedPoint({...activePoint});
			return;
		}

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
		if (openedPoint?.name === 'pc') {
			return;
		}

		setOpenedPoint(null);
		setPage(1);
	}, [openedPoint]);

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
					className={`${styles.screen} bg-blue-300 rounded-4xl overflow-hidden z-10`}
				>
					<div className='bg-black h-1/12 w-full flex items-center justify-between px-8 text-white text-lg sm:text-xle'>
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
							<Image
								src={animation[status]}
								width={CHARACTER_SIZE}
								height={CHARACTER_SIZE}
								alt=''
							/>
						</div>
					</main>

					<div className='bg-black text-lg sm:text-xl text-white h-1/12 w-full flex justify-end items-center px-8 gap-8'>
						{activePoint && !openedPoint && <p>A - {activePoint.text}</p>}

						{openedPoint && openedPoint?.pages > page && <p>A - дальше</p>}

						{openedPoint && openedPoint.name !== 'pc' && <p>B - закрыть</p>}

						{openedPoint && openedPoint.name === 'pc' && (
							<p>Работаю над проектом ...</p>
						)}
					</div>

					{openedPoint && <InfoModal modal={openedPoint.name} page={page} />}
				</div>

				{/* Кнопки управления */}
				{openedPoint?.name !== 'pc' && (
					<div className='flex justify-between mt-16'>
						<div className='grid grid-cols-3 grid-rows-3'>
							<div />
							<button
								onPointerDown={() => moveCharacterByButton('forward')}
								onPointerUp={stopMoveCharacterByButton}
								className='h-10 w-10 rounded-t-xl  bg-gray-800 text-white'
							/>
							<div />

							<button
								onPointerDown={() => moveCharacterByButton('back')}
								onPointerUp={stopMoveCharacterByButton}
								className='h-10 w-10 rounded-l-xl bg-gray-800 text-white'
							/>
							<div className='h-10 w-10 bg-gray-800 text-white' />
							<button
								onPointerDown={() => moveCharacterByButton('forward')}
								onPointerUp={stopMoveCharacterByButton}
								className='h-10 w-10 rounded-r-xl bg-gray-800 text-white'
							/>

							<div />
							<button
								onPointerDown={() => moveCharacterByButton('back')}
								onPointerUp={stopMoveCharacterByButton}
								className='h-10 w-10 rounded-b-xl bg-gray-800 text-white'
							/>
							<div />
						</div>

						<div className='flex items-center gap-4 sm:gap-6'>
							<div className='translate-y-4 sm:translate-y-6 -rotate-30 flex flex-col items-center gap-2'>
								<button
									onPointerDown={cancelInteractWithPoint}
									className={`h-10 w-10 rounded-full bg-pink-600`}
								/>
								<p className='text-2xl text-blue-800'>B</p>
							</div>

							<div className='-translate-y-4 sm:-translate-y-6 -rotate-30 flex flex-col items-center gap-2'>
								<button
									onPointerDown={interactWithPoint}
									className={`h-10 w-10 rounded-full bg-pink-600`}
								/>
								<p className='text-2xl text-blue-800'>A</p>
							</div>
						</div>
					</div>
				)}

				{openedPoint?.name === 'pc' && (
					<div className='flex flex-col gap-4 mt-4'>
						<p>Игры закончились - началась работа</p>
						<div className='flex gap-4'>
							<PhoneIcon />
							<a href='tel:+79516343672'>+7 951 634-36-72</a>
						</div>
						<div className='flex gap-4'>
							<TelegramIcon />
							<a href='http://t.me/code_gavrilov' target='blank'>
								@code_gavrilov
							</a>
						</div>
						<div className='flex gap-4'>
							<EmailIcon />
							<a href='mailto:poi.lincoln@gmail.com' target='blank'>
								poi.lincoln@gmail.com
							</a>
						</div>
						<div className='flex gap-4'>
							<GitHubIcon />
							<a href='https://github.com/CaptainCup' target='blank'>
								CaptainCup
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
