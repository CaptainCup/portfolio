import styles from '../styles.module.css';

export const infoSectionBlocksCount = 1;

export const InfoSection = () => {
	return (
		<div className='flex flex-col items-center gap-8 w-full h-full p-8 lg:p-12 bg-white border-4 rounded-4xl'>
			<h2 className='text-2xl'>👨🏻‍🎓 Вообще, я</h2>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Стаж работы</h3>
					<p>
						Более 5ти лет (старт работы frontend разработчиком - август 2020)
					</p>
				</div>

				<div className='flex flex-col gap-2'>
					<h3>Иностранный язык</h3>
					<p>Английский язык — Upper-Intermediate B2</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Образование</h3>
					<p>Высшее (специалитет)</p>
				</div>

				<div className='flex flex-col gap-2'>
					<h3>Учебное заведение</h3>
					<p>Иркутский государственный университет путей сообщения</p>
				</div>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<h3>Часовой пояс</h3>
					<p>GMT+8 (МСК+5) Иркутск</p>
				</div>
			</div>
		</div>
	);
};
