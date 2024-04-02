import { createAsyncThunk } from '@reduxjs/toolkit';
import { advertsApi } from '../../axiosConfig/mockApi';

export const fetchByPaginationAdvertsThunk = createAsyncThunk(
  'fetchByPagination',
  async (page=1, thunkApi) => {
      try {
      const { data } = await advertsApi.get("/adverts", {params:{"page":page,"limit":12}});
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchAllAdvertsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
      try {
      const { data } = await advertsApi.get("/adverts");
      return {data};
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addAdvertsThunk = createAsyncThunk(
  'addAdverts',
  async (advert, thunkApi) => {
    try {
      const { data } = await advertsApi.post("/adverts", advert);
      return data; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
