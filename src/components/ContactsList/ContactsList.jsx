import { Component } from 'react';
// import { nanoid } from 'nanoid';
import {
  Contact,
  Contacts,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsList.styled';

export class ContactsList extends Component {
  render() {
    const { contacts, onDeleteHandle } = this.props;
    console.log();
    return (
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
    );
  }
}
