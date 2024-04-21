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

export const ModalPaper = styled.div<IModalOverlayProps>`
    position: relative;

    display: inline-block;
    vertical-align: top;

    width: 100%;
    max-height: calc(100% - 100px);
    padding: 24px 26px 34px;

    background-color: ${theme.colors.dark};

    overflow: hidden auto;

    cursor: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        margin-top: 65px;
        margin-bottom: 80px;
    }
`;

export const CrossIcon = styled.img`
    position: absolute;
    top: 24px;
    right: 26px;

    cursor: pointer;

    transition: all 0.15s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;
