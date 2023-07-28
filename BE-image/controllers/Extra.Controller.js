import Extrakulikuler from "../models/Extra.model.js";
import path from "path";
import fs from "fs";

export const getData = async (req, res) => {
  try {
    const { latest } = req.query;
    if (latest && latest.toLowerCase() === "true") {
      const response = await Extrakulikuler.findAll({
        order: [["createdAt", "DESC"]],
        limit: 3,
      });
      res.json(response);
    } else {
      const response = await Extrakulikuler.findAll();
      res.json(response);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
export const getDataById = async (req, res) => {
  try {
    const response = await Extrakulikuler.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createData = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "Tidak Ada File yang Diupload" });
  const description = req.body.deskripsi;
  // const role = "admin";
  const file = req.files.gambar;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/extra/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Image tidak benar" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image tidak bisa lebih dari 5 MB" });

  file.mv(`./public/images/extra/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Extrakulikuler.create({
        description: description,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Data Berhasil Di Buat" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateData = async (req, res) => {
  const extrakulikuler = await Extrakulikuler.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!extrakulikuler) return res.status(404).json({ msg: "Data tidak ada" });

  let fileName = "";
  if (req.files === null) {
    fileName = extrakulikuler.image;
  } else {
    const file = req.files.gambar;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "image tidak valid" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image tidak bisa lebih dari 5 MB" });

    // const filepath = `./public/images/extra/${extrakulikuler.image}`;
    // fs.unlinkSync(filepath);

    file.mv(`./public/images/extra/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const description = req.body.deskripsi;
  const url = `${req.protocol}://${req.get("host")}/images/extra/${fileName}`;

  try {
    await Extrakulikuler.update(
      { description: description, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Data Berhasil di Perbarui" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteData = async (req, res) => {
  const extrakulikuler = await Extrakulikuler.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!extrakulikuler) return res.status(404).json({ msg: "Data tidak ada!" });

  try {
    // const filepath = `./public/images/${extrakulikuler.image}`;
    // fs.unlinkSync(filepath);
    await Extrakulikuler.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
