import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, NameInput, InputData, ButtonForm } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmitHandle(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <NameInput htmlFor={this.nameInputId}>
          Name
          <InputData
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          ></InputData>
        </NameInput>

        <NameInput htmlFor={this.phoneInputId}>
          Phone
          <InputData
            id={this.phoneInputId}
            type="tel"
            name="number"
            value={number}
            pattern="[0-9\s\-]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          ></InputData>
        </NameInput>
        <ButtonForm> Add contact</ButtonForm>
      </Form>
    );
  }
}
