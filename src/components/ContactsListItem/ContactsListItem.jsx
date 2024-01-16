import {
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsListItem.styled';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Contact key={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DeleteButton id={id} onClick={handleDelete}>
        Delete
      </DeleteButton>
    </Contact>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
