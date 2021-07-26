import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Link,
  Box
} from '@chakra-ui/react';
import { Spinner } from "@chakra-ui/react"
// import { Link as ReachLink } from "react-router-dom"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Link as ReachLink} from "react-router-dom";
import Visible from './Visible';
import ShareFile from './ShareFile';
import DeleteButton from './DeleteButton';


const FilesTable = ({data}) => {
    console.log(data)
  const path=`${process.env.REACT_APP_URL}`
if(data.length===0){
    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            alignSelf="center"
          />
    )
}
  return (
    <Box m="2rem" >
      <Table variant="simple" m="2" border="1.5px solid green" borderRadius="0.2rem" py="10px">
        <TableCaption placement="top" m="1">All Files Uploaded</TableCaption>
        <Thead>
          <Tr>
            <Th>Filename</Th>
            <Th>Date Uploaded</Th>
            <Th>Views</Th>
            <Th>Link</Th>
            <Th>Visible</Th>
            <Th>Share</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        
        <Tbody>
            {data && data.map(({fileid,filename,view,uploadDate,id,visible})=>(
            <Tr key={fileid}>
                <Td>{filename.split("%20").join(" ")}</Td>
                <Td>{uploadDate.substring(0,16)}</Td>
                <Td>{view}</Td>
                <Td><Link as={ReachLink} to={`/viewfile/${id}`}><ExternalLinkIcon mx="2px" /></Link></Td>
                <Td><Visible state={visible} id={id}/></Td>
                <Td><ShareFile path={`${path}/viewfile/${id}`}/></Td>
                <Td><DeleteButton id={id} filename={filename}/></Td>
            </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default FilesTable;
