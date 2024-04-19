import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import itemTemplate from './images/item-hover-template.png';
import template from './images/sidebar-template.png';

export const Container = styled.nav`
    position: sticky;
    top: 32px;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 246px;
    height: 762px;
    padding: 40px 12px 32px 20px;

    background-image: url(${template});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const Logo = styled.img`
    transform: translateX(-10px);

    cursor: pointer;
`;

export const NavigationBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 100%;
    margin-top: 62px;
`;

export const NavigationItem = styled(NavLink)<{ isActive: boolean; isWrongSVG?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    padding: 10px 5px 10px 12px;

    font-size: 16px;
    line-height: 16px;

    color: ${theme.colors.white};

    opacity: 0.7;

    cursor: pointer;

    &:hover {
        background-image: url(${itemTemplate});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    ${({ isActive, isWrongSVG }) =>
        isActive &&
        css`
            background-image: url(${itemTemplate});
            background-repeat: no-repeat;
            background-size: 100% 100%;

            color: ${theme.colors.purple};

            ${isWrongSVG
                ? css`
                      & > svg rect:nth-child(2) {
                          fill: ${theme.colors.purple};
                      }
                  `
                : css`
                      & > svg path,
                      & > svg rect {
                          fill: ${theme.colors.purple};
                      }
                  `}
        `}
`;

export const SomeText = styled.p`
    margin: 145px auto 0 12px;

    font-size: 16px;
    line-height: 16px;

    color: ${theme.colors.white};

    opacity: 0.7;

    cursor: pointer;
`;

export const ButtonBlock = styled.div`
    display: flex;
    gap: 16px;

    width: 137px;
    margin: 50px auto 0 19px;

    & > svg {
        cursor: pointer;
    }
`;
