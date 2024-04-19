import styled from '@emotion/styled';

import { toEnd } from 'styles';

import backgroundMask from 'images/background-mask.png';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    min-height: 100vh;

    background-image: url(${backgroundMask});
    background-position: 50%;
    background-size: cover;

    ${toEnd('mobile')} {
        padding: 4px 8px 8px;
    }
`;

export const BackgroundBlock = styled.div`
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;

    width: 100%;
    height: 100%;

    overflow: hidden;

    z-index: -1;
`;
