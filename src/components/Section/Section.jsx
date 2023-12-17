import { Title, Content, SectionWrapper } from './Section.styled';

import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
