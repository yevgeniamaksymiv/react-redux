import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Div} from 'glamorous';

import Tasks, {List} from './tasks';

function App() {
    return (
        <Router>
            <Route
                path="/"
                render={props => (
                    <Div
                        display="flex"
                        marginLeft={20}
                        marginRight={20}
                        css={{
                            '& > *': {
                                paddingLeft: 10,
                                paddingRight: 10,
                                borderRight: '1px solid',
                            },
                            '& > *:last-child': {
                                paddingRight: 0,
                                borderRight: 'none',
                            },
                        }}
                    >
                        <div
                            style={{
                                width: '20vw',
                                minWidth: 200,
                                maxWidth: 400,
                            }}
                        >
                            <h1 style={{textAlign: 'center'}}>Tasks</h1>
                            <List {...props} />
                        </div>
                        <div
                            style={{
                                flex: 1,
                            }}
                        >
                            <h1 style={{textAlign: 'center'}}>Your Implementation</h1>
                            <Tasks {...props} />
                        </div>
                    </Div>
                )}
            />
        </Router>
    )
}

export default App
