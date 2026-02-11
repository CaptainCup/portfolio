import {ReactNode, Ref} from 'react';

export type Points = {
	[name: string]: ReactNode;
};

export type PointProps = {
	position: number;
	name: string;
	isActive: boolean;
	toggleInteract: () => void;
	ref: Ref<PointRef>;
};

export type PointRef = {
	interact: () => void;
	cancel: () => void;
};
