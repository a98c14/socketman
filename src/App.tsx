import * as React from "react";
import { ChakraProvider, Box, theme, Center, Input, Button, Flex, Text, Heading } from "@chakra-ui/react";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Center w="100vw" h="100vh">
            <Flex borderRadius="md" w="90%" h="90%" bg="gray.100" p="2">
                <Flex w="100%" direction="column" m="2" gridGap="2">
                    <Flex w="100%" gridGap="2">
                        <Input name="message" colorScheme="gray" bg="gray.300" placeholder="Enter message here" />
                        <Button colorScheme="green">Send</Button>
                    </Flex>
                    <Flex bg="gray.400" borderRadius="md">
                        <Heading size="md" m="1">
                            Received Messages
                        </Heading>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    </ChakraProvider>
);
