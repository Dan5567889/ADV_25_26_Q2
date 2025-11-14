import { useState } from "react";
import styles from './Card.module.css';

function Card({name,description,price,gender}) {
    const [Name, setName]=useState(name);
    const [Description, setDescription]=useState(description);
    const [Price, setPrice]=useState(price);
    const [Gender,setGender] = useState(gender);

return (
    <div className={styles.card_container}>
        <p style={{ fontSize: "25px" }}> <b>{name}</b> </p>
        <p> {gender} Shoes </p>
        <p> {description} </p>
        <p> ${price}</p>
        <button className="button"> Add to cart </button>
    </div>
);
}

export default Card;