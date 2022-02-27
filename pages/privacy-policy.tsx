
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
                        Privacy Policy
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            This Privacy Policy describes Divyarth Infotech. (“Divyarth”, “We”, “Us” , or “Our” ) protects your privacy when you use Divyarth (the “Divyarth Infotech Service”) which includes the Web site located at www.divyarthinfotech.com (the “Site” ) and all Divyarth Infotech mobile phone applications (“Mobile App” ).
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY ACCESSING OR USING THE SERVICE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS DESCRIBED HEREIN AND ALL TERMS AND CONDITIONS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THE TERMS AND CONDITIONS SET FORTH BELOW, YOU MAY NOT USE THE SOLWIN INFOTECH SERVICE.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            Protecting your privacy and the information you provide us is a top priority for Divyarth Infotech and thus we strive to protect the confidentiality of minutest of your informations. By visiting our Website, you are accepting the practices described in this Privacy Policy and are bound by it. Any information submitted to Divyarth Infotech, is collected, managed and retained by Divyarth Infotech. Please be aware that your access to our Services may be subject to certain third party terms and conditions and privacy policies, including but not limited to third party payment processors. You agree that Divyarth Infotech is not liable for any such third party terms and conditions and their use of your personal information (information related to you that can identify you). We do not transfer, sell or rent your personal information to third parties in any way other than what is stated in this Privacy Policy. Unless stated otherwise, this Privacy Policy only deals with the use and communication of information collected by Divyarth Infotech. If you do not agree to our Policy please do not use the Site.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>
                            The What & How Of Information We Collect
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            In order to use this Web site, become an affiliate, or reseller, you must first complete the registration form. In order to register, users are required to give us contact information (e.g., your name and email address), unique identifiers (e.g., your password), and demographic information (e.g., your zip code) preferences, interests, information relevant to customer surveys and/or offers. Certain information, such as passwords and email addresses, is collected in order to verify your identity and for use in our records. We use this information to contact you about the services or product on our website in which you have expressed interest and communicate with you regarding your order details. If you decide to purchase any of our products or services, Our company will need to collect certain information, such as your billing address. Billing Address that is collected is used to bill you for products and services, and for other purposes. We use the affiliate and reseller information to provide you with an account so that you may manage it online as well as bill you for the services in which you have requested.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            With your permission (on download or in the app), we may access and store your device’s contact list to find your friends on the Divyarth Infotech Service, to invite them, or to share your Content with them. We may also collect information about others if you use the Divyarth Infotech Service to upload, share and/or distribute Content that contains information about them, including their name, image and online contact information.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            Only registered Users may purchase products (themes, plugin, extensions, add-on, or any software module or tools) on our Website. Once you are registered, you have your own account (“Account”). You may login to your Account with your username and password. You are responsible for maintaining the security of your password and Account. You are fully responsible for all activities that occur under this Account and any other actions taken in connection with this Account. You must immediately notify Divyarth Infotech of any unauthorized uses of your Account or any other breaches of security. Divyarth Infotech will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. During the sign-up process, you may also select the option of receiving email offers from us.
                        </Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            You have the obligation to state truthfully, accurately and completely your up-to-date personal information in the registration process and update your account whenever it is needed. If your personal information is not in compliance with these provisions or if Divyarth Infotech has reasonable suspicions that your personal information is not in accordance with these provisions, Divyarth Infotech has the rights to reject your application for registration or to suspend or terminate immediately your Account, irrespectively of any notice, any use, current or future. In this case, you have no right to any refund for the suspension or termination of your Account.
                        </Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            Divyarth Infotech is the sole owner of the information collected on this site. Divyarth Infotech collects personally identifiable information from our visitors or users at several different points on our Website.
                        </Text>
                        
                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>
                            Use And Disclosure Of Personal Information
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            We use customer contact information from the registration form to send you our product or services information via email. Unless you ask us not to, we may contact you via email to tell you about specials, new products or services. Your contact information is also used to contact you when necessary for any questions. We may use your IP address to help protect our partners and us from fraud.
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            We partner with third-party advertising networks to either display advertising on our Website or to manage our advertising on other sites. These ad network partners do not collect and do not have access to any personally identifiable information. They may, however, anonymously track your internet usage as per Cookies Policy.
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            Divyarth Infotech uses website navigation data to operate and improve the Website. Divyarth Infotech may also use website navigation data alone or in combination with your personal information to provide aggregated information about Divyarth Infotech. We store all the information that is tracked through standard Google Analytics but we do not save this information on our databases.
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            We value your privacy and follow a strict “no-spam” policy! We never give, lease, sell or otherwise disclose your personal information, except under the following circumstances:
                            If a governmental agency, or an attorney, subpoenas your private information, or makes a formal request for discovery pursuant to any legal action, or pending legal action.
                            We need to respond to subpoenas, court orders or such other legal process
                            If our attorney requests such information relevant to a current or pending legal matter in which you are a potential or actual party or otherwise contributed in some way to the causation of the legal matter.
                        </Text>

                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>
                            Security
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            The security of your personal information is important to us. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. Please note that no transmission over the internet can be fully guaranteed in its confidentiality and non-disclosure, and as such, you transmit at your own risk.
                            Only employees who need the information to perform a specific job are granted access to personally identifiable information, such as billing or customer service. The computers and or servers in which we store personally identifiable information are kept in a safe and secure environment.
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4}>
                            You are responsible for maintaining the security and confidentiality of your Account’s username and password.
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            We do not make any personal information available to third parties for their marketing purposes. Divyarth Infotech reserves its right though to share your personal information to a third party in case of sale, merger, control change, reorganization or liquidation of the Company. All such actions shall be completed in compliance with applicable laws of personal data and privacy.
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            We never Collect your Credit Card Information and we never store your credit card information in our database. Our Trusted Payment Partner PAYPAL directly processes your credit card information with Secure Layer.
                        </Text>

                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>
                            Cookies Policy
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            Divyarth Infotech is using cookies to improve your experience of our Website. When you visit our Website, Divyarth Infotech servers send a cookie to your web browser. You can delete these cookies at any time. Standing alone, cookies do not personally identify an individual. Cookies merely recognize the web browser.
                        </Text>
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            Session Cookies: If you are using our Services and you choose to identify yourself to us, Divyarth Infotech uses session cookies containing encrypted information to allow Divyarth Infotech to uniquely identify you. Each time you log into the Services, a session cookie contains an encrypted, unique identifier that is tied to your account and is placed on your browser. These session cookies allow Divyarth Infotech to uniquely identify you when you are logged into the Services and download our products and to process online data transactions and requests. Session cookies are required to use the Services.
                        </Text>

                        <Text fontWeight={700} fontSize={{ md: 'lg' }} mb={4}>
                            DO NOT TRACK
                        </Text>

                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4}>
                            The Divyarth Infotech Services do not currently observe Do Not Track settings.
                        </Text>
                        
                        <Text fontSize={{ md: 'lg' }} mb={4} fontWeight={700}>
                            Changes In This Privacy Policy
                        </Text>
                        
                        <Text color={'gray.500'} fontSize={{ md: 'lg' }} mb={4} textAlign={'justify'}>
                            We reserve the right to change these policies from time to time. When we make a change we will update this page of the Website. Any such changes will be effective immediately from the time they are posted.We recommend that you revisit this page from time to time so as to ensure that you are aware of any changes that we have made to these Policies.
                            If you have any questions about this privacy statement or the practices of this site, please contact us at contact@divyarthinfotech.com.
                        </Text>
                    </Box>
                </Container>
            </main>
        </AppLayout>
    );
};

export default PrivacyPolicy;