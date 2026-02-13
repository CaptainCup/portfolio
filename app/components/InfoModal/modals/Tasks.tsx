import {ReactNode} from 'react';

const Card = ({children}: {children: ReactNode}) => {
	return (
		<div className='w-20 h-20 bg-amber-300 flex items-center justify-center text-center'>
			{children}
		</div>
	);
};

const Tasks = ({page}: {page: number}) => {
	return (
		<div className='w-full h-full py-4 px-4 bg-yellow-700 text-black flex flex-col'>
			{page === 1 && (
				<>
					<div className='flex justify-center mb-4'>
						<Card>Задачи</Card>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='flex justify-center gap-4'>
							<Card>✓ Сделано</Card>
							<Card>Разраб-ка фич</Card>
							<Card>Оптим-ия и дебаг</Card>
						</div>

						<div className='flex justify-center gap-4'>
							<Card>✓ Сделано</Card>
							<Card>Оценка задач</Card>
							<Card>Деком-ия задач</Card>
						</div>
					</div>
				</>
			)}

			{page === 2 && (
				<div className='flex flex-col gap-4'>
					<div className='flex justify-center gap-4'>
						<Card>✓ Сделано</Card>
						<Card>Док-ние проекта</Card>
						<Card>StoryBook, Confluence</Card>
					</div>

					<div className='flex justify-center gap-4'>
						<Card>✓ Сделано</Card>
						<Card>Тест-ие фич</Card>
						<Card>юнит, e2e</Card>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='flex justify-center gap-4'>
							<Card>✓ Сделано</Card>
							<Card>Code Review</Card>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Tasks;
