// actions.js

// Action types
export const SET_USERNAME = 'SET_USERNAME';

// Action creators
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

// Async action creators (if needed, for example, for fetching data)
export const fetchUsername = () => {
  return async (dispatch) => {
    try {
      const storedCredentials = localStorage.getItem("credentials");
      if (storedCredentials) {
        const parsedCredentials = JSON.parse(storedCredentials);
        if (parsedCredentials.isLoggedIn === 1) {
          dispatch(setUsername(parsedCredentials.name));
        }
      }
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching username:', error);
    }
  };
};
