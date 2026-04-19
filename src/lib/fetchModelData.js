/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to fetch then model from.
 *
 * @return {Promise}        A Promise that resolves to the fetched model
 * or rejects with an error.
 */
function fetchModel(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // Nếu lỗi (ví dụ 404, 500), bắn ra lỗi
          return reject(new Error(`HTTP error! status: ${response.status}`));
        }
        return response.json(); // Chuyển đổi dữ liệu nhận được sang JSON
      })
      .then((data) => {
        resolve({ data: data }); // Trả về dữ liệu đúng định dạng
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default fetchModel;