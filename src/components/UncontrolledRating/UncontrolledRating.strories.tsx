import React, {useState} from 'react';
import {UncontrolledRating, UncontrolledRatingPropsType} from './UncontrolledRating';
import {ComponentStory, Story} from "@storybook/react";
export default {
    title: 'Rating stories',
    component: UncontrolledRating,
};
const Template: Story<UncontrolledRatingPropsType> = (args) => <UncontrolledRating {...args}/>
export const EmptyRating = Template.bind({})

EmptyRating.args = {
    defaultValue: 0
}


//