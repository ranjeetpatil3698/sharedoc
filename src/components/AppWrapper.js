import React from 'react'
import { Box } from "@chakra-ui/react";

const AppWrapper = (props) => {
    return (
        <Box  mx="1rem" borderLeft="3px solid green" borderRight="3px solid green" p="0.5px">
            {props.children}
        </Box>
    )
}

export default AppWrapper
