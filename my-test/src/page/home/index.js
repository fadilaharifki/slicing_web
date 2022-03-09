import Content from "../../components/content";
import Highlight from "../../components/highlight";

export default function Home() {
    return (
        <div className="flex flex-row w-screen justify-center">
            <div className="21inc:w-10/12 30inc:w-6/12 mx-10 md:mx-20">
                <Highlight />
                <Content />
            </div>
        </div>
    )
}