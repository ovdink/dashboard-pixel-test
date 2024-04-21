import { FC, useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';

import { BorderBox, Modal } from 'components/containers';

import { theme } from 'styles';

import { IWalletsModal } from './types';
import * as S from './units';

export const WalletsModal: FC<IWalletsModal> = (props) => {
    const { connectors, connect } = useConnect();
    const { isConnected } = useAccount();

    useEffect(() => {
        isConnected && props.setVisible(false);
    }, [isConnected]);

    return (
        <Modal isVisible={props.isVisible} setVisible={props.setVisible}>
            <S.Container>
                <S.Title>Connect Wallet</S.Title>

                <S.Divider />

                <S.Description>You can use 1 wallet at the same time</S.Description>

                <S.ButtonsWrapper>
                    <BorderBox maxWidth={376} size={6} borderColor={theme.colors.darkGray}>
                        <S.ButtonWrapper onClick={() => connect({ connector: connectors[0] })}>
                            <S.MetamaskIcon />

                            <S.ButtonTitle>Metamask</S.ButtonTitle>

                            <S.ButtonTextWrapper>
                                <S.ButtonText>Connect</S.ButtonText>

                                <S.ArrowIcon />
                            </S.ButtonTextWrapper>
                        </S.ButtonWrapper>
                    </BorderBox>

                    <BorderBox maxWidth={376} size={6} borderColor={theme.colors.darkGray}>
                        <S.ButtonWrapper onClick={() => connect({ connector: connectors[1] })}>
                            <S.WalletConnectIcon />

                            <S.ButtonTitle>Wallet Connect</S.ButtonTitle>

                            <S.ButtonTextWrapper>
                                <S.ButtonText>Connect</S.ButtonText>

                                <S.ArrowIcon />
                            </S.ButtonTextWrapper>
                        </S.ButtonWrapper>
                    </BorderBox>
                </S.ButtonsWrapper>
            </S.Container>
        </Modal>
    );
};
