import {PointProps} from '../types';

const Closet = ({isActive}: Partial<PointProps>) => {
	return (
		<div className='pb-6 relative'>
			<div
				className={`h-28 w-14 flex flex-col gap-1 items-center justify-center bg-gray-400 border-l-12 border-r-4 border-gray-700`}
			>
				<div className='w-8 h-6 border-4 border-gray-700 bg-gray-500'>
					<div className='w-2 h-1 bg-gray-700 mt-1 mx-auto' />
				</div>
				<div className='w-8 h-6 border-4 border-gray-700 bg-gray-500'>
					<div className='w-2 h-1 bg-gray-700 mt-1 mx-auto' />
				</div>
				<div
					className={`w-8 h-6 border-4 border-gray-700 bg-gray-500 ${isActive ? 'translate-x-3' : ''}`}
				>
					<div className='w-2 h-1 bg-gray-700 mt-1 mx-auto' />
				</div>
				<div className='w-8 h-6 border-4 border-gray-700 bg-gray-500'>
					<div className='w-2 h-1 bg-gray-700 mt-1 mx-auto' />
				</div>
			</div>
		</div>
	);
};

export default Closet;
