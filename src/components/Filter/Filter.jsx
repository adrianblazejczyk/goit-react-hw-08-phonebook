import { Component } from 'react';
import { WraperFilter, SearchTitle, SearchInput } from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleChange = evt => {
    const searchName = evt.target.value;
    console.log(searchName);
  };

  render() {
    const { onChangeHandle } = this.props;
    return (
      <WraperFilter>
        <SearchTitle>Find contacts by name</SearchTitle>
        <SearchInput
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChangeHandle}
        ></SearchInput>
      </WraperFilter>
    );
  }
}
Filter.propTypes = {
  onChangeHandle: PropTypes.func.isRequired,
};
