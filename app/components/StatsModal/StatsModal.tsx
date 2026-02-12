import Image from 'next/image';

const StatsModal = () => {
	return (
		<div className='absolute inset-x-0 inset-y-1/12 bg-black py-4 px-8 flex flex-col z-10'>
			<div className='w-full pb-4 border-b-2 border-white'>
				<p className='text-2xl text-white'>Характеристики</p>
			</div>
			<div className='w-full items-center flex'>
				<div className='hidden sm:block w-32 h-40 relative'>
					<Image
						alt='Красавчик'
						src='/profile.jpg'
						fill
						style={{objectFit: 'cover'}}
					/>
				</div>

				<div className='p-4 border-2 border-black flex flex-col gap-4 text-white text-xl flex-1'>
					<div className='flex flex-col gap-1 items-center'>
						<h3>Стаж работы</h3>
						<p>5 лет</p>
					</div>

					<div className='flex flex-col gap-1 items-center'>
						<h3>Английский язык</h3>
						<p>B2</p>
					</div>

					<div className='flex flex-col gap-1 items-center'>
						<h3>Образование</h3>
						<p>Высшее</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatsModal;
