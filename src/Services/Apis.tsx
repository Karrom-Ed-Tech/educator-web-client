import * as axios from "axios";

const apiURL = "";

interface ResponseData {
  data: any;
  status: any;
}

function normalizeServerResponse(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.data,
    status: serverResponse.status,
  };

  return response;
}

function normalizeServerError(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.response?.data?.message,
    status: serverResponse.status,
  };

  return response;
}

/* Auth */
export async function registerEducator() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: apiURL + "/auth/register/educator",
      headers: {
        "Content-Type": "application/json",
      },
      data: {},
    };
    const res = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(res);
    return [null, normalizedResponse];
  } catch (err) {
    const errorObject = normalizeServerError(err);
    return [errorObject, null];
  }
}
