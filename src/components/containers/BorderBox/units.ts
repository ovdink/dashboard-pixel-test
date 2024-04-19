import styled from '@emotion/styled';

import { theme } from 'styles';

import * as T from './types';

export const Container = styled.div<T.IBorderBox>`
    position: relative;

    width: 100%;
    max-width: ${({ maxWidth }) => (!!maxWidth ? `${maxWidth}px` : '100%')};
    padding: ${({ size = 3 }) => `${size}px`};
`;

export const Content = styled.div<T.IBorderBox>`
    width: 100%;
`;

export const Top = styled.div<T.IBorderBox>`
    position: absolute;
    top: 0;
    left: ${({ size = 3 }) => `${size}px`};

    width: ${({ size = 3 }) => `calc(100% - ${size * 2}px)`};
    height: ${({ size = 3 }) => `${size}px`};

    background-color: ${({ borderColor = theme.colors.dark }) => borderColor};
`;

export const Right = styled.div<T.IBorderBox>`
    position: absolute;
    top: ${({ size = 3 }) => `${size}px`};
    right: 0;

    width: ${({ size = 3 }) => `${size}px`};
    height: ${({ size = 3 }) => `calc(100% - ${size * 2}px)`};

    background-color: ${({ borderColor = theme.colors.dark }) => borderColor};
`;

export const Bottom = styled(Top)`
    top: auto;
    bottom: 0;
`;

export const Left = styled(Right)`
    right: auto;
    left: 0;
`;
