import { useEffect, useState } from "react"
import axios from 'axios'

export default function Videos() {
    const [highlight, setHighlight] = useState([])
    const [highlightRight, setHighlightRight] = useState([])
    const [highlightBottom, setHighlightBottom] = useState([])

    console.log(window.innerWidth);

    useEffect(async () => {
        try {
            let arr = []
            let arrLeft = []
            let arrBottom = []
            const dataHighlight = await axios.get('https://picsum.photos/v2/list')
            for (let i = 0; i < 1; i++) {
                arr.push(dataHighlight.data[i])
            }
            for (let i = 1; i < 3; i++) {
                arrLeft.push(dataHighlight.data[i])
                arrBottom.push(dataHighlight.data[i + 2])
            }

            setHighlight(arr)
            setHighlightRight(arrLeft)
            setHighlightBottom(arrBottom)
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className="pr-4">
            <div className="flex flex-col md:flex-row  items-center w-12/12">
                <div className="w-2/12 text-2xl text-white ml-2">Video</div>
                <div className="w-10/12 text-center text-white">Browser all videos</div>
            </div>
            <div className="flex flex-col md:flex-row w-12/12">
                <div className="w-12/12 md:w-8/12">
                    <div>
                        {
                            highlight.map((e, i) => {
                                return (
                                    <div key={i} className="w-12/12 m-2 cursor-pointer">
                                        <div className="flex flex-col justify-end box-content w-[10rem] md:w-auto h-32 smm:h-[10rem] lg:h-4 xl:h-24 3xl:h-56 14inc:h-[6rem] 15inc:h-32 16inc:h-40 17inc:h-48
                                    18inc:h-52 19inc:h-60 20inc:h-64 21inc:h-64 22inc:h-64 23inc:h-72 24inc:h-80 25inc:h-80 26inc:h-[23rem] 27inc:h-96 28inc:h-[26rem] 29inc:h-[27rem] 30inc:h-44 31inc:h-48 32inc:h-80 text-white p-2 md:pt-56 absolute truncate z-10">
                                            <div className="text-2xl font-bold">{e.author}</div>
                                            <div className="flex flex-col md:flex-row">
                                                <div >1000 views</div>
                                            </div>
                                        </div>
                                        <div className="w-12/12">
                                            <img className="static object-contain" src={e.download_url} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col md:flex-row">
                        {
                            highlightBottom.map((e, i) => {
                                return (
                                    <div key={i} className="w-12/12 m-2 cursor-pointer">
                                        <div className="flex flex-col justify-end box-content h-[7.5rem] smm:h-[10rem] lg:h-[6rem] xl:h-[9rem] 3xl:h-[9rem] 14inc:h-[9rem] 15inc:h-[10rem] 16inc:h-[10rem] 17inc:h-[11rem]
                                        18inc:h-[11rem] 19inc:h-[12rem] 20inc:h-[13rem] 21inc:h-[13rem] 22inc:h-[14rem] 23inc:h-[15rem] 24inc:h-[15rem] 25inc:h-[16rem] 26inc:h-[17rem] 27inc:h-[18rem] 28inc:h-[18.5rem] 29inc:h-[19rem] 30inc:h-[11rem] 31inc:h-[12rem] 32inc:h-[15rem] text-white p-2 absolute truncate z-10">
                                            <div className="">{e.author}</div>
                                            <div className="">
                                                <div >1000 views</div>
                                            </div>
                                        </div>
                                        <div className="w-12/12">
                                            <img className="static object-contain" src={e.download_url} alt="" width={500} />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="w-12/12 md:w-4/12">
                    {
                        highlightRight.map((e, i) => {
                            return (
                                <div key={i} className="w-12/12 m-2 cursor-pointer">
                                    <div className="flex flex-col justify-end box-content h-[7.5rem] smm:h-[10rem] lg:h-[6rem] xl:h-[9rem] 3xl:h-[9rem] 14inc:h-[9rem] 15inc:h-[10rem] 16inc:h-[10rem] 17inc:h-[11rem]
                                        18inc:h-[11rem] 19inc:h-[12rem] 20inc:h-[13rem] 21inc:h-[13rem] 22inc:h-[14rem] 23inc:h-[15rem] 24inc:h-[15rem] 25inc:h-[16rem] 26inc:h-[17rem] 27inc:h-[18rem] 28inc:h-[18.5rem] 29inc:h-[19rem] 30inc:h-[11rem] 31inc:h-[12rem] 32inc:h-[15rem] text-white p-2 absolute truncate z-10">
                                        <div className="">{e.author}</div>
                                        <div className="">
                                            <div >1000 views</div>
                                        </div>
                                    </div>
                                    <div className="w-12/12">
                                        <img className="static object-contain" src={e.download_url} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div>
                        <label className="m-2 mt-4 border-2 h-[11rem] flex flex-col md:flex-row tracking-wide cursor-pointer text-white hover:bg-red-900 justify-center items-center">
                            <div>
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                            </div>
                            <div className="ml-2">
                                <div className="text-white text-base leading-normal">Upload</div>
                                <div className="text-white text-base leading-normal">Your Own Video</div>
                            </div>
                            <input type='file' className="hidden" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}