import { BorderBox } from 'components/containers';
import { CopyBlock } from 'components/interactions';

import { theme } from 'styles';

import * as S from './units';

export const LeftBlock = () => {
    return (
        <BorderBox borderColor={theme.colors.dark} maxWidth={557}>
            <S.Content>
                <S.Title>Invite Friends And Earn More Points</S.Title>

                <S.CopyBlocksContainer>
                    <S.CopyBlockWrapper>
                        <S.BlockTitle>Your Code</S.BlockTitle>

                        <BorderBox borderColor={theme.colors.lightGray}>
                            <S.CopyBlock>
                                <CopyBlock text="XHAT00SBIT7J" />
                            </S.CopyBlock>
                        </BorderBox>
                    </S.CopyBlockWrapper>

                    <S.CopyBlockWrapper>
                        <S.BlockTitle>Referral Link</S.BlockTitle>

                        <BorderBox borderColor={theme.colors.lightGray}>
                            <S.CopyBlock>
                                <CopyBlock text="https://www.pixelverse.com/link#343434" />
                            </S.CopyBlock>
                        </BorderBox>
                    </S.CopyBlockWrapper>
                </S.CopyBlocksContainer>

                <S.Description>
                    Describe the conditions of the referral system. The referral receives a
                    percentage of his friend’s point earnings. Describe the conditions of the
                    referral system. The referral receives a percentage of his friend’s point
                    earningsreferral system. The referral receives a percentage of his friend’s
                    point earningsreferral system. The referral receives a percentage of his
                    friend’s point earnings
                </S.Description>
            </S.Content>
        </BorderBox>
    );
};
