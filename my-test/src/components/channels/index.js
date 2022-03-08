import { useEffect, useState } from "react"
import axios from 'axios'

export default function Channels() {
    const [load, setLoad] = useState(10)
    const [activity, setActivity] = useState([])
    const [countActivity, setCountActivity] = useState(0)

    useEffect(async () => {
        try {
            let arr = []
            const dataActivity = await axios.get('https://picsum.photos/v2/list')
            for (let i = 0; i < load; i++) {
                arr.push(dataActivity.data[i])
            }

            setCountActivity(dataActivity.data.length)
            setActivity(arr)
        } catch (error) {
            console.log(error);
        }
    }, [load])

    const addLoad = () => {
        if (load === countActivity || load > countActivity) {
            setLoad(load)
        } else {
            setLoad(load + 5)
        }
    }
    return (
        <div>
            <div className="flex flex-row justify-between items-center ">
                <div className="text-2xl text-white">Channels</div>
                <div className="text-white">Browse all characters</div>
            </div>
            <div className="border-2 border-white rounded-lg"></div>
            <div className="my-5 flex flex-wrap w-12/12">
                {
                    activity.map((e, i) => {
                        return (
                            <div className="mb-5 ml-2 cursor-pointer hover:border-2 w-5/12" key={i}>
                                <div className="w-12/12">
                                    <div className=" text-white w-32 p-2 pt-16 absolute truncate z-10">
                                        <div>{e.author}</div>
                                    </div>
                                    <img className="static object-contain" src={e.download_url} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div onClick={addLoad} className="cursor-pointer flex justify-end">
                <div className="text-white hover:text-red-900">load more</div>
            </div>
            <div className="border-2 my-2 border-white rounded-lg"></div>
        </div>
    )
}