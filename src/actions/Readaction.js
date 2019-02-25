export const READ = 'READ';

export const ReadAction = (products) => ({
		type : READ,
		payload : products
})


export function fetchSrps() {
  return dispatch => {
    return fetch("http://localhost/api/category/read.php")
      .then(res => res.json())
      .then(data => {
        dispatch(ReadAction(data.records));
        return data.records;
      })
      .catch(error => {
      throw (error);
    });
  };
}

