import StatusCodes from 'http-status-codes';

const parseResponse = (response) => {
  let message = 'message';
  let data = 'data';
  let error = 'error';

  if (StatusCodes.OK === response.status) {
    if (data in response) {
      return response.data;
    } else if (message in response) {
      return response.message;
    }
  } else {
    if (error in response) {
      return response.error;
    }
  }
};

export default parseResponse;
