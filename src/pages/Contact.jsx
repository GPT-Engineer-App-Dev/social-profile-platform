import { Box, Text, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <Heading mb={4}>Contact Us</Heading>
    <Text fontSize="lg" mb={6}>
      If you have any questions or feedback, feel free to reach out to us using the form below.
    </Text>
    <Box bg="gray.100" p={10}>
      <VStack spacing={5}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="blue">Submit</Button>
      </VStack>
    </Box>
  </Box>
);

export default Contact;