import React,{useEffect} from 'react'
import './user.css'
import {useDispatch,useSelector} from 'react-redux'
import { Input } from '@material-ui/core';
import {actions} from '../../redux/actions/actions'

export default function User() {
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch()

    useEffect(() => {
        alert("hi")
        dispatch(actions.getAllTickets());

        return () => {
        }
    }, [])

    const handlerChange=(name)=>{
        dispatch(actions.changeName(name));
    }
    const handlerClick=()=>{
       dispatch(actions.saveUser());
       alert("save")
    }
    return (
        <div className="div">
            <b>user name :{name}</b>
            <Input value={name} onChange={(e)=>handlerChange(e.target.value)}></Input>
            <button className="btn btn-primary" onClick={handlerClick}>save</button>
        </div>
    )
}
