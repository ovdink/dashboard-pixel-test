import styled from '@emotion/styled';

import { additionalBreakpoint, theme, toEnd } from 'styles';

import { ReactComponent as FirstBlockSVG } from './images/first-block-image.svg';
import { ReactComponent as SecondBlockSVG } from './images/second-block-image.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    max-width: 509px;

    ${additionalBreakpoint(1200)} {
        max-width: 100%;
    }
`;

export const Content = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 318px;
    padding: 29px 29px 16px;

    background-color: ${theme.colors.dark};

    ${toEnd('mobile')} {
        padding: 18px 12px;
    }
`;

export const BottomTextWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;

    margin-top: auto;
`;

export const Title = styled.p<{ isGreen?: boolean }>`
    font-size: 28px;
    font-weight: 400;
    line-height: 36.12px;
    color: ${({ isGreen }) => (isGreen ? theme.colors.green : theme.colors.purple)};

    ${toEnd('mobile')} {
        font-size: 20px;
        line-height: 25.8px;
    }
`;

export const Number = styled(Title)`
    font-family: 'PixelMix';
    font-size: 100px;
    font-weight: 400;
    line-height: 150px;

    ${toEnd('mobile')} {
        font-size: 70px;
        line-height: 105px;
    }
`;

export const Text = styled(Title)`
    margin-bottom: 20px;

    font-family: 'PixelMix';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;

export const FirstBlockImage = styled(FirstBlockSVG)`
    position: absolute;
    top: 13px;
    right: 13px;

    width: 176px;
    height: 176px;

    ${toEnd('mobile')} {
        width: 143px;
        height: 143px;
    }
`;

export const SecondBlockImage = styled(SecondBlockSVG)`
    position: absolute;
    top: 29px;
    right: 29px;

    width: 134px;
    height: 134px;

    ${toEnd('mobile')} {
        width: 101px;
        height: 101px;
    }
`;
