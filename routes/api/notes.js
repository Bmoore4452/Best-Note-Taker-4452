const router = require("express").Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../../helpers/fsUtils");

router.get("/notes", (request, response) => {
  readFromFile("./db/db.json").then((data) => response.json(JSON.parse(data)));
});

router.post("/notes", (request, response) => {
  console.log(request.body);

  const { title, text } = request.body;

  if (request.body) {
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, "./db/db.json");
    response.json(`Note added successfully 🚀`);
  }
});

module.exports = router;
