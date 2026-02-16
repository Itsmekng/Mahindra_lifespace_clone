import phoneIcon from "../assets/icon/icon.png";
import giff from "../assets/git/034046e8228558a806532750de8a1b1bd894674d.gif";
import flowerIcon from "../assets/icon/ef5fab599da1461babc8d78af519985c7dcf31bb.png";
import flowerIcon2 from "../assets/icon/image 5.png";
import img1 from "../assets/images/01f06dd93195733a6bf18c52e5ab013336cd8186.jpg";
import img2 from "../assets/images/34d0ac30d3fdaf3b6a6383a9fb085f679211c008.png";
import soldout from "../assets/images/939fc0bbd2dca790cfa56405ebe66c64bebf2f53.png";

import collageImage from "../assets/collageImage/Rectangle 75.png";
import collageImage1 from "../assets/collageImage/hover (1).png";
import collageImage2 from "../assets/collageImage/hover.png";
import collageImage3 from "../assets/collageImage/images (1).png";
import collageImage4 from "../assets/collageImage/images (2).png";
import collageImage5 from "../assets/collageImage/images (3).png";
import collageImage6 from "../assets/collageImage/images (4).png";
import collageImage7 from "../assets/collageImage/images (5).png";
import collageImage8 from "../assets/collageImage/images (6).png";
import collageImage9 from "../assets/collageImage/images (7).png";
import collageImage10 from "../assets/collageImage/images (8).png";
import collageImage11 from "../assets/collageImage/images.png";

import playIcon from "../assets/icon/Vector 22.png";

import tourBg from "../assets/images/a607d4da2bd0bbf94146dbb55346a24c7fd79e14.png";

