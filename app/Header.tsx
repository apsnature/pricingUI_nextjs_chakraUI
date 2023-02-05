import { Box, Heading,Text } from "@chakra-ui/react";

export default function Header(){
    return (
        <Box  textAlign={{base:"left", md:"left", lg:"center"}} pl="100px" bg="#6B46C1" color="white" pt="88px" pb="250px">
             
        <Heading >Simple pricing for your business</Heading>
        <Text pt="20px">Assignment Submitted by Shahid Mahmood-PIAIC201402</Text>
        </Box>
    )
}