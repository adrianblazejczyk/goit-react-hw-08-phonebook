import { Component } from 'react';
import {
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsListItem.styled';

import PropTypes from 'prop-types';

export class ContactListItem extends Component {
  render() {
    const { name, number, id, onDeleteHandle } = this.props;

    return (
      <Contact key={id}>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
        <DeleteButton id={id} onClick={onDeleteHandle}>
          Delete
        </DeleteButton>
      </Contact>
    );
  }
}
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteHandle: PropTypes.func.isRequired,
};
