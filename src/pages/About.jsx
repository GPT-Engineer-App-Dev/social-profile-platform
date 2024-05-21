import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Our Social Media Platform</Heading>
      <Text fontSize="lg" mb={6}>
        Welcome to our social media platform where you can connect with friends, share updates, and explore new content.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Feature 1: User Profiles</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Feature 2: News Feed</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Feature 3: Messaging</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;