import styled from '@emotion/styled';

import { theme, toEnd } from 'styles';

import { IModalOverlayProps } from './types';

export const ModalOverlay = styled.div<IModalOverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 16px;

    background-color: rgba(16, 16, 16, 0.7);

    backdrop-filter: blur(1.5px);

    transition: all ${({ isVisible }) => (isVisible ? '0.15s' : '0s')} ease-in-out;
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    overflow: hidden;

    z-index: ${theme.zIndex.modal};

    cursor: pointer;

    ${toEnd('mobile')} {
        padding: 0;

        transition: all ${({ isVisible }) => (isVisible ? '0.3s' : '0s')} ease-in-out;
    }
`;

export const TitleWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;

    display: flex;

    width: calc(100% + 48px);
    padding: 24px 24px 16px;

    transform: translateX(-24px);

    background-color: black;

    z-index: ${theme.zIndex.menu};
`;
