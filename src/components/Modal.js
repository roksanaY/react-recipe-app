import classes from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Modal = (props) => {

    return (
        <div>
            <div onClick={props.onConfirm} className={classes.backdrop} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                <img src={props.image} alt={props.title} />
                <h3>Ingredients : </h3>
                {props.contents.map((item, index) => (<p key={index}>{item.text}</p>))}
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Close</Button>
                </footer>
            </Card>
        </div>
    );

}
export default Modal;