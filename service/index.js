import axios from "axios";
const https = require("https");

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Do something with response error
  if(error.response.status === 401) {
     let loginType = localStorage.getItem("userType");
     if(loginType === 'ER'){
      loginType = "engineer";
     }  else if(loginType === "USER") {
       loginType = "customer";
     }
     localStorage.removeItem("userId");
     sessionStorage.removeItem("token");
     window.location.href = loginType === 'ADMIN' ? "/admin-login" :  "/login/"+loginType
   }

  // Trow errr again (may be need for some other catch)
  return Promise.reject(error);
});

export default {
  get,
  put,
  post,
  delete: _delete,
};
const API_KEY = process.env.REACT_APP_KEY;

const validCodes = (code) => {
  if (code >= 200 && code < 400) {
    return true;
  }
  return false;
};

export const methodType = {
  get: "GET",
  put: "PUT",
  post: "POST",
  delete: "DELETE",
};

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

const getHeader = (header) => {
  let idToken = localStorage.getItem("idToken");

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    'x-access-token' : sessionStorage.getItem("token")
  };
};

//===========CRUD Operations=====================//

//Get Call
function get(url, header, hideHeaders) {
  const headers = getHeader(header);

  return axios.get(url, {
    headers: headers,httpsAgent
  });
}

//create Call
function put(url, body, header) {
  const headers = getHeader(header);

  return axios.put(url, body, { headers: headers ,httpsAgent});
}
//update Call
function post(url, body, header) {
  const headers = getHeader(header);
  if (header) {
    return axios.post(url, body, { headers: {...headers ,...header ,httpsAgent} });
  }
  return axios.post(url, body, { headers: headers ,httpsAgent });
}

// Delete Call (prefixed function name with underscore because delete is a reserved word in javascript)
function _delete(url, header, body) {
  const headers = getHeader(header);

  return axios
    .delete(url, {
      headers: headers,
      httpsAgent,
      data: body,
    })
    .then(handleResponse)
    .catch(error);
}

//callback of response (returns promise)
function handleResponse(response) {
  if (!validCodes(response.status)) {
    return Promise.reject(response);
  }
  response &&
    response.data &&
    response.data.sessionToken &&
    token.setToken(response.data.sessionToken);
  return response;
}

//callback of error
function error(error) {
  return error;
}
