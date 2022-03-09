import Channels from "../channels";
import Documents from "../documents";
import People from "../people";

export default function Content() {
    return (
        <div className="flex flex-col md:flex-row w-12/12">
            <div className="w-full md:w-8/12">
                <People />
                <Documents />
            </div>
            <div className="hidden md:flex w-4/12">
                <Channels />
            </div>
        </div>
    )
}