import { Editor } from "./editor";
import Toolbar from "./toolbar";


type Props = {
    params: Promise<{ documentId: string }>;
}

export default async function Page({ params }: Props) {
    const { documentId } = await params;

    return(
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
    )
}