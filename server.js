const express = require("express");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");
//Cookies are small pieces of data that websites store in your browser
//When you visit a website, the browser sends these cookies to the server so the site can "remember" you
//cookie-parser turns cookies into a simple JavaScript object so server can easily read and use the data
//Accessing Cookies => req.cookies
//Signed Cookies(have security key) => req.singnedCookies
const cors = require("cors");

const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

// mongoose
//   .connect("db_url")
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log(error));
  

mongoose
  .connect("mongodb+srv://vinventor1999:passwordmernproject123@cluster0.qmugk.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

//mongoose.connect() will return a promise

  // mongodb+srv://vinventor1999:passwordmernproject123@cluster0.qmugk.mongodb.net/

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type", //Type of content sent in request body
      "Authorization", //Used to sent authentication tokens
      "Cache-Control", //Helps control how responses are cached on the client side and Cache is a place where frequently used information is temporarily stored so it can be quickly accessed later
      "Expires", //This header specifies an expiration date for the cached resource
      "Pragma", //Similar to Cache-Control, but mainly for backward compatibility with older HTTP/1.0 caches
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json()); //Incoming JSON data from requests to Javascript Object

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));