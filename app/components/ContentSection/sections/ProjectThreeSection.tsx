import styles from '../styles.module.css';

export const projectThreeSectionBlocksCount = 3;

export const ProjectThreeSection = () => {
	return (
		<>
			<h2 className='text-2xl'>🔐 Успел поработать здесь</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Период работы</h3>
					<p>март 2024 – июнь 2024</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Описание</h3>
					<p>
						Веб-интерфейс для управления устройством криптографической защиты
						информации.
					</p>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Задачи</h3>
					<ul className='list-disc pl-8'>
						<li>
							Разработка механизмов мониторинга работы устройства при помощи
							внутренних компонентов заказчика
						</li>
						<li>Разработка “карты” сети устройств с помощью D3.js</li>
						<li>
							Разработка документации по взаимодействию с устройством по API
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
							MobX
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							D3.js
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
