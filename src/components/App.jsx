import { Section, ContactForm, ContactsList, Filter } from 'components';

export const App = () => {
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
        <ContactForm />
      </Section>
      <Section key="contacts" title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};