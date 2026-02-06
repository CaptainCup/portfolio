import styles from '../styles.module.css';

export const spheresSectionBlocksCount = 1;

export const SpheresSection = () => {
	return (
		<>
			<h2 className='text-2xl'>👷 Участвовал в разработке</h2>

			<div className={styles['show-1']}>
				<p>
					За время работы разработчиком принял участие в разработке более чем
					6ти проектах.
				</p>
			</div>

			<div className={styles['show-1']}>
				<div className='flex flex-col gap-2'>
					<p>Проекты были в разных сферах:</p>
					<ul className=' pl-8'>
						<li>🏦 финансовой</li>
						<li>🛠 добывающей</li>
						<li>💼 продающей</li>
						<li>и, конечно же, ИТ 💻</li>
					</ul>
				</div>
			</div>
		</>
	);
};
