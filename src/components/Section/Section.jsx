import { Titel, Content, SectionWrapper } from './Section.styled';

import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <Titel>{title}</Titel>
    <Content>{children}</Content>
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
