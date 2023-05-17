import React, { useState } from 'react'
import LodingMore from '../lodingMore/lodingMore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../../redux/actions/actions'
import Ticket from '../ticket/ticket'
import './ticketsList.css'

function TicketsList() {
    const dispatch = useDispatch()
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const ticketsList = useSelector((state) => state.tickets.tickets)

    useEffect(() => {
        dispatch(actions.getAllTickets({ limit, offset }))
        setOffset(offset + 1);
    }, [])

    return (<>
        <div className="container">
            {!ticketsList[0] ? <div>logdin...</div> :
                ticketsList.map((ticket, index) => (
                    <Ticket ticket={ticket} index={index}></Ticket>))}
        </div>
        <LodingMore limit={limit} offset={offset} setOffset={setOffset}></LodingMore>
    </>)
}

export default TicketsList