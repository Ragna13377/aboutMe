import { createSlice } from '@reduxjs/toolkit';

const initialState = false;
const positionChangerSlice = createSlice({
	name: 'positionChanger',
	initialState,
	reducers: {},
});

export default positionChangerSlice.reducer;
