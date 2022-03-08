import Channels from "../channels";
import Documents from "../documents";
import People from "../people";

export default function Content() {
    return (
        <div className="w-full flex flex-row my-10">
            <div className="w-8/12">
                <People />
                <Documents />
            </div>
            <div className="w-4/12">
                <Channels />
            </div>
        </div>
    )
}