import React from "react";
import {
  FooterDescription,
  FooterLogo,
  FooterSection,
  FooterCompanyDetails,
  FooterLine,
  Copyright,
  LegalLinks,
  LegalLink,
} from "../styles/Footer.styled";
import { Section } from "../styles/Sections.styled";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Section>
      <FooterSection>
        <FooterCompanyDetails>
          <FooterLogo>TONE HOUSE</FooterLogo>
          <FooterDescription>
            TONE HOUSE is your new home in boutique wellness. We join the
            dependable standards of Pilates with forefront development to give
            you the most out of each exercise.
          </FooterDescription>
        </FooterCompanyDetails>
      </FooterSection>
      <FooterLine />
      <Copyright>© {year} All Rights Reserved</Copyright>

      <LegalLinks>
        <LegalLink>Privacy Policy</LegalLink>
        <LegalLink>Terms of Use</LegalLink>
        <LegalLink>Legal</LegalLink>
      </LegalLinks>
    </Section>
  );
};

export default Footer;
