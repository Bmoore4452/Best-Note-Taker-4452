const express = require("express");
const app = express();
const homeRoutes = require("./routes/home");
const notes = require("./routes/api/notes");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", homeRoutes);
app.use("/api", notes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
