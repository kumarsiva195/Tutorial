const express = require("express");
const users = require("./routes/api/users");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const app = express();

//database connection
require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("clientnew/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "clientnew", "build", "index.html"));
	});
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port: ${port}`));
