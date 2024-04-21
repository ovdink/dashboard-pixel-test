import { FC, MouseEvent, MutableRefObject, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useBlockBodyScroll } from 'hooks';
import { theme } from 'styles';

import { BorderBox } from '../BorderBox';

import crossIcon from './images/cross-icon.svg';

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

    const onCloseCrossHandler = () => {
        !!props.setVisible && props.setVisible(false);

        !!props.onClose && props.onClose();
    };

    return ReactDOM.createPortal(
        <S.ModalOverlay onMouseDown={onCloseModalHandler} isVisible={props.isVisible} {...{ ref }}>
            <BorderBox maxWidth={832} size={6} borderColor={theme.colors.darkGray}>
                <S.ModalPaper>
                    {props.children}

                    <S.CrossIcon src={crossIcon} onClick={onCloseCrossHandler} />
                </S.ModalPaper>
            </BorderBox>
        </S.ModalOverlay>,
        document.getElementById('modal-root') as Element,
    );
};
