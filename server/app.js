var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { create } = require("express-handlebars");
var BlogsRoute = require("./routes/blogs");

var app = express();

const hbs = create({
    //config
    encoding: "utf8",
    extname: `.handlebars`,
    layoutsDir: path.join(__dirname, "views/layout"),
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views/partials"),
});
// view engine setup
app.engine("handlebars", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/blogs", BlogsRoute);

// routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404 Error" });
});
module.exports = app;