import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const KepSek = () => {
  const [tambahModalOpen, setTambahModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteconfirm, setDeleteConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null);
  const [previewGambar, setPreviewGambar] = useState(null);
  const [datakepsek, setDataKepSek] = useState([]);
  useEffect(() => {
    fetchDataKepSek();
  }, []);

  const fetchDataKepSek = async () => {
    try {
      const response = await axios.get("http://localhost:3100/kepsek/all");
      setDataKepSek(response.data);
    } catch (error) {
      toast.error(
        "Terjadi kesalahan saat menampilkan data jurusan:",
        error.message
      );
    }
  };

  const BukatambahModal = () => {
    setTambahModalOpen(true);
  };

  const BukaupdateModal = (data) => {
    setUpdateModalOpen(true);
    setId(data.id);
    setNama(data.name);
    setDeskripsi(data.description);
    setPreviewGambar(data.url);
    setGambar(null);
  };

  const DeleteNotif = (data) => {
    setDeleteConfirm(true);
    setId(data.id);
  };

  const TutupModal = () => {
    setTambahModalOpen(false);
    setDeleteConfirm(false);
    setUpdateModalOpen(false);
    setId("");
    setNama("");
    setDeskripsi("");
    setGambar(null);
    setPreviewGambar(null);
  };

  const handleGambarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGambar(file);
      setPreviewGambar(URL.createObjectURL(file));
    } else {
      setGambar(null);
      setPreviewGambar(null);
    }
  };

  const tambahKepsek = async () => {
    try {
      setLoading(true);
      if (!gambar) {
        setLoading(false);
        toast.warning("Gambar wajib diisi");
        return;
      }

      const formData = new FormData();
      formData.append("nama", nama);
      formData.append("deskripsi", deskripsi);
      formData.append("gambar", gambar);

      await axios.post("http://localhost:3100/kepsek", formData);
      fetchDataKepSek();

      toast.success("Jurusan berhasil ditambahkan!");
      setLoading(false);
      TutupModal();
    } catch (error) {
      setLoading(false);
      toast.error("Terjadi kesalahan saat menambahkan jurusan");
    }
  };

  const updateKepsek = async () => {
    try {
      setLoading(true);
      if (!gambar) {
        setLoading(false);
        toast.warning("Gambar wajib diisi");
        return;
      }

      const formData = new FormData();
      formData.append("nama", nama);
      formData.append("deskripsi", deskripsi);
      formData.append("gambar", gambar);

      await axios.patch(`http://localhost:3100/kepsek/${id}`, formData);
      fetchDataKepSek();

      toast.success("Jurusan berhasil diperbarui!");
      setLoading(false);
      TutupModal(false);
    } catch (error) {
      setLoading(false);
      toast.error(
        "Terjadi kesalahan saat memperbarui jurusan: " + error.message
      );
    }
  };

  const deleteKepsek = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3100/kepsek/${id}`);
      fetchDataKepSek();

      toast.success("Jurusan berhasil dihapus!");
      setLoading(false);
      TutupModal(false);
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus jurusan:" + error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="justify-start pt-6 pl-9 pb-6 flex pr-7">
        <div className="font-bold font-serif pr-5 text-xl">Kepala Sekolah</div>
        <div>
          <button
            className="rounded-xl bg-red-500 hover:bg-red-600 text-white w-40 h-9 flex text-sm items-center py-2 px-4"
            onClick={BukatambahModal}
          >
            <div className="pr-3">
              <AiOutlinePlus className="w-4 h-5" />
            </div>
            Tambah Baru
          </button>
        </div>
      </div>

      <div className="container flex justify-center mx-auto max-w-5xl rounded-xl overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border text-center bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                No
              </th>
              <th className="px-6 py-3 border text-center bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Gambar
              </th>
              <th className="px-6 py-3 border text-center bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Nama
              </th>

              <th className="px-6 py-3 text-center border bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Deskripsi
              </th>
              <th className="px-6 py-3 border text-center bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {datakepsek.map((kepsek, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-center whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                  {index + 1}
                </td>
                <td className="px-6 py-4 flex justify-center whitespace-no-wrap border-none">
                  <img
                    src={kepsek.url}
                    alt={kepsek.name}
                    className="h-16 w-16 rounded-full"
                  />
                </td>

                <td className="px-6 text-center py-4 whitespace-no-wrap text-sm leading-5 font-medium text-black border-b">
                  {kepsek.name}
                </td>
                <td className="px-6 text-center py-4 whitespace-no-wrap max-w-md text-sm leading-5 font-medium text-black border-b">
                  {kepsek.description}
                </td>

                <td className="px-2 py-4 text-sm border-b">
                  <div className="flex justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                      onClick={() => BukaupdateModal(kepsek)}
                    >
                      <BsPencilSquare />
                    </button>
                    <div className="pl-3">
                      <div className="relative inline-block text-left">
                        <button
                          className="bg-red-600 hover:bg-red-500 text-white py-1 px-2 rounded"
                          onClick={() => DeleteNotif(kepsek)}
                        >
                          <AiTwotoneDelete className="w-4 h-5 " />
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
      />

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-gray-900" />
        </div>
      )}

      {tambahModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50">
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white w-1/2 p-6 rounded-lg">
                <div className="flex justify-end">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={TutupModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <h1 className="text-2xl font-bold mb-4">Tambah Kepsek Baru</h1>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full border-2 border-gray-400 focus:border-red-500 focus:bg-white focus:outline-none rounded-md shadow-sm sm:text-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Deskripsi
                  </label>
                  <textarea
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:border-red-500 focus:bg-white focus:outline-none sm:text-lg"
                    rows={4}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    <div className="flex">
                      Unggah Gambar
                      <div className="text-red-500 ml-2">*</div>
                    </div>
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleGambarChange}
                    className="w-full cursor-pointer"
                  />
                </div>

                {previewGambar && (
                  <div className="mb-4">
                    <img
                      src={previewGambar}
                      alt="Preview Gambar"
                      className="w-32 h-48 rounded-lg"
                    />
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={tambahKepsek}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {updateModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50">
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white w-1/2 p-6 rounded-lg">
                <div className="flex justify-end">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={TutupModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <h1 className="text-2xl font-bold mb-4">Update Kepsek</h1>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full border-2 border-gray-400 focus:border-red-500 focus:bg-white focus:outline-none rounded-md shadow-sm sm:text-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Deskripsi
                  </label>
                  <textarea
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:border-red-500 focus:bg-white focus:outline-none sm:text-lg"
                    rows={4}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    <div className="flex">
                      Unggah Gambar
                      <div className="text-red-500 ml-2">*</div>
                    </div>
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleGambarChange}
                    className="w-full cursor-pointer"
                  />
                </div>

                {previewGambar && (
                  <div className="mb-4">
                    <img
                      src={previewGambar}
                      alt="Preview Gambar"
                      className="w-32 h-48 rounded-lg"
                    />
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={updateKepsek}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {deleteconfirm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50">
          <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="bg-white w-1/3 p-6 rounded-lg">
              <div className="mb-4">
                <h1 className="text-2xl font-bold">Konfirmasi Hapus Kepsek</h1>
                <p className="text-gray-700 mb-4">
                  Apakah Anda yakin ingin menghapus Kepsek ini?
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
                  onClick={TutupModal}
                >
                  Batal
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={deleteKepsek}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KepSek;
