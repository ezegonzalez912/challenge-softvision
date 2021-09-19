import { useState } from 'react'

export const useModal = () => {

    const [isOpenModal, setIsOpenModal] = useState<Boolean>(false);
    const isChangeModal = () => setIsOpenModal(!isOpenModal);

    return [isOpenModal, isChangeModal] as const;
}
