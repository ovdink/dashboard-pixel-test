import styled from '@emotion/styled';

import template from './images/sidebar-template.png';

export const Container = styled.div`
    width: 202px;
    height: calc(100vh - 64px);

    background-image: url(${template});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
