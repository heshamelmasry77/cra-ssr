export const GET_HOMEPAGE = 'pages/GET_HOMEPAGE';
export const GET_ABOUT = 'pages/GET_ABOUT';

const initialState = {
  home: '',
  about: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEPAGE:
      return {
        ...state,
        home: action.content
      };

    case GET_ABOUT:
      return {
        ...state,
        about: action.content
      };

    default:
      return state;
  }
};

// Just creating a fake method to make API calls with
const fakeAPICall = (content, type) => dispatch =>
  // Return a promise, go ahead and put this in a try/catch and handle errors responibly
  new Promise(resolve => {
    // We're just faking a fetch with setTimeout here
    setTimeout(() => {
      // Dispatch your changes first
      dispatch({
        type,
        content
      });

      // Then resolve at the end with the content
      resolve(content);
    }, 3000);
  });

// For the homepage, we change the homepage content one time
export const getHomepage = () => {
  return async dispatch => {
    await dispatch(fakeAPICall('My awesome homepage', GET_HOMEPAGE));
  };
};

// For the about page, we change the content twice...
// The second call will wait for the first to finish (thanks await!) before then moving on
// Locally you'll see the changes load one at a time
// When server rendered you'll see the final result of both calls on page load
export const getAbout = () => {
  return async dispatch => {
    // Make our first call
    const aboutContent = await dispatch(
      fakeAPICall('About is super...', GET_ABOUT)
    );

    // Use the result from the first call in the second - totes legit
    await dispatch(fakeAPICall(aboutContent + ' cool', GET_ABOUT));
  };
};
