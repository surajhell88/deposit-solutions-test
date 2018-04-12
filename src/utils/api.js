import fetch from "isomorphic-fetch";

const apiBaseUrl = "https://api.github.com";
const pattern = /^((http|https):\/\/)/;

const getUrl = url => (pattern.test(url) ? url : apiBaseUrl + url);

const parseJSON = response =>
  response.json().then(data => ({ data, headers: response.headers }));

export default (url, options = {}) => {
  const newOptions = Object.assign(
    {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    },
    options
  );

  const apiEndpoint = getUrl(url);

  return fetch(apiEndpoint, newOptions).then(parseJSON);
};
