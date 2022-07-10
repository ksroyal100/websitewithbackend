const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const  Register = require("./models/maindb"); 
const async = require("hbs/lib/async");
const { json } = require("express");
const { executionAsyncResource } = require("async_hooks");

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public" );
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set('views', template_path);
hbs.registerPartials(partial_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/" , (req,  res) => {
  res.render("index");
});

app.get("/register" , (req,  res) => {
  res.render("register");
});

app.post("/register" , async (req,  res) => {
   try {


    const employeeregister = new Register({
      name : req.body.name,

      email : req.body.email,

      Phone_no : req.body.Phone_no

    })

   const registered = await employeeregister.save();
   res.status(201).render("index");

   } catch (error) {
     res.status(400).send(error);
   }
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);

    console.log("running successully");
})
