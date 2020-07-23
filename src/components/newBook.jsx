/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../api';
import './NewBook.css';

function NewBook(props) {
  const {
    title,
    author,
    imgURL,
    controlsDisabled,
    onTitleChange,
    onAuthorChange,
    onImageURLChange,
    onCreateBook,
  } = props;

  return (
    <section className="NewBook">
      <label>
        Title:
        <input
          onChange={onTitleChange}
          value={title}
          disabled={controlsDisabled}
        />
      </label>
      <label>
        Author:
        <input
          onChange={onAuthorChange}
          value={author}
          disabled={controlsDisabled}
        />
      </label>
      <label>
        Image URL:
        <input
          onChange={onImageURLChange}
          value={imgURL}
          disabled={controlsDisabled}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          onCreateBook(title, author, imgURL);
        }}
        disabled={controlsDisabled}
      >
        Create
      </button>
    </section>
  );
}

const mapState = (state) => state.newBook;

const mapDispatch = (dispatch) => ({
  onTitleChange({ target: { value } }) {
    dispatch({ type: 'SET_NEW_BOOK_TITLE', title: value });
  },

  onAuthorChange({ target: { value } }) {
    dispatch({
      type: 'SET_NEW_BOOK_AUTHOR',
      author: value,
    });
  },

  onImageURLChange({ target: { value } }) {
    dispatch({
      type: 'SET_NEW_BOOK_IMAGE_URL',
      imgURL: value,
    });
  },

  onCreateBook(title, author, imgURL) {
    dispatch({ type: 'CREATING_BOOK' });
    createBook(title, author, imgURL).then(() => {
      dispatch({ type: 'CREATED_BOOK' });
    });
  },
});

export default connect(mapState, mapDispatch)(NewBook);

NewBook.propTypes = {
  author: PropTypes.string,
  controlsDisabled: PropTypes.bool.isRequired,
  imgURL: PropTypes.string,
  onAuthorChange: PropTypes.func.isRequired,
  onCreateBook: PropTypes.func.isRequired,
  onImageURLChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

NewBook.defaultProps = {
  author: '',
  imgURL: '',
  title: '',
};
