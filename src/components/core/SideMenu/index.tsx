import { useLocation } from 'react-router-dom';

import { ReactComponent as CoinSVG } from './images/coin.svg';
import { ReactComponent as DiscordSVG } from './images/discord.svg';
import logo from './images/logo.svg';
import { ReactComponent as PersonSVG } from './images/person.svg';
import { ReactComponent as PersonGroupSVG } from './images/person-group.svg';
import { ReactComponent as PetsSVG } from './images/pets.svg';
import { ReactComponent as RobotSVG } from './images/robot.svg';
import { ReactComponent as SwordSVG } from './images/sword.svg';
import { ReactComponent as TelegramSVG } from './images/telegram.svg';
import { ReactComponent as XSVG } from './images/x.svg';

import * as S from './units';

export const navigationItemList = [
    {
        label: 'Profile',
        url: '/',
        icon: <PersonSVG />,
    },
    {
        label: 'Referrals',
        url: '/referrals',
        icon: <PersonGroupSVG />,
    },
    {
        label: 'Pets',
        url: '/pets',
        icon: <PetsSVG />,
        isWrongSVG: true,
    },
    {
        label: 'Battle',
        url: '/battle',
        icon: <SwordSVG />,
        isWrongSVG: true,
    },
    {
        label: 'Friends',
        url: '/friends',
        icon: <RobotSVG />,
    },
    {
        label: 'Staking',
        url: '/staking',
        icon: <CoinSVG />,
        isWrongSVG: true,
    },
];

export const SideMenu = () => {
    const location = useLocation();

    return (
        <S.Container>
            <S.Logo src={logo} onClick={() => window.location.reload()} />

            <S.NavigationBlock>
                {navigationItemList.map((navigationItem, index) => (
                    <S.NavigationItem
                        key={index}
                        to={navigationItem.url}
                        isActive={location.pathname === navigationItem.url}
                        isWrongSVG={navigationItem.isWrongSVG}
                    >
                        {navigationItem.icon}

                        {navigationItem.label}
                    </S.NavigationItem>
                ))}

                <S.SomeText>Game Dock</S.SomeText>

                <S.ButtonBlock>
                    <TelegramSVG />

                    <XSVG />

                    <DiscordSVG />
                </S.ButtonBlock>
            </S.NavigationBlock>
        </S.Container>
    );
};
