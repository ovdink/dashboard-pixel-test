import { FC, MouseEvent, MutableRefObject, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useBlockBodyScroll } from 'hooks';

import { IModalProps } from './types';
import * as S from './units';

export const Modal: FC<IModalProps> = ({ title, isBodyScrollBlocked = true, ...props }) => {
    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    isBodyScrollBlocked && useBlockBodyScroll(!!props.isVisible);

    const onCloseModalHandler = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if (e.target === ref.current) {
            !!props.setVisible && props.setVisible(false);

            !!props.onClose && props.onClose();
        }
    };

    // @ts-ignore
    const onCloseCrossHandler = () => {
        !!props.setVisible && props.setVisible(false);

        !!props.onClose && props.onClose();
    };

    return ReactDOM.createPortal(
        <S.ModalOverlay onMouseDown={onCloseModalHandler} isVisible={props.isVisible} {...{ ref }}>
            <div></div>
        </S.ModalOverlay>,
        document.getElementById('modal-root') as Element,
    );
};
