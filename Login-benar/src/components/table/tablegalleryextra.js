import React, { useState } from "react";
import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import Modal from "./modal";
const Tablegalleryextra = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      description:
        "Anak RPL Sedang Berlomba Membuat Web yang Keren Menggunakan React JS, Dan Pemenang dari perlombaan tersebuat ialah Narendi",
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      description: "Anak-",
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      description: "Deskripsi 1",
    },
    {
      id: 4,
      image: "https://example.com/image3.jpg",
      description: "Deskripsi 1",
    },
    {
      id: 5,
      image: "https://example.com/image3.jpg",
      description: "Deskripsi 1",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleNewAdd = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto">
      <div className="justify-start pt-6 pl-9 pb-6 flex pr-7">
        <div className="font-bold pr-5 text-xl">Gallery Extrakulikuler</div>
        <div>
          <button
            className="rounded-xl bg-red-500 hover:bg-red-600 text-white w-40 h-9 flex text-sm items-center py-2 px-4"
            onClick={handleNewAdd}
          >
            <div className="pr-3">
              <AiOutlinePlus className=" w-4 h-5 " />
            </div>
            Tambah Baru
          </button>
          {showModal && <Modal onClose={closeModal} />}
        </div>
        <div className="pl-4">
          <button className="border border-red-400 bg-white text-red-500 hover:border-white py-2 px-4 rounded-xl w-36 h-9 flex items-center text-sm ">
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
                  className="form-checkbox text-blue-500 h-4 w-4"
                />
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                No
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Gambar
              </th>

              <th className="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500 h-4 w-4"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 border-b">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b">
                  <img
                    src={item.image}
                    alt={`Image ${item.id}`}
                    className="h-8 w-8 rounded-full"
                  />
                </td>

                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 border-b">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tablegalleryextra;
