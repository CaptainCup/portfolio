import {ReactNode} from 'react';

export type Points = {
	[name: string]: ReactNode;
};

export type PointProps = {
	position: number;
	name: string;
	isActive: boolean;
};
