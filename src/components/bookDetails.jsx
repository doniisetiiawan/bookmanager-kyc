import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBook, fetchBook } from '../api';
import Loading from './loading';
import Book from './book';

class BookDetails extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    const {
      // eslint-disable-next-line react/prop-types
      match: {
        // eslint-disable-next-line react/prop-types
        params: { title },
      },
      fetchingBook,
      fetchedBook,
    } = this.props;

    fetchingBook();
    fetchBook(title).then((book) => {
      fetchedBook(book);
    });
  };

  onDeleteClick = () => {
    const {
      book: { title },
      deletingBook,
      deletedBook,
      history,
    } = this.props;

    deletingBook();
    deleteBook(title).then(() => {
      deletedBook();
      history.push('/');
    });
  };

  render() {
    const { loading, book, controlsDisabled } = this.props;
    return (
      <Loading loading={loading}>
        <Book {...book} />
        <button
          type="button"
          disabled={controlsDisabled}
          onClick={this.onDeleteClick}
        >
          Delete
        </button>
      </Loading>
    );
  }
}

const mapState = (state) => state.bookDetails;

const mapDispatch = (dispatch) => ({
  fetchingBook() {
    dispatch({ type: 'FETCHING_BOOK' });
  },

  fetchedBook(book) {
    dispatch({ type: 'FETCHED_BOOK', book });
  },

  deletingBook() {
    dispatch({ type: 'DELETING_BOOK' });
  },

  deletedBook() {
    dispatch({ type: 'DELETED_BOOK' });
  },
});

export default connect(mapState, mapDispatch)(BookDetails);

BookDetails.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  controlsDisabled: PropTypes.bool.isRequired,
  deletedBook: PropTypes.func.isRequired,
  deletingBook: PropTypes.func.isRequired,
  fetchedBook: PropTypes.func.isRequired,
  fetchingBook: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
};

BookDetails.defaultProps = {
  book: {},
};
