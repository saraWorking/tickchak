import React, { useState } from 'react'
import { Switch, FormControlLabel } from '@material-ui/core';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './ticket.css'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/actions'


function Ticket({ ticket, index }) {
    const dispatch = useDispatch();
    const [percentage, setPercentage] = useState((ticket.amount - ticket.amount_avaliable) / ticket.amount * 100)
    const img = useRef()
    const decreasingImgSize = (img) => {
        img.current.children[0].children[0].style.width = "88px";
    }

    const increasingImgSize = (img) => {
        img.current.children[0].children[0].style.width = "122px";
    }
    const changeIsActive = (id) => {
        dispatch(actions.changeIsActive(id))
    }

    return (<>

        <div className="myCard " key={index} ref={img} onMouseOver={() => increasingImgSize(img)} onMouseOut={() => decreasingImgSize(img)}>
            <div className="card m-3" >
                <div className={`card-img-top ${ticket.image && "img-bg"}`} style={ticket.image ? { "background-image": `url(${ticket.image})` } :
                    { "background-color": `#${ticket.color}` }}>
                    <CircularProgressbar className='card-percent' value={percentage} text={`${percentage}%`} background={true} backgroundPadding={3} styles={buildStyles({
                        pathColor: `#${ticket.color}`,
                        textColor: '#484848', textSize: "30px",
                        trailColor: '#FFFFFF', backgroundColor: `${ticket.image}? "#CAD127":"none"`
                    })} />

                </div>
                <div className="card-body">
                    <div className='card-data'>
                        <h5 className="card-title">{ticket.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">מס' יחידות: {ticket.amount}</h6>

                        <p className="card-title">{ticket.price}</p>
                    </div>
                    <FormControlLabel control={<Switch checked={ticket.active} onChange={() => { changeIsActive(ticket.title) }} />} label={ticket.active ? "פעיל" : "כבוי"} />
                </div>
            </div>
        </div>
    </>
    )
}

export default Ticket