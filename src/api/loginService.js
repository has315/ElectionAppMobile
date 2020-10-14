import axios from 'axios';
import StatusCodes from 'http-status-codes';
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
    return await response.data;
  } catch (error) {
    return error.response;
  }
}

const login = async (m, endpoint, data, config) => {
  let token = 'token';
  let response = await sendRequst(m, endpoint, data, config);
  if (response && StatusCodes.OK === response.status && token in response) {
    return response.token;
  } else {
    return null;
  }
};

let data = {
  username: 'admin',
  password:
    '8zqYwcHyLp3KOyZAfxKDA7R4q9fKjjjEL2x/eBdVyoFo7GYHvVmJexBmlDFwzx+JxLQ2dzS+Ds+DxT7axEoUi+VahxVso1aeeDkZtfUN40MrP1tTdZY/qbde+dj40ammOfmZXQjkEe/6C++Ye1jTJhmQcABUV23vjiLIQ4NQ4qLPLtreWwo5hqmbLRMc1HrTwoA8FnMsn1OKw04PCL3mS2Bn+pHQO7eL4nnkRtN/M6CtL66RE1eSalTasIlnAoAc/Bbnbg/sAUqzSrfuENyvk9WGFh4zX+oaHblu5YD8bTL8Zp1ZaFCNuJxhzuyJQ/WsFJhGRmJqPLWwBcb0pqU/oH7Qg==',
};
let config = {};
let endpoint = 'http://157.230.105.18:3000/users/login';

login(method.POST, endpoint, data, config).then((response) =>
  console.log(`Response: ${JSON.stringify(response)}`),
);

// response = logout(method.POST, endpoint, data, config);
// console.log(`Response: ${response}`);

export default {login};
