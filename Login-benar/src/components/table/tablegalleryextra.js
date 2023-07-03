import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
const Tablegalleryextra = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      description: "Gambar ini sedang mengerjakan kodingan Website",
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
    return () => {
      data.forEach((item) => {
        if (item.image) {
          URL.revokeObjectURL(item.imageURL);
        }
      });
    };
  }, [data]);

  const BukaModal = () => {
    setModalOpen(true);
  };

  const TutupModal = () => {
    setModalOpen(false);
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

    setData((prevData) => [
      ...prevData,
      { ...newItem, imageURL, selected: false },
    ]);

    setModalOpen(false);
    setNewItem({
      id: "",
      image: null,
      title: "",
      description: "",
      selected: false,
    });
  };

  const Hapus = () => {
    const updatedData = data.filter((item) => !item.selected);
    setData(updatedData);
  };

  const PilihSemua = () => {
    const updatedData = data.map((item) => {
      return {
        ...item,
        selected: !selectAll,
      };
    });
    setData(updatedData);
    setSelectAll(!selectAll);
  };

  const PilihItem = (itemId) => {
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
            onClick={BukaModal}
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
            onClick={Hapus}
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
                  onChange={PilihSemua}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                No
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Gambar
              </th>

              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Deskripsi
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
                    onChange={() => PilihItem(item.id)}
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
                      className="h-12 w-20 rounded-lg"
                    />
                  )}
                </td>

                <td className="px-6 py-4  text-sm leading-5 text-black border-b">
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
                  Tambah Extrakulikuler Baru
                </h1>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    id="description"
                    type="text"
                    name="description"
                    className="w-full border border-gray-400 hover:border-gray-500 rounded-md shadow-sm sm:text-lg"
                    rows={4}
                    value={newItem.description}
                    onChange={Masukan}
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
                    Simpan
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

export default Tablegalleryextra;
