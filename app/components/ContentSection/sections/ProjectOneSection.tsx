import styles from '../styles.module.css';

export const projectOneSectionBlocksCount = 3;

export const ProjectOneSection = () => {
	return (
		<>
			<h2 className='text-2xl'>📈 Участвовал в разработке</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Период работы</h3>
					<p>октябрь 2024 – январь 2026</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Описание</h3>
					<p>
						Встраиваемое веб-приложение для построения диаграммы Ганта по
						задаваемым пользователем параметрам.
					</p>
				</div>
			</div>

			<div className={styles['show-2']}>
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
			</div>

			<div className={styles['show-3']}>
				<div className='flex flex-col gap-2'>
					<h3>Стек</h3>
					<div className='flex flex-wrap gap-2'>
						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							Feature-sliced design
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							TypeScript
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							React
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							Redux Toolkit
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							AntD
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							DHTMLX Gantt
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							React Testing Library
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							Jest
						</div>

						<div className='bg-black text-white  border-2 rounded-2xl px-2'>
							BackstopJS
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
