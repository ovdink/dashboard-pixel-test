import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { theme, toEnd } from 'styles';

import { ReactComponent as CopySVG } from './images/copy-icon.svg';

export const Wrapper = styled.div<{ width?: number }>`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    width: ${({ width }) => (width ? `${width}px` : '100%')};

    cursor: pointer;

    & svg {
        transition: transform 0.15s ease-in-out;
    }

    &:hover svg {
        transform: scale(1.15);
    }
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 23.22px;
    color: ${theme.colors.white};

    font-family: 'IBM Plex Mono';
    word-break: break-all;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    ${toEnd('mobile')} {
        font-size: 14px;
        line-height: 18.06px;
    }
`;

const fadeInOutAnimation = keyframes`
    0% {
      opacity: 0;
      visibility: hidden;

      transform: translate(-50%, -10px);
    }

    50% {
      opacity: 1;
      visibility: visible;
    }

    100% {
      opacity: 0;
      visibility: hidden;

      transform: translate(-50%, -25px);
    }
`;

export const CopiedText = styled.p<{ processAnimation: boolean }>`
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);

    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: ${theme.colors.white};

    font-family: 'PixelMix';

    visibility: hidden;
    opacity: 0;

    transition: all 0.3s ease-in-out;

    ${({ processAnimation }) =>
        processAnimation &&
        css`
            animation: ${fadeInOutAnimation} 1s ease-in-out;
        `}
`;

export const CopyIcon = styled(CopySVG)`
    user-select: none;

    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;

    ${toEnd('mobile')} {
        width: 18px;
        height: 18px;
        min-width: 18px;
        min-height: 18px;
    }
`;
