import React from 'react';
import './App.css';
import {
    ActionIcon,
    Group,
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
    AppShell,
    Header
}   from '@mantine/core';
import {
    useColorScheme
}   from '@mantine/hooks';
import {
    IconSun,
    IconMoonStars
}   from '@tabler/icons-react';
import {
    ReactComponent as GithubIcon
}   from './icons/github.svg';
import {
    ReactComponent as LinkedinIcon
}   from './icons/linkedin.svg';

function App() {
    const preferredColorScheme = useColorScheme("dark");
    const [colorScheme, setColorScheme] = React.useState<ColorScheme>(preferredColorScheme);
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <AppShell
                    header={
                        <Header height={30} withBorder={false}>
                            <ActionIcon
                                ml='auto'
                                mr={5}
                                color='violet'
                                onClick={() => toggleColorScheme()}
                                title="Toggle color scheme"
                            >
                                {colorScheme === 'dark' ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
                            </ActionIcon>
                        </Header>
                    }
                >
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
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
