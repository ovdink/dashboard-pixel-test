import * as STYLE from '../units';

import { LeftBlock, RightSide } from './modules';
import * as S from './units';

export const MainPage = () => {
    return (
        <STYLE.PageWrapper>
            <S.Content>
                <LeftBlock />

                <RightSide />
            </S.Content>
        </STYLE.PageWrapper>
    );
};
