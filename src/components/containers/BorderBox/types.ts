import { ReactNode } from 'react';

export interface IBorderBox {
    children?: ReactNode;

    borderColor?: string;
    size?: number;

    maxWidth?: number;
}
