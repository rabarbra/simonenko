import React from "react";
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
}	from "@mantine/core";
import {
	useColorScheme,
	useFavicon,
	useMediaQuery
}	from "@mantine/hooks";

const ThemeProvider = (props: {children: React.ReactNode}) =>
{
	const preferredColorScheme = useColorScheme(
        useMediaQuery('(prefers-color-scheme: dark)') ? "dark" : "light"
    );
    const [colorScheme, setColorScheme] = React.useState<ColorScheme>(preferredColorScheme);
    const [favicon, setFavicon] = React.useState(`${origin}/favicon.ico`);
    const blackFav = `${origin}/favicon_black.svg`;
    const whiteFav = `${origin}/favicon_white.svg`;
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    React.useEffect(()=>{
        if (preferredColorScheme === 'dark')
            setFavicon(whiteFav);
        else
            setFavicon(blackFav)
        setColorScheme(preferredColorScheme);
    },[preferredColorScheme]);
    useFavicon(favicon);
	return (
		<ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{colorScheme}}
                withGlobalStyles
                withNormalizeCSS
            >
                {props.children}
            </MantineProvider>
        </ColorSchemeProvider>
	);
}

export default ThemeProvider;