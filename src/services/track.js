import instance from "./axios-instance.js";

const gettingApi = {};

gettingApi.search = function(q) {
  const type = "track";

  return instance
    .get("/search", {
      params: {
        type,
        q
      }
    })
    .then(response => response.data);
};

export default gettingApi;
