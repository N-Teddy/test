import Image from "next/image";
import Nav from "@/Components/Frontend/Nav/Nav";
import SideBar from "@/Components/Frontend/SideBar/SideBar";
import Aside from "@/Components/Frontend/Aside/Aside";
import Footer from "@/Components/Frontend/Footer/Footer";
import styles from './Home.module.css'
import Card from "@/Components/Frontend/Card/Card";

export default function Home() {
  return (
   <main className={`relative main`}>
      <Nav />
      <section className={`flex justify-center `}>
        <div className={`overflow-visible flex gap-8 ${styles.container}`}>
          <Aside />
          <section className={` w-full`}>
            <section className={``}>
              <div className={`flex gap-4`}>
                <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/slideshow/home1/slider-3-950x450.jpg" width={647} height={303} alt="" />
                <div className={`flex flex-wrap gap-4`}>
                  <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/banners/banner1.jpg" width={257} height={138} alt="" />
                  <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/banners/banner2.jpg" width={257} height={138} alt="" />
                </div>
              </div>
            </section>
            <section className={`my-8`}>
              <div>
                <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/banners/banner3.jpg" alt="" />
              </div>
            </section>
            <section>
              <div>
                <div>
                  <h3 className={`mb-4 border-0 border-b-2 border-solid border-gray-300 flex justify-between`}>
                    <span className={`text-base font-bold py-2 px-5 text-white ${styles.color}`}>Products</span>
                    <ul className={`flex ${styles.ul}`}>
                      <li className={`py-2 px-3`}>All Products</li>
                      <li className={`py-2 px-3`}>Bathroom</li>
                      <li className={`py-2 px-3`}>Bedroom</li>
                      <li className={`py-2 px-3`}>Decor</li>
                      <li className={`py-2 px-3`}>Furniture</li>
                      <li className={`py-2 px-3`}>Livin room</li>
                    </ul>
                  </h3>
                </div>
                <div className={`flex flex-wrap justify-between gap-y-4`}>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
      <Footer />
      <SideBar />
   </main>
  );
}
