import { WraperFilter, SearchTitle, SearchInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChangeHandle }) => {
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
};

Filter.propTypes = {
  onChangeHandle: PropTypes.func.isRequired,
};
