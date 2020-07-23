import PropTypes from 'prop-types';
import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';

const Book = ({ title, author, imgURL }) => (
  <section className="Book">
    <header>
      <Link to={`/book/${title}`}>
        <h3>{title}</h3>
      </Link>
    </header>
    <img src={imgURL} alt="" />
    <strong>{author}</strong>
  </section>
);

export default Book;

Book.propTypes = {
  author: PropTypes.string,
  imgURL: PropTypes.string,
  title: PropTypes.string,
};

Book.defaultProps = {
  author: '',
  imgURL: '',
  title: '',
};
