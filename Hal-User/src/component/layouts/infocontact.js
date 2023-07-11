const InfoContact = () => {
  return (
    <div className="ps-[70px] pe-[70px] text-white mt-20">
      <div className="mt-1 flex justify-center space-x-12 rounded-full py-8 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
        <div className="flex items-center">
          <img src="./images/icons/lokasi.svg" alt="lokasi" />
          <div className="ml-4 text-md text-white-600">
            <p className="font-bold">Alamat</p>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>
        <div className="flex items-center border-l">
          <img
            src="./images/icons/telepon.svg"
            alt="telepon"
            className="ml-10"
          />
          <div className="ml-4 text-md text-white-600">
            <p className="font-bold">Telepon</p>
            <p>(110) 1111-1010</p>
          </div>
        </div>
        <div className="flex items-center border-l">
          <img src="./images/icons/email.svg" alt="email" className="ml-10" />
          <div className="ml-4 text-md text-white-600">
            <p className="font-bold">Email</p>
            <p>admin@sekolah.sch.id</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContact;
