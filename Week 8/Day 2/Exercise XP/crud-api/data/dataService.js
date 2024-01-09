const axios = require("axios");

const fetchPosts = async () => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      const data = response.data;
      console.log("The data have been fetched:");
      return data;
    }

module.exports = { fetchPosts };
