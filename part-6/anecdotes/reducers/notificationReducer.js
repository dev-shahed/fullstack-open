import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification: (state, action) => action.payload,
    clearNotification: () => '',
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;


export const setNotificationInterval = (message) => {
  return (dispatch) => {
    dispatch(setNotification(message));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };
};

export default notificationSlice.reducer;
