import Board from './points/Board';
import Closet from './points/Closet';
import Mirror from './points/Mirror';
import TasksBoard from './points/TasksBoard';
import PC from './points/PC';
import {PointProps, Points} from './types';

const Point = ({name, position, isActive}: PointProps) => {
	const points: Points = {
		mirror: <Mirror isActive={isActive} />,
		board: <Board isActive={isActive} />,
		tasks: <TasksBoard isActive={isActive} />,
		closet: <Closet isActive={isActive} />,
		pc: <PC />,
	};

	return (
		<div className='absolute bottom-0' style={{left: `${position}px`}}>
			{points[name]}
		</div>
	);
};

export default Point;
