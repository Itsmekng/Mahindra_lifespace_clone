import phoneIcon from "../assets/icon/icon.png";
import flowerIcon from "../assets/icon/ef5fab599da1461babc8d78af519985c7dcf31bb.png";

export default function Disclamer() {
  return (
    <section className="w-screen h-sreen bgImage">
      <nav className="w-full h-14 flex items-center justify-between px-8 md:px-24 py-12 md:py-8 ">
          <h1 className="text-lg font-semibold text-black space-y-0 leading-none">
            <span className="text-red-500">MAHINDRA</span> LIFESPACES
          </h1>

          <div className="flex items-center gap-4">
            <button className="text-gray-300 text-nowrap flex gap-2 bg-red-500 py-3 md:py-2 px-8 rounded-3xl hover:text-white transition items-center">
              <img className="w-4 h-4" src={phoneIcon} alt="" />+ 91 9901717339
            </button>
          </div>
        </nav>
        <h2 className="text-5xl lg:text-6xl font-semibold mb-4 text-center text-gray-700 mt-8">
          Disclaimer
        </h2>

         <div className="w-full justify-items-center p-0 my-4 mb-12">
            <img src={flowerIcon} className="h-8 md:h-16 w-4/6" alt="" />
          </div>
          <div className="px-4 md:px-24">
            <h2 className="mb-2 font-semibold text-xl">1. Primark Realtors</h2>
            <p className="">We value your privacy and are committed to protecting your personal information.
            We collect limited data—such as your name, contact details, and property preferences—to provide personalized real estate solutions and improve our services.
            Your data may be shared with trusted partners (like builders, legal advisors, or financial institutions) only for service-related purposes. We never sell or misuse your information.</p>

            <p>All data is stored securely and used in compliance with applicable privacy laws. By engaging with us, you consent to our data practices. 
            For any queries or to manage your data, please contact us at yasir.mg@gmail.com</p>

            <h2 className="mb-2 mt-6 font-semibold text-xl">2. Contact Us</h2>
            <p>For questions, data requests, or concerns related to privacy, contact:yasir.mg@gmail.com</p>
          </div>

          <div className="bg-red-500 pb-10 pt-6 mt-24 block">
            <div className="text-center text-white my-8 space-y-3">
            <p>PROJECT RERA No: PRM/KA/RERA/1251/446/PR/171225/008348</p>
            <p>AGENT RERA No.: PRM/KA/RERA/1251/446/AG/240723/004988</p>
            <p>Authorized channel partner of Mahindra Blossom by Mahindra Lifespaces</p>
            </div>

            <div className="md:block xl:flex justify-between text-center text-white text-sm px-8 block ">
              <p>DISCLAIMER | PRIVACY POLICY</p>
              <p>©2025. Mahindra Blossom . ALL RIGHTS RESERVED</p>
            </div>
          </div>
    </section>
  )
}
