const mongoose = require("mongoose");
const MONGODB_URI = `mongodb+srv://kapxyale:alex45eivier@herramientas-tdenp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
