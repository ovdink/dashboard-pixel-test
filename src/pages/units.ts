import styled from '@emotion/styled';

import { theme } from 'styles';

export const PageWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 100%;
    max-width: ${theme.maxContentWidth};

    overflow: hidden;
`;

// export const Container = styled.div`
//     display: flex;
//     gap: 16px;

//     width: 100%;
//     height: 40px;
// `;
