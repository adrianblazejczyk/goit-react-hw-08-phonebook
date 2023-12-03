import { Contacts } from './ContactsList.styled';
import { ContactListItem } from '../ContactsListItem';

import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, filter, onDeleteHandle }) => {
  return (
    <Contacts>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <ContactListItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
            onDeleteHandle={onDeleteHandle}
          />
        ))}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteHandle: PropTypes.func.isRequired,
};
