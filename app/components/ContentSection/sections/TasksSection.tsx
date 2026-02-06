import styles from '../styles.module.css';

export const tasksSectionBlocksCount = 1;

export const TasksSection = () => {
	return (
		<>
			<h2 className='text-2xl'>🧩 Успел поделать</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Выполнял задачи</h3>
					<ul className='list-disc pl-8'>
						<li>Разработка сложных штук</li>
						<li>Оценка и декомпозиция задач</li>
						<li>Документирование проекта (StoryBook, Confluence)</li>
						<li>Тестирование фич (юнит, e2e)</li>
						<li>Code Review</li>
					</ul>
				</div>
			</div>
		</>
	);
};
