import styled from '@emotion/styled';

import { theme } from 'styles';

import template from './images/template.png';

export const Container = styled.button`
    height: 62px;
    width: fit-content;
    padding: 16px 24px;
    margin-left: auto;

    background-image: url(${template});
    background-repeat: no-repeat;
    background-size: 100% 100%;

    font-family: 'Pixelmix';
    font-size: 18px;
    line-height: 27px;
    color: ${theme.colors.purple};

    transition: filter 0.1s ease-in-out;

    &:hover {
        filter: brightness(1.2);
    }
`;
