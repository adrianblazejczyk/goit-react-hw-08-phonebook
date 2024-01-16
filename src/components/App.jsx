import { Section, ContactForm, ContactsList, Filter, Loader } from 'components';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';

import { selectError, selectLoading } from '.././redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        paddingTop: '100px',
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
      {isLoading && !error && <Loader />}
      <Section key="contacts" title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};
