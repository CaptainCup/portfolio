import Mirror from './points/Mirror';
import {PointProps, Points} from './types';

const Point = ({name, position, isActive, toggleInteract, ref}: PointProps) => {
	const points: Points = {
		mirror: (
			<Mirror ref={ref} toggleInteract={toggleInteract} isActive={isActive} />
		),
	};

	return (
		<div className='absolute bottom-0' style={{left: `${position}px`}}>
			{points[name]}
		</div>
	);
};

export default Point;
