export default name => {
  const url = window.location.href;
  const parsedName = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + parsedName + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
