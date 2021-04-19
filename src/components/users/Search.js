import React, { Component } from 'react';
import PropTypes from 'prop-types'; // emmet impt

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    showClear: PropTypes.bool.isRequired, // emmet ptbr
    clearUsers: PropTypes.func.isRequired, // emmet ptfr
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter a search term', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        {/* gets sent up to App.js */}
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/* if showClear is true && show the button */}
        {showClear && (
          <button
            className='btn btn-light btn-block'
            // send this up
            onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
