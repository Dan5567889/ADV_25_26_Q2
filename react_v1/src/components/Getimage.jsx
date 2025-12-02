// There are 3 parts for this kinf of lab. 
// 1. Usage of useState hook to create a state that holds image objects
// 2. Usage of useEffect hook to fetch images from given url
// 3. Rendering the images using .map() function

import {useState, useEffect} from 'react';
import styles from './GetImage.module.css';
function GetImage(){
//1.
    const [images, setImages]=useState([]);
//2. UseEffect has 3 parts. arrow function, cleanup and dependency array

    useEffect(
        ()=>{
            async function loadImage(){
                const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
                const data= await response.json();
                setImages(data);
            }

            loadImage();
        },
        []
    );



    return(
        <div className={styles.container}>
           {images.map(
            (img)=>(
                <div key={img.id}>
                    <h2> Author: {img.author} </h2>
                    <img src={img.download_url} alt={img.author} width="300px" height="200px"/>
                </div>
            )
           )}
        </div>
    );
}

export default GetImage;