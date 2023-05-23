import React, { useState } from 'react'
import LodingMore from '../lodingMore/lodingMore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../../redux/actions/actions'
import Ticket from '../ticket/ticket'
import Header from '../header/header'
import AddTicket from '../addTicket/addTicket'
import { LinearProgress } from '@material-ui/core';
import './ticketsList.css'

function TicketsList() {
    const dispatch = useDispatch()
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const loader = useSelector((state) => state.ticket.loader)
    const newTicketIsOpen = useSelector((state) => state.ticket.newTicketIsOpen)

    const ticketsList = useSelector((state) => state.ticket.tickets)

    useEffect(() => {
        dispatch(actions.getAllTickets({ limit, offset }))
        setOffset(offset + 1);
    }, [])

    return (<>
        <Header></Header>
        {newTicketIsOpen&&<AddTicket></AddTicket>}
        {ticketsList[0] &&
            <div className="container">
                {ticketsList.map((ticket, index) => (
                    <Ticket ticket={ticket} index={index}></Ticket>))}
            </div>}
        {loader && <LinearProgress className='loader' color="primary" />}
        <LodingMore limit={limit} offset={offset} setOffset={setOffset} ></LodingMore>
    </>)
}

export default TicketsList