import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Button,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { TextUnderline } from '@/components/TextUnderline';

export const ExploreTemplates = () => {
  return (
    <Box bg={useColorModeValue('green.50', 'gray.800')}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>

        <Heading as={'h3'} textAlign={'center'} mb={{ base: 4, sm: 6 }}>
          <TextUnderline>Kind of Apps</TextUnderline>
        </Heading>
        <Text textAlign={'center'} mb={8} fontSize={'xl'}>Here, We make almost every genre of applications.</Text>

        <SimpleGrid columns={5} spacing={10}>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/healthcare.svg'
                width={85}
                height={90}
                alt="Healthcare Industry"
              />
              <Text fontWeight={700} fontSize="lg">Healthcare Industry</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/fitness.svg'
                width={85}
                height={90}
                alt="Fitness & Health"
              />
              <Text fontWeight={700} fontSize="lg">Fitness & Health</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/ondemand.svg'
                width={85}
                height={90}
                alt="On-Demand Service"
              />
              <Text fontWeight={700} fontSize="lg">On-Demand Service</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/education.svg'
                width={85}
                height={90}
                alt="Education"
              />
              <Text fontWeight={700} fontSize="lg">Education</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/beauty.svg'
                width={85}
                height={90}
                alt="Beauty & Fashion"
              />
              <Text fontWeight={700} fontSize="lg">Beauty & Fashion</Text>
            </Box>
          
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/enterprises.svg'
                width={85}
                height={90}
                alt="Enterprises Application"
              />
              <Text fontWeight={700} fontSize="lg">Enterprises Application</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/entertainment.svg'
                width={85}
                height={90}
                alt="Entertainment Program"
              />
              <Text fontWeight={700} fontSize="lg">Entertainment Program</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/retail.svg'
                width={85}
                height={90}
                alt="Retail & E-commerce"
              />
              <Text fontWeight={700} fontSize="lg">Retail & E-commerce</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/social.svg'
                width={85}
                height={90}
                alt="Social Network"
              />
              <Text fontWeight={700} fontSize="lg">Social Network</Text>
            </Box>
            <Box
              maxW={'197px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <NextImage
                src='/images/apps/goverment.svg'
                width={85}
                height={90}
                alt="Government Services"
              />
              <Text fontWeight={700} fontSize="lg">Government Services</Text>
            </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
};
