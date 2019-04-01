import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store';
import WithLayout from './utils/WithLayout';
import { NotFoundView } from './layout/components/NotFoundView';
import { HomeView } from './layout/components/HomeView';
import { InvitationView } from './layout/components/InvitationView';
import { MenuView } from './layout/components/MenuView';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route
                    path={ '/' }
                    exact
                    render={ () => {
                        const invitationId = localStorage.getItem('id');

                        if (!invitationId) {
                            return <NotFoundView />;
                        }

                        return(
                            <WithLayout
                                component={ <HomeView /> }
                                invitationId={ invitationId }
                            />
                        );
                    }}
                />
                <Route
                    path={ '/invitacion' }
                    exact
                    render={ () => {
                        const invitationId = localStorage.getItem('id');

                        if (!invitationId) {
                            return <NotFoundView />;
                        }

                        return(
                            <WithLayout
                                component={ <InvitationView /> }
                                invitationId={ invitationId }
                            />
                        );
                    }}
                />
                <Route
                    path={ '/menu' }
                    exact
                    render={ () => {
                        const invitationId = localStorage.getItem('id');

                        if (!invitationId) {
                            return <NotFoundView />;
                        }

                        return(
                            <WithLayout
                                component={ <MenuView /> }
                                invitationId={ invitationId }
                            />
                        );
                    }}
                />
                <Route
                    path={ '/:id' }
                    exact
                    render={ ({ match: { params: { id: invitationId } } }) => {
                        if (!invitationId) {
                            return <NotFoundView />;
                        }

                        return(
                            <WithLayout
                                component={ <InvitationView /> }
                                invitationId={ invitationId }
                            />
                        );
                    }}
                />
                <Route component={ NotFoundView }/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
