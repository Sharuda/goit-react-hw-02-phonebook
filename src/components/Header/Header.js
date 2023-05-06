import React from 'react';
import { StyleHeader } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return <StyleHeader>{title}</StyleHeader>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
