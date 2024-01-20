import * as React from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';


import { selectContactEdit } from '../../redux/contacts/contactsSelectors';

import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const contactEdit = useSelector(selectContactEdit);

  console.log(id);

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <TableRow
        key={id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{phone}</TableCell>
        <TableCell align="center">
          <Button
            id={id}
            onClick={handleDelete}
            variant="contained"
            sx={{ m: 1 }}
          >
            Delete
          </Button>
          <Button
            id={id}
            // onClick={handleEditOpen}
            variant="contained"
            sx={{ m: 1 }}
          >
            Edit
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
