import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.messages);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const contacts = await axios.post('/contacts', { name, number });
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.messages);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const contacts = await axios.delete(`/contacts/${contactId}`);
      console.log(contacts.data);
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.messages);
    }
  }
);
