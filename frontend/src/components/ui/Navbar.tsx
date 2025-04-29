import { Button, Container, Flex, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io"

const Navbar = () => {
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDirection={{ base: "column", sm: "row" }}
            >
                <Text
                    fontSize={{ base: "4xl", sm: "3xl" }}
                    textTransform={"uppercase"}
                    bgClip={"text"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, #2B6CB0,rgb(87, 0, 228))"}
                    letterSpacing={"widest"}
                    
                >
                    <Link href={"/"}>Product Store 🛒</Link>
                </Text>

                <HStack gap={2} alignItems={"center"} mt={{ base: 4, sm: 0 }}>
                    <Link href={"/"}>
                        <Button><FaHome /></Button>
                    </Link>

                    <Link href={"/create"}>
                        <Button><IoIosAddCircle/></Button>
                    </Link>
                </HStack>

            </Flex>
        </Container>

    )
}

export default Navbar
