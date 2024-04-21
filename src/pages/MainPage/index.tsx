import { useState } from 'react';

import { Button } from 'components/interactions';

import * as STYLE from '../units';

import { WalletsModal } from './modules/WalletsModal';
import { LeftBlock, RightSide } from './modules';
import * as S from './units';

export const MainPage = () => {
    const [isVisibleModal, setVisibleModal] = useState(false);

    return (
        <STYLE.PageWrapper>
            <Button onClick={() => setVisibleModal(true)} />

            <S.Content>
                <LeftBlock />

                <RightSide />
            </S.Content>

            <WalletsModal isVisible={isVisibleModal} setVisible={setVisibleModal} />
        </STYLE.PageWrapper>
    );
};
