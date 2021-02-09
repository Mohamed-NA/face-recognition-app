import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import RoboSearch from '../components/RoboSearch';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfeild: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    onsearchchange = (event) => {
        this.setState({ searchfeild: event.target.value })
    }

    render() {
        const { robots, searchfeild } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfeild.toLowerCase());
        })
        return !robots.length ?
        <h1 className='tc'>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                < RoboSearch searchchange={this.onsearchchange} />
                <Scroll>
                    <ErrorBoundry>
                        < Cardlist robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;