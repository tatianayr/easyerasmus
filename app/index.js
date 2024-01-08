require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var morgan = require('morgan');

var app = express();

app.use(cookieSession({
  name: 'session',
  secret: process.env.COOKIE_SECRET,
  // Cookie Options
  maxAge: 6 * 60 * 60 * 1000 // 6 hours
}))

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const adminRouter = require("./routes/adminRoutes");
const userRouter = require("./routes/estudanteRoutes");
const progRouter = require("./routes/programasRoutes");
const custoRouter= require("./routes/cursosRoutes");

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/programa", progRouter);
app.use("/api/curso", custoRouter);
app.use(express.static(path.join(__dirname, './web')));

const port = parseInt(process.env.port || '8080');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './web', 'home.html'));
});

app.listen(port, function() {
  console.log("Server running at http://localhost:" + port);
});
