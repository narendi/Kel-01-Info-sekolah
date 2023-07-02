import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
// import Modal from "./modal";
const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      title: "RPL (Rekayasa Perangkat Lunak)",
      description: "Deskripsi 1",
      selected: false,
    },
    {
      id: 2,
      image: "https://example.com/image1.jpg",
      title: "RPL (Rekayasa Perangkat Lunak)",
      description: "Deskripsi 1",
      selected: false,
    },
    {
      id: 3,
      image: "https://example.com/image1.jpg",
      title: "RPL (Rekayasa Perangkat Lunak)",
      description: "Deskripsi 1",
      selected: false,
    },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    id: "",
    image: null,
    title: "",
    description: "",
  });

  useEffect(() => {
    // Membersihkan URL objek saat komponen di-unmount
    return () => {
      data.forEach((item) => {
        if (item.image) {
          URL.revokeObjectURL(item.imageURL);
        }
      });
    };
  }, [data]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
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

  const handleAddItem = () => {
    // Membuat URL objek untuk gambar yang diunggah
    const imageURL = newItem.image ? URL.createObjectURL(newItem.image) : "";

    // Menambahkan item baru ke data
    setData((prevData) => [
      ...prevData,
      { ...newItem, imageURL, selected: false },
    ]);

    // Menutup modal dan mengosongkan input
    setModalOpen(false);
    setNewItem({
      id: "",
      image: null,
      title: "",
      description: "",
      selected: false,
    });
  };

  const handleDeleteItems = () => {
    const updatedData = data.filter((item) => !item.selected);
    setData(updatedData);
  };

  const handleSelectAll = () => {
    const updatedData = data.map((item) => {
      return {
        ...item,
        selected: !selectAll,
      };
    });
    setData(updatedData);
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (itemId) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });
    setData(updatedData);
    setSelectAll(updatedData.every((item) => item.selected));
  };

  return (
    <div className="container mx-auto">
      <div className="justify-start pt-6 pl-9 pb-6 flex pr-7">
        <div className="font-bold pr-5 text-xl">Jurusan</div>
        <div>
          <button
            className="rounded-xl bg-red-500 hover:bg-red-600 text-white w-40 h-9 flex text-sm items-center py-2 px-4"
            onClick={handleModalOpen}
          >
            <div className="pr-3">
              <AiOutlinePlus className=" w-4 h-5 " />
            </div>
            Tambah Baru
          </button>
        </div>
        <div className="pl-4">
          <button
            className="border border-red-400 bg-white text-red-500 hover:border-white py-2 px-4 rounded-xl w-36 h-9 flex items-center text-sm "
            onClick={handleDeleteItems}
          >
            <div className="pl-4 pr-3">
              <AiTwotoneDelete className="w-4 h-5 " />
            </div>
            Hapus
          </button>
        </div>
      </div>

      <div className="container flex justify-center mx-auto max-w-5xl rounded-xl overflow-hidden border-2">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                No
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Title
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Description
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelectItem(item.id)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b">
                  {item.imageURL && (
                    <img
                      src={item.imageURL}
                      alt={`Image ${index + 1}`}
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                  {item.title}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 border-b">
                  {item.description}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm border-b">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
                    <BsPencilSquare />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-lg font-bold mb-4">Tambah Data Baru</h2>
            <div className="mb-4">
              <label htmlFor="id" className="block font-medium mb-2">
                ID:
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={newItem.id}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block font-medium mb-2">
                Gambar:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                name="image"
                onChange={handleInputChange}
                className="border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block font-medium mb-2">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newItem.title}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-medium mb-2">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleAddItem}
              >
                Simpan
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 ml-2 rounded"
                onClick={handleModalClose}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
