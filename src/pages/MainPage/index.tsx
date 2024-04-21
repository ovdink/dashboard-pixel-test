import { useState } from 'react';
import { useAccount } from 'wagmi';

import { Button, Dropdown } from 'components/interactions';

import { getTailsString } from 'utils';

import * as STYLE from '../units';

import { WalletsModal } from './modules/WalletsModal';
import { LeftBlock, RightSide } from './modules';
import * as S from './units';

export const MainPage = () => {
    const [isVisibleModal, setVisibleModal] = useState(false);

    const { isConnected, address } = useAccount();

    return (
        <STYLE.PageWrapper>
            {isConnected ? (
                <Dropdown wallet={getTailsString(address)} />
            ) : (
                <Button onClick={() => setVisibleModal(true)}>Connect Wallet</Button>
            )}

            <S.Content>
                <LeftBlock />

                <RightSide />
            </S.Content>

            <WalletsModal isVisible={isVisibleModal} setVisible={setVisibleModal} />
        </STYLE.PageWrapper>
    );
};
