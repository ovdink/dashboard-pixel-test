import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as ArrowSVG } from './images/arrow.svg';
import template from './images/dropdown-template.png';

export const Container = styled.div`
    position: relative;

    margin-left: auto;
`;

export const Dropdown = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 16px;

    position: absolute;
    top: 70px;
    right: 6px;

    width: 318px;
    height: 187px;
    padding: 30px;

    background-image: url(${template});
    background-repeat: no-repeat;
    background-size: 100% 100%;

    z-index: ${theme.zIndex.dropdown};
`;

export const ArrowIcon = styled(ArrowSVG)<{ isOpen: boolean }>`
    transition: transform 0.2s ease-in-out;

    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const LineBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const JustText = styled.p`
    font-family: 'Pixelmix';
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.white};
`;

export const GrayText = styled(JustText)`
    opacity: 0.6;
`;

export const Button = styled.img`
    margin-top: 8px;

    cursor: pointer;
`;
