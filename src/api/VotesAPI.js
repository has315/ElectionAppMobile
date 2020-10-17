import axios from 'axios';
import StatusCodes from 'http-status-codes';
import Config from 'react-native-config';
// import {method} from '../utils/method';
const method = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

async function sendRequst(m, endpoint, data, config) {
  try {
    let response = null;
    switch (m) {
      case method.POST:
        response = await axios.post(endpoint, data, config);
        break;
      case method.PUT:
        response = await axios.put(endpoint, data, config);
        break;
      case method.PATCH:
        response = await axios.patch(endpoint, data, config);
        break;
      case method.DELETE:
        response = await axios.delete(endpoint, data, config);
        break;
      default:
        response = await axios.get(endpoint, config);
        break;
    }
    console.log(`RESP STATUS: ${response.status}`);
    return response;
  } catch (error) {
    return error.response;
  }
}

const getVotes = async (data, config) => {
  const endpoint = `${Config.BASE_URL}/voters/all`;
  let response = await sendRequst(endpoint, data, config);

  if (response && StatusCodes.OK === response.status) {
    return response.data;
  } else {
    return [];
  }
};

const searchVotes = async (data, config) => {
  const endpoint = `${Config.BASE_URL}/voters/search`;
  let response = await sendRequst(method.GET, endpoint, data, config);
  if (response && StatusCodes.OK === response.status) {
    return response.data;
  } else {
    return [];
  }
};

// let token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiY2l0eSI6bnVsbCwidm90ZV91bml0IjpudWxsLCJ2b3RpbmdfYm94IjpudWxsLCJhY2NvdW50X2xldmVsIjowLCJqdGkiOiIySklKQ01WZ0RPIiwiaWF0IjoxNjAyNzA0MzMxfQ.exAAGJfkQUmRjiLhifC45BURlrolPJy1hJvJQ9-eQZI';
// let config = {
//   headers: {
//     authorization: token,
//   },
// };
// let data = {};
// let endpoint = 'https://jsonplaceholder.typicode.com/todos';
// getVotes(method.GET, endpoint, data, config).then((response) => {
//   // console.log(`Response: ${response}`);
// });

// endpoint = 'http://157.230.105.18:3000/voters/all?id=1&start=0&direction=next';
// searchVotes(method.GET, endpoint, data, config).then((response) =>
//   console.log(`Response Global 2: ${Object.keys(response)}`),
// );

export default {
  getVotes,
  searchVotes,
};
