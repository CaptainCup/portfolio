const Utils = ({page}: {page: number}) => {
	return (
		<div className='w-full h-full py-4 px-8 bg-white text-black flex flex-col'>
			<div className='w-full pb-4'>
				<p className='text-2xl'>Стек</p>
			</div>

			<div className='flex flex-col gap-4 text-md sm:text-xl flex-1'>
				{page === 1 && (
					<>
						<div className='flex flex-col gap-1'>
							<h3 className='underline'>Язык программирования</h3>
							<p>JavaScript, TypeScript</p>
						</div>

						<div className='flex flex-col gap-1'>
							<h3 className='underline'>Основной фреймворк</h3>
							<p>React JS, Next JS</p>
						</div>

						<div className='flex flex-col gap-1 '>
							<h3 className='underline'>Работа по макетам</h3>
							<p>Figma</p>
						</div>
					</>
				)}

				{page === 2 && (
					<>
						<div className='flex flex-col gap-1'>
							<h3 className='underline'>Библиотеки компонентов</h3>
							<p>AntD, MUI, Headless UI</p>
						</div>

						<div className='flex flex-col gap-1'>
							<h3 className='underline'>Хранилище приложения</h3>
							<p>Redux, Redux Toolkit, Zustand, MobX</p>
						</div>

						<div className='flex flex-col gap-1 '>
							<h3 className='underline'>Работа с сетью</h3>
							<p>REST API, Axios, RTK Query, React Query, WebSockets</p>
						</div>
					</>
				)}

				{page === 3 && (
					<>
						<div className='flex flex-col gap-1'>
							<h3 className='underline'>Стилизация</h3>
							<p>BEM, SASS, LESS, Tailwind, CSS-modules, Styled-components</p>
						</div>

						<div className='flex flex-col gap-1'>
							<h3 className='underline'>Тестирование</h3>
							<p>Jest, React testing library, Playwright, BackstopJS</p>
						</div>

						<div className='flex flex-col gap-1 '>
							<h3 className='underline'>И много чего еще :)</h3>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Utils;
