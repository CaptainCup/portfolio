import styles from '../styles.module.css';

export const projectSixSectionBlocksCount = 3;

export const ProjectSixSection = () => {
	return (
		<>
			<h2 className='text-2xl'>💰 Начинал свой путь здесь</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Период работы</h3>
					<p>август 2020 - сентябрь 2022</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Описание</h3>
					<p>
						Разработка сайта по поиску и предложению финансовых ресурсов.
						Функционал сайта представляет собой открытые каталоги заявок на
						привлечение финансирования и кредиторов, ленту статей от
						пользователей, рекламного кабинета. Проект состоит из 3 частей:
						сайт, промо-сайт и сайт для администраторов.
					</p>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Задачи</h3>
					<ul className='list-disc pl-8'>
						<li>Разработка сложных и динамических форм при помощи Antd Form</li>
						<li>
							Реализация Infinite Scroll для отображения информации в виде
							непрерывной ленты
						</li>
						<li>Разработка аутентификации при помощи JWT-токенов</li>
						<li>
							Исследование и устранение критических проблем производительности и
							SEO-оптимизация
						</li>
						<li>Реализация SSR при помощи Next JS</li>
						<li>
							Настройка рассылки сообщений по Email и SMS на стороне сервера
						</li>
						<li>
							Разработка полнофункциональной админки для управления контентом
						</li>
						<li>Интеграция с файловым хранилищем для сохранения медиа</li>
						<li>Реализация текстового редактора с помощью Markdown</li>
						<li>Документирование компонентов при помощи Storybook</li>
						<li>Адаптивная верстка</li>
						<li>Проведение code review</li>
						<li>Ведение и разработка документации</li>
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
							Nest JS
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Ant Design
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							MUI
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							RTK Query
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							React-Router
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							MongoDB
						</div>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Storybook
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
