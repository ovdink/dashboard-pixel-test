import { useState } from 'react';

import { Dropdown } from 'components/interactions';

// import { Button } from 'components/interactions';
import * as STYLE from '../units';

import { WalletsModal } from './modules/WalletsModal';
import { LeftBlock, RightSide } from './modules';
import * as S from './units';

export const MainPage = () => {
    const [isVisibleModal, setVisibleModal] = useState(false);

    return (
        <STYLE.PageWrapper>
            {/* <Button onClick={() => setVisibleModal(true)}>Connect Wallet</Button> */}
            <Dropdown wallet="0xBc18...46B9" />

            <S.Content>
                <LeftBlock />

                <RightSide />
            </S.Content>

            <WalletsModal isVisible={isVisibleModal} setVisible={setVisibleModal} />
        </STYLE.PageWrapper>
    );
};
