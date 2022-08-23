/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import Page from '../components/layout/page';

import { Layout } from '@tend/ui';
import { serverSideTranslationsHOF } from '../utils/serverSideTranslationsHOF';

const StyledPrivacyPolicyPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  margin: 5.625rem auto;
  padding: 2rem;
  border-top: 0.75rem solid #000;
  background-color: #ffffff;

  .logo-tend {
    margin-top: 1rem;
  }

  /* Heading */
  h1 {
    margin: 0;
    font-family: 'Pilat Condensed';
    font-size: 5.8125rem;
    line-height: 0.85;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  /* Mobile Overrides */
  @media (max-width: 47.9375em) {
    flex-direction: column;
    align-items: center;
    margin: 1.5rem auto 0;

    h1 {
      font-size: 5rem;
    }
  }
`;

const Privacy = () => {
  const { t } = useTranslation('privacy');
  return (
    <Page title={t('title')} description={t('description')}>
      <Layout bg="offWhite">
        <StyledPrivacyPolicyPage>
          <h1>Privacy Policy</h1>
          <p>
            <strong>LAST UPDATED</strong>
          </p>
          <p>October 29, 2020</p>
          <p>
            <strong>OUR COMMITMENT TO PRIVACY</strong>
          </p>
          <p>
            Tend, a service of GlobeOne, LLC, knows that you care about how your
            personal information is used and shared, and we take your privacy
            seriously. Our primary goal is to provide you with exceptional
            service, and we understand that you may have questions or concerns
            regarding your personal information and how it will be used. This
            Privacy Policy, which includes the Regulation P Privacy Notice (see
            Appendix A) and the California Consumer Privacy Act Notice
            applicable to California residents (Appendix B), is available from
            the home page of the Tend website at{' '}
            <a href="https://tend.money/">tend.money</a> (the "website") and
            through our mobile applications.
          </p>
          <p>
            This Policy and Notice are reviewed at least annually. Tend
            employees receive training on this Policy and Notice upon being
            hired, when any changes are made, and annually. If the Notice
            changes, all current customers must receive revised new Privacy
            Notice (reflecting the new rev. date) at least 30 days prior to the
            effective date of the changes so that you may opt out (if the change
            permits this) or close your account before the information is
            shared.
          </p>
          <p>
            <strong>APPLICABILITY OF PRIVACY POLICY</strong>
          </p>
          <p>
            This privacy policy applies to all nonpublic personal information we
            collect through our Services from current and former Tend users,
            including you. “Services” means any products, content, features,
            technologies, or functions, and all related websites, applications
            and services offered to you by Tend in connection with a Tend
            account. When you are no longer our customer, we continue to share
            your information as described in this policy. This policy only
            applies to the Tend Services and does not apply to any other
            practices of any other GlobeOne LLC company.
          </p>
          <p>
            Under the law, the Tend is permitted to disclose nonpublic personal
            information about our customers to unaffiliated third parties under
            specific exceptions stated in Regulation P. These exceptions include
            sharing with Government entities in response to Subpoenas for
            Records, Attachments and/or Garnishments Orders served upon us by
            any Court of Law, responding to Levies from State Governments or the
            Internal Revenue Service; reporting payment and credit information
            related to the consumer’s transaction to the Credit Bureaus; sharing
            information in order to carry out the requested transaction or
            product; providing information to Legal Counsel, Accountants,
            Auditing and Consulting firms, Regulatory Agencies and as otherwise
            required as a part of being a partner with a depository financial
            institution. WE DO NOT DISCLOSE ANY NONPUBLIC PERSONAL INFORMATION
            ABOUT OUR CUSTOMERS TO ANYONE, <u>EXCEPT AS</u>{' '}
            <u>PERMITTED BY LAW</u>. Because of our policy of how we share
            customer nonpublic personal information, we do not provide any
            customer Opt Out for sharing as part of our Privacy Notice.
          </p>
          <p>
            Throughout this policy, we use the term "personal information" to
            describe nonpublic information that can be associated with a
            specific person and can be used to identify that person. We do not
            consider personal information to include information that has been
            aggregated and/or anonymized so that it does not identify a specific
            user.
          </p>
          <p>
            <strong>THE INFORMATION WE COLLECT</strong>
          </p>
          <p>
            When you visit the Tend website or use our mobile applications or
            other Services, we collect your IP address and standard web log
            information, such as your browser type and the pages you accessed on
            our website. We also may collect Geolocation Information (defined
            below). If you do not agree to our collection of this information,
            you may not be able to use our Services.
          </p>
          <p>
            If you open a Tend account, we collect information from you,
            including the following:
          </p>
          <ul>
            <li>
              Account Information - text-enabled cellular/wireless telephone
              number, machine or mobile device ID and other similar information.
            </li>
            <li>
              Identification Information - your name, street address, email
              address, date of birth, and SSN (or other governmental issued
              verification numbers).
            </li>
            <li>
              Device Information - information about you: (a) from your mobile
              device or computer such as your device type, machine or mobile
              device identification number, Geolocation Information, time zone,
              language setting, browser type, and IP address, and (b) from third
              parties for purposes of transaction processing, identity
              verification, fraud detection or prevention and other similar
              purposes. For fraud prevention purposes, we also may link your
              machine ID with the machines of others who use your same payment
              cards.
            </li>
            <li>
              Geolocation Information - information that identifies with
              reasonable specificity your location by using, for instance,
              longitude and latitude coordinates obtained through GPS, Wi-Fi, or
              cell site triangulation. We will collect this data for fraud and
              risk purposes. In addition, some of our Services may ask you for
              permission to share your current location within your device
              settings to enhance our Services. If you do not agree to our
              collection of Geolocation Information, our Services may not
              function properly when you try to use them. For information about
              your ability to restrict the collection and use of Geolocation
              Information to enhance our Services, please refer to the settings
              available in your device.
            </li>
            <li>
              Social Web Information – including but not limited to Facebook
              information that you authorize that allows us access to your email
              address, Facebook friends list, and public profile (including
              profile picture). We may also allow you to import data from other
              social web services, including but not limited to Twitter, TikTok,
              and email service providers. Social and e-mail contact information
              helps you connect to friends and contacts for invitation and
              payment transmission purposes (as well as helping us improve the
              Services and fight fraud). You may manage or limit certain contact
              preferences and notifications in your account settings.
            </li>
            <li>
              Financial Information - bank account online login information,
              bank account and routing numbers and credit cards linked to your
              Tend account. Tend does not share financial information with third
              party social networking services such as those listed in the prior
              bullet.
            </li>
          </ul>
          <p>
            We are committed to providing a safe, secure and all-around great
            service. Therefore, before permitting you to use the Services, we
            may require additional information from you that we can use to
            verify your identity, address or other information or to manage risk
            and compliance throughout our relationship. We may also obtain
            information about you from third parties such as identity
            verification, fraud prevention and similar services.
          </p>
          <p>
            When you are using the Services, we collect information about your
            account transactions and we may collect Geolocation Information
            and/or information about your computer or other access device for
            fraud prevention and other similar purposes.
          </p>
          <p>
            Finally, we may collect additional information from or about you in
            other ways not specifically described here. For example, we may
            collect information related to your contact with our customer
            support team or store results when you respond to a survey.
          </p>
          <p>
            <strong>INFORMATION FROM CHILDREN</strong>
          </p>
          <p>
            The Services are not directed to children under the age of 13. If we
            obtain actual knowledge that we have collected personal information
            from a child under the age of 13, we will promptly delete it, unless
            we are legally obligated to retain such data. <u>Contact us</u> if
            you believe that we have mistakenly or unintentionally collected
            information from a child under the age of 13.
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            <strong>MEDICAL INFORMATION</strong>
          </p>
          <p>
            On occasion Tend may obtain access to medical information on
            customers. Tend will not share its customers’ medical or health
            information without the written consent of the customer and in
            accordance with HIPAA regulations.
          </p>
          <p>
            <strong>HOW WE USE COOKIES</strong>
          </p>
          <p>
            When you visit or use our Services or visit a third-party website
            for which we provide online services, we and certain business
            partners and vendors may use cookies and other tracking technologies
            (collectively, "Cookies"). We use Cookies to recognize you as a
            customer; customize Services, other content and advertising; measure
            the effectiveness of promotions; perform a wide range of analytics;
            mitigate risk and prevent potential fraud; and to promote trust and
            safety across our Services.
          </p>
          <p>
            Certain Services are only available through the use of Cookies, so
            if you choose to disable or decline Cookies, your use of certain
            Services may be limited or not possible.
          </p>
          <p>
            Do Not Track: Do Not Track ("DNT") is an optional browser setting
            that allows you to express your preferences regarding tracking by
            advertisers and other third parties. We do not respond to DNT
            signals.
          </p>
          <p>
            <strong>HOW WE PROTECT &amp; STORE PERSONAL INFORMATION</strong>
          </p>
          <p>
            We store and process your personal information using third party
            servers located in data centers in the United States. This
            information is protected by physical, electronic and procedural
            safeguards in compliance with applicable US federal and state
            regulations. We also use computer safeguards such as firewalls and
            data encryption, we enforce physical access controls to our office
            and files, and we authorize access to personal information only for
            those employees who require it to fulfill their job
            responsibilities.
          </p>
          <p>
            We strive to ensure security of our systems. Despite our efforts, we
            cannot guarantee that personal information may not be accessed,
            disclosed, altered or destroyed by breach of our administrative,
            managerial and technical safeguards. Therefore, we urge you to take
            adequate precautions to protect your personal data as well,
            including never sharing your Tend password with anyone.
          </p>
          <p>
            If Tend learns of a systems security breach, we may attempt to
            notify you electronically so that you can take appropriate
            protective steps. By using the Services and providing the
            acknowledgement required by the Electronic Signatures in Global and
            National Commerce Act, you agree that Tend may communicate with you
            electronically. Tend may post a notice on the website or mobile
            application if a security breach occurs. We may also send an email
            to you at the email address you have provided to us. You may have a
            legal right to receive notice of a security breach in writing.
          </p>
          <p>
            <strong>HOW WE USE THE PERSONAL INFORMATION WE COLLECT</strong>
          </p>
          <p>
            Our primary purpose in collecting personal information is to provide
            you with a safe, smooth, efficient, fun and customized experience.
            We may use your personal information to:
          </p>
          <ul>
            <li>provide the services and customer support you request;</li>
            <li>
              process transactions and send notices about your transactions or
              your network activity;
            </li>
            <li>resolve disputes, collect fees, and troubleshoot problems;</li>
            <li>
              prevent potentially fraudulent, prohibited or illegal activities,
              and enforce our User Agreement through the use of our risk and
              fraud tools which may include use of Account Information,
              Identification Information, Financial Information, Device
              Information, Social Web Information and Geolocation Information;
            </li>
            <li>
              create an account connection between your Tend account and a
              third-party account or platform;
            </li>
            <li>
              customize, personalize, measure, and improve our services and the
              content and layout of our website;
            </li>
            <li>
              send you updates about new products and services that we are
              offering to customers;
            </li>
            <li>
              compare information for accuracy and verify it with third parties;
            </li>
            <li>perform other duties as required by law; and</li>
            <li>
              if you elect to share your Geolocation Information, we may use
              this information to enhance the security of the Services and we
              may use this information to provide you with location-specific
              options, functionality, offers, advertising, search results, or
              other location-specific content.
            </li>
          </ul>
          <p>
            <strong>
              HOW WE SHARE PERSONAL INFORMATION WITHIN THE TEND NETWORK
            </strong>
          </p>
          <p>
            To process payments on Tend, we need to share some information with
            the person or company that you are paying or that is paying you.
            Your contact information, date of sign-up and other verification
            information may be provided to users or companies when you transact
            with, on, or through Tend.
          </p>
          <p>
            We work with vendors to enable them to accept payments from you
            using Tend. In doing so, a vendor may share information about you
            with us, such as your mobile phone number or Tend username, when you
            attempt to pay that vendor. We use this information to confirm to
            that vendor that you are a Tend customer and that the vendor should
            enable Tend as a form of payment for your purchase.
          </p>
          <p>
            Regardless, we will not disclose your card number, bank account
            number, social security number, tax identification number, or date
            of birth to anyone you have paid or who has paid you through Tend,
            except with your express permission. We are required to comply with
            subpoenas and other forms of legal process.
          </p>
          <p>
            <strong>
              HOW WE SHARE PERSONAL INFORMATION WITH OTHER PARTIES
            </strong>
          </p>
          <p>
            Tend does not share your personal information with third parties for
            their promotional or marketing purposes. We do share your personal
            information with our banking partner in order to jointly market and
            provide the Services to you.
          </p>
          <p>
            Some of your information is public information and may be seen by
            anyone on the internet, whether or not they have a Tend account.
            Public information may also be seen, accessed, reshared or
            downloaded through Tend's APIs or third-party services that
            integrate with our products.
          </p>
          <ul>
            <li>
              Public information for personal profiles includes your Tend
              username, first and last name, month and year of Tend account
              creation, and public transactions in which you've been involved.
            </li>
          </ul>
          <p>
            In addition to any public information, your Tend friends list may be
            seen by any logged-in Tend user.
          </p>
          <p>We may share your personal information with:</p>
          <ul>
            <li>
              Our parent company, GlobeOne LLC, Inc. and affiliates and
              subsidiaries it controls, but only for purposes allowed by this
              document and in accordance with our Privacy Notice (Appendix A).
            </li>
            <li>
              Companies that GlobeOne LLC, Inc. plans to merge with or be
              acquired by. We will require that the new combined entity follow
              this privacy policy with respect to your personal information. If
              your personal information could be used contrary to this policy,
              you will receive prior notice and the opportunity to close your
              account before the information is used.
            </li>
            <li>
              Law enforcement, government officials, or other third parties if
              GlobeOne LLC is compelled to do so by a subpoena, court order or
              similar legal procedure, or where the disclosure of personal
              information is reasonably necessary to prevent physical harm or
              financial loss, to report suspected illegal activity, or to
              investigate violations of the Tend User Agreement, or as otherwise
              required by law.
            </li>
            <li>
              Third party service providers who assist us in providing services
              to you that you requested or who provide fraud detection or
              similar services on our or any vendor’s behalf.
            </li>
            <li>
              Service providers under contract who help with parts of our
              business operations (for example, fraud prevention, payment
              processing, or technology services). Our contracts dictate that
              these service providers only use your information in connection
              with the services they perform for us and not for their own
              benefit.
            </li>
            <li>
              Other third parties with your consent or at your direction to do
              so, including if you authorize an account connection with a
              third-party account or platform.
            </li>
            <ul>
              <li>
                For the purposes of this privacy policy, an "account connection"
                with such a third party is a connection you authorize or enable
                between your Tend account and a non-Tend account, payment
                instrument, or platform that you lawfully control or own. When
                you authorize such a connection, Tend and the third-party will
                exchange your personal information and other information
                directly. Examples of account connections include, without
                limitation: linking your Tend account to a social media account
                or social messaging service; connecting your Tend account to a
                third-party data aggregation or financial services company, if
                you provide such company with your Tend account log-in
                credentials; or using your Tend account to make payments to a
                merchant or allowing a merchant to charge your Tend account.
              </li>
              <li>
                If you connect your Tend account to other financial accounts,
                directly or through a third-party service provider, we may have
                access to your account balance and account and transactional
                information, such as purchases and funds transfers. If you
                choose to create an account connection, we may receive
                information from the third-party about you and your use of the
                third-party’s service. For example, if you connect your Tend
                account to a social media account, we will receive personal
                information from the social media provider via the account
                connection. We will use all such information that we receive
                from a third-party via an account connection in a manner
                consistent with this privacy policy.
              </li>
              <li>
                Information that we share with a third-party based on an account
                connection that you have authorized will be used and disclosed
                by the third-party in accordance with the third-party’s privacy
                practices. Before authorizing an account connection, you should
                review the privacy notice of any third-party that will gain
                access to your personal information as part of the account
                connection. For example, personal information that Tend shares
                with a third-party account or platform such as a social media
                account (per your specific authorization) may in turn be shared
                with certain other parties, including the general public,
                depending on the account’s or platform’s privacy practices.
              </li>
            </ul>
          </ul>
          <p>
            Tend does not send your personal information to third-party social
            networks unless you have specifically requested or authorized us to
            do so. When you broadcast information to such third-party social
            networks, such information is no longer under the control of Tend
            and is outside of this policy and is subject to the terms of use and
            privacy policies of such third parties.
          </p>
          <p>
            <strong>
              HOW YOU CAN ACCESS OR CHANGE YOUR PERSONAL INFORMATION
            </strong>
          </p>
          <p>
            You can review and update your personal information in your account
            settings at any time by logging in to your account.
          </p>
          <p>
            <strong>LINKS TO OTHER SERVICES OR SITES</strong>
          </p>
          <p>
            The Services may contain links to (or allow you to link to) other
            third-party services or websites. Tend does not control the
            information collection of third-party services or websites that can
            be reached through such links. We encourage our users to be aware
            when they are linking to a third-party service or website and to
            read the privacy statements of any third-party service or website
            that collects personally identifiable information. You will be
            warned whenever using a link that you are leaving the Tend website.
          </p>
          <p>
            <strong>CALIFORNIA RESIDENTS</strong>
          </p>
          <p>
            As noted in the Reg P Privacy Notice in Appendix A and as detailed
            in the California Consumer Privacy Act (CCPA) Notice in Appendix B,
            California residents have the right to request certain information.
            Upon request submitted to the phone number or email address listed,
            we will provide the information as specified in the CCPA Notice in
            Appendix B.
          </p>
          <p>
            We do not sell <u>any</u> personal information, regardless of age.
            We have not sold Personal Data of any California residents 15 years
            of age and younger or of any other consumer.
          </p>
          <p>
            <strong>CHANGES TO OUR PRIVACY POLICY</strong>
          </p>
          <p>
            Tend is always improving. As the Services evolve we may occasionally
            update this privacy policy. If we modify this privacy policy, we
            will post the revised privacy policy to the website, and we will
            also revise the "last updated date" stated above. If we make
            material changes in the way we use personal information, we will
            notify you by posting an announcement on our mobile application or
            website or by sending you an e-mail. However, if the changes we make
            change the Privacy Notice below, we will notify you in advance of
            the effective date of the change.
          </p>
          <p>
            <strong>HOW TO CONTACT US</strong>
          </p>
          <p>
            If you have questions or concerns regarding this privacy policy, or
            any feedback pertaining to your privacy and the Services that you
            would like us to consider, please email us at{' '}
            <a href="mailto:privacy@Tend.money">privacy@Tend.money</a>.
          </p>

          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td width="93" height="35">
                  <table cellPadding="0" cellSpacing="0" width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <p>
                              <strong>FACTS</strong>
                              <strong></strong>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Rev. 10/2020</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            <strong>WHAT DOES TEND</strong>
            <strong></strong>
          </p>
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td width="116" height="0"></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <strong>DO WITH YOUR PERSONAL INFORMATION?</strong>
          <table>
            <tbody>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>
                      Reasons we can share your personal information
                    </strong>
                  </p>
                </td>
                <td width="218" valign="top">
                  <p></p>
                  <p>
                    <strong>Does TEND share?</strong>
                  </p>
                </td>
                <td width="192" valign="top">
                  <p></p>
                  <p>
                    <strong>Can you limit this sharing?</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>For our everyday business purposes–</strong>
                  </p>
                  <p>
                    such as to process your transactions, maintain your
                    account(s), respond to court orders and legal
                    investigations, or report to credit bureaus
                  </p>
                </td>
                <td width="218" valign="top">
                  <p></p>
                  <p>Yes</p>
                </td>
                <td width="192" valign="top">
                  <p></p>
                  <p>No</p>
                </td>
              </tr>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>For our marketing purposes–</strong>
                  </p>
                  <p>to offer our products and services to you</p>
                </td>
                <td width="218" valign="top">
                  <p>Yes</p>
                </td>
                <td width="192" valign="top">
                  <p>No</p>
                </td>
              </tr>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>
                      For joint marketing with other financial companies
                    </strong>
                  </p>
                </td>
                <td width="218" valign="top">
                  <p>Yes</p>
                </td>
                <td width="192" valign="top">
                  <p>No</p>
                </td>
              </tr>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>
                      For our affiliates' everyday business purposes–
                    </strong>
                    information about your transactions and experiences
                  </p>
                </td>
                <td width="218" valign="top">
                  <p></p>
                  <p>Yes</p>
                </td>
                <td width="192" valign="top">
                  <p></p>
                  <p>No</p>
                </td>
              </tr>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>
                      For our affiliates' everyday business purposes–
                    </strong>
                  </p>
                  <p>information about your creditworthiness</p>
                </td>
                <td width="218" valign="top">
                  <p>No</p>
                </td>
                <td width="192" valign="top">
                  <p>No</p>
                </td>
              </tr>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>For our affiliates to market to you</strong>
                  </p>
                </td>
                <td width="218" valign="top">
                  <p>No</p>
                </td>
                <td width="192" valign="top">
                  <p>No</p>
                </td>
              </tr>
              <tr>
                <td width="310" valign="top">
                  <p>
                    <strong>For nonaffiliates to market to you</strong>
                  </p>
                </td>
                <td width="218" valign="top">
                  <p>No</p>
                </td>
                <td width="192" valign="top">
                  <p>No</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td width="722">
                  <p>
                    <strong>Who we are</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="144" valign="top">
                  <p>
                    <strong>Who is providing this notice?</strong>
                  </p>
                </td>
                <td width="578" valign="top">
                  <p>
                    This notice is provided by Tend, a service of GlobeOne LLC.,
                    and its affiliates.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td width="720">
                  <p>
                    <strong>What we do</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="144" valign="top">
                  <p>
                    <strong>
                      How does TEND protect my personal information?
                    </strong>
                  </p>
                </td>
                <td width="576" valign="top">
                  <p>
                    To protect your personal information from unauthorized
                    access and use, we use security measures that comply with
                    federal law. These measures include computer safeguards and
                    secured files and buildings.
                  </p>
                </td>
              </tr>
              <tr>
                <td width="144" valign="top">
                  <p>
                    <strong>
                      How does TEND collect my personal information?
                    </strong>
                  </p>
                </td>
                <td width="576" valign="top">
                  <p>
                    We collect your personal information, for example, when you
                  </p>
                  <p>§ open an account or deposit money</p>
                  <p>§ pay your bills or apply for a loan</p>
                  <p>§ use your credit or debit card</p>
                  <p>
                    We also collect your personal information from others, such
                    as credit bureaus or other companies.
                  </p>
                </td>
              </tr>
              <tr>
                <td width="144" valign="top">
                  <p>
                    <strong>Why can't I limit all sharing?</strong>
                  </p>
                </td>
                <td width="576" valign="top">
                  <p>Federal law gives you the right to limit only</p>
                  <p>
                    § sharing for affiliates' everyday business purposes –
                    information about your creditworthiness
                  </p>
                  <p>
                    § affiliates from using your information to market to you
                  </p>
                  <p>§ sharing for nonaffiliates to market to you</p>
                  <p>
                    State laws and individual companies may give you additional
                    rights to limit sharing. See below for more on your rights
                    under state law.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td width="720">
                  <p>
                    <strong>Definitions</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="144" valign="top">
                  <p>
                    <strong>Affiliates</strong>
                  </p>
                </td>
                <td width="576" valign="top">
                  <p>
                    Companies related by common ownership or control. They can
                    be financial and nonfinancial companies.
                  </p>
                  <p>
                    § <em>Tend does not share with our affiliates.</em>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="144" valign="top">
                  <p>
                    <strong>Nonaffiliates</strong>
                  </p>
                </td>
                <td width="576" valign="top">
                  <p>
                    Companies not related by common ownership or control. They
                    can be financial and nonfinancial companies.
                  </p>
                  <p>
                    §
                    <em>
                      Tend does not share with nonaffiliates so they can market
                      to you.
                    </em>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="144" valign="top">
                  <p>
                    <strong>Joint marketing</strong>
                  </p>
                </td>
                <td width="576" valign="top">
                  <p>
                    A formal agreement between nonaffiliated financial companies
                    that together market financial products or services to you.
                  </p>
                  <p>
                    §
                    <em>
                      Our joint marketing partners include Marketing companies
                      and banks that are our banking partner.
                    </em>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Other important information</strong>
          </p>
          <p>
            You may have other privacy protections under applicable state laws.
            To the extent these state laws apply, we will comply with them when
            we share information about you.
          </p>
          <p>
            <strong>For California residents: </strong>
            In accordance with California law, we will not share information we
            collect about you with companies outside of our corporate family,
            except as permitted by law, including, for example with your consent
            or to service your account. We will limit sharing among our
            companies to the extent required by California law. Please see the
            separate notice you are receiving entitled California Consumer
            Privacy Act for a full description of your rights.
          </p>
          <p>
            <strong>For Vermont residents: </strong>
            In accordance with Vermont law, we will not share information we
            collect about you with companies outside of our corporate family,
            except as permitted by law, including, for example with your consent
            or to service your account. We will not share information about your
            creditworthiness within our corporate family except with your
            authorization or consent, but we may share information about our
            transactions or experiences with you within our corporate family
            without your consent.
          </p>

          <br />
          <br />
          <br />
          <br />
          <br />

          <p>
            <strong>
              California Consumer Privacy Act (CCPA) Privacy Policy
            </strong>
            <strong></strong>
          </p>
          <p>
            <strong>
              <u>California residents only.</u>
            </strong>
          </p>
          <p>
            Tend, a service of GlobeOne, LLC (“we”, “our”, or “us”) takes your
            privacy seriously and makes safeguarding your personal information a
            priority. This California Consumer Privacy Act (“CCPA”) Privacy
            Policy applies to California residents and is in addition to the
            information contained in our general Privacy Policy.
          </p>
          <p>
            <u></u>
          </p>
          <p>
            <strong>
              <u>Applicability</u>.{' '}
            </strong>
            The CCPA does not apply to certain information covered by other
            regulations, such as the Gramm-Leach-Bliley Act (“GLBA”), the Fair
            Credit Reporting Act (“FCRA”), and regulations issued by the
            Consumer Financial Protection Bureau (“CFPB”). We collect personal
            information in connection with financial services that are for
            personal, family, or household purposes that are provided by our
            financial institution partners (information subject to the GLBA –
            our financial institution partners provide separate GLBA notices).
          </p>
          <p>
            <strong>SALE OF PERSONAL INFORMATION</strong>
          </p>
          <p>
            We do not sell, rent, transfer, disclose, or otherwise provide
            consumers’ personal information to third parties or other businesses
            for monetary or other valuable consideration. It is not our policy
            to sell personal information, and we have not done so in the past 12
            months.
          </p>
          <p>
            <strong> </strong>
          </p>
          <p>
            <strong>INFORMATION WE COLLECT</strong>
          </p>
          <p>
            We may collect personal information when you enter data into an
            application for new products or services or when you use our
            products and services. Under the CCPA, personal information means
            information that identifies, relates to, describes, is reasonably
            capable of being associated with, or could reasonably be linked,
            directly or indirectly, with a particular consumer or household.
            Personal information may include your name, physical or mailing
            address, tax identification number, date of birth, contact numbers,
            e-mail address(es), biometric information, education, employer,
            occupation, employment history, identification (i.e., driver’s
            license, state ID, passport, employee ID, etc.), commercial
            information (records of personal property, products or services
            purchased, obtained, or considered, or other purchasing or consuming
            histories or tendencies) account numbers, account activity/history,
            or other financial information needed by our financial institution
            partners. Through the use of our website and other services, we may
            gather browsing history, device location, Internet Protocol (IP)
            addresses, and visual, audio, or electronic recordings, and
            inferences drawn from any of the personal information listed above
            to create a profile or summary about, for example, an individual’s
            preferences and characteristics.
          </p>
          <p>
            <strong>HOW INFORMATION IS COLLECTED</strong>
          </p>
          <p>
            We obtain the categories of personal information listed above from
            the following sources:
          </p>
          <p>
            • Directly from you – through our website and mobile apps, or by
            telephone, email, or text – when you interact with us and provide
            information to request products or services.
          </p>
          <p>
            • From service providers we use – to authenticate your identity.
          </p>
          <p>• Indirectly from you – through our website and mobile apps.</p>
          <p>
            • Credit reporting agencies and public record sources (federal,
            state, or local government).
          </p>
          <p>
            • Other third parties you consent to during the use of our website,
            mobile apps, or otherwise to request products or services from us
            (family, employer, etc.).
          </p>
          <p>
            <strong> </strong>
          </p>
          <p>
            <strong>INFORMATION SHARING</strong>
          </p>
          <p>
            We only share your information in accordance with our general
            Privacy Policy.
          </p>
          <p>
            <strong> </strong>
          </p>
          <p>
            <strong>[HOW WE USE INFORMATION</strong>
          </p>
          <p>
            Our primary purpose in collecting personal information is to provide
            you with a safe, smooth, efficient, fun and customized experience.
            We may use your personal information to:<strong></strong>
          </p>
          <ul>
            <li>provide the services and customer support you request;</li>
            <li>
              process transactions and send notices about your transactions or
              your network activity;
            </li>
            <li>resolve disputes, collect fees, and troubleshoot problems;</li>
            <li>
              prevent potentially fraudulent, prohibited or illegal activities,
              and enforce our User Agreement through the use of our risk and
              fraud tools which may include use of Account Information,
              Identification Information, Financial Information, Device
              Information, Social Web Information and Geolocation Information;
            </li>
            <li>
              create an account connection between your Tend account and a
              third-party account or platform;
            </li>
            <li>
              customize, personalize, measure, and improve our services and the
              content and layout of our website;
            </li>
            <li>
              send you updates about new products and services that we are
              offering to customers;
            </li>
            <li>
              compare information for accuracy and verify it with third parties;
            </li>
            <li>perform other duties as required by law; and</li>
            <li>
              if you elect to share your Geolocation Information, we may use
              this information to enhance the security of the Services and we
              may use this information to provide you with location-specific
              options, functionality, offers, advertising, search results, or
              other location-specific content.]
            </li>
          </ul>
          <p>
            <strong> </strong>
          </p>
          <p>
            <strong>YOUR RIGHTS UNDER THE CCPA</strong>
            <strong></strong>
          </p>
          <p>
            1. The right to request we disclose to you the following information
            covering the 12 months preceding your request (“request to know”).
            This information is hereby provided to you to eliminate the need for
            you to request it.
          </p>
          <ol type="1"></ol>
          <ul>
            <ul>
              <li>
                The categories of personal information about you that we
                collected;
              </li>
              <li>
                The categories of sources from which the personal information
                was collected;
              </li>
            </ul>
          </ul>
          <ul>
            <li>
              The business purpose for collecting personal information about
              you;
            </li>
          </ul>
          <ol type="1"></ol>
          <ul>
            <ul>
              <li>
                The categories of third parties with whom we disclosed personal
                information, the categories of personal information disclosed,
                and the purpose for disclosing it; and
              </li>
              <li>
                The specific pieces of information we collected about you.
              </li>
            </ul>
          </ul>
          <p>
            2. The right to request we delete personal information from you,
            subject to applicable exceptions (“request to delete”).
          </p>
          <p>
            3. The right to be free from unlawful discrimination for exercising
            your rights under the CCPA.
          </p>
          <p>
            You also have the right to designate an authorized agent to make a
            request under the CCPA on your behalf. If you wish to designate an
            authorized agent, we will require a valid power of attorney with
            express powers under the CCPA. In some instances, we may not be able
            to honor your request. We will not honor your request if we cannot
            verify your identity or confirm that the personal information that
            we maintain relates to you, or if we cannot verify that you have the
            authority to make a request on behalf of another individual.
            Additionally, we may not honor your request where an exception
            applies, such as where the disclosure of personal information would
            adversely affect the rights of others or where the personal
            information that we maintain about you is not subject to the CCPA.
            If we are not able to honor your request, we will advise you in our
            response. We will not provide any specific pieces of information if
            the disclosure presents the possibility of unauthorized access that
            could result in identity theft or fraud or unreasonable risk to data
            or systems and network security.
          </p>
          <p>
            <strong> </strong>
          </p>
          <p>
            <strong>MAKING REQUESTS</strong>
          </p>
          <p>
            As a California resident you or your authorized agent may request
            details about personal information collected and/or shared by
            calling us, emailing us, or submitting a request through our website
            or mobile app. Contact information is below. We will take necessary
            steps to verify your identity once a request is received, which may
            vary based on your relationship with us. We will work to process all
            verified requests within 45 days. If we need an extension in order
            to process your request, we will provide you with an explanation for
            the delay.
          </p>
          <p>
            <strong>CCPA Contact Information:</strong>
          </p>
          <p>By Telephone: 1-833-836-3439</p>
          <p>By Email: privacy@Tend.money</p>
          <p>
            This policy may change from time-to-time. Any changes will be posted
            on our website.
          </p>
          <p>Last Revised: October 29, 2020</p>
        </StyledPrivacyPolicyPage>
      </Layout>
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslationsHOF(locale, ['privacy'])),
    },
  };
}

export default Privacy;
