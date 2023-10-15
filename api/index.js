const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer")
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(console.log("connected to mongoose")).catch(err=> console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,"images");
    },
    filename:(req, file, cb)=>{
        cb(null, "hello.jpeg");
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", ()=>{
    console.log("api is running");
})
