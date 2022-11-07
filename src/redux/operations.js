import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63685280edc85dbc84e4f3a8.mockapi.io/api/v1';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUsers',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUsers',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
