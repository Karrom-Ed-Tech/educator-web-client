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
export async function registerEducator(
  name: string,
  email: string,
  phone: string,
  image: string,
  password: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: apiURL + "/accounts/register/",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name,
        email,
        phone,
        image,
        password,
      }),
    };
    const res = await axios.default.request(axiosConfig);
    console.log(res);
    const normalizedResponse = normalizeServerResponse(res);
    console.log(normalizedResponse);
    return [null, normalizedResponse];
  } catch (err) {
    const errorObject = normalizeServerError(err);
    return [errorObject, null];
  }
}
