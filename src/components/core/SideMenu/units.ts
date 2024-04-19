import styled from '@emotion/styled';

import template from './images/sidebar-template.png';

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;

    width: 202px;
    height: 762px;

    background-image: url(${template});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
