import React from 'react'
import {Button} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons'
//Implement share file url to clipboard and fix backend  errors
const ShareFile = () => {
    return (
        <div>
            <Button colorScheme="green" variant="outline">
            <LinkIcon/>  
            </Button>
        </div>
    )
}

export default ShareFile
