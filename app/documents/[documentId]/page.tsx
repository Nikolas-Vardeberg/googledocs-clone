import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import Toolbar from "./toolbar";

type Props = {
    params: Promise<{ documentId: string }>;
}

export default async function Page({ params }: Props) {
    const { documentId } = await params;

    return(
        <div className="min-h-screen bg-[#FAFBFD]">
            <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden h-[112px]">
                <Navbar />
                <Toolbar />
            </div>
            <div className="pt-[114px] print:pt-0">
                <Room>
                    <Editor />
                </Room>
            </div>
        </div>
    )
}