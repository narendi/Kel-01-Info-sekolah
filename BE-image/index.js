import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import Jurusan from "./routes/Jurusan.Route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(Jurusan);

app.listen(3100, () => console.log("Server Normal, Sedang Berjalan..."));
