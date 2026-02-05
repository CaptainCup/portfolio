'use client';

import {ReactNode, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
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
	handleClickMore: () => void;
};

const ContentSection = ({
	isClickable,
	sectionName,
	initializeSection,
	passSection,
	handleClickMore,
}: ContentSectionProps) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const blockNumberRef = useRef(0);

	const handleClick = () => {
		if (isClickable && containerRef.current && buttonRef.current) {
			handleClickMore();
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
			className={`${styles.container} flex flex-col w-screen min-w-screen px-8`}
		>
			{sections[sectionName].content}

			<button
				ref={buttonRef}
				onClick={handleClick}
				className={` w-fit m-auto mt-4 bg-white p-2 border-black border-4`}
			>
				<LaptopChromebookIcon />
			</button>
		</section>
	);
};

export default ContentSection;
