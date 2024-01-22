import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../../redux/contacts/contactsOperations';
import { setContactEdit } from '../../redux/contacts/contactsSlice';
import Notiflix from 'notiflix';
import {
  selectContactEdit,
  selectContacts,
} from '../../redux/contacts/contactsSelectors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ContactEdit = () => {
  const dispatch = useDispatch();
  const oldContactData = useSelector(selectContactEdit);
  const id = oldContactData.id;

  const dataContacts = useSelector(selectContacts);
  const dataContact = dataContacts.find(contact => contact.id === id);

  const [name, setName] = useState(dataContact.name);
  const [number, setNumber] = useState(dataContact.number);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleCancel = () => {
    dispatch(
      setContactEdit({
        modalOpen: false,
        id: null,
      })
    );
  };

  const handleSave = evt => {
    evt.preventDefault();
    const newDataContact = {
      id: id,
      name: name,
      number: number,
    };

    if (
      dataContacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() && contact.id !== id
      )
    ) {
      Notiflix.Notify.info(`${name} is already in contacts :)`);
      return;
    }

    dispatch(updateContact(newDataContact));
    dispatch(
      setContactEdit({
        modalOpen: false,
        id: null,
      })
    );
  };

  return (
    <Box sx={style}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        align="center"
      >
        Edycja kontaktu
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>

      <Box component="form" noValidate onSubmit={handleSave} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Name"
              id={nameInputId}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Number"
              id={numberInputId}
              type="tel"
              name="number"
              value={number}
              pattern="[0-9\s\-]+"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Save
            </Button>
            <Button
              onClick={handleCancel}
              variant="contained"
              sx={{ m: 3, mb: 2 }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
