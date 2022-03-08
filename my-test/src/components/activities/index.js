import { useEffect, useState } from "react"
import axios from 'axios'
export default function Activities() {
    const [load, setLoad] = useState(5)
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
                <div className="text-2xl text-white">Activity</div>
                <div className="text-white">view timeline / activities</div>
            </div>
            <div className="border-2 border-white rounded-lg"></div>
            <div className="my-5">
                {
                    activity.map((e, i) => {
                        return (
                            <div className="flex flex-row mb-5 cursor-pointer hover:border-2 w-12/12" key={i}>
                                <div className="w-4/12">
                                    <img src={e.download_url} width="150" alt="" />
                                </div>
                                <div className="w-8/12 ml-2 text-white">
                                    <div>{e.author}</div>
                                    <div className="w-full truncate">Lorem lorem lorem lorem lorem lorem lorem</div>
                                    <div className="flex flex-row">
                                        <svg className="w-6 fill-red-900" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(2 3)"><path d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="m13.5 5.5h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="m4.49884033 6.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z" fill="currentColor" /><path d="m13.5 9.5h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
                                        <div className="ml-2">comment</div>
                                    </div>
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