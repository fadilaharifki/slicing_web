import Activities from "../activities"
import Videos from "../videos"

export default function Highlight() {
    return (
        <div className="flex flex-col md:flex-row w-12/12">
            <div className="w-full md:w-8/12">
                <Videos />
            </div>
            <div className="hidden md:flex w-4/12">
                <Activities />
            </div>
        </div>
    )
}