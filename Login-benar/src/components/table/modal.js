import { useState } from "react";

function Modal({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSave = () => {
    // Logika untuk menyimpan data ke server
    console.log("Judul:", title);
    console.log("Deskripsi:", description);
    console.log("Gambar:", image);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-1/2 p-6 rounded-lg">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
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
          <h1 className="text-2xl font-bold mb-4">Tambah Jurusan Baru</h1>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Judul/Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full border border-gray-400 hover:border-gray-500 rounded-md shadow-lg sm:text-xl"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Deskripsi
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-400 hover:border-gray-500 rounded-md shadow-sm sm:text-lg"
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Unggah Gambar
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              className="w-full"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={handleSave}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
