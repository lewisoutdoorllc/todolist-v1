const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

let items = ["Shop", "Parts", "ToDo"];

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleDateString("en-US", options);

res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function(req,res) {
let item = req.body.newItem;
  
items.push(item);

res.redirect("/");

});

  // var currentDay = today.getDay();
  // var day = "";

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;

  //   default:
  //    console.log("Error: Current day is equal to: "+ currentDay);
  // }

  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "Weekday";
  // }



app.listen(3000, function () {
  console.log("Server running on port 3000");
});
