import { useState } from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    const [toggle, setToggle] = useState("hidden")

    const changeToggle = () => {
        if (toggle === "hidden") {
            setToggle("flex")
        } else {
            setToggle("hidden")
        }
    }

    return (
        <div id="screen" className="flex flex-col mx-10 md:mx-20 pt-10">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-row items-center">
                    <div className="text-white text-4xl">SosialNetwork</div>
                    <div className="block lg:hidden mx-5">
                        <button
                            id="nav"
                            onClick={changeToggle}
                            className={`${toggle === "hidden" ? "flex" : "hidden"} items-center px-3 py-2 border-2 rounded text-white border-white`}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                        <button
                            id="nav"
                            onClick={changeToggle}
                            className={`${toggle === "flex" ? "flex" : "hidden"} items-center px-3 py-2 border-2 rounded text-white border-white`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current h-3 w-3"
                                viewBox="0 0 24 24"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex flex-col md:flex-row">
                    <div className="flex flex-row justify-center items-center p-4  md:w-96 h-14 bg-white text-red-700">
                        <input type="text" className="md:w-96 h-14 text-red-700 placeholder-red-700 outline-none" placeholder="Find ..."></input>
                        <div>search</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row cursor-pointer justify-center items-center p-4 w-32 h-14 my-2 md:my-0 md:mx-8 bg-white text-red-700 ">
                            <label className="w-64 flex flex-row items-center bg-white tracking-wide uppercase cursor-pointer hover:text-red-900">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="text-base leading-normal">Upload</span>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-white flex flex-row  px-2 my-2 mx-2 md:my-0 justify-center">
                                <svg className="w-10 fill-red-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-j</title><path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" /><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" /></svg>
                            </div>
                            <div className="my-2 md:my-0">
                                <div className="text-white text-2xl">Waseem</div>
                                <div className="text-white">Arshed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 hidden md:flex md:flex-col" id="navbarmorethan768px">
                <div className="border-2 border-white rounded-lg"></div>
                <div className="flex flex-row text-white justify-between py-4 text-xl">
                    <Link to="#videos" className="hover:text-red-900">Videos</Link><div>/</div>
                    <Link to="#people" className="hover:text-red-900">People</Link><div>/</div>
                    <Link to="#documents" className="hover:text-red-900">Documents</Link><div>/</div>
                    <Link to="#event" className="hover:text-red-900">Event</Link><div>/</div>
                    <Link to="#comunities" className="hover:text-red-900">Comunities</Link><div>/</div>
                    <Link to="#favorites" className="hover:text-red-900">Favorites</Link><div>/</div>
                    <Link to="#channels" className="hover:text-red-900">Channels</Link>
                </div>
                <div className="border-2 border-white rounded-lg"></div>
            </div>
            <div className={`my-10 bg-white rounded-lg ${toggle}`} id="navbarmore768px">
                <div className="flex flex-col text-white justify-between p-4 text-xl">
                    <Link to="#videos" className="text-red-900 hover:bg-slate-200 rounded-lg p-2">Videos</Link>
                    <Link to="#people" className="text-red-900 hover:bg-slate-200 rounded-lg p-2">People</Link>
                    <Link to="#documents" className="text-red-900 hover:bg-slate-200 rounded-lg p-2">Documents</Link>
                    <Link to="#event" className="text-red-900 hover:bg-slate-200 rounded-lg p-2">Event</Link>
                    <Link to="#comunities" className="text-red-900 hover:bg-slate-200 rounded-lg p-2">Comunities</Link>
                    <Link to="#favorites" className="text-red-900 hover:bg-slate-200 rounded-lg p-2">Favorites</Link>
                    <Link to="#channels" className="text-red-900 hover:bg-slate-200 rounded-lg p-2">Channels</Link>
                </div>
            </div>
        </div>
    )
}