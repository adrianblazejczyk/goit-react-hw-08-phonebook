import { Contacts, Info } from './ContactsList.styled';
import { ContactListItem } from '../ContactsListItem';
import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
              phone={contact.phone}
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
