//import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

const defaultInputValues = {
    number: 0,
    text: '',
}

class YBList extends React.Component {
    render() {
        const ybooks = this.props.yearbooks.map((ybook) =>
            <li key={ybook.id}>{JSON.stringify(ybook)}</li>
        );
        return (
            <ul>
                {ybooks}
            </ul>
        );
    }
}

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            value: defaultInputValues[this.props.type]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.updateData(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <input
                type={this.props.type}
                placeholder={this.props.pholder}
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}

class YBAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                id: undefined,
                grade: undefined,
                school_name: '',
                type: '',
                isPhotographed: false,
                is_edited: false,
                price: undefined
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter new Yearbook's data:
                    <Input
                        type={"number"}
                        pholder={"Grade..."}
                        updateData={val => this.setState({data: {...this.state.data, grade: val}})}
                    />
                    <Input
                        type={"text"}
                        pholder={"School..."}
                        updateData={val => this.setState({data: {...this.state.data, school_name: val}})}
                    />
                    <Input
                        type={"text"}
                        pholder={"Type..."}
                        updateData={val => this.setState({data: {...this.state.data, type: val}})}
                    />
                    <Input
                        type={"number"}
                        pholder={"Price..."}
                        updateData={val => this.setState({data: {...this.state.data, price: val}})}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yearbooks: props.yearbooks,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(new_ybook) {
        const appended_list = this.state.yearbooks.slice();
        appended_list.push({
            ...new_ybook,
            id: this.state.yearbooks.length,
        });

        this.setState({yearbooks: appended_list});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        YB front (this is header, you know, Василино?)
                    </p>
                    <hr />
                </header>
                <main>
                    <Route exact path='/'>
                        <p>Привіт, Василино!</p>
                        <div>
                            <Link to='/yearbooks'>See all yearbooks, Василино!</Link>
                        </div>
                        <div>
                            <Link to='/yearbooks/add'>Add a yearbook, Василино!</Link>
                        </div>
                    </Route>
                    <Route exact path='/yearbooks'>
                        <YBList yearbooks={this.state.yearbooks}/>
                    </Route>
                    <Route exact path='/yearbooks/add'>
                        <YBAdd handleSubmit={this.handleSubmit}/>
                    </Route>
                </main>
            </div>
        );
    }
}

export default App;
