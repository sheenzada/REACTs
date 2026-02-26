import { nav } from "framer-motion/client";

function Sidebar(){
    return(
        <nav className="bg-purple-500 h-screen">
            <div className="bg-purple-400 ml-auto w-52">
                <img src="public/LOGOf.jpg" className=" h-12 px-1 rounded-full " alt="" />
                <h1 className="px-14 -mt-12 text-2xl text-white">Inamullah</h1><br />
                <p className="px-20 -mt-7 text-white font-semibold">Admin</p>
                
            </div>
            <div className="w-1/5 h-full -mt-28 bg-gray-500 md:bg-orange-300 xl:bg-red-400 xl:w-1/5 sm:bg-green-500 sm:w-1/2">
            <div className="w-full h-24 bg-black rounded">
              <h1 className="text-white font-bold text-4xl p-8">
                InamUllah
                </h1>
            </div>
                <div className="w-full h-20 bg-amber-600 my-9 text-2xl text-white p-4 hover:bg-cyan-400 rounded cursor-pointer">
                    Dashboard
                </div>
                <div className="w-full h-20 bg-amber-600 my-9 text-2xl text-white p-4 hover:bg-cyan-400 rounded cursor-pointer">
                    Dashboard
                </div>
                <div className="w-full h-20 bg-amber-600 my-9 text-2xl text-white p-4 hover:bg-cyan-400 rounded cursor-pointer">
                    Dashboard
                </div>
                <div className="w-full h-20 bg-amber-600 my-9 text-2xl text-white p-4 hover:bg-cyan-400 rounded cursor-pointer">
                    Dashboard
                </div>
                <div className="w-full h-20 bg-amber-600 my-9 text-2xl text-white p-4 hover:bg-cyan-400 rounded cursor-pointer">
                    Dashboard
                </div>
                
            </div>
            
        </nav>
    )
}
export default Sidebar