import {ReactNode} from 'react';

export type Modals = {
	[name: string]: ReactNode;
};

export type InfoModalProps = {
	modal: string;
	page: number;
};