import Mapimage from "../assets/images/ef4b0a5d56b51c6154c8364b961acb93bd084477.png";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bgImg overlay">
        <nav className="w-full h-14 flex items-center justify-between px-8 md:px-24  border-b py-12 md:py-8 ">
          <h1 className="text-lg font-semibold text-white space-y-0 leading-none">
            MAHINDRA LIFESPACES
          </h1>

          <div className="flex items-center gap-4">
            <button className="text-gray-300 text-nowrap flex gap-2 bg-red-500 py-3 md:py-2 px-8 rounded-3xl hover:text-white transition items-center">
              <img className="w-4 h-4" src={phoneIcon} alt="" />+ 91 9901717339
            </button>
          </div>
        </nav>
        <section className="flex flex-col lg:flex-row items-center bgImage2 justify-between px-8 lg:px-20 py-16 gap-12 text-white">
          <div className="flex-1 items-center text-center mt-111 backdrop-blur-3xl md:backdrop-blur-none sm:md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:mt-0 sm:-mt-40 ">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-nowrap">
              <span className="text-red-500">Mahindra</span> Blossom
            </h1>
            <p className=" italic">HOME OF POSITIVE ENERGY</p>
            <div className="w-full justify-items-center py-2 ">
              <img src={flowerIcon} className="h-5" alt="" />
            </div>

            <p>
              2, 3 & 4BHK premium homes in <br /> Hopefarm Jn., Whitefield,
            </p>

            <button className="font-light px-8 py-2 mt-4 text-white tracking-wide bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer [clip-path:polygon(8%_0%,100%_0%,92%_100%,0%_100%)]">
              {" "}
              <span className="font-normal text-xl">₹1.88cr</span> Onwards
            </button>

            <ul className="space-y-2 text-sm font-medium text-gray-300 justify-self-center-safe mt-8">
              <li className="flex items-center gap-3">
                <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                <span>8 Acres | 1 Towers | 6 Wings | 733 Units</span>
              </li>

              <li className="flex items-center gap-3">
                <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                <span>Make it yours at just 7.5% down payment</span>
              </li>

              <li className="flex items-center gap-3">
                <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                <span>Abutting Hopefarm metro station</span>
              </li>

              <li className="flex items-center gap-3">
                <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                <span>IGBC Gold rated green home</span>
              </li>

              <li className="flex items-center gap-3">
                <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                <span>75+ Years of Mahindra Trust</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={giff}
              alt="App preview"
              className="rounded-2xl shadow-2xl w-100 md:w-80 sm:w-100 border-4 border-white rounded-t-full sticky h-140 md:h-105 xl:h-140 mt-14"
            />
          </div>
        </section>
      </div>
      <div className="w-screen mt-200 md:mt-0">
        <section className="py-24 px-8 lg:px-20 space-y-28 bg-white text-black w-screen">
          <div className="block md:block xl:flex flex-col lg:flex-row gap-16 items-stretch text-center">
            <div className="w-full md:w-full sm:w-4/6 rounded-3xl block md:flex flex-col">
              <div>
                <h2 className="mb-2  text-3xl md:text-6xl font-semibold text-nowrap text-gray-700">
                  <span className="text-red-500">About</span> Mahindra Blossom
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Premium Apartments in Whitefield, BENGALURU
                </p>

                <img src={flowerIcon} className="h-8 w-full" alt="" />

                <div className="space-y-6 text-sm text-gray-700 text-left">
                  {[
                    "Mahindra Blossom is a thoughtfully designed premium residential apartment project in Whitefield, Bangalore, developed by Mahindra Lifespaces, part of the trusted Mahindra Group. Known for quality construction, transparency, and sustainable development, Mahindra Lifespaces has delivered landmark residential communities across India.",
                    "Strategically located near Hope Farm Junction, Whitefield, Mahindra Blossom offers 2 BHK, 3 BHK, and 4 BHK luxury apartments crafted for modern families, professionals, and long-term investors. The project blends urban convenience with green living, creating a calm, secure, and future-ready residential environment.",
                    "With excellent connectivity to ITPL, major tech parks, schools, hospitals, shopping hubs, and fully operational metro station , Mahindra Blossom ensures everyday comfort while offering strong potential for property appreciation and rental demand.",
                    "Mahindra Blossom is not just a home — it’s a lifestyle upgrade backed by the reliability of a trusted developer.",
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="ml-2 md:ml-8 mt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full h-42 md:w-2/6 mt-24 ml-0 md:-ml-16">
              <img
                src={img1}
                className="
            absolute 
            left-6 md:left-75 xl:-left-8 -top-4
            xl:w-[370px] xl:h-[300px]
            md:w-[400px] md:h-[270px]
            w-[300px] h-[230px]
            rounded-2xl
            rotate-[-98deg]
            shadow-2xl
            object-cover
          "
              />

              <img
                src={img2}
                className="
            absolute 
            left-12 md:left-85 xl:left-0 top-0
            xl:w-[370px] xl:h-[300px]
            md:w-[400px] md:h-[270px]
            w-[300px] h-[230px]
            rounded-2xl
            rotate-[-90deg]
            shadow-[0_25px_60px_rgba(0,0,0,0.25)]
            object-cover
          "
              />
            </div>
          </div>

          <div className="block md:block xl:flex lg:flex-row-reverse items-stretch justify-self-center">
            <div className=" w-full md:w-full sm:w-5/6  rounded-3xl md:p-12 text-center">
              <h2 className="mb-2 text-3xl md:text-6xl text-nowrap font-semibold text-gray-700">
                Features & <span className="text-red-500">Highlights</span>
              </h2>
              <p className="text-gray-600 mb-2 text-lg">
                Why Buy a Home at Mahindra Blossom
              </p>
              <img src={flowerIcon} className="h-8 w-full" alt="" />
              <div className="space-y-6 text-sm text-gray-700 justify-self-start">
                <ul className="space-y-2 text-sm font-medium text-black mt-2">
                  <div>
                    <li className="flex items-center gap-3 ">
                      <img
                        src={flowerIcon2}
                        className="w-5 h-5 object-contain"
                      />
                      <span>PRIME AND WELL CONNECTED LOCATION</span>
                    </li>
                    <p className="text-left pl-8 py-1 text-sm font-normal">
                      Located at Hope Farm Junction, Whitefield, Mahindra
                      Blossom places you minutes away from ITPL, tech parks, top
                      schools, hospitals, malls, and the fully operational metro
                      — ensuring effortless daily travel and high future value.s
                    </p>
                  </div>
                  <div>
                    <li className="flex items-center gap-3 ">
                      <img
                        src={flowerIcon2}
                        className="w-5 h-5 object-contain"
                      />
                      <span>Homes Designed for Space, Light & Comfort</span>
                    </li>
                    <p className="text-left pl-8 py-1 text-sm font-normal">
                      Choose from 2, 3 & 4 BHK premium apartments with smart,
                      vastu compliant layouts, abundant natural light, and
                      excellent ventilation — crafted for modern families,
                      work-from-home needs, and everyday comfort.
                    </p>
                  </div>

                  <div>
                    <li className="flex items-center gap-3 ">
                      <img
                        src={flowerIcon2}
                        className="w-5 h-5 object-contain"
                      />
                      <span>Wake Up to Green, Calm Living</span>
                    </li>
                    <p className="text-left pl-8 py-1 text-sm font-normal">
                      Surrounded by landscaped open spaces and greenery,
                      Mahindra Blossom offers 4 acres of landscaped garden with
                      bougainvillea canopies, aromatic and native plantations
                      and butterfly park{" "}
                    </p>
                  </div>

                  <div>
                    <li className="flex items-center gap-3 ">
                      <img
                        src={flowerIcon2}
                        className="w-5 h-5 object-contain"
                      />
                      <span>Resort-Style Amenities at Your Doorstep</span>
                    </li>
                    <p className="text-left pl-8 py-1 text-sm font-normal">
                      Offering 97,000 sq. ft. of amenities and clubhouse spaces,
                      including Bougainvillea canopies, half-Olympic size
                      swimming pool, 25+ seater business center, cricket nets, 2
                      running tracks, 2 indoor badminton courts and much more.
                    </p>
                  </div>

                  <div>
                    <li className="flex items-center gap-3 ">
                      <img
                        src={flowerIcon2}
                        className="w-5 h-5 object-contain"
                      />
                      <span>SUSTAINABLE LIVING</span>
                    </li>
                    <p className="text-left pl-8 py-1 text-sm font-normal">
                      Pre-certified IGBC Gold green homes with Net Zero Waste
                      practices and energy-efficient design for lower
                      consumption and sustainable living
                    </p>
                  </div>

                  <div>
                    <li className="flex items-center gap-3 ">
                      <img
                        src={flowerIcon2}
                        className="w-5 h-5 object-contain"
                      />
                      <span>75+ Years of Mahindra Trust</span>
                    </li>
                    <p className="text-left pl-8 py-1 text-sm font-normal">
                      Developed by Mahindra Lifespaces, part of the Mahindra
                      Group, this project offers peace of mind through quality
                      construction, transparency, & a proven track record of
                      timely delivery.
                    </p>
                  </div>
                </ul>
              </div>
            </div>

            <div className="hidden md:hidden xl:block rounded-3xl w-2/6 p-6 items-center">
              <img
                src={img1}
                className=" h-145 w-90 rounded-2xl mt-12"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="bg-red-500 py-28 px-6 lg:px-20 text-white">
          <div className="text-center">
            <h2 className="text-3xl dm:text-6xl text-left md:text-center font-semibold mb-4">
              Unlock the Door to Affordable Luxury
            </h2>
            <p className="text-xl opacity-80 text-right md:text-center">
              Explore apartment options and pricing details tailored to your
              needs
            </p>
          </div>

          <div className="w-full justify-items-center p-0 my-4">
            <img src={flowerIcon} className="h-10 md:h-16 w-full md:w-4/6" alt="" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center text-gray-600">
            <div className="bg-white rounded-3xl p-10 w-full md:w-fit sm:w-[27%] flex flex-col justify-between text-center">
              <div className="space-y-3">
                <p className="font-bold text-xl">3 BHK</p>
                <p className="text-md font-medium">1800-1850 sq.ft.</p>
                <p className="text-xl font-normal text-gray-600">
                  {" "}
                  <span className="font-bold">₹2.18cr</span> <br className="hidden md:block sm:hidden"/> Onwards
                </p>
              </div>

              <button className="bg-white border border-black w-60 self-center-safe text-black py-3 rounded-full mt-12 ">
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-3xl p-10 w-full md:w-fit sm:w-[27%] flex flex-col justify-between text-center">
              <div className="space-y-3">
                <p className="font-bold text-xl">3 BHK</p>
                <p className="text-md font-medium">1800-1850 sq.ft.</p>
                <p className="text-xl font-normal text-gray-600">
                  {" "}
                  <span className="font-bold">₹2.18cr</span> <br className="hidden md:block sm:hidden"/> Onwards
                </p>
              </div>

              <button className="bg-white border border-black w-60 self-center-safe text-black py-3 rounded-full mt-12 ">
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-3xl p-10 w-full md:w-fit sm:w-[27%] flex flex-col justify-between text-center">
              <div className="space-y-3">
                <p className="font-bold text-xl">3 BHK</p>
                <p className="text-md font-medium">1800-1850 sq.ft.</p>
                <p className="text-xl font-normal text-gray-600">
                  {" "}
                  <span className="font-bold">₹2.18cr</span> <br className="hidden md:block sm:hidden"/> Onwards
                </p>
              </div>

              <button className="bg-white border border-black self-center-safe w-60 text-black py-3 rounded-full mt-12 ">
                Get Quote
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-20 bg-white text-black">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl sm:text-6xl text-left md:text-center font-semibold mb-4">
              <span className="text-red-500">Amenities</span> for Every Age,
              Every Mood
            </h2>
            <p className="text-xl opacity-80 text-right md:text-center">
              Premium amenities that transform your home into a private retreat.
            </p>
          </div>
          <div className="w-full justify-items-center p-0 my-4">
            <img src={flowerIcon} className="h-10 md:h-16 w-full md:w-4/6" alt="" />
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-3 auto-rows-[180px] px-2 md:px-4 sm:px-6">
            <div className="col-span-12 md:col-span-6 row-span-2">
              <img
                src={collageImage11}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-5 md:col-span-2">
              <img
                src={collageImage3}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-7 md:col-span-4">
              <img
                src={collageImage4}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-7 md:col-span-4">
              <img
                src={collageImage2}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-5 md:col-span-2">
              <img
                src={collageImage1}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-6 md:col-span-4">
              <img
                src={collageImage5}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-6 md:col-span-4">
              <img
                src={collageImage6}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-12 md:col-span-4">
              <img
                src={collageImage7}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <img
                src={collageImage8}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <img
                src={collageImage9}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <img
                src={collageImage}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-6 md:col-span-3">
              <img
                src={collageImage10}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-red-500 py-24 px-6 lg:px-20">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl sm:text-6xl text-left md:text-center font-semibold mb-4">
              Thoughtfully Designed Floor Plans
            </h2>
            <p className="text-xl md:text-2xl opacity-80 text-right md:text-center">
              Smart layouts that maximize space, light, and everyday comfort.
            </p>
          </div>

          <div className="w-full justify-items-center p-0 my-4">
            <img src={flowerIcon} className="h-10 md:h-16 w-full md:w-4/6" alt="" />
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <div>
                <p className=" w-fit  px-8 py-1 bg-white border rounded-full -mt-4 justify-self-center z-20 absolute">
                  MASTER PLAN
                </p>
                <div className="bg-white rounded-3xl p-10 gap-6 items-center justify-self-center w-full md:w-100 h-70 text-center content-center blueprint">
                  <button className=" py-2 px-16 rounded-full border">
                    View Plan
                  </button>
                </div>
              </div>

              <div>
                <p className=" w-fit  px-8 py-1 bg-white border rounded-full -mt-4 justify-self-center z-20 absolute">
                  2 BHK
                </p>
                <div className="bg-white rounded-3xl p-10 gap-6 items-center justify-self-center w-full md:w-100 h-70 text-center content-center blueprint">
                  <img src={soldout} className="rotate-[-14deg]" alt="" />
                </div>
              </div>

              <div>
                <p className=" w-fit  px-8 py-1 bg-white border rounded-full -mt-4 justify-self-center z-20 absolute">
                  2 BHK (Large)
                </p>
                <div className="bg-white rounded-3xl p-10 gap-6 items-center justify-self-center w-full md:w-100 h-70 text-center content-center blueprint">
                  <img src={soldout} className="rotate-[-14deg]" alt="" />
                </div>
              </div>
              <div className="hidden md:block xl:hidden">
                <p className=" w-fit  px-8 py-1 bg-white border rounded-full -mt-4 justify-self-center z-20 absolute">
                  3 BHK
                </p>
                <div className="bg-white rounded-3xl p-10 gap-6 items-center justify-self-center w-full md:w-100 h-70 text-center content-center blueprint">
                  <button className=" py-2 px-16 rounded-full border">
                    View Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <div className="block md:hidden xl:block">
                <p className=" w-fit  px-8 py-1 bg-white border rounded-full -mt-4 justify-self-center z-20 absolute">
                  3 BHK
                </p>
                <div className="bg-white rounded-3xl p-10 gap-6 items-center justify-self-center w-full md:w-100 h-70 text-center content-center blueprint">
                  <button className=" py-2 px-16 rounded-full border">
                    View Plan
                  </button>
                </div>
              </div>

              <div>
                <p className=" w-fit  px-8 py-1 bg-white border rounded-full -mt-4 justify-self-center z-20 absolute">
                  3.5 BHK
                </p>
                <div className="bg-white rounded-3xl p-10 gap-6 items-center justify-self-center w-full md:w-100 h-70 text-center content-center blueprint">
                  <button className=" py-2 px-16 rounded-full border">
                    View Plan
                  </button>
                </div>
              </div>

              <div>
                <p className=" w-fit  px-8 py-1 bg-white border rounded-full -mt-4 justify-self-center z-20 absolute">
                  4 BHK
                </p>
                <div className="bg-white rounded-3xl p-10 gap-6 items-center justify-self-center w-full md:w-100 h-70 text-center content-center blueprint">
                  <button className=" py-2 px-16 rounded-full border">
                    View Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f1ee] py-24 px-6 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl dm:text-6xl text-left md:text-center font-semibold mb-4">
              A <span className="text-red-500">Glimpse</span> of Life at
              Mahindra Blossom
            </h2>

            <p className="text-xl opacity-80 text-right md:text-center">
              View images of homes, amenities, and the surrounding environment.
            </p>

            <div className="w-full justify-items-center p-0 my-4">
              <img src={flowerIcon} className="h-10 md:h-16 w-full md:w-4/6" alt="" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <img
              src={collageImage}
              className="w-full h-55 object-cover rounded-3xl"
            />
            <img
              src={collageImage1}
              className="w-full h-55 object-cover rounded-3xl"
            />
            <img
              src={collageImage2}
              className="w-full h-55 object-cover rounded-3xl"
            />
            <img
              src={collageImage3}
              className="w-full h-55 object-cover rounded-3xl"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            <img
              src={collageImage4}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
            <img
              src={collageImage5}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
            <img
              src={collageImage6}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
            <img
              src={collageImage7}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
            <img
              src={collageImage8}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <img
              src={collageImage9}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
            <img
              src={collageImage10}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
            <img
              src={collageImage11}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
            <img
              src={collageImage6}
              className="w-full h-[220px] object-cover rounded-3xl"
            />
          </div>
        </section>

        <section className="bg-white py-24 text-center centerwebpack">
          <div className="block md:flex xl:flex  w-screen px-6 md:px-12 text-left">
            <div className="block w-full md:w-full xl:4/6 order-2 md:order-1">
              <div className="order-1">
                <div className="text-center">
                  <h2 className="mb-2  text-3xl md:text-6xl font-semibold text-nowrap text-gray-700">
                    A Perfect <span className="text-red-500">Location</span>
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Everything You Need, Just Minutes Away
                  </p>
                </div>

                <div className="w-full justify-items-center p-0 my-4">
                  <img src={flowerIcon} className="h-10 md:h-16 w-full md:w-4/6" alt="" />
                </div>
              </div>
              <div className="rounded-3xl w-full md:w-full xl:hidden order-2">
                <img src={Mapimage} className="object-cover h-[50vh] md:h-full rounded-4xl" />
              </div>
              <ul className="space-y-2 text-sm md:text-xl justify-self-center md:justify-self-start font-normal text-black justify-self-center-safe mt-8 order-3">
                <li className="flex items-center gap-3">
                  <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                  <span>Abutting Hopefarm Channasandra Metro Station</span>
                </li>

                <li className="flex items-center gap-3">
                  <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                  <span>
                    Key terminals within 1.3km radius – Whitefield railway
                    station and Hopefarm bus stop
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                  <span>
                    Major IT parks within 2.5km radius – ITPL, new Google office
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <img src={flowerIcon2} className="w-5 h-5 object-contain" />
                  <span>
                    Social infrastructure within 3km – Schools, colleges,
                    hospitals, etc.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl w-full md:w-full hidden xl:block order-2">
                <img src={Mapimage} className="object-cover h-[50vh] md:h-full rounded-4xl" />
              </div>
          </div>
        </section>
        <section className="bg-red-500 py-24 px-6 lg:px-20 mt-45">
          <div
            className="
              relative 
              mx-auto
              w-full
              md:w-4xl
              h-[200px] md:h-[420px]
              rounded-3xl
              overflow-hidden
              bg-cover bg-center
              flex items-center justify-center
              -mt-50
              md:-mt-75
            "
            style={{
              backgroundImage: `url(${tourBg})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <img
              src={playIcon}
              className="relative z-10 w-16 md:w-20 cursor-pointer hover:scale-110 transition"
            />

            <p className="absolute bottom-6 w-full text-center text-white text-xl font-semibold z-10">
              Take The Virtual Tour
            </p>
          </div>
          <div className="text-center text-white my-8 space-y-3">
            <p>PROJECT RERA No: PRM/KA/RERA/1251/446/PR/171225/008348</p>
            <p>AGENT RERA No.: PRM/KA/RERA/1251/446/AG/240723/004988</p>
            <p>
              Authorized channel partner of Mahindra Blossom by Mahindra
              Lifespaces
            </p>
          </div>

          <div className="block md:flex justify-between text-white text-sm px-8 text-center leading-10">
            <p>DISCLAIMER | PRIVACY POLICY</p>
            <p className="text-nowrap">©2025. Mahindra Blossom . ALL RIGHTS RESERVED</p>
          </div>
        </section>
      </div>
    </>
  );
}
