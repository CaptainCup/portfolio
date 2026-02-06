'use client';

import {ReactNode, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import SmsIcon from '@mui/icons-material/Sms';
import {InfoSection, infoSectionBlocksCount} from './sections/InfoSection';
import {
	SkillsSection,
	skillsSectionBlocksCount,
} from './sections/SkillsSection';
import {
	ProjectOneSection,
	projectOneSectionBlocksCount,
} from './sections/ProjectOneSection';
import {
	ProjectTwoSection,
	projectTwoSectionBlocksCount,
} from './sections/ProjectTwoSection';
import {
	ProjectThreeSection,
	projectThreeSectionBlocksCount,
} from './sections/ProjectThreeSection';
import {
	ProjectFourSection,
	projectFourSectionBlocksCount,
} from './sections/ProjectFourSection';
import {
	ProjectFiveSection,
	projectFiveSectionBlocksCount,
} from './sections/ProjectFiveSection';
import {
	ProjectSixSection,
	projectSixSectionBlocksCount,
} from './sections/ProjectSixSection';
import {
	ContactsSection,
	contactsSectionBlocksCount,
} from './sections/ContactsSection';

type SectionInfo = {
	[sectionName: string]: {
		content: ReactNode;
		blocksCount: number;
	};
};

const sections: SectionInfo = {
	info: {
		content: <InfoSection />,
		blocksCount: infoSectionBlocksCount,
	},
	skills: {
		content: <SkillsSection />,
		blocksCount: skillsSectionBlocksCount,
	},
	projectOne: {
		content: <ProjectOneSection />,
		blocksCount: projectOneSectionBlocksCount,
	},
	projectTwo: {
		content: <ProjectTwoSection />,
		blocksCount: projectTwoSectionBlocksCount,
	},
	projectThree: {
		content: <ProjectThreeSection />,
		blocksCount: projectThreeSectionBlocksCount,
	},
	projectFour: {
		content: <ProjectFourSection />,
		blocksCount: projectFourSectionBlocksCount,
	},
	projectFive: {
		content: <ProjectFiveSection />,
		blocksCount: projectFiveSectionBlocksCount,
	},
	projectSix: {
		content: <ProjectSixSection />,
		blocksCount: projectSixSectionBlocksCount,
	},
	contacts: {
		content: <ContactsSection />,
		blocksCount: contactsSectionBlocksCount,
	},
};

type ContentSectionProps = {
	isClickable: boolean;
	sectionName: string;
	initializeSection: (buttonPosition: number) => void;
	passSection: () => void;
};

const ContentSection = ({
	isClickable,
	sectionName,
	initializeSection,
	passSection,
}: ContentSectionProps) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const blockNumberRef = useRef(0);

	const handleClick = () => {
		if (isClickable && containerRef.current && buttonRef.current) {
			const nextBlock = blockNumberRef.current + 1;
			blockNumberRef.current = nextBlock;

			containerRef.current.setAttribute(`data-show-${nextBlock}`, 'true');

			if (nextBlock === sections[sectionName].blocksCount) {
				passSection();
				buttonRef.current.style.opacity = '0';
			}
		}
	};

	useEffect(() => {
		const el = buttonRef.current;
		if (!el) return;

		const {right, width} = el.getBoundingClientRect();
		initializeSection(right - width / 2);
	}, []);

	return (
		<section
			ref={containerRef}
			className={`${styles.container} ${isClickable ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 flex flex-col items-center w-screen min-w-screen px-8`}
		>
			<div className='flex flex-col items-center gap-8 max-w-5xl w-full h-full border-4 rounded-4xl p-8 lg:p-12 bg-white border-black'>
				{sections[sectionName].content}
			</div>

			<button
				ref={buttonRef}
				onClick={handleClick}
				className={`w-fit mt-4 bg-white p-2 border-black border-4 rounded-xl`}
			>
				<SmsIcon />
			</button>
		</section>
	);
};

export default ContentSection;
