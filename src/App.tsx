import React            from 'react';
import {
    AppShell,
}                       from '@mantine/core';
import Main             from './pages/Main';
import MainHeader       from './components/MainHeader';
import ThemeProvider    from './theme/ThemeProvider';

function App() {
    return (
        <ThemeProvider>
            <AppShell
                header={<MainHeader/>}
            >
                <Main/>
            </AppShell>
        </ThemeProvider>
    );
}

export default App;
