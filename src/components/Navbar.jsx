import { Box, Flex, Link, Spacer, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <Box bg="blue.500" p={4} color="white">
    <Flex maxW="1200px" mx="auto" align="center">
      <Heading size="md">Social Media Platform</Heading>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" p={2} mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" p={2} mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" p={2} mx={2}>
          Contact
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;