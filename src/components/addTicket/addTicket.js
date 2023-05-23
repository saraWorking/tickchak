import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { actions } from '../../redux/actions/actions'
import IconButton from '@material-ui/core/IconButton';
import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import CloseIcon from '@material-ui/icons/Close';
import './addTicket.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    const windowWidth = useRef(window.innerWidth);
    return <Slide direction={windowWidth.current > 768 ? "left" : "up"} ref={ref} {...props} />;
});

export default function AddTicket() {
    const [open, setOpen] = useState(true);
    const [currentTicket, setCurrentTicket] = useState({
        active: "",
        amount: "",
        amount_avaliable: "",
        color: "",
        image: "",
        price: "",
        title: ""
    });

    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(actions.closeNewTicketModal())
    };

    const addNew = () => {
        dispatch(actions.saveNewTicket(currentTicket));
        handleClose();
    }
    const changeData = (event) => {
        currentTicket[event.target.id] = event.target.value
        setCurrentTicket(currentTicket);
    }

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon color="primary" className="close-dialog" />
                    </IconButton>
                </DialogTitle>
                <div className="dialog-sub-title"></div>
                <DialogContent>
                    <div >
                        <TwoWheelerIcon className="dialog-icon"></TwoWheelerIcon>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            placeholder="שם הכרטיס"
                            type="text"
                            helperText="שם הכרטיס לדוגמה: כרטיס כניסה"
                            onChange={(e) => { changeData(e) }}
                        /></div>
                    <div >
                        <TwoWheelerIcon className="dialog-icon"></TwoWheelerIcon>
                        <TextField
                            id="price"
                            placeholder="מחיר"
                            type="number"
                            helperText="מחיר הכרטיס"
                            onChange={(e) => { changeData(e) }}
                        /></div>
                    <div>
                        <TwoWheelerIcon className="dialog-icon"></TwoWheelerIcon>
                        <TextField
                            id="amount"
                            placeholder="כמות"
                            type="number"
                            helperText="כמות הכרטיסים הזמינים למכירה"
                            onChange={(e) => { changeData(e) }}
                        /></div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        סגור
                    </Button>
                    <Button onClick={addNew} color="primary">
                        הוסף
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}