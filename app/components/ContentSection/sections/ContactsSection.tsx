import styles from '../styles.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export const contactsSectionBlocksCount = 1;

export const ContactsSection = () => {
	return (
		<>
			<h2 className='text-2xl'>🤙 Можешь связаться со мной так</h2>

			<div className={styles['show-1']}>
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
			</div>
		</>
	);
};
