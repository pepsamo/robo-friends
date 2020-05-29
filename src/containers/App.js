import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


const state = {
    robots: [],
    searchField: ''
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = state;
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    onSearchChange(e) {
        this.setState({
            searchField: e.target.value
        });
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({robots: data}));
    }
    render() {
        const { robots }= this.state;
        const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        if (robots.length === 0) {
            return <h1>Loading ...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
};

export default App;