import {
	ActionIcon,
	Flex,
	Group,
	Title
}	from "@mantine/core";
import {
	IconBrandGmail
}	from "@tabler/icons-react";
import HoverCopyCard from "../components/HoverCopyCard";
import {
	myEmail,
	myGitHub,
	myLinkedIn,
	title
}	from "../config/config";
import {
    ReactComponent as GithubIcon
}   from '../icons/github.svg';
import {
    ReactComponent as LinkedinIcon
}   from '../icons/linkedin.svg';

const Main = () =>
	<Flex
        direction="column"
        align="center"
        justify="center"
        gap="xl"
        mih="calc(100vh - 65px)"
    >
        <Title
            order={1}
            size="calc(10px + 5vmin)"
            weight="normal"
        >
            {title}
        </Title>
        <Group>
            <ActionIcon
                size="lg"
                variant='outline'
                radius='lg'
                color="violet"
                component="a"
                href={myGitHub}
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
                href={myLinkedIn}
                target="_blank"
            >
                <LinkedinIcon/>
            </ActionIcon>
            <HoverCopyCard value={myEmail}>
                <ActionIcon
                    size="lg"
                    variant='outline'
                    radius='lg'
                    color="violet"
                    component="a"
                    href={`mailto:${myEmail}`}
                    target="_blank"
                >
                    <IconBrandGmail/>
                </ActionIcon>
            </HoverCopyCard>
        </Group>
    </Flex>

export default Main;