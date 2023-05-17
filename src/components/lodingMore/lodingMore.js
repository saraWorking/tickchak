import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/actions'

function LodingMore(props) {
    const dispatch = useDispatch()
    const { limit, offset, setOffset } = props

    const LodingMore = () => {
        dispatch(actions.getAllTickets({limit,offset}));
        setOffset(offset+1);
    }

    return (
        <button onClick={() => {
            LodingMore();
        }}>lodingMore</button>
    )
}

export default LodingMore