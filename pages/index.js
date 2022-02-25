import Image from "next/image";
import HeadTitle from "../components/headTitle";
import Container from "../components/container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as Icon from "react-feather";

export default function Home() {
  return (
    <div className="h-auto">
      <HeadTitle title="Sayurku" />
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
              src="https://asset.kompas.com/crops/ZV3pFsad4Ffi35Ss_ySKIsZoON0=/0x0:1000x667/750x500/data/photo/2021/07/27/60ff78475813b.jpg"
              alt="image2"
            />
            {/* <p className="legend">Image 2</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/6k-Ksy5r1F7m3qD-NTPMOsO-2Us=/0x301:793x829/750x500/data/photo/2021/06/21/60cfe1e831c61.jpg"
              alt="image3"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://cdn.idntimes.com/content-images/community/2020/10/fromandroid-bcee00c01389d67afec75fe8d7925b71_600x400.jpg"
              alt="image4"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/FxscTDC5Uqn2BNJ8Tyd12W9dQB8=/0x0:698x465/750x500/data/photo/2021/08/09/6110700f581f7.jpg"
              alt="image5"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="https://asset.kompas.com/crops/RxtPSZMH6HwtqSE3uW5NDhnw4-c=/87x60:978x654/750x500/data/photo/2021/01/29/6013754c6e583.jpg"
              alt="image6"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
        </Carousel>
      </div>
      <div className="pt-3">
        <Container>
          <div className="content-center grid overflow-hidden grid-cols-4 grid-rows-2 gap-2 grid-flow-row">
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1599559720316_scale_500x500_85_color_not_blur_7La.jpg"
                  />
                </div>
                <p className="text-sm text-center mt-2">Semua Produk</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1631102611565_scale_500x500_85_color_not_blur_VjM.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Terbaru</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1626842372514_scale_500x500_85_color_not_blur_dPY.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Ibu & Anak</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1632391202476_scale_500x500_85_color_not_blur_Laq.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Dapur</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1632391821065_scale_500x500_85_color_not_blur_sap.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Beras & Mie</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1574841564376_scale_500x500_85_color_not_blur_T5b.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Susu & Telur</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://ik.imagekit.io/dcjlghyytp1/4ee614930f86a0352cb82a33c44f17a0?tr=f-auto" />
                </div>
                <p className="text-sm text-center mt-2">Organik</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1632391970896_scale_500x500_85_color_not_blur_2U2.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Makanan Ringan</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1632391016007_scale_500x500_85_color_not_blur_6Ph.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Kuliner Dunia</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1632391143099_scale_500x500_85_color_not_blur_hLE.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Pojok Minuman</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://ik.imagekit.io/dcjlghyytp1/d339244b90bff370a17f523ef9d3616d?tr=f-auto" />
                </div>
                <p className="text-sm text-center mt-2">Terlaris</p>
              </div>
            </div>
            <div className="box flex items-center justify-center text-black">
              <div>
                <div className="w-10 h-10 lg:w-14 lg:h-14 relative m-auto">
                  <img src="https://storage.googleapis.com/dev-sayurbox.appspot.com/sku-lg/1572497285282_scale_500x500_85_color_not_blur_fTQ.jpg" />
                </div>
                <p className="text-sm text-center mt-2">Spesial Promo</p>
              </div>
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
                  src="https://cdn.idntimes.com/content-images/community/2020/10/fromandroid-bcee00c01389d67afec75fe8d7925b71_600x400.jpg"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Sayur</span>
                <h4 className="text-xl mt-1 font-bold">Kuah Sop</h4>
                <p className="mt-2 text-blue-500">Rp. 5.000</p>
              </div>
            </div>
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <img
                  src="https://asset.kompas.com/crops/ZV3pFsad4Ffi35Ss_ySKIsZoON0=/0x0:1000x667/750x500/data/photo/2021/07/27/60ff78475813b.jpg"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Sayur</span>
                <h4 className="text-xl mt-1 font-bold">Kuah Lodeh</h4>
                <p className="mt-2 text-blue-500">Rp. 6.000</p>
              </div>
            </div>
            <div
              className="bg-grey rounded-lg px-5 pt-5 pb-6"
              style={{ width: "280px" }}
            >
              <div className="relative w-full h-40 rounded">
                <img
                  src="https://asset.kompas.com/crops/RxtPSZMH6HwtqSE3uW5NDhnw4-c=/87x60:978x654/750x500/data/photo/2021/01/29/6013754c6e583.jpg"
                  layout="fill"
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Sayur</span>
                <h4 className="text-xl mt-1 font-bold">Cah Kangkung</h4>
                <p className="mt-2 text-blue-500">Rp. 5.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
