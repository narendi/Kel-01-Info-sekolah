// controllers/userController.js
import User from "../models/user.js";

export async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: "Username tidak ditemukan" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Password salah" });
    }

    // Jika login berhasil
    return res.status(200).json({ message: "Login berhasil" });
  } catch (error) {
    console.error("Terjadi kesalahan saat login:", error);
    return res.status(500).json({ message: "Terjadi kesalahan saat login" });
  }
}
