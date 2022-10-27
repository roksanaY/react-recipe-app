import Modal from "./Modal";
import { useState } from "react";
import Button from "./Button";

export default function Recipe(props){

    const [modal, setModal] = useState(false);

    const modalHandler = () => {
        setModal(true);
    }
    const hideModal = () => {
        setModal(false);
    }

    return (
        <div key={props.title} className="recipe">
            <img src={props.image} alt={props.title} />
            <p>{props.title}</p>
            <Button onClick={modalHandler}>Details</Button> 
            {modal && <Modal title={props.title} image={props.image} contents={props.ingredients} onConfirm={hideModal} />}
        </div>
    );
}