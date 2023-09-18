import Image from "../models/Image.Model.js";
import path from "path";

export const getData = async (req, res) => {
  try {
    const response = await Image.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// export const getDataById = async (req, res) => {
//   try {
//     const response = await Image.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createData = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "Tidak Ada File yang Diupload" });
  const name = req.body.nama;
  const description = req.body.deskripsi;
  const file = req.files.gambar;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/slider/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Image tidak benar" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image tidak bisa lebih dari 5 MB" });

  file.mv(`./public/images/slider/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Image.create({
        name: name,
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
  const image = await Image.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!image) return res.status(404).json({ msg: "Data tidak ada" });

  let fileName = "";
  if (req.files === null) {
    fileName = image.image;
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

    // const filepath = `./public/images/slider/${image.image}`;
    // fs.unlinkSync(filepath);

    file.mv(`./public/images/slider/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.nama;
  const description = req.body.deskripsi;
  const url = `${req.protocol}://${req.get("host")}/images/slider/${fileName}`;

  try {
    await Image.update(
      { name: name, description: description, image: fileName, url: url },
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
  const image = await Image.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!image) return res.status(404).json({ msg: "Data tidak ada!" });

  try {
    // const filepath = `./public/images/${image.image}`;
    // fs.unlinkSync(filepath);
    await Image.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
