import { FC } from 'react';

import { IButton } from './types';
import * as S from './units';

export const Button: FC<IButton> = (props) => {
    return <S.Container {...props}>{props.children}</S.Container>;
};
