import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as ArrowSVG } from './images/arrow-icon.svg';
import { ReactComponent as MetamaskSVG } from './images/metamask-icon.svg';
import { ReactComponent as WalletConnectSVG } from './images/wallet-connect-icon.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

export const Title = styled.h1`
    margin-bottom: 20px;

    font-size: 24px;
    font-weight: 400;
    line-height: 30.96px;

    color: ${theme.colors.white};
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    margin-bottom: 24px;

    background-color: ${theme.colors.darkGray};
`;

export const Description = styled.p`
    margin-bottom: 16px;

    font-family: 'Pixelmix';
    font-size: 14px;
    font-weight: 400;
    line-height: 23.8px;

    opacity: 60%;

    color: ${theme.colors.white};
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    width: 100%;
`;

export const ButtonWrapper = styled.div`
    position: relative;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    height: 224px;
    padding: 18px;

    background-color: ${theme.colors.background};

    cursor: pointer;
`;

export const ButtonTitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 25.8px;

    color: ${theme.colors.white};
`;

export const ButtonTextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ButtonText = styled.p`
    font-family: 'IBM Plex Mono';
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;

    color: ${theme.colors.white};
`;

export const ArrowIcon = styled(ArrowSVG)`
    width: 12px;
    height: 12px;
    min-width: 12px;
    min-height: 12px;
`;

export const MetamaskIcon = styled(MetamaskSVG)`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);

    width: 80px;
    height: 73.94px;
`;

export const WalletConnectIcon = styled(WalletConnectSVG)`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);

    width: 78px;
    height: 78px;
`;
