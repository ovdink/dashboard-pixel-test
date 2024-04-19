import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const BorderBox: FC<T.IBorderBox> = ({ children, ...props }) => {
    return (
        <S.Container maxWidth={props.maxWidth}>
            <S.Top {...props} />
            <S.Right {...props} />
            <S.Bottom {...props} />
            <S.Left {...props} />

            <S.Content {...props}>{children}</S.Content>
        </S.Container>
    );
};
