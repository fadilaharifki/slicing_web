import Activities from "../activities"
import Videos from "../videos"

export default function Highlight() {
    return (
        <div className="flex flex-row w-12/12">
            <div className="w-8/12">
                <Videos />
            </div>
            <div className="w-4/12">
                <Activities />
            </div>
        </div>
    )
}