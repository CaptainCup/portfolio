import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-center font-sans bg-slate-900'>
			<main className='flex flex-col w-full items-center justify-center gap-4 p-8'>
				{/* Обо мне */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>👋 Привет, я</h2>

					<div className='flex items-center gap-8'>
						<div className='rounded-full overflow-hidden'>
							<Image
								src='/profile.jpg'
								width={128}
								height={128}
								alt='Красавчик'
							/>
						</div>
						<div>
							<p className='text-4xl'>Гаврилов Илья Юрьевич</p>
							<p className='text-xl'>Frontend Developer</p>
						</div>
					</div>
				</section>

				{/* Контакты */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>🤙 Можешь связаться со мной так</h2>

					<div className='flex lg:flex-row flex-col gap-8'>
						<div className='flex gap-2'>
							<PhoneIcon />
							<a href='tel:+79516343672'>+7 951 634-36-72</a>
						</div>
						<div className='flex gap-2'>
							<TelegramIcon />
							<a href='http://t.me/code_gavrilov' target='blank'>
								@code_gavrilov
							</a>
						</div>
						<div className='flex gap-2'>
							<EmailIcon />
							<a href='mailto:poi.lincoln@gmail.com' target='blank'>
								poi.lincoln@gmail.com
							</a>
						</div>
						<div className='flex gap-2'>
							<GitHubIcon />
							<a href='https://github.com/CaptainCup' target='blank'>
								CaptainCup
							</a>
						</div>
					</div>
				</section>

				{/* Информация */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>👨🏻‍🎓 Вообще, я</h2>

					<div className='flex flex-col gap-2'>
						<h3>Стаж работы</h3>
						<p>
							Более 5ти лет (старт работы frontend разработчиком - август 2020)
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Образование</h3>
						<p>Высшее</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Учебное заведение</h3>
						<p>Иркутский государственный университет путей сообщения</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Часовой пояс</h3>
						<p>GMT+8 (МСК+5) Иркутск</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Иностранный язык</h3>
						<p>Английский язык — Upper-Intermediate B2</p>
					</div>
				</section>

				{/* Навыки */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>💪 Умею использовать</h2>

					<div className='flex flex-col gap-2'>
						<h3>Язык программирования</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								JavaScript
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								TypeScript
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Основной фреймворк</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								React JS
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Next JS
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Работа по макетам</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								Figma
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Архитектура</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								Feature sliced design
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Microfrontend</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								Module federation (Webpack)
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Библиотеки компонентов</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								Ant Design (AntD)
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Material UI (MUI)
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Headless UI
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Хранилище приложения</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								Redux
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Redux Toolkit
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Zustand
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>MobX</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Работа с сетью</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								REST API
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Axios
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								RTK Query
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								React Query
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								WebSockets
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Стилизация</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>BEM</div>

							<div className='border-white border-2 rounded-2xl px-2'>SASS</div>

							<div className='border-white border-2 rounded-2xl px-2'>LESS</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Tailwind
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								CSS-modules
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Styled-components
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Тестирование</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>Jest</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								React testing library
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Playwright
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								BackstopJS
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Прочие инструменты</h3>
						<div className='flex gap-2 flex-wrap'>
							<div className='border-white border-2 rounded-2xl px-2'>
								Prettier
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								EsLint
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>GIT</div>

							<div className='border-white border-2 rounded-2xl px-2'>JWT</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Apexcharts
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Recharts
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Leaflet.js
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Nest.js
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>PM2</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								D3.js
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								DHTMLX Gantt
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>Jira</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Confluence
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Gitlab
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Docker
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								NodeJS
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								StoryBook
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Nginx
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								MongoDB
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Scrum
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Agile
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								CI/CD
							</div>
						</div>
					</div>
				</section>

				{/* Проект 1 */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>📈 Участвовал в разработке</h2>

					<div className='flex flex-col gap-2'>
						<h3>Описание</h3>
						<p>
							Встраиваемое веб-приложение для построения диаграммы Ганта по
							задаваемым пользователем параметрам.
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Период работы</h3>
						<p>октябрь 2024 – январь 2026</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Задачи</h3>
						<ul className='list-disc pl-8'>
							<li>
								Добавление и изменение функционала по работе с диаграммой в
								библиотеке DHTMLX Gantt
							</li>
							<li>Ведение разработки по принципам Feature-sliced design</li>

							<li>Разработка сложных динамических форм</li>

							<li>
								Добавление юнит-тестов и скриншотных тестов для разрабатываемой
								функциональности
							</li>

							<li>Участие в рефакторинге старого проекта</li>

							<li>
								Анализ возможностей технической реализации и консультация
								аналитиков по техническим вопросам проекта
							</li>

							<li>
								Взаимодействие по вопросам стиля написания кода с командой
								разработчиков заказчика
							</li>

							<li>
								Устранение багов, техпод и выпуск релизов ключевым заказчикам
							</li>

							<li>Проведение Code Review</li>
						</ul>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Стек</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								Feature-sliced design
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								TypeScript
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								React
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Redux Toolkit
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>AntD</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								DHTMLX Gantt
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								React Testing Library
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>Jest</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								BackstopJS
							</div>
						</div>
					</div>
				</section>

				{/* Проект 2 */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>🧩 Немного поработал тут</h2>

					<div className='flex flex-col gap-2'>
						<h3>Описание</h3>
						<p>
							Библиотека кастомных компонентов для внутреннего использования в
							проектах заказчика.
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Период работы</h3>
						<p>июль 2024 - октябрь 2024</p>
					</div>

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

					<div className='flex flex-col gap-2'>
						<h3>Стек</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								TypeScript
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								React
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								WebSocket
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								StoryBook
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								React Testing Library
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>Jest</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								Playwright
							</div>

							<div className='border-white border-2 rounded-2xl px-2'>
								собственные библиотеки компании
							</div>
						</div>
					</div>
				</section>

				{/* Проект 3 */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>🔐 Успел поработать здесь</h2>

					<div className='flex flex-col gap-2'>
						<h3>Описание</h3>
						<p>
							Веб-интерфейс для управления устройством криптографической защиты
							информации.
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Период работы</h3>
						<p>март 2024 – июнь 2024</p>
					</div>

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

					<div className='flex flex-col gap-2'>
						<h3>Стек</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								TypeScript
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								React
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>MobX</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								D3.js
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								собственные библиотеки компании
							</div>
						</div>
					</div>
				</section>

				{/* Проект 4 */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>🛠 Покранчил на</h2>

					<div className='flex flex-col gap-2'>
						<h3>Описание</h3>
						<div>
							<p>
								Система для контроля и аналитики работы подразделений
								промышленного горнодобывающего комплекса.
							</p>
							<p>Функционал системы:</p>

							<ol>
								<li>
									Отслеживание местоположения техники в реальном времени и за
									прошлые периоды
								</li>
								<li>
									Отображение результатов работы каждого экипажа в виде диаграмм
									с возможностью получения информации по различным видам работ и
									фильтрации по необходимым параметрам
								</li>
								<li>Представление общей статистики выполнения работ</li>
							</ol>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Период работы</h3>
						<p>март 2024 – июнь 2024</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Задачи</h3>
						<ul className='list-disc pl-8'>
							<li>
								Отображение положения техники в реальном времени при помощи
								карты и получения стриминговых данных с backend по WebSockets
							</li>
							<li>
								Реализация собственной диаграммы для отображения данных по
								работам техники с виртуализацией и оптимизацией запросов
							</li>
							<li>
								Сегментирование проекта на модули при помощи Webpack Module
								Federation
							</li>
							<li>Проведение code review</li>
						</ul>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Стек</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								TypeScript
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								React
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Webpack Module Federation
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Zustand
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								WebSocket
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								MaterialUI
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Leaflet.js
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Apexcharts
							</div>
						</div>
					</div>
				</section>

				{/* Проект 5 */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>🛒 Было интересно тут</h2>

					<div className='flex flex-col gap-2'>
						<h3>Описание</h3>
						<p>Сайт о продуктах компании с формой обратной связи.</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Период работы</h3>
						<p>октябрь 2022 - июнь 2023</p>
					</div>

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
							<li>
								Разработка сайта с “нуля” по обновленному дизайну из Figma
							</li>
							<li>
								Добавление метрик для получения данных об эффективности
								лендингов
							</li>
							<li>Интеграция работы формы обратной связи с CRM заказчика</li>
						</ul>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Стек</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								TypeScript
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								React
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Next JS
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Redux
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Ant Design
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								RTK Query
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								React-Router
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Styled Components
							</div>
						</div>
					</div>
				</section>

				{/* Проект 6 */}
				<section className='flex flex-col gap-8 w-full max-w-5xl border-2 rounded-4xl p-12 border-white'>
					<h2 className='text-2xl'>💰 Начинал свой путь здесь</h2>

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

					<div className='flex flex-col gap-2'>
						<h3>Период работы</h3>
						<p>август 2020 - сентябрь 2022</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h3>Задачи</h3>
						<ul className='list-disc pl-8'>
							<li>
								Разработка сложных и динамических форм при помощи Antd Form
							</li>
							<li>
								Реализация Infinite Scroll для отображения информации в виде
								непрерывной ленты
							</li>
							<li>Разработка аутентификации при помощи JWT-токенов</li>
							<li>
								Исследование и устранение критических проблем производительности
								и SEO-оптимизация
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

					<div className='flex flex-col gap-2'>
						<h3>Стек</h3>
						<div className='flex flex-wrap gap-2'>
							<div className='border-white border-2 rounded-2xl px-2'>
								TypeScript
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								React
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Next JS
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Nest JS
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Ant Design
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>MUI</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								RTK Query
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								React-Router
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								MongoDB
							</div>
							<div className='border-white border-2 rounded-2xl px-2'>
								Storybook
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
