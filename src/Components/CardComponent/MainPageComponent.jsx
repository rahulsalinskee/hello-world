import React from 'react';
import { CardComponent } from './CardComponent';
import "../../CSS/MainPage.css";

import image1 from '../../Images/1.jpg';
import image2 from '../../Images/2.jpg';
import image3 from '../../Images/3.jpg';
import image4 from '../../Images/4.jpg';
import image5 from '../../Images/5.jpg';
import image6 from '../../Images/6.jpeg';
import image7 from '../../Images/7.jpg';
import image8 from '../../Images/8.jpg';

const imageData = [
    {
        title: "1", img: image1
    },
    {
        title: "2", img: image2
    },
    {
        title: "3", img: image3
    },
    {
        title: "4", img: image4
    },
    {
        title: "5", img: image5
    },
    {
        title: "6", img: image6
    },
    {
        title: "7", img: image7
    },
    {
        title: "8", img: image8
    },
];

export function MainPageComponent() {
    return (
        <>
            <h2 className="heading">Main Page Gallery!</h2>
            <div className="card-component"> {imageData.map((data, index) => (<CardComponent key={index} title={data.title} img={data.img} />))} </div>
        </>
    );
}