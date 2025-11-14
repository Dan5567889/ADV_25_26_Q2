import { useState } from "react";
import styles from './Card.module.css';

function Card({name,price,gender}) {
    const [Name, setName]=useState(name);
    const [Price, setPrice]=useState(price);
    const [Gender,setGender] = useState(gender);

return (
    <div className={styles.card_container}>
        <p style={{ fontSize: "25px" }}> <b>{name}</b> </p>
        <p> {gender} Shoes </p>
        <p> ${price}</p>
    </div>
);
}

export default Card;