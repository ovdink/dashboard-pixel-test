import styled from '@emotion/styled';

import backgroundMask from 'images/background-mask.png';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 32px 40px;

    background-image: url(${backgroundMask});
    background-position: 50%;
    background-size: cover;

    overflow: hidden;
`;
