import {
  Stack,
  Box,
  Container,
  SimpleGrid,
  Tag,
  BoxProps,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  PopoverContent,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { NAV_ITEMS, NavItem } from '@/components/Header/navData';
import { ChevronRightIcon } from '@chakra-ui/icons';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const DesktopNav = (props: BoxProps) => {
  return (
    <Stack direction={'row'} spacing={4}>
      
      <Box>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href={'#'}
              fontSize={'sm'}
              fontWeight={500}
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                textDecoration: 'underline',
                color: useColorModeValue('gray.800', 'white'),
              }}>
              Services
            </Link>
          </PopoverTrigger>

            <PopoverContent
              border={0}
              boxShadow={'xl'}
              bg={useColorModeValue('white', 'gray.800')}
              p={4}
              rounded={'xl'}
              minW={'lg'}>
              <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                  <Stack align={'flex-start'}>
                    <ListHeader>Product</ListHeader>
                    <Link href={'#'}>Overview</Link>
                    <Stack direction={'row'} align={'center'} spacing={2}>
                      <Link href={'#'}>Features</Link>
                      <Tag
                        size={'sm'}
                        bg={useColorModeValue('green.300', 'green.800')}
                        ml={2}
                        color={'white'}>
                        New
                      </Tag>
                    </Stack>
                    <Link href={'#'}>Tutorials</Link>
                    <Link href={'#'}>Pricing</Link>
                    <Link href={'#'}>Releases</Link>
                  </Stack>
                  <Stack align={'flex-start'}>
                    <ListHeader>Company</ListHeader>
                    <Link href={'#'}>About Us</Link>
                    <Link href={'#'}>Press</Link>
                    <Link href={'#'}>Careers</Link>
                    <Link href={'#'}>Contact Us</Link>
                    <Link href={'#'}>Partners</Link>
                  </Stack>
                  <Stack align={'flex-start'}>
                    <ListHeader>Legal</ListHeader>
                    <Link href={'#'}>Cookies Policy</Link>
                    <Link href={'#'}>Privacy Policy</Link>
                    <Link href={'#'}>Terms of Service</Link>
                    <Link href={'#'}>Law Enforcement</Link>
                    <Link href={'#'}>Status</Link>
                  </Stack>
                  <Stack align={'flex-start'}>
                    <ListHeader>Follow Us</ListHeader>
                    <Link href={'#'}>Facebook</Link>
                    <Link href={'#'}>Twitter</Link>
                    <Link href={'#'}>Dribbble</Link>
                    <Link href={'#'}>Instagram</Link>
                    <Link href={'#'}>LinkedIn</Link>
                  </Stack>
                </SimpleGrid>
              </Container>
            </PopoverContent>
        </Popover>
      </Box>
  
      <Box>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href={'#'}
              fontSize={'sm'}
              fontWeight={500}
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                textDecoration: 'underline',
                color: useColorModeValue('gray.800', 'white'),
              }}>
              Technologies
            </Link>
          </PopoverTrigger>

          <PopoverContent
            border={0}
            boxShadow={'xl'}
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            rounded={'xl'}
            minW={'lg'}>
            <Container as={Stack} maxW={'container.lg'} py={10}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={'flex-start'}>
                  <ListHeader>Frontend</ListHeader>
                  <Link href={'#'}>HTML5</Link>
                  <Link href={'#'}>CSS3</Link>
                  <Link href={'#'}>JavaScript</Link>
                  <Link href={'#'}>ReactJS</Link>
                  <Link href={'#'}>VueJS</Link>
                  <Link href={'#'}>AngularJS</Link>
                </Stack>
                <Stack align={'flex-start'}>
                  <ListHeader>Backend</ListHeader>
                  <Link href={'#'}>PHP</Link>
                  <Link href={'#'}>NodeJS</Link>
                  <Link href={'#'}>.NET</Link>
                  <Link href={'#'}>C#</Link>
                  <Link href={'#'}>.NET Core</Link>
                </Stack>
                <Stack align={'flex-start'}>
                  <ListHeader>Mobile</ListHeader>
                  <Link href={'#'}>Android</Link>
                  <Link href={'#'}>iOS</Link>
                  <Link href={'#'}>Swift</Link>
                  <Link href={'#'}>Flutter</Link>
                  <Link href={'#'}>React Native</Link>
                  <Link href={'#'}>Ionic</Link>
                  <Link href={'#'}>Xamarin</Link>
                </Stack>
                <Stack align={'flex-start'}>
                  <ListHeader>Database</ListHeader>
                  <Link href={'#'}>MySQL</Link>
                  <Link href={'#'}>SQL Server</Link>
                  <Link href={'#'}>MongoDB</Link>
                  <Link href={'#'}>SQLite</Link>
                  <Link href={'#'}>DynamoDB</Link>
                  <Link href={'#'}>Firebase</Link>
                </Stack>
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={'flex-start'}>
                  <ListHeader>Frameworks</ListHeader>
                  <Link href={'#'}>Laravel</Link>
                  <Link href={'#'}>CodeIgniter</Link>
                  <Link href={'#'}>Ruby On Rails</Link>
                  <Link href={'#'}>NextJS</Link>
                  <Link href={'#'}>NestJS</Link>
                  <Link href={'#'}>NuxtJS</Link>
                </Stack>
                <Stack align={'flex-start'}>
                  <ListHeader>CMS</ListHeader>
                  <Link href={'#'}>WordPress</Link>
                  <Link href={'#'}>Joomla</Link>
                  <Link href={'#'}>Kentico</Link>
                  <Link href={'#'}>DotNetNuke</Link>
                </Stack>
                <Stack align={'flex-start'}>
                  <ListHeader>Ecommerce</ListHeader>
                  <Link href={'#'}>WooCommerce</Link>
                  <Link href={'#'}>Magento</Link>
                  <Link href={'#'}>Shopify</Link>
                  <Link href={'#'}>PrestaShop</Link>
                  <Link href={'#'}>OpenCart</Link>
                  <Link href={'#'}>Kentico</Link>
                </Stack>
                <Stack align={'flex-start'}>
                  <ListHeader>Cloud</ListHeader>
                  <Link href={'#'}>AWS</Link>
                  <Link href={'#'}>Google Cloud</Link>
                  <Link href={'#'}>Azure</Link>
                </Stack>
              </SimpleGrid>
            </Container>
          </PopoverContent>
        </Popover>
      </Box>

      <Box>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href={'#'}
              fontSize={'sm'}
              fontWeight={500}
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                textDecoration: 'underline',
                color: useColorModeValue('gray.800', 'white'),
              }}>
              About Us
            </Link>
          </PopoverTrigger>
        </Popover>
      </Box>

      <Box>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href={'#'}
              fontSize={'sm'}
              fontWeight={500}
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                textDecoration: 'underline',
                color: useColorModeValue('gray.800', 'white'),
              }}>
              Blog
            </Link>
          </PopoverTrigger>
        </Popover>
      </Box>

    </Stack>
  );
};

