import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to Our Social Media Platform</Heading>
        <Text fontSize="xl">Connect with friends, share updates, and explore new content.</Text>
        <Button as={RouterLink} to="/about" colorScheme="blue" size="lg">Learn More</Button>
      </VStack>
    </Container>
  );
};

export default Index;