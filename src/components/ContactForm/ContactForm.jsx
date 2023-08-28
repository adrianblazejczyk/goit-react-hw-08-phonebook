import { Form, NameInput, InputData, ButtonForm } from './ContactForm.styled';
export const ContactForm = () => {
  return (
    <Form>
      <NameInput>Name</NameInput>
      <InputData></InputData>
      <NameInput>Phone</NameInput>
      <InputData></InputData>
      <ButtonForm> Add contact</ButtonForm>
    </Form>
  );
};
