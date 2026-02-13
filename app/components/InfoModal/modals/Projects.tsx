const Projects = ({page}: {page: number}) => {
	return (
		<div
			className={`w-full h-full py-4 px-8 ${page === 1 ? 'bg-gray-500 items-center justify-center' : 'bg-black'} flex flex-col`}
		>
			{page === 1 && (
				<div className='bg-yellow-600 border-8 border-yellow-900 w-full p-4'>
					<p className='text-2xl text-black'>Завершенные проекты</p>
				</div>
			)}

			{page === 2 && (
				<div className='text-white text-2xl flex flex-col gap-4'>
					<p>Завершено проектов - 7</p>

					<p>Сферы проектов</p>

					<ul className='list-disc pl-8'>
						<li>финансовая</li>
						<li>добывающая</li>
						<li>продающая</li>
						<li>ИТ</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Projects;
