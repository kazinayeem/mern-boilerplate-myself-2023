import axios from "axios";

// create a new instance of the axios client with a custom config
const Axios = axios.create({
  baseURL: "http:localhost:3030",
  headers: { Authorization: "Bearer YOUR_TOKEN" },
});

export const postreq = () => {
  Axios.post("", {
    name: "test",
    email: "test@gmail.com",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
