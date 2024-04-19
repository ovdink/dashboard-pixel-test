import styled from '@emotion/styled';

import { theme, toEnd } from 'styles';

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 21px 29px 27px;

    background-color: ${theme.colors.dark};

    ${toEnd('mobile')} {
        padding: 21px 16px 31px;
    }
`;

export const Title = styled.div`
    margin-bottom: 48px;

    font-size: 28px;
    font-weight: 400;
    line-height: 36.12px;
    color: ${theme.colors.white};

    ${toEnd('mobile')} {
        margin-bottom: 25px;

        font-size: 20px;
        line-height: 25.8px;
    }
`;

export const CopyBlocksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 100%;
    margin-bottom: 44px;

    ${toEnd('mobile')} {
        gap: 25px;

        margin-bottom: 35px;
    }
`;

export const CopyBlockWrapper = styled(CopyBlocksContainer)`
    gap: 24px;

    margin-bottom: 0 !important;
`;

export const BlockTitle = styled(Title)`
    margin-bottom: 0 !important;

    font-size: 18px;
    line-height: 23.22px;

    ${toEnd('mobile')} {
        font-size: 14px;
        line-height: 18.06px;
    }
`;

export const CopyBlock = styled.div`
    padding: 12px 16px;

    background-color: ${theme.colors.background};

    ${toEnd('mobile')} {
        padding: 7px 16px;
    }
`;

export const CopyText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 23.22px;
    color: ${theme.colors.white};

    font-family: 'IBM Plex Mono';
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${theme.colors.white};

    font-family: 'IBM Plex Mono';

    opacity: 60%;

    ${toEnd('mobile')} {
        font-size: 14px;
        line-height: 21px;
    }
`;
