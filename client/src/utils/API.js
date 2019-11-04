import axios from "axios";

export default {
  // // Gets books from the Google API
  getRecords: function(q) {
   return axios.get("/api/records", { params: { q: "email:" + q } });
  },
  // Gets all saved books
  getSavedRecords: function() {
    return axios.get("/api/records");
  },
  // Deletes the saved book with the given id
  deleteRecords: function(id) {
    return axios.delete("/api/records/" + id);
  },
  // Saves an book to the database
  saveRecords: function(recordsData) {
    return axios.post("/api/records", recordsData);
  },

  getMatches: function() {
    return new Promise((resolve, reject)=> {
      axios.get("https://randomuser.me/api/?gender=female&results=15").then((res)=> {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            name: user.name.first,
            age: user.dob.age,
            image: user.picture.medium
          }
        })
        resolve(results);
      }).catch((err) => reject(err));
    })
  },
};
