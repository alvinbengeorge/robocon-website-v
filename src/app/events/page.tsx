import Header from "@/components/Header";
import Event from "@/components/Events";

export default async function Events() {
    return (
        <div className=" overflow-x-hidden ">
            <Header />
            <Event />
        </div>
    )
}