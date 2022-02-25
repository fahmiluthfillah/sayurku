import Image from "next/image";
import HeadTitle from "../components/headTitle";
import Container from "../components/container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as Icon from "react-feather";

export default function Home() {
  return (
    <div className="h-auto">
      <HeadTitle title="Home" />
      <div className="bg-green-600 h-15 w-full">
        <Container>
          <div className="py-4">
            <p className="text-white text-lg text-center font-bold">
              Selamat Datang di Sayurku
            </p>
          </div>
        </Container>
      </div>
      <div className="pt-5 px-3 relative mx-auto text-gray-600">
        <input
          className="w-full order-2 border-gray-300 bg-gray-100 h-10 px-5 pr-16 text-sm rounded-lg focus:outline-none"
          type="search"
          name="search"
          placeholder="Cari produk disini"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4"
        ></button>
      </div>
      <div className="pt-5">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          showThumbs={false}
        >
          <div>
            <img
              src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
              alt="image1"
            />
            {/* <p className="legend">Image 1</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
              alt="image2"
            />
            {/* <p className="legend">Image 2</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
              alt="image3"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
              alt="image3"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
              alt="image3"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
              alt="image3"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
        </Carousel>
      </div>
      <div className="pt-3">
        <Container>
          <div className="content-center grid overflow-hidden grid-cols-4 grid-rows-2 gap-2 grid-flow-row">
            <div className="box h-16 flex items-center justify-center text-black">
              1
            </div>
            <div className="box flex items-center justify-center text-black">
              2
            </div>
            <div className="box flex items-center justify-center text-black">
              3
            </div>
            <div className="box flex items-center justify-center text-black">
              4
            </div>
            <div className="box h-16 flex items-center justify-center text-black">
              5
            </div>
            <div className="box flex items-center justify-center text-black">
              6
            </div>
            <div className="box flex items-center justify-center text-black">
              7
            </div>
            <div className="box flex items-center justify-center text-black">
              8
            </div>
            <div className="box h-16 flex items-center justify-center text-black">
              9
            </div>
            <div className="box flex items-center justify-center text-black">
              10
            </div>
            <div className="box flex items-center justify-center text-black">
              11
            </div>
            <div className="box flex items-center justify-center text-black">
              12
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-5">
        <Container>
          <h3 className="text-2xl font-bold">Paket Lengkap</h3>
        </Container>
        <div className="overflow-x-scroll w-full flex scrollbar-hide py-3">
          <div className="px-5 flex space-x-5">
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <img
                  src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Category</span>
                <h4 className="text-xl mt-1 font-bold">Product Title</h4>
                <p className="mt-2 text-blue-500">Rp. 100.000</p>
              </div>
            </div>
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <img
                  src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Category</span>
                <h4 className="text-xl mt-1 font-bold">Product Title</h4>
                <p className="mt-2 text-blue-500">Rp. 100.000</p>
              </div>
            </div>
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <img
                  src="https://asset.kompas.com/crops/pJb0BSgM3y0T8posgdDlKEzJkd4=/0x46:1000x546/750x500/data/photo/2019/10/16/5da6633bb8d6e.jpg"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Category</span>
                <h4 className="text-xl mt-1 font-bold">Product Title</h4>
                <p className="mt-2 text-blue-500">Rp. 100.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
