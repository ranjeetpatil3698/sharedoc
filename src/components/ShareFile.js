import React from 'react'
import {Button,useClipboard,useToast} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons'
//Implement share file url to clipboard and fix backend  errors
const ShareFile = ({path}) => {
    const toast = useToast()
    const value="hello world";
    const { hasCopied, onCopy } = useClipboard(path)
    return (
        <div>
            <Button colorScheme="green" variant="outline" onClick={()=>{
                onCopy();
                toast({
                    title: "Link Copied.",
                    description: "Share Copied Link With Others .",
                    status: "success",
                    duration: 3500,
                    isClosable: true,
                  })
            }}>
            <LinkIcon/>  
            </Button>
        </div>
    )
}

export default ShareFile
