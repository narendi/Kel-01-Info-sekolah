import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Guru = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    id: "",
    image: null,
    title: "",
  });
  const [updateIndex, setUpdateIndex] = useState(-1);
  useEffect(() => {
    return () => {
      data.forEach((item) => {
        if (item.imageURL) {
          URL.revokeObjectURL(item.imageURL);
        }
      });
    };
  }, []);

  const BukaModal = () => {
    setModalOpen(true);
  };

  const TutupModal = () => {
    setModalOpen(false);
    setUpdateIndex(-1);
  };

  const Masukan = (e) => {
    if (e.target.name === "image") {
      setNewItem({
        ...newItem,
        image: e.target.files[0],
      });
    } else {
      setNewItem({
        ...newItem,
        [e.target.name]: e.target.value,
      });
    }
  };

  const TambahItem = () => {
    const imageURL = newItem.image ? URL.createObjectURL(newItem.image) : "";

    if (updateIndex !== -1) {
      // Jika updateIndex bukan -1, berarti ada item yang akan diupdate
      setData((prevData) => {
        const newData = [...prevData];
        const updatedItem = newData[updateIndex];

        // Mengupdate item yang dipilih dengan newItem
        updatedItem.title = newItem.title;
        updatedItem.imageURL = imageURL;

        return newData;
      });

      setUpdateIndex(-1); // Reset nilai updateIndex setelah update selesai
    } else {
      // Jika updateIndex masih -1, berarti menambahkan item baru
      setData((prevData) => [
        ...prevData,
        { ...newItem, imageURL, selected: false },
      ]);
    }
    setModalOpen(false);
    setNewItem({
      id: "",
      image: null,
      title: "",
      description: "",
      selected: false,
    });
  };

  const handleDelete = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      const deletedItem = newData.splice(index, 1)[0];

      if (deletedItem.imageURL) {
        URL.revokeObjectURL(deletedItem.imageURL);
      }

      return newData;
    });
  };

  const handleUpdate = (index) => {
    const selectedData = data[index];
    setModalOpen(true);
    setUpdateIndex(index);
    setNewItem({
      id: selectedData.id,
      image: null,
      title: selectedData.title,
      description: selectedData.description,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="justify-start pt-6 pl-9 pb-6 flex pr-7">
        <div className="font-bold font-serif pr-5 text-xl">Guru</div>
        <div>
          <button
            className="rounded-xl bg-red-500 hover:bg-red-600 text-white w-40 h-9 flex text-sm items-center py-2 px-4"
            onClick={BukaModal}
          >
            <div className="pr-3">
              <AiOutlinePlus className=" w-4 h-5 " />
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

              <th className="px-6 py-3 border text-center bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 text-center whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-none flex justify-center">
                  {item.imageURL && (
                    <img
                      src={item.imageURL}
                      alt={`Image ${index + 1}`}
                      className="h-12 w-14 rounded-lg"
                    />
                  )}
                </td>

                <td className="px-6 text-center py-4 whitespace-no-wrap text-sm leading-5 font-medium text-black border-b">
                  {item.title}
                </td>

                <td className="px-2 py-4 text-sm border-b">
                  <div className="flex justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                      onClick={() => handleUpdate(index)}
                    >
                      <BsPencilSquare />
                    </button>
                    <div className="pl-3">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() => handleDelete(index)}
                      >
                        <AiTwotoneDelete className="w-4 h-5 " />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
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
                <h1 className="text-2xl font-bold mb-4">
                  {updateIndex !== -1 ? "Update Guru" : "Tambah Guru Baru"}
                </h1>

                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Nama
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="w-full border-2 border-gray-400 focus:border-red-500 focus:bg-white focus:outline-none rounded-md shadow-sm sm:text-lg"
                    value={newItem.title}
                    onChange={Masukan}
                  />
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
                    name="image"
                    accept="image/*"
                    className="w-full cursor-pointer"
                    onChange={Masukan}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={TambahItem}
                  >
                    {updateIndex !== -1 ? "Update" : "Simpan"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guru;
// const [updateIndex, setUpdateIndex] = useState(-1);
// const [showConfirmation, setShowConfirmation] = useState(false);
// const confirmDelete = (index) => {
//   setUpdateIndex(index);
//   setShowConfirmation(true);
// };

// onClick={() => confirmDelete(index)}

// {showConfirmation && (
//   <div className="fixed inset-0 bg-gray-500 bg-opacity-50">
//     <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
//       <div className="bg-white w-1/3 p-6 rounded-lg">
//         <div className="mb-4">
//           <h1 className="text-2xl font-bold">Konfirmasi Hapus Jurusan</h1>
//           <p className="text-gray-700 mb-4">
//             Apakah Anda yakin ingin menghapus jurusan ini?
//           </p>
//         </div>
//         <div className="flex justify-end">
//           <button
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
//             onClick={cancelDelete}
//           >
//             Batal
//           </button>
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//             onClick={proceedDelete}
//           >
//             Hapus
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}
