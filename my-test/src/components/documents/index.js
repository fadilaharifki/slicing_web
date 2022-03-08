import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Documents() {
    const [highlight, setHighlight] = useState([])
    const [highlightRight, setHighlightRight] = useState([])
    const [highlightBottom, setHighlightBottom] = useState([])

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
        <div className="pr-4 mt-10">
            <div className="flex flex-row items-center w-12/12">
                <div className="w-2/12 text-2xl text-white ml-2">Documents</div>
                <div className="w-10/12 text-center text-white">view all</div>
            </div>
            <div className="w-12/12 flex flex-row">
                <div className="w-8/12">
                    <div>
                        {
                            highlight.map((e, i) => {
                                return (
                                    <div key={i} className="w-12/12 m-2 cursor-pointer">
                                        <div className="text-white p-2 pt-56 absolute truncate z-10">
                                            <div className="text-2xl font-bold">{e.author}</div>
                                            <div className="flex flex-row justify-between">
                                                <div >1000 views</div>
                                            </div>
                                        </div>
                                        <img className="static object-contain" src={e.download_url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-row">
                        {
                            highlightBottom.map((e, i) => {
                                return (
                                    <div key={i} className="m-2 w-6/12 cursor-pointer">
                                        <div className="text-white p-2 pt-20 absolute truncate z-10">
                                            <div className="">{e.author}</div>
                                            <div className="flex flex-row justify-between">
                                                <div >1000 views</div>
                                            </div>
                                        </div>
                                        <img className="static object-contain" src={e.download_url} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="w-4/12">
                    {
                        highlightRight.map((e, i) => {
                            return (
                                <div key={i} className="m-2 w-12/12 cursor-pointer">
                                    <div className="text-white p-2 pt-20 absolute truncate z-10">
                                        <div className="">{e.author}</div>
                                        <div className="flex flex-row justify-between">
                                            <div >1000 views</div>
                                        </div>
                                    </div>
                                    <img className="static object-contain" src={e.download_url} alt="" />
                                </div>
                            )
                        })
                    }
                    <div>
                        <label className="m-2 mt-4 w-12/12 border-2 h-36 flex flex-row tracking-wide cursor-pointer text-white hover:bg-red-900 justify-center items-center">
                            <Link to="#showAll" className="flex flex-row">
                                <div>
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                </div>
                                <div className="ml-2">
                                    <div className="text-white text-base leading-normal">Share</div>
                                    <div className="text-white text-base leading-normal">Your Documents</div>
                                </div>
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}