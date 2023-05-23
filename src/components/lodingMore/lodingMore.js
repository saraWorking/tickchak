import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/actions'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { FormControlLabel, IconButton } from '@material-ui/core';
import './lodingMore.css'
function LodingMore(props) {
    const dispatch = useDispatch()
    const { limit, offset, setOffset } = props

    const LodingMore = () => {
        dispatch(actions.setLoader(true));
        dispatch(actions.getAllTickets({limit,offset}));
        setOffset(offset+1);
    }

    return (
        <FormControlLabel className='more-label' labelPlacement="bottom"control={<IconButton  onClick={() => {
            LodingMore();
        }}><MoreHorizIcon className='icon-border' fontSize="large"/></IconButton>} 
        label="load more" />
        
    )
}

export default LodingMore