import { ReactNode } from 'react';

export interface IModalProps {
    children?: ReactNode;

    title?: string | ReactNode;

    isVisible?: boolean;
    isBodyScrollBlocked?: boolean;

    onClose?: VoidFunction;
    setVisible?: (bool: boolean) => void;
}

export interface IModalOverlayProps extends Pick<IModalProps, 'isVisible'> {
    withTitle?: boolean;
}
