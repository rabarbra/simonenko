import React from 'react';
import {
    ActionIcon,
    Group,
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
    AppShell,
    Header,
    Flex,
    Title
}   from '@mantine/core';
import {
    useColorScheme,
    useMediaQuery
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
    const preferredColorScheme = useColorScheme(
        useMediaQuery('(prefers-color-scheme: dark)') ? "dark" : "light"
    );
    const [colorScheme, setColorScheme] = React.useState<ColorScheme>(preferredColorScheme);
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    React.useEffect(()=>{
        setColorScheme(preferredColorScheme);
    },[preferredColorScheme]);
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{
                    colorScheme
                }}
                withGlobalStyles
                withNormalizeCSS
            >
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
                                {
                                    colorScheme === 'dark' ?
                                    <IconSun size="1.1rem" /> :
                                    <IconMoonStars size="1.1rem" />
                                }
                            </ActionIcon>
                        </Header>
                    }
                >
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        gap="xl"
                        mih="calc(100vh - 65px)"
                    >
                        <Title
                            order={1}
                            size={76}
                            weight="normal"
                        >
                            Polina Simonenko
                        </Title>
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
                    </Flex>
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
