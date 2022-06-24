import React from "react";
import { BillRegisterModal } from './BillRegisterModal'

export default {
    title: 'BillRegisterModal',
    component: BillRegisterModal
}

const Template = (args) => {
    return (
        <>
            <BillRegisterModal {...args} >
            </BillRegisterModal>
        </>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    payload: {}
}