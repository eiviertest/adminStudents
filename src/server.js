const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

//Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  next();
});

//Routes
const routesGrade = require("./routes/routesGrade");
const routesCareer = require("./routes/routesCareer");
const routesStudent = require("./routes/routesStudent");
const routesSubject = require("./routes/routesSubject");
const routesUnitSubject = require("./routes/routesUnitSubject");

app.use("/grades", routesGrade);
app.use("/careers", routesCareer);
app.use("/students", routesStudent);
app.use("/subjects", routesSubject);
app.use("/unitSubject", routesUnitSubject);

//Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
