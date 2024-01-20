import { useState } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';

import { updateContact } from '../../redux/contacts/contactsOperations';

import { setContactEdit } from '../../redux/contacts/contactsSlice';

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

export const ContactEdit = ({ id, phone }) => {
  console.log(id);

  const dispatch = useDispatch();

  const [name, setName] = useState('test');
  const [number, setNumber] = useState('000000');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleCancel = () => {
    dispatch(setContactEdit(false));
  };

  const handleSave = evt => {
    evt.preventDefault();
    const newDataContact = {
      id: id,
      name: name,
      number: number,
    };

    dispatch(updateContact(newDataContact));
    dispatch(setContactEdit(false));
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
              pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
