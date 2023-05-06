import React from 'react';
import PropTypes from 'prop-types';
import { Input, LabelDescription } from './Filter.styled';
import { LabelWrapper } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => (
  <LabelDescription>
    <LabelWrapper>Find contacts by name</LabelWrapper>
    <Input type="text" value={value} onChange={onChange} placeholder="search" />
  </LabelDescription>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
