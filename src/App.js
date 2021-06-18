import React from 'react';
import axios from 'axios';
import AddYearbookPage from "./components/AddYearbookPage";
import YearbooksPage from "./components/YearbooksPage";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import CalendarPage from "./components/CalendarPage";
import ChoosePage from "./components/ChoosePage";
import DistinctYearbookPage from "./components/DistinctYearbookPage";
import ProfilePage from "./components/ProfilePage";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yearbooks: props.yearbooks,
        };
    }

    render() {
        let ybook_id = 1;//TODO get ybook_id
        return (
            <div className="App">
                <main>
                    <Switch>
                        <Route exact path='/login'>
                            <LoginPage/>
                        </Route>
                        {!this.state.authenticatedUser && <Redirect from="/" to="/login" />}
                        <Route exact path='/'>
                        {
                            this.state.authenticatedUser ?
                                <Redirect to="/yearbooks" /> : <Redirect to={"/yearbooks/" + ybook_id}/>
                        }
                        </Route>
                        <Route exact path='/yearbooks'>
                            <YearbooksPage/>
                        </Route>
                        <Route exact path='/yearbooks/add'>
                            <AddYearbookPage/>
                        </Route>
                        <Route exact path='/yearbooks/:id'>
                            <DistinctYearbookPage/>
                        </Route>
                        <Route exact path='/calendar'>
                            <CalendarPage/>
                        </Route>
                        <Route exact path='/choose'>
                            <ChoosePage/>
                        </Route>
                        <Route exact path='/profile'>
                            <ProfilePage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
