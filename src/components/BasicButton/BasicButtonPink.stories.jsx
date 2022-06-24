import React from "react";
import { BasicButtonPink } from "./BasicButtonPink";

export default {
    title: 'BasicButtonPink',
    component: BasicButtonPink
}

const Template = (args) => {
    return (
        <>
            <BasicButtonPink {...args} />
        </>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    text: 'click'
}
