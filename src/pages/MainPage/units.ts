import styled from '@emotion/styled';

import { additionalBreakpoint } from 'styles';

export const Content = styled.div`
    display: flex;
    gap: 16px;

    width: 100%;

    ${additionalBreakpoint(1200)} {
        flex-direction: column;
    }
`;
