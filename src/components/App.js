import React from 'react';
import { Component } from 'react';

import Search from './Search';

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Univision Interview Project</h1>
                </div>
                <div>
                    <Search />
                </div>
            </div>
        );
    }
}
