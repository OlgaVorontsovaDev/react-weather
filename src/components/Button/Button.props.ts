import { HTMLAttributes } from 'react';

type ButtonType = {
	isActive?: boolean;
}

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonType;