import Guru from "../models/Guru.Model.js";
import path from "path";
import fs from "fs";

export const getData = async (req, res) => {
  try {
    const response = await Guru.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getGuruRPL = async (req, res) => {
  try {
    const response = await Guru.findAll({
      where: {
        jurusan: "RPL",
      },
      limit: 3,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getDataById = async (req, res) => {
  try {
    const response = await Guru.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createData = async (req, res) => {
  if (!req.files || !req.body.nama || !req.body.jurusan) {
    return res.status(400).json({ msg: "Invalid request data" });
  }

  const name = req.body.nama;
  const jurusan = req.body.jurusan;
  const file = req.files.gambar;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/guru/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) {
    return res.status(422).json({ msg: "Invalid image type" });
  }

  if (fileSize > 5000000) {
    return res.status(422).json({ msg: "Image size should not exceed 5 MB" });
  }

  file.mv(`./public/images/guru/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Guru.create({
        name: name,
        image: fileName,
        url: url,
        jurusan: jurusan,
      });
      res.status(201).json({ msg: "Data Berhasil Di Buat" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server error" });
    }
  });
};

export const getDataRPL = async (req, res) => {
  try {
    const response = await Guru.findAll({
      where: {
        jurusan: "RPL",
      },
      limit: 3,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getDataBank = async (req, res) => {
  try {
    const response = await Guru.findAll({
      where: {
        jurusan: "Bank",
      },
      limit: 3,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
export const getDataAKN = async (req, res) => {
  try {
    const response = await Guru.findAll({
      where: {
        jurusan: "AKN",
      },
      limit: 3,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
export const getDataELIND = async (req, res) => {
  try {
    const response = await Guru.findAll({
      where: {
        jurusan: "ELIND",
      },
      limit: 3,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
export const getDataTKRO = async (req, res) => {
  try {
    const response = await Guru.findAll({
      where: {
        jurusan: "TKRO",
      },
      limit: 3,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
export const getDataTBSM = async (req, res) => {
  try {
    const response = await Guru.findAll({
      where: {
        jurusan: "TBSM",
      },
      limit: 3,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateData = async (req, res) => {
  const guru = await Guru.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!guru) return res.status(404).json({ msg: "Data tidak ada" });

  let fileName = "";
  if (req.files === null) {
    fileName = guru.image;
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

    const filepath = `./public/images/guru/${guru.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/guru/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.nama;
  const jurusan = req.body.jurusan;
  const url = `${req.protocol}://${req.get("host")}/images/guru/${fileName}`;

  try {
    await Guru.update(
      { name: name, jurusan: jurusan, image: fileName, url: url },
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
  const guru = await Guru.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!guru) return res.status(404).json({ msg: "Data tidak ada!" });

  try {
    // const filepath = `./public/images/${guru.image}`;
    // fs.unlinkSync(filepath);
    await Guru.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
