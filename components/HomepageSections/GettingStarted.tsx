import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { TextUnderline } from '@/components/TextUnderline';

export const GettingStarted = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading as={'h3'} textAlign={'center'} mb={{ base: 14, sm: 16 }}>
          Our <TextUnderline>Web App Development Cycle</TextUnderline>
        </Heading>
        
        <Box bg={'white'}
          rounded={'xl'}
          px={{ base: 4, md: 10 }}
          py={10}
          mb={10}>
          <NextImage
            src='/images/process-style.svg'
            width={1320}
            height={288}
            alt="Our Process"
          />
        </Box>
        
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          align={{ base: 'center', md: 'flex-start' }}>
          <SimpleGrid columns={3} spacingX="40px" spacingY="20px">
            
            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify={'space-between'}
                align={{ base: 'center', md: 'flex-start' }}>
              <NextImage
                src='/images/requirement-gathering.svg'
                width={70}
                height={70}
                alt="Requirement & Analysis"
              />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Requirement & Analysis</Text>
              </Flex>
            </Box>
            
            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify={'space-between'}
                align={{ base: 'center', md: 'flex-start' }}>
                <NextImage
                  src='/images/planning.svg'
                  width={70}
                  height={70}
                  alt="Planning & Wireframe Creation"
                />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Planning & Wireframe Creation</Text>
              </Flex>
            </Box>
            
            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}
                >
                <NextImage
                  src='/images/design.svg'
                  width={70}
                  height={70}
                  alt="Designing"
                />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Designing</Text>
              </Flex>
            </Box>
            
            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}>
                <NextImage
                  src='/images/content-writing.svg'
                  width={70}
                  height={70}
                  alt="Setting Up CMS"
                />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Setting Up CMS</Text>
              </Flex>
            </Box>
            
            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}>
                <NextImage
                  src='/images/choose-best-techniques.svg'
                  width={70}
                  height={70}
                  alt="Migrating Content"
                />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Migrating Content</Text>
              </Flex>
            </Box>
            
            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}>
                <NextImage
                  src='/images/coding.svg'
                  width={70}
                  height={70}
                  alt="Testing and Review"
                />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Testing and Review</Text>
              </Flex>
            </Box>

            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}>
                <NextImage
                  src='/images/testing-review-and-launch.svg'
                  width={70}
                  height={70}
                  alt="Deploying"
                />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Deploying</Text>
              </Flex>
            </Box>

            <Box bg={'white'}
              rounded={'xl'}
              px={{ base: 4, md: 10 }}
              py={10}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}>
                <NextImage
                  src='/images/maintenance.svg'
                  width={70}
                  height={70}
                  alt="Maintenance"
                />
                <Text fontWeight={700} fontSize="xl" marginLeft={4}>Maintenance</Text>
              </Flex>
            </Box>
          
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};
