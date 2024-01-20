import { ContactListItem } from '../ContactsListItem';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/filtersSelectors';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';

import { ContactEdit } from '../ContactEdit';
import { setContactEdit } from '../../redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import { selectContactEdit } from '../../redux/contacts/contactsSelectors';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactEdit = useSelector(selectContactEdit);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleEditClose = eve => {
    dispatch(setContactEdit(false));
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <MenuBookIcon />
        </Avatar>

        <Typography sx={{ mb: 4 }} component="h3" variant="h5">
          Your telephone directory
        </Typography>

        {contacts.length ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Number</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts
                  .filter(contact =>
                    contact.name.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map(contact => (
                    <ContactListItem
                      name={contact.name}
                      phone={contact.number}
                      key={contact.id}
                      id={contact.id}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography component="p" variant="h4">
            No contacts to display.
          </Typography>
        )}
      </Box>
      <Modal
        open={contactEdit}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ContactEdit />
        </div>
      </Modal>
    </Container>
  );
};
