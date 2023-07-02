import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      title: "Judul 1",
      description: "Deskripsi 1",
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      title: "Judul 2",
      description: "Deskripsi 2",
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      title: "Judul 3",
      description: "Deskripsi 3",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
  });

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = () => {
    const updatedData = [...data, newItem];
    setData(updatedData);
    setNewItem({
      id: "",
      image: "",
      title: "",
      description: "",
    });
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="mb-4 flex justify-between">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleModalOpen}
          >
            Tambah Baru
          </button>
        </div>
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
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
            <th className="px-6 py-3 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b">
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="h-8 w-8 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                {item.title}
              </td>
              <td className="px-6 py-4 whitespace-pre-wrap text-sm leading-5 text-gray-500 border-b">
                {item.description}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
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
                Image URL:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={newItem.image}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
