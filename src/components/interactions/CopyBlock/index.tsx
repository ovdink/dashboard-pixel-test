import { FC, useState } from 'react';
import copyText from 'copy-to-clipboard';

import * as T from './types';
import * as S from './units';

export const CopyBlock: FC<T.ICopyBlockProps> = (props) => {
    const [processAnimation, setProcessAnimation] = useState(false);

    const onCopy = () => {
        copyText(props.copyText || props.text);

        setProcessAnimation(true);
    };

    const onAnimationEnd = () => {
        setProcessAnimation(false);
    };

    return (
        <S.Wrapper onClick={onCopy} {...props}>
            <S.Text>{props.text}</S.Text>

            <S.CopiedText processAnimation={processAnimation} onAnimationEnd={onAnimationEnd}>
                Copied!
            </S.CopiedText>

            <S.CopyIcon />
        </S.Wrapper>
    );
};
