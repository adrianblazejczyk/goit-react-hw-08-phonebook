import {
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsListItem.styled';

import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id, onDeleteHandle }) => {
  return (
    <Contact key={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton id={id} onClick={onDeleteHandle}>
        Delete
      </DeleteButton>
    </Contact>
  );
};
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteHandle: PropTypes.func.isRequired,
};
