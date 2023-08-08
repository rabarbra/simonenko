import React from 'react';
import './App.css';
import {
    ActionIcon,
    Button,
    NavLink
}   from '@mantine/core';
import {
    ReactComponent as GithubIcon
}   from "./icons/github.svg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Polina Simonenko
                </p>
                <ActionIcon
                    size="lg"
                    variant='outline'
                    radius='lg'
                    color="violet"
                    component="a"
                    href="https://github.com/rabarbra"
                    target="_blank"
                >
                    <GithubIcon/>
                </ActionIcon>
            </header>
        </div>
    );
}

export default App;
