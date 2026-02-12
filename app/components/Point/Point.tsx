import Board from './points/Board';
import Mirror from './points/Mirror';
import {PointProps, Points} from './types';

const Point = ({name, position, isActive}: PointProps) => {
	const points: Points = {
		mirror: <Mirror isActive={isActive} />,
		board: <Board isActive={isActive} />,
	};

	return (
		<div className='absolute bottom-0' style={{left: `${position}px`}}>
			{points[name]}
		</div>
	);
};

export default Point;
