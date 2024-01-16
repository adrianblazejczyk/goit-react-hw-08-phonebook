import { WrapperFilter, SearchTitle, SearchInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <WrapperFilter>
      <SearchTitle>Find contacts by name</SearchTitle>
      <SearchInput
        type="text"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
      ></SearchInput>
    </WrapperFilter>
  );
};
