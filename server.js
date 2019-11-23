var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var reservation = [
    {
        ID: 1,
        Name: "kam",
        Email: "kamzh88@hotmail.com",
        Phone: "862-324-1206"
    },
    {
        ID: 2,
        Name: "John",
        Email: "JohnG@gmail.com",
        Phone: "555-555-5555"
    }
];

var waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"home.html"));
});

//input reservation
app.get("/make", function(req,res) {
    res.sendFile(path.join(__dirname, "make.html"))
});

//view all reservations
app.get("/view.html", function(req,res) {
    res.sendFoile(path.join(__dirname,"view.html"))
});

app.get("/api/reservation/:reservations", function(req, res) {
    var chosen = req.params.reservations;
     console.log(chosen);

     for (var i = 0; i < reservation.length; i++) {
        if (chosen === reservation[i].Name) {
          return res.json(reservation[i]);
        }
      }
      return res.json(false);
})
app.get("/api/reservation", function(req, res) {
    return res.json(reservation);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})