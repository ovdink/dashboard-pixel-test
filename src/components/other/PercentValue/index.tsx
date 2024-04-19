import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const PercentValue: FC<T.IPercentValue> = ({ value, isTextCenter = true, ...props }) => {
    const isNegative = value < 0;

    return (
        <S.PercentValue isRed={isNegative} {...{ isTextCenter }} {...props}>{`${
            isNegative ? '' : '+'
        }${value}%`}</S.PercentValue>
    );
};
