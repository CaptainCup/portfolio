import styles from '../styles.module.css';

export const projectFiveSectionBlocksCount = 3;

export const ProjectFiveSection = () => {
	return (
		<>
			<h2 className='text-2xl'>🛒 Было интересно тут</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Период работы</h3>
					<p>октябрь 2022 - июнь 2023</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Описание</h3>
					<p>Сайт о продуктах компании с формой обратной связи.</p>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Задачи</h3>
					<ul className='list-disc pl-8'>
						<li>
							Интеграция работы сайта с онлайн-конструктором для простого
							обновления контента
						</li>
						<li>Отображение на сайте отзывов из социальных сетей</li>
						<li>
							Написание документации для работы и поддержки работы с сайтом
						</li>
						<li>Разработка сайта с “нуля” по обновленному дизайну из Figma</li>
						<li>
							Добавление метрик для получения данных об эффективности лендингов
						</li>
						<li>Интеграция работы формы обратной связи с CRM заказчика</li>
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
							Next JS
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Redux
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Ant Design
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							RTK Query
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							React-Router
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Styled Components
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
