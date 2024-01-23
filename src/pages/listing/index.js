
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import banner1 from '../assets/banner1.png'
// import banner2 from '../assets/banner2.png'
// import styles from '../../styles/global.css'
import ola from '../../assets/images/ola.png'
import uber from '../../assets/images/uber.png'
import paytm from '../../assets/images/paytm.png'
// const inter = Inter({ subsets: ["latin"] });

export default function listing() {
  return (
    <>
    <div className="container mx-auto px-4">
        <main className="mt-8">
        {/* <div className=" container float-left width:50% clear:both  " > 
            <h1 className="text-4xl font-bold mb-4">LOREM IPSUM</h1>
            <p className="mb-8">
              Lorem ipsum djhacgukdluolor sit amet, consectetur adipiscing elit. Donec ager maximus augue, a
              euismod urna auctor vel.
            </p>
        </div> */}


        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">COMPANIES</h2>
            <div className="flex items-center justify-between">
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l-md">
                &lt;
              </button>
              <div className="flex items-center space-x-4">
                <img src={paytm.src} alt="Paytm" className="w-12 h-12 rounded-full" />
                <img src={ola.src} alt="Ola" className="w-12 h-12 rounded-full" />
                <img src={uber.src} alt="Uber" className="w-12 h-12 rounded-full" />
              </div>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-md">
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">TRENDING</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="p-4 rounded-lg hover:bg-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="p-4 rounded-lg hover:bg-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </div>
        </section>
        {/* <section>
        <div className={styles.container}>
      <h1 className="text-4xl font-bold mb-4">Hello, Tailwind!</h1>
      <p className="text-gray-700">This is a test.</p>
    </div>
        </section> */}
      </main>


    </div>
    </>
  );
}
