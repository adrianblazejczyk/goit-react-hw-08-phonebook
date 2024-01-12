import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, NameInput, InputData, ButtonForm } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts :)`);
      return;
    }

    const newContact = {
      createdAt: '2023-12-31T04:22:20.031Z',
      name: name,
      phone: number,
    };

    //addContact({ id, name, number });
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <NameInput htmlFor={nameInputId}>
        Name
        <InputData
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        ></InputData>
      </NameInput>

      <NameInput htmlFor={numberInputId}>
        Phone
        <InputData
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          pattern="[0-9\s\-]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        ></InputData>
      </NameInput>
      <ButtonForm> Add contact</ButtonForm>
    </Form>
  );
};
