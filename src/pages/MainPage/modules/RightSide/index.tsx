import { BorderBox } from 'components/containers';

import { useWindowResize } from 'hooks';
import { theme } from 'styles';

import * as S from './units';

export const RightSide = () => {
    const width = useWindowResize();

    return (
        <S.Container>
            <BorderBox borderColor={theme.colors.dark} maxWidth={width > 1200 ? 509 : undefined}>
                <S.Content>
                    <S.FirstBlockImage />

                    <S.Title>You Have</S.Title>

                    <S.BottomTextWrapper>
                        <S.Number>13</S.Number>

                        <S.Text>Referrals</S.Text>
                    </S.BottomTextWrapper>
                </S.Content>
            </BorderBox>

            <BorderBox borderColor={theme.colors.dark} maxWidth={width > 1200 ? 509 : undefined}>
                <S.Content>
                    <S.SecondBlockImage />

                    <S.Title isGreen>You Have</S.Title>

                    <S.BottomTextWrapper>
                        <S.Number isGreen>132</S.Number>

                        <S.Text isGreen>Points</S.Text>
                    </S.BottomTextWrapper>
                </S.Content>
            </BorderBox>
        </S.Container>
    );
};
