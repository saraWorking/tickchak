import React, { lazy, Suspense } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import TicketsList from './ticketsList/ticketsList'
export default function Routes() {
    return (
        <Switch>
            {/* <Redirect exact from="/" to={login} /> */}
            <Route exact path={`/`} >
                <TicketsList></TicketsList>
            </Route>
            <Route path={`/home-page`} >
                homes
            </Route >
          
        </Switch>
    )
}
