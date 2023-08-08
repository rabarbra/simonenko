import React from 'react';
import './App.css';
import {
    ActionIcon, Group
}   from '@mantine/core';
import {
    ReactComponent as GithubIcon
}   from "./icons/github.svg";
import {
    ReactComponent as LinkedinIcon
}   from "./icons/linkedin.svg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Polina Simonenko
                </p>
                <Group>
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
                    <ActionIcon
                        size="lg"
                        variant='outline'
                        radius='lg'
                        color="violet"
                        component="a"
                        href="https://www.linkedin.com/in/polina-simonenko"
                        target="_blank"
                    >
                        <LinkedinIcon/>
                    </ActionIcon>
                </Group>
            </header>
        </div>
    );
}

export default App;
