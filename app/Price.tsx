import { Box, Flex, Text, Heading, Button, HStack, Icon } from "@chakra-ui/react";
import checkBoxIcon from "./icons/checkBoxIcon";

export default function Price(){
    return (
// Main Container Box 
<Box  maxW="950px" mx={{base:"20px", lg:"auto"}} ml="100px"  mt="-150px"  borderRadius="16px" overflow="hidden" boxShadow="dark-lg" >
  <Flex direction={{base:'column', md:"column" , lg:"row"}}>
            <Box p="60px" textAlign={"center"}    bg="#F0EAFB"  >
                <Text fontSize={"24px"} fontWeight="bold">
                Premium PRO
                </Text>
            
            <Heading fontSize={"60px"}>$329</Heading>
            <Text > billed just once </Text>
            <Button mt="10px" w={"300px"} style={{backgroundColor:"#805AD5", color:"#fff" }}>
                Get Started
            </Button>           


            </Box>
  
  {/* Second Box on Right Side */}
            <Box pt="50px" pl="25px" bg="#fff" >
            <Text mb="10px">
                Access these features when you get this pricing package for your business.
            </Text>
            <HStack mb="15px">
                <Icon as ={checkBoxIcon} />
            <Text>International calling and messaging API</Text>
            </HStack>
            

            <HStack mb="15px" >
                <Icon as ={checkBoxIcon} />
            <Text>Additional phone numbers</Text>
            </HStack>
             

            <HStack mb="15px">
                <Icon as ={checkBoxIcon} />
            <Text>Automated messages via Zapier</Text>
            </HStack>
            

            <HStack mb="15px">
                <Icon as ={checkBoxIcon} />
            <Text>24/7 support and consulting</Text>
            </HStack>
            
            </Box>


            </Flex>
        </Box>
        )
}