import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaUpload, FaStar, FaSmile } from "react-icons/fa";

const features = [
  {
    title: "Easy Upload",
    text: "Upload your dog photos with just a few clicks.",
    icon: FaUpload,
  },
  {
    title: "Expert Reviews",
    text: "Our team of dog experts will review your photos and provide feedback.",
    icon: FaStar,
  },
  {
    title: "Fun and Engaging",
    text: "Share your love for dogs with our community and have fun!",
    icon: FaSmile,
  },
];

const Index = () => {
  return (
    <Box>
      <Container maxW={"5xl"}>
        <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            Get Your Dog Photos{" "}
            <Text as={"span"} color={"orange.400"}>
              Reviewed
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Upload your favorite dog photos and have them reviewed by our team of experts. Join our community of dog lovers and share your passion for man's best friend!
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button rounded={"full"} px={6} colorScheme={"orange"} bg={"orange.400"} _hover={{ bg: "orange.500" }}>
              Get Started
            </Button>
            <Button rounded={"full"} px={6}>
              Learn More
            </Button>
          </Stack>
          <Image src="https://images.unsplash.com/photo-1615751072497-5f5169febe17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZG9nfGVufDB8fHx8MTcxMTM2NTcyM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cute Dog" borderRadius="lg" width="80%" height="auto" />
        </Stack>

        <Box p={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {features.map((feature) => (
              <Stack key={feature.title} align={"center"}>
                <Icon as={feature.icon} w={10} h={10} color="orange.400" />
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
