import {PointProps} from '../types';

const Mirror = ({isActive}: Partial<PointProps>) => {
	return (
		<div className='pb-16 relative'>
			<div
				className={`h-20 w-12 ${isActive ? 'bg-blue-200' : 'bg-blue-300'} border-4 border-amber-800`}
			/>
		</div>
	);
};

export default Mirror;
