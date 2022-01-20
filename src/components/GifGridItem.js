import React from 'react';
import 'animate.css';
//import Styles from '../index.css'


export default function GifGridItem({ id, title, url }) {

    console.log(id, title, url);

    return <div className="card animate__animated animate__heartBeat">
        <img src={url} alt={title} ></img>
        <p>{title}</p>
    </div>;
}
