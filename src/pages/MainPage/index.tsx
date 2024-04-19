import * as STYLE from '../units';

import { LeftBlock } from './modules';

export const MainPage = () => {
    return (
        <STYLE.PageWrapper>
            {/* test font */}
            {/* <h1 style={{ color: 'white' }}>Invite friends and earn more points</h1>
            <h1 style={{ fontFamily: 'PixelMix', color: 'white' }}>
                Invite friends and earn more points
            </h1> */}

            <LeftBlock />
        </STYLE.PageWrapper>
    );
};
