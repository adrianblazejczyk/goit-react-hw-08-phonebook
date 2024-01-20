import { Helmet } from 'react-helmet';

import { useDispatch } from 'react-redux';

import { ContactForm, Filter, ContactsList, Menu } from 'components';
import { useEffect } from 'react';
import Container from '@mui/material/Container';

import {
  selectErrorContacts,
  selectLoadingContacts,
} from '../../redux/contacts/contactsSelectors';

import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function Contacts() {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectLoadingContacts);
  // const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ThemeProvider theme={defaultTheme}>
        <Menu />
        <ContactForm />
        <Container maxWidth="md">
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Filter />
            <ContactsList />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}
