import styles from '../styles.module.css';

export const projectFourSectionBlocksCount = 3;

export const ProjectFourSection = () => {
	return (
		<div className='flex flex-col items-center gap-8 w-full h-full border-4 rounded-4xl p-8 lg:p-12 bg-white border-black'>
			<h2 className='text-2xl'>🛠 Покранчил на</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Период работы</h3>
					<p>март 2024 – июнь 2024</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Описание</h3>
					<div>
						<p>
							Система для контроля и аналитики работы подразделений
							промышленного горнодобывающего комплекса.
						</p>
						<p>Функционал системы:</p>

						<ol className='list-disc pl-8'>
							<li>
								Отслеживание местоположения техники в реальном времени и за
								прошлые периоды
							</li>
							<li>
								Отображение результатов работы каждого экипажа в виде диаграмм с
								возможностью получения информации по различным видам работ и
								фильтрации по необходимым параметрам
							</li>
							<li>Представление общей статистики выполнения работ</li>
						</ol>
					</div>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Задачи</h3>
					<ul className='list-disc pl-8'>
						<li>
							Отображение положения техники в реальном времени при помощи карты
							и получения стриминговых данных с backend по WebSockets
						</li>
						<li>
							Реализация собственной диаграммы для отображения данных по работам
							техники с виртуализацией и оптимизацией запросов
						</li>
						<li>
							Сегментирование проекта на модули при помощи Webpack Module
							Federation
						</li>
						<li>Проведение code review</li>
					</ul>
				</div>
			</div>

			<div className={styles['show-3']}>
				<div className='flex flex-col gap-2'>
					<h3>Стек</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							TypeScript
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							React
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Webpack Module Federation
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Zustand
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							WebSocket
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							MaterialUI
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Leaflet.js
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Apexcharts
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
