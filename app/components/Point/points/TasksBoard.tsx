import {PointProps} from '../types';

const TasksBoard = ({isActive}: Partial<PointProps>) => {
	return (
		<div className='pb-24 relative'>
			<div
				className={`h-16 w-32 relative ${isActive ? 'rotate-0' : 'rotate-4'} border-4 bg-yellow-700 border-yellow-900`}
			>
				<div className='h-3 w-3 bg-amber-300 absolute top-3 left-2' />
				<div className='h-3 w-3 bg-emerald-500 absolute top-8 left-3' />
				<div className='h-3 w-3 bg-white absolute top-2 left-8' />
				<div className='h-3 w-3 bg-amber-300 absolute top-7 left-9' />
				<div className='h-3 w-3 bg-red-500 absolute top-6 left-14' />
				<div className='h-3 w-3 bg-white absolute top-2 left-18' />
				<div className='h-3 w-3 bg-amber-300 absolute top-8 left-20' />
				<div className='h-3 w-3 bg-emerald-500 absolute top-4 left-24' />
			</div>
		</div>
	);
};

export default TasksBoard;
