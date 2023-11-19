import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section, ContactForm, ContactsList } from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleAddContact = data => {
    // const { contacts } = this.state;
    const id = nanoid();

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...data }],
    }));
  };

  handleDelete = evt => {
    const { contacts } = this.state;
    const id = evt.target.id;
    const indexToDelete = contacts.findIndex(
      contact => contact.id === id
    );
    contacts.splice(indexToDelete, 1);
    this.setState({ contacts: contacts });
  };

  render() {
    const { contacts, filter } = this.state;
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
        <Section title="Phonebook">
          <ContactForm onSubmitHandle={this.handleAddContact}></ContactForm>
        </Section>
        <Section title="Contacts">
          <ContactsList
            contacts={contacts}
            filter={filter}
            onDeleteHandle={this.handleDelete}
          ></ContactsList>
        </Section>
      </div>
    );
  }
}
