const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// thezootree
// gnKgpzDZ0fa8Cj6x

// Apply CORS configuration
const corsOptions = {
  origin: '*', // Replace '*' with specific domains for more secure configurations
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

async function main() {
  await mongoose.connect(
    "mongodb+srv://thezootree:gnKgpzDZ0fa8Cj6x@recipe-food-react.vuloe.mongodb.net/Recipe-Food-react?retryWrites=true&w=majority&appName=Recipe-Food-react"
  );
}

main().then(() => console.log("Mongodb Connected Succeffuly")).catch((err) => console.log(err));


// Routes
const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes = require("./src/routes/CategoryRoute")

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes);

app.get("/", (req, res) => {
  res.send("Recipe Food Server is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
