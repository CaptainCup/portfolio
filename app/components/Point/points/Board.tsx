import {PointProps} from '../types';

const Board = ({isActive}: Partial<PointProps>) => {
	return (
		<div className='pb-24 relative'>
			<div
				className={`h-16 w-32 flex items-center justify-center ${isActive ? 'bg-blue-200' : 'bg-white'} border-4 border-gray-600 border-b-black`}
			>
				<p className='text-sm text-center'>Top secret information</p>
			</div>
		</div>
	);
};

export default Board;
