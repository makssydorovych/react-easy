import React, {useState} from 'react';
import {Rating, RatingPropsType, RatingValueType} from './Rating';
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
export default {
    title: 'Rating stories',
    component: Rating,
};
const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>
export const EmptyRating = Template.bind({})

const callback = action("Rating event fired")
EmptyRating.args = {
    value: 0,
    onClick: callback
}
export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1,
    onClick: callback
}
export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2,
    onClick: callback
}
export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3,
    onClick: callback
}
export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4,
    onClick: callback
}
export const Rating5 = Template.bind({})
Rating5.args = {
    value: 5,
    onClick: callback
}

export const RatingChanging = () => {
   const[rating, setRating] = useState<RatingValueType>(0)
   return  <Rating value={rating} onClick={setRating}/>
}