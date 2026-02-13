import Stats from './modals/Stats';
import Utils from './modals/Utils';
import {InfoModalProps, Modals} from './types';

const InfoModal = ({modal, page}: InfoModalProps) => {
	const modals: Modals = {
		mirror: <Stats page={page} />,
		board: <Utils page={page} />,
	};

	return (
		<div className='absolute inset-x-0 inset-y-1/12 z-10'>{modals[modal]}</div>
	);
};

export default InfoModal;
