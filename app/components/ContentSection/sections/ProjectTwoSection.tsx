import styles from '../styles.module.css';

export const projectTwoSectionBlocksCount = 3;

export const ProjectTwoSection = () => {
	return (
		<>
			<h2 className='text-2xl'>🧩 Немного поработал тут</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Период работы</h3>
					<p>июль 2024 - октябрь 2024</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Описание</h3>
					<p>
						Библиотека кастомных компонентов для внутреннего использования в
						проектах заказчика.
					</p>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Задачи</h3>
					<ul className='list-disc pl-8'>
						<li>
							Разработка кастомных компонентов для библиотеки компонентов
							заказчика
						</li>
						<li>Документирование работы компонента при помощи StoryBook</li>
						<li>
							Добавление юнит и e2e тестов по разработанным тест-кейсам
							заказчика.
						</li>
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
							WebSocket
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							StoryBook
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							React Testing Library
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Jest
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Playwright
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							собственные библиотеки компании
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
