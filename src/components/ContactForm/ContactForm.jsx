import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, NameInput, InputData, ButtonForm } from './ContactForm.styled';
import PropTypes from 'prop-types';
export const ContactForm = ({ onSubmitHandle }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmitHandle(name, number);
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

ContactForm.propTypes = {
  onSubmitHandle: PropTypes.func.isRequired,
};
