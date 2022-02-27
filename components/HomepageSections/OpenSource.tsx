import {
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  Icon,
  SimpleGrid,
  Wrap,
  WrapItem,
  Link,
  Tooltip,
  Flex,
  useColorModeValue,
  Box,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import NextImage from 'next/image';

import { TextUnderline } from '@/components/TextUnderline';

export const OpenSource = () => {

  return (
    <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
      
      <Heading as={'h3'} textAlign={'center'} mb={{ base: 14, sm: 16 }}>
        <TextUnderline>Technologies and Platforms We Use</TextUnderline>
      </Heading>
      
      <Tabs>
        <TabList>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>CMS</Tab>
          <Tab>Ecommerce</Tab>
          <Tab>Frameworks</Tab>
          <Tab>Database</Tab>
          <Tab>Mobile</Tab>
          <Tab>Cloud</Tab>
        </TabList>
        
        <TabPanels p='2rem'>
          <TabPanel>
            <SimpleGrid>
              <HStack>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frontend/html5.svg'
                    width={75}
                    height={75}
                    alt="HTML5"
                  />
                  <Text fontSize="md" textAlign={'center'}>HTML5</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frontend/css3.svg'
                    width={75}
                    height={75}
                    alt="CSS3"
                  />
                  <Text fontSize="md" textAlign={'center'}>CSS3</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frontend/javascript.svg'
                    width={75}
                    height={75}
                    alt="JavaScript"
                  />
                  <Text fontSize="md" textAlign={'center'}>JavaScript</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frontend/reactjs.svg'
                    width={75}
                    height={75}
                    alt="React JS"
                  />
                  <Text fontSize="md" textAlign={'center'}>React JS</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frontend/vuejs.svg'
                    width={75}
                    height={75}
                    alt="Vue JS"
                  />
                  <Text fontSize="md">Vue JS</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frontend/angular.svg'
                    width={75}
                    height={75}
                    alt="Angular"
                  />
                  <Text fontSize="md" textAlign={'center'}>Angular</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
              <SimpleGrid>
                <HStack>
                  <Box shadow='md' borderWidth='1px' p={5}>
                    <NextImage
                      src='/images/backend/php.svg'
                      width={75}
                      height={75}
                      alt="PHP"
                    />
                    <Text fontSize="md" textAlign={'center'}>PHP</Text>
                  </Box>
                  <Box shadow='md' borderWidth='1px' p={5}>
                    <NextImage
                    src='/images/backend/nodejs.svg'
                      width={75}
                      height={75}
                      alt="Node JS"
                    />
                    <Text fontSize="md" textAlign={'center'}>Node JS</Text>
                  </Box>
                  <Box shadow='md' borderWidth='1px' p={5}>
                    <NextImage
                      src='/images/backend/dotnet.svg'
                      width={75}
                      height={75}
                      alt=".NET"
                    />
                    <Text fontSize="md" textAlign={'center'}>.NET</Text>
                  </Box>
                  <Box shadow='md' borderWidth='1px' p={5}>
                    <NextImage
                      src='/images/backend/dotnet-core.svg'
                      width={75}
                      height={75}
                      alt=".NET Core"
                    />
                    <Text fontSize="md" textAlign={'center'}>.NET Core</Text>
                  </Box>
                  <Box shadow='md' borderWidth='1px' p={5}>
                    <NextImage
                    src='/images/backend/c-sharp.svg'
                      width={75}
                      height={75}
                      alt="C#"
                    />
                  <Text fontSize="md" textAlign={'center'}>C#</Text>
                  </Box>
                </HStack>
              </SimpleGrid>
            </TabPanel>
          
          <TabPanel>
            <SimpleGrid>
              <HStack>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/cms/wordpress.svg'
                    width={75}
                    height={75}
                    alt="WordPress"
                  />
                  <Text fontSize="md" textAlign={'center'}>WordPress</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/cms/joomla.svg'
                    width={75}
                    height={75}
                    alt="Joomla"
                  />
                  <Text fontSize="md" textAlign={'center'}>Joomla</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/cms/kentico.svg'
                    width={75}
                    height={75}
                    alt="Kentico"
                  />
                  <Text fontSize="md" textAlign={'center'}>Kentico</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/cms/dnn.svg'
                    width={75}
                    height={75}
                    alt="DotNetNuke"
                  />
                  <Text fontSize="md" textAlign={'center'}>DotNetNuke</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <SimpleGrid>
              <HStack>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/ecommerce/woocommerce.svg'
                    width={75}
                    height={75}
                    alt="WooCommerce"
                  />
                  <Text fontSize="md" textAlign={'center'}>WooCommerce</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/ecommerce/magento.svg'
                    width={75}
                    height={75}
                    alt="Magento"
                  />
                  <Text fontSize="md" textAlign={'center'}>Magento</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/ecommerce/shopify.svg'
                    width={75}
                    height={75}
                    alt="Shopify"
                  />
                  <Text fontSize="md" textAlign={'center'}>Shopify</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/ecommerce/prestashop.svg'
                    width={75}
                    height={75}
                    alt="PrestaShop"
                  />
                  <Text fontSize="md" textAlign={'center'}>PrestaShop</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/ecommerce/opencart.svg'
                    width={75}
                    height={75}
                    alt="OpenCart"
                  />
                  <Text fontSize="md" textAlign={'center'}>OpenCart</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/ecommerce/kentico.svg'
                    width={75}
                    height={75}
                    alt="Kentico"
                  />
                  <Text fontSize="md" textAlign={'center'}>Kentico</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <SimpleGrid>
              <HStack>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frameworks/laravel.svg'
                    width={75}
                    height={75}
                    alt="Laravel"
                  />
                  <Text fontSize="md" textAlign={'center'}>Laravel</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frameworks/codeigniter.svg'
                    width={75}
                    height={75}
                    alt="CodeIgniter"
                  />
                  <Text fontSize="md" textAlign={'center'}>CodeIgniter</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frameworks/nextjs.svg'
                    width={75}
                    height={75}
                    alt="Next.js"
                  />
                  <Text fontSize="md" textAlign={'center'}>Next.js</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frameworks/nestjs.svg'
                    width={75}
                    height={75}
                    alt="NestJS"
                  />
                  <Text fontSize="md" textAlign={'center'}>NestJS</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/frameworks/nuxt.svg'
                    width={75}
                    height={75}
                    alt="Nuxt JS"
                  />
                  <Text fontSize="md" textAlign={'center'}>Nuxt JS</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <SimpleGrid>
              <HStack>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/database/mysql.svg'
                    width={75}
                    height={75}
                    alt="MySQL"
                  />
                  <Text fontSize="md" textAlign={'center'}>MySQL</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/database/microsoft-sql-server.svg'
                    width={75}
                    height={75}
                    alt="SQL Server"
                  />
                  <Text fontSize="md" textAlign={'center'}>SQL Server</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/database/sqlite.svg'
                    width={75}
                    height={75}
                    alt="SQLite"
                  />
                  <Text fontSize="md" textAlign={'center'}>SQLite</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/database/mongodb.svg'
                    width={75}
                    height={75}
                    alt="MongoDB"
                  />
                  <Text fontSize="md" textAlign={'center'}>MongoDB</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/database/aws-dynamodb.svg'
                    width={75}
                    height={75}
                    alt="DynamoDB"
                  />
                  <Text fontSize="md" textAlign={'center'}>DynamoDB</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/database/firebase.svg'
                    width={75}
                    height={75}
                    alt="Firebase"
                  />
                  <Text fontSize="md" textAlign={'center'}>Firebase</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <SimpleGrid>
              <HStack>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/mobile/android.svg'
                    width={75}
                    height={75}
                    alt="Android"
                  />
                  <Text fontSize="md" textAlign={'center'}>Android</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/mobile/ios.svg'
                    width={75}
                    height={75}
                    alt="iOS"
                  />
                  <Text fontSize="md" textAlign={'center'}>iOS</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/mobile/swift.svg'
                    width={75}
                    height={75}
                    alt="Swift"
                  />
                  <Text fontSize="md" textAlign={'center'}>Swift</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/mobile/react-native.svg'
                    width={75}
                    height={75}
                    alt="React Native"
                  />
                  <Text fontSize="md" textAlign={'center'}>React Native</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/mobile/flutter.svg'
                    width={75}
                    height={75}
                    alt="Flutter"
                  />
                  <Text fontSize="md" textAlign={'center'}>Flutter</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/mobile/ionic.svg'
                    width={75}
                    height={75}
                    alt="Ionic"
                  />
                  <Text fontSize="md" textAlign={'center'}>Ionic</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/mobile/xamarin.svg'
                    width={75}
                    height={75}
                    alt="Xamarin"
                  />
                  <Text fontSize="md" textAlign={'center'}>Xamarin</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <SimpleGrid>
              <HStack>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/cloud/aws.svg'
                    width={75}
                    height={75}
                    alt="AWS"
                  />
                  <Text fontSize="md" textAlign={'center'}>AWS</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/cloud/google-cloud.svg'
                    width={75}
                    height={75}
                    alt="Google Cloud"
                  />
                  <Text fontSize="md" textAlign={'center'}>Google Cloud</Text>
                </Box>
                <Box shadow='md' borderWidth='1px' p={5}>
                  <NextImage
                    src='/images/cloud/azure.svg'
                    width={75}
                    height={75}
                    alt="Azure"
                  />
                  <Text fontSize="md" textAlign={'center'}>Azure</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </Container>
  );
};
