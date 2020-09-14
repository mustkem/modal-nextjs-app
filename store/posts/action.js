export const actions = {
  FETCH_DATA: "FETCH_DATA",
};

export const fetchData = (isServer) => async (dispatch) => {
  const url =
    "https://raw.githubusercontent.com/mustkeom/demo-data/master/books";

  let response = await fetch(url);

  let data = await response.json();

  let newResponse = await fetch(url);

  let newData = await newResponse.json();

  return dispatch({
    type: actions.FETCH_DATA,
    data: [...data.data, ...newData.data],
  });
};
