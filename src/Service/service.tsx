import axios from "axios";

type Props = {
  url: string;
  token?: string;
  params?: any;
  headers?: any;
  body?: any;
};

export const Get = async ({ url, token, params, headers }: Props) => {
  let config = {};
  if (token) {
    config = {
      headers: { ...headers, Authorization: "Bearer " + token },
      params,
    };
  } else {
    config = {
      headers: { ...headers },
      params,
    };
  }

  try {
    return (await axios.get(url, config)).data;
  } catch (error) {
    return null;
  }
};

export const Post = async ({ url, token, body, headers, params }: Props) => {
  let config = {};
  if (token) {
    config = {
      headers: { ...headers, Authorization: "Bearer " + token },
      params,
    };
  } else {
    config = {
      headers: { ...headers },
      params,
    };
  }
  try {
    return (await axios.post(url, body, config)).data;
  } catch (error) {
    return null;
  }
};

export const Put = async ({ url, token, body, headers, params }: Props) => {
  const config = {
    headers: { ...headers, Authorization: "Bearer " + token },
    params,
  };
  try {
    return (await axios.put(url, body, config)).data;
  } catch (error) {
    return null;
  }
};

export const Delete = async ({ url, token, params, headers }: Props) => {
  const config = {
    headers: { ...headers, Authorization: "Bearer " + token },
    params,
  };
  try {
    return (await axios.delete(url, config)).data;
  } catch (error) {
    return null;
  }
};
export const Patch = async ({ url, token, body, headers, params }: Props) => {
  const config = {
    headers: { ...headers, Authorization: "Bearer " + token },
    params,
  };
  try {
    return (await axios.patch(url, body, config)).data;
  } catch (error) {
    return null;
  }
};
