import React, { lazy, Suspense } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import TicketsList from './ticketsList/ticketsList'
const User = lazy(() => import('../components/user/user'))
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
            <Route path="/drinks" render={(props) => (true ? <Suspense fallback={<h1>Still Loading…</h1>}>
                <User {...props} />
            </Suspense> : <Redirect to="/home-page" />)} />
        </Switch>
    )
}
