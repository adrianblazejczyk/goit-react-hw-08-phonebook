import { Contacts, Info } from './ContactsList.styled';
import { ContactListItem } from '../ContactsListItem';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return (
    <Contacts>
      {contacts.length ? (
        contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ContactListItem
              name={contact.name}
              number={contact.number}
              key={contact.id}
              id={contact.id}
            />
          ))
      ) : (
        <Info>No contacts to display.</Info>
      )}
    </Contacts>
  );
};
