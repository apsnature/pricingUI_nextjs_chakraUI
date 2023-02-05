import { Box, HStack, Text, Flex, Icon } from "@chakra-ui/react"
import offerIcon1 from "./icons/offerIcon1"
import offerIcon2 from "./icons/offerIcon2"
import offerIcon3 from "./icons/offerIcon3"

export default function Offers() {
    return (<Box maxW={"800px"} m="auto"  mt="24px" px="50px" >
        <Flex direction={{base:"column", lg:"row"}} ml="50px" >
            <HStack mb="30px">
                <Icon as = {offerIcon1} />
                <Text>30 days money back Guarantee</Text>
            </HStack>


            <HStack mb="30px">
            <Icon as = {offerIcon2} />
                <Text>No setup fees
                    100% hassle-free
                </Text>
            </HStack>


            <HStack mb="30px">
            <Icon as = {offerIcon3} />
                <Text>
                
                    No monthly subscription
                    Pay once and for all
                </Text>
            </HStack>
        </Flex>
    </Box>

    )
}