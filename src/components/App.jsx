import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section, ContactForm, ContactsList, Filter } from 'components';
import { setItemLocalData, getItemLocalData } from '../utils/localStorage';
import PropTypes from 'prop-types';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = getItemLocalData('contactList');
    if (data) {
      setContacts(data);
    }
  }, []);

  const handleAddContact = (adName, number) => {
    if (
      contacts.find(({ name }) => name.toLowerCase() === adName.toLowerCase())
    ) {
      alert(`${adName} is already in contacts :)`);
      return;
    }
    const id = nanoid();
    const updatedContacts = [...contacts, { id, name: adName, number }];

    setContacts(updatedContacts);
    setItemLocalData('contactList', updatedContacts);
  };

  const handleDelete = evt => {
    const id = evt.target.id;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    setItemLocalData('contactList', updatedContacts);
  };

  const handleChangeState = event => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section key="phonebook" title="Phonebook">
        <ContactForm onSubmitHandle={handleAddContact}></ContactForm>
      </Section>
      <Section key="contacts" title="Contacts">
        <Filter onChangeHandle={handleChangeState}></Filter>
        <ContactsList
          contacts={contacts}
          filter={filter}
          onDeleteHandle={handleDelete}
        ></ContactsList>
      </Section>
    </div>
  );
};
App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  handleAddContact: PropTypes.func,
  handleDelete: PropTypes.func,
  handleChangeState: PropTypes.func,
};
