import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/actions'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import './header.css'

const Header = (props) => {
    const dispatch = useDispatch()

    const openModal =()=>{
        dispatch(actions.openNewTicketModal());
    }
    return (
        <div className="header">
            <div className="header-text">
                <h4>כרטיסים לארוע</h4>
                <h6>מכאן הכל מתחיל</h6>
            </div>
            <div className='header-action'>
            <Fab size='small' color="primary" aria-label="add">
                <AddIcon color="action" onClick={()=>{openModal()}} />
            </Fab>
            <IconButton aria-label="search">
                <SearchIcon />
            </IconButton>
            </div>

        </div>
    )
}
export default Header;