import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import Jurusan from "./routes/Jurusan.Route.js";
import Extrakulikuler from "./routes/Extra.Route.js";
import Teachers from "./routes/Guru.Route.js";
import Image from "./routes/Image.Route.js";
import KepSek from "./routes/Item.Route.js";

const app = express();

app.use(FileUpload());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(Jurusan);
app.use(Extrakulikuler);
app.use(Teachers);
app.use(Image);
app.use(KepSek);

const port = 3100;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
