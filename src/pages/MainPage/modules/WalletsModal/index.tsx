import { FC } from 'react';

import { Modal } from 'components/containers';

import { IWalletsModal } from './types';

export const WalletsModal: FC<IWalletsModal> = (props) => {
    return (
        <Modal isVisible={props.isVisible} setVisible={props.setVisible}>
            test
        </Modal>
    );
};
