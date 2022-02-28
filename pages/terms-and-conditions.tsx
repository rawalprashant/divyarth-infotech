
import * as React from "react";
import { Container, Heading, SimpleGrid, Link, Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { AppLayout } from '@/layout/AppLayout';
import { NextPage } from 'next';
import { TextUnderline } from '@/components/TextUnderline';

const PrivacyPolicy = () => {
    return (
        <AppLayout>
            <main>
                <Container maxW="container.lg" py={150}>
                    <Box>
                        <Heading
                            as="h1"
                            fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                            mb={4}
                        >
                        Terms And Conditions
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>

                        This website “divyarthinfotech.com” will hereafter be referred to as (Divyarthinfotech.com, website, site). This website is owned by Divyarth Infotech and will hereafter be referred to as (we, Divyarth Infotech, Divyarth, Company). Please note that the following terms apply in all instances to anyone who purchases products or downloads material from this website or user services offered by Divyarth infotech website.
                        </Text>
                        <Heading
                            as="u"
                            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                            mb={4}
                        >
                        List Of Terms
                        </Heading>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        1. You are of legal age and are otherwise capable of forming a legally binding contract.                        
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        2. All information you submit to Divyarth Infotech or in connection with our Service is accurate and complete and that you will maintain and promptly update any profile supplied to us to ensure accuracy at all times.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>3. Refunds</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        In the event that you purchase one of our plans or product and you are not satisfied with our Services, you may request a refund up to 30 days following your purchase by sending us an e-mail at contact@divyarthinfotech.com containing your Transaction ID. At the expiration of the 30-day period, you understand and agree that no refunds shall be available.
                        In case of any issues or conflict with your website or theme, you must allow enough time and information to fix the issue, fail to provide such information and without your co-operation it&#39;s not possible to fix issues and in such case refund will not be possible.
                        No refunds will be given except in cases where the purchased product does not perform correctly on your hosting provider&#39;s servers. Such server issues must be reported to us and that we are given reasonable time to attempt to provide a fix, where possible.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>4. Warranty</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        Divyarth Infotech does not warranty or offer any form of guarantee for materials available on this site. We do NOT guarantee that our products will work with all third party extensions. Nor do we guarantee that they will function or appear the same in all web browsers. Divyarth Infotech cannot under any circumstance be held liable for the loss of data or profit arising from the use of materials from this website. Divyarth Infotech cannot under any circumstance be held liable for the loss of data or profit arising from the inability to use materials from this website.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>5. Assignability</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        You may not sub-license, assign, or transfer your license to anyone else without prior written consent from Divyarth Infotech.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>6. License Types And Product Usage</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        Our products, including, but not limited to, themes and plugins, are created to be used by end users, including, but not limited to, designers, bloggers and developers for final work (personal and client websites). You can see what every license comes with on the Pricing Page or readme.txt file. All our WordPress plugins & WordPress themes are licensed under the GNU general public license unless otherwise mentioned.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>7. Support</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        Divyarth Infotech&#39;s subscription memberships, annual memberships and products come with unlimited support for product features for the period of 1 year or active membership or active duration. That support may come through any form of communication offered by Divyarth Infotech, which may include but is not limited to: forms, forums, support tickets and email. We mainly provide technical support for Divyarth Infotech products through our Support portal. The available forms of support will be outlined on the support tab in the member dashboard, which is available to active members.
                        Support will not be provided for third-party plugins/modules/extensions. Support will not be provided for customization of theme layout beyond those customization options introduced by the theme through the theme options panels or post-meta options on post/page (custom post-type) editors. We provide paid customization services (subject to feasibility). Please submit your requests for customization on default coding or CSS via email to contact@divyarthinfotech.com
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>8. Download</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        After we have successfully received your payment, your order information will be emailed to the address. It normally happened within minutes. If you do not receive this information in 24 hours from your completed order process please contact us contact@divyarthinfotech.com. With this information you can access the download section to download our products and access our forums.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        9. Our WordPress themes and plugins are released under the GNU Public License.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        10. Our Magento Themes and extensions are released under Following licensing terms:
                        Divyarth Infotech grants you the following regular license to use the products (the “products”). The Products Sold through our website with these Terms and Conditions (the “license”) issued by Divyarth Infotech, as follows:
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>Regular License:</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        Regular License means these products may be bought by other people after you purchase that. It is also a developer license that includes Photoshop files. If you purchase products at Regular License, then you may be granted use on a single domain. You are able to use each individual product on any website, belonging to either you or your client. You can modify template or plugin as per your requirement but can not resell our products.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        11. Raw design files (such as: PSD, AI, EPS), which may be available to members, are licensed under the Divyarth Infotech Distribution License for Personal Use. You may not redistribute these files in any form without express permission from Divyarth Infotech.
                        For licensing information, please read through our license section for related products.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>12. Browser Compatibility</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        While we make all efforts to provide the widest range of browser compatibility, Divyarth Infotech does not guarantee that all products available on this site will function or appear the same in all web browsers.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>13. Non-Permitted Use Of Our Services</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        The following actions/activities are not permitted on our Website:
                        Content: You may not use any of our themes / product in a way that infringes any third party right or violates any law or contractual duty;
                        Fraud / unlawful use: You may not use our Website for any unlawful purposes or to conduct illegal activities;
                        Multiple accounts: To prevent fraud and abuse, Users are limited to one active account. Any additional account determined to be created to circumvent guidelines, promote competitive advantages, or mislead the Divyarth Infotech community will be disabled. Mass account creation may result in disabling of all related accounts. Note: any violations to Divyarth Infotehch&#39;s Terms and Conditions is cause for permanent suspension of all accounts
                        Selling accounts: You may not buy or sell Divyarth Infotech accounts;
                        You agree that you will not use any robot, spider, scraper or other automated means to access the Website for any purpose without our express written permission.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>14. Your Account&#39;s Security</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        You are responsible for maintaining the security of your Account. You must immediately notify us of any unauthorized uses of your Account or any other breaches of security. If you have a suspicion that someone has unauthorized access to your Account, you must immediately notify us at contact@divyarthinfotech.com. You will shortly after receive a confirmation from our support department that they are handling the issue. Any attempt at unauthorized access (i.e. hacking) to the Website or any of our servers is illegal and will be prosecuted. We are entitled to block or close your Account if such unauthorized access happens through your Account or with the use of your passwords.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        15. You must be over 18 years old in order to use our Services. Our Services are offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies and procedures that may be published from time to time on this site by Divyarth Infotech.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        16. Materials displayed on the Site are either the property of, or used with permission by Divyarth Infotech. The use of these materials by you or anyone else authorized by you is prohibited unless expressly permitted by these Terms and Conditions or express written permission is obtained from Divyarth Infotech. Any unauthorized use of the images may violate copyright laws, trademark laws, the laws of privacy and publicity.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>17. Applicable Law</Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        Customer understands that for all disputes, with regard to any of our services or any term listed in this policy, the only jurisdiction that shall be used in determining liability is the court situated in Surat, India. This Agreement, and the respective rights and obligations of the parties hereunder shall be governed by the laws of the State of Gujarat without regard to conflict of law principles.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                        18. We reserve the right to change or modify these Terms and Conditions without prior notice. Since you are bound by these Terms and conditions, please visit this page regularly, to learn about the revised Terms and Conditions if any.
                        </Text>
                    </Box>
                </Container>
            </main>
        </AppLayout>
    );
};

export default PrivacyPolicy;