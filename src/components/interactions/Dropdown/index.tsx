import { FC, useState } from 'react';
import { useDisconnect } from 'wagmi';

import { Button } from '../Button';

import button from './images/button.png';

import { IDropdown } from './types';
import * as S from './units';

export const Dropdown: FC<IDropdown> = (props) => {
    const { disconnect } = useDisconnect();

    const [isOpen, setOpen] = useState(false);

    return (
        <S.Container>
            <Button onClick={() => setOpen(!isOpen)}>
                {props.wallet} <S.ArrowIcon isOpen={isOpen} />
            </Button>

            <S.Dropdown isOpen={isOpen}>
                <S.LineBlock>
                    <S.GrayText>Balance</S.GrayText>

                    <S.JustText>130 USDT</S.JustText>
                </S.LineBlock>

                <S.LineBlock>
                    <S.GrayText>Address</S.GrayText>

                    <S.JustText>{props.wallet}</S.JustText>
                </S.LineBlock>

                <S.Button src={button} onClick={() => disconnect()} />
            </S.Dropdown>
        </S.Container>
    );
};
