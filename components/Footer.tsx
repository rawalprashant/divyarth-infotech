import {
  Container,
  Icon,
  Box,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { data } from '../data';
import {
  ANALYTICS_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  FIGMA_LINK,
  CONTRIBUTORS_LINK,
  TWITTER_LINK_ACHIM,
  BUY_ME_A_COFFEE_LINK,
} from '../constants';
import { Logo } from '@/components/Logo';
import { ReactNode } from 'react';

const SOCIAL_LINKS = [
  {
    label: 'Discord Community',
    href: DISCORD_INVITE_LINK,
  },
  {
    label: 'GitHub Repository',
    href: GITHUB_LINK,
  },
  {
    label: 'Twitter Account',
    href: TWITTER_LINK,
  },
  {
    label: 'Figma Design Resources',
    href: FIGMA_LINK,
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Get in Touch</ListHeader>
            <Text fontSize={'md'}>
              Divyarth Infotech - Web Design & Development Company | Mobile App Development India
            </Text>
            <Text fontWeight={'500'} fontSize={'md'}>Address</Text>
            <Text fontSize={'md'}>
              1, Shri Krushna Society
              Fatepura Road, Nadiad – 387001, Gujarat, INDIA
            </Text>
            
            <Text fontWeight={'500'} fontSize={'md'}>E-mail</Text>
            <Text fontSize={'md'}>
              contact@divyarthinfotech.com
              divyarthinfotech@gmail.com
            </Text>
            <Text fontWeight={'500'} fontSize={'md'}>WhatsApp</Text>
            <Text fontSize={'md'}>(+91) 9033724396</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href='/privacy-policy'>Privacy Policy</Link>
            <Link href='/terms-and-conditions'>Terms of Service</Link>
            <Link href={ANALYTICS_LINK}>Public Statistics</Link>
            <Link href="https://splitbee.io?ref=chakratemplates">
              <NextImage
                src={useColorModeValue(
                  'https://splitbee.io/splitbee-badge.svg',
                  'https://splitbee.io/splitbee-badge-dark.svg'
                )}
                width={114}
                height={45}
                alt="Splitbee Analytics"
              />
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support us</ListHeader>
            <Link href={BUY_ME_A_COFFEE_LINK}>
              <NextImage
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                height={40}
                width={142.47}
              />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <NextLink href={'/'} passHref>
            <Link>
              <Icon as={Logo} w={{ base: 12 }} h={{ base: 12 }} />
            </Link>
          </NextLink>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Divyarth Infotech - Copyright © 2019. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};