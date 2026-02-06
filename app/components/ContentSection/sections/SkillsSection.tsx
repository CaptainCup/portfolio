import styles from '../styles.module.css';

export const skillsSectionBlocksCount = 2;

export const SkillsSection = () => {
	return (
		<>
			<h2 className='text-2xl'>💪 Умею использовать</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Язык программирования</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							JavaScript
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							TypeScript
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Основной фреймворк</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							React JS
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Next JS
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Работа по макетам</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Figma
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Архитектура</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Feature sliced design
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Microfrontend</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Module federation (Webpack)
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Библиотеки компонентов</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Ant Design (AntD)
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Material UI (MUI)
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Headless UI
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Хранилище приложения</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Redux
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Redux Toolkit
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Zustand
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							MobX
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Работа с сетью</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							REST API
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Axios
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							RTK Query
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							React Query
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							WebSockets
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Стилизация</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							BEM
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							SASS
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							LESS
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Tailwind
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							CSS-modules
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Styled-components
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Тестирование</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Jest
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							React testing library
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Playwright
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							BackstopJS
						</div>
					</div>
				</div>
			</div>

			<div className={styles['show-2']}>
				<div className='flex flex-col gap-2'>
					<h3>Прочие инструменты</h3>
					<div className='flex gap-2 flex-wrap justify-center'>
						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Prettier
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							EsLint
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							GIT
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							JWT
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Apexcharts
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Recharts
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Leaflet.js
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Nest.js
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							PM2
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							D3.js
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							DHTMLX Gantt
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Jira
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Confluence
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Gitlab
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Docker
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							NodeJS
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							StoryBook
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Nginx
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							MongoDB
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Scrum
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							Agile
						</div>

						<div className='bg-black text-white border-2 rounded-2xl px-2'>
							CI/CD
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SkillsSection;
