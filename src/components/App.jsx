import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section, ContactForm, ContactsList, Filter } from 'components';
import { setItemLocalData, getItemLocalData } from '../utils/localStorage';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = getItemLocalData('contactList');
    this.setState({
      contacts: [...data],
    });
  }

  handleAddContact = data => {
    const { contacts } = this.state;
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts :)`);
      return;
    }
    const id = nanoid();

    this.setState(prevState => {
      const updatedContacts = [...prevState.contacts, { id, ...data }];
      setItemLocalData('contactList', [...updatedContacts]);
      return { contacts: updatedContacts };
    });
  };

  handleDelete = evt => {
    const { contacts } = this.state;

    const id = evt.target.id;
    const indexToDelete = contacts.findIndex(contact => contact.id === id);
    contacts.splice(indexToDelete, 1);
    setItemLocalData('contactList', [...contacts]);
    console.log(contacts);
    this.setState(() => {
      return { contacts: contacts };
    });
  };

  handleChangeState = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
          <Filter onChangeHandle={this.handleChangeState}></Filter>
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
