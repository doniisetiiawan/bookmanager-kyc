import PropTypes from 'prop-types';
import React from 'react';

const Loading = ({ loading, children }) => (loading ? <p>loading...</p> : children);

export default Loading;

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
};
