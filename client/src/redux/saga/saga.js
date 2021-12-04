async function fetchData({
  url, method, headers, body
}) {
  const response = await fetch(url, {
    method,
    headers,
    body,
    credentials: "include",
  });
  const data = response.json();
  return data;
}

function* watchActions() {

}

export default watchActions;
