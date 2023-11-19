import { Component } from 'react';
// import { nanoid } from 'nanoid';
import {
  SearchTitle,
  SearchInput,
  Contact,
  Contacts,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsList.styled';

export class ContactsList extends Component {
  handleChange = evt => {
    const searchName = evt.target.value;
    console.log(searchName);
    
  };

  render() {
    const { contacts, onDeleteHandle } = this.props;

    return (
      <>
        <SearchTitle>Find contacts by name</SearchTitle>
        <SearchInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
        ></SearchInput>
        <Contacts>
          {contacts.map(contact => (
            <Contact key={contact.id}>
              <ContactName>{contact.name}</ContactName>
              <ContactNumber>{contact.number}</ContactNumber>
              <DeleteButton id={contact.id} onClick={onDeleteHandle}>
                Delete
              </DeleteButton>
            </Contact>
          ))}
        </Contacts>
      </>
    );
  }
}
