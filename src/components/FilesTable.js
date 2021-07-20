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
  Link
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
    <>
      <Table variant="simple" m="2" border="2px grey">
        <TableCaption placement="top">All Files Uploaded</TableCaption>
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
                <Td><ShareFile/></Td>
                <Td><DeleteButton id={id} filename={filename}/></Td>
            </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
};

export default FilesTable;
