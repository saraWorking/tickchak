import React from 'react'
import { Switch, FormControlLabel } from '@material-ui/core';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './ticket.css'

function Ticket({ ticket, index }) {
    return (<>

        <div className="myCard " key={index} >
            <div className="card m-3" >
                <div className={`card-img-top ${ticket.image ? "img-bg" : "color-bg"}`} style={ticket.image ? { "background-image": `url(${ticket.image})` } :
                    { "background-color": `#${ticket.color}` }}>
                    <CircularProgressbar value={40} text={`${40}%`} background={true} backgroundPadding={5} styles={buildStyles({backgroundColor: "none"})}/>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{ticket.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">מס' יחידות: {ticket.amount}</h6>

                    <p className="card-title">מחיר: {ticket.price}</p>
                    {/* <p className="card-title">{ticket.amount_avaliable}</p> */}
                    <FormControlLabel control={<Switch checked={ticket.active} />} label={ticket.active ? "פעיל" : "כבוי"} />
                </div>
            </div>
        </div>
    </>
    )
}

export default Ticket