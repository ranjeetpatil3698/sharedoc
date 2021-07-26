import React from 'react'
import { Box } from "@chakra-ui/react";

const AppWrapper = (props) => {
    return (
        <Box  mx="1rem" border="3px solid green"  >
            {props.children}
        </Box>
    )
}

export default AppWrapper
