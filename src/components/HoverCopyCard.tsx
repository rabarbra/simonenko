import React from "react";
import {
	ActionIcon,
	CopyButton,
	Flex,
	HoverCard,
	Text,
	Tooltip
}	from "@mantine/core";
import {
	IconCheck,
	IconCopy
}	from "@tabler/icons-react";

const HoverCopyCard = (props: {
	children: React.ReactNode,
	value: string
}) =>
	<HoverCard>
		<HoverCard.Target>
			{props.children}
		</HoverCard.Target>
		<HoverCard.Dropdown>
			<Flex>
				<Text>
					{props.value}
				</Text>
				<CopyButton
					value={props.value}
					timeout={2000}
				>
    				{({ copied, copy }) => (
    					<Tooltip
							label={copied ? 'Copied' : 'Copy'}
							withArrow
							position="right"
						>
    						<ActionIcon
								color={copied ? 'teal' : 'gray'}
								onClick={copy}
							>
    							{
									copied ?
									<IconCheck size="1rem" /> :
									<IconCopy size="1rem" />
								}
    						</ActionIcon>
    					</Tooltip>
    				)}
    			</CopyButton>
			</Flex>
		</HoverCard.Dropdown>
	</HoverCard>

export default HoverCopyCard;