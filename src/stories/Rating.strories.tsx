import React from 'react';


import { Rating } from '../components/Rating';


export default {
    title: 'Rating stories',
    component: Rating,
} ;

export const EmptyStars =()=>{<Rating value={0} onClick={() => {}}/>}
export const Rating1 =()=>{<Rating value={1} onClick={() => {}}/>}
export const Rating2 =()=>{<Rating value={2} onClick={() => {}}/>}
export const Rating3 =()=>{<Rating value={3} onClick={() => {}}/>}
export const Rating4 =()=>{<Rating value={4} onClick={() => {}}/>}
export const Rating5 =()=>{<Rating value={5} onClick={() => {}}/>}