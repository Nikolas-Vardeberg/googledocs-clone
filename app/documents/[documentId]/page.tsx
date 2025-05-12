import { Editor } from "./editor";


type Props = {
    params: Promise<{ documentId: string }>;
}

export default async function Page({ params }: Props) {
    const { documentId } = await params;

    return(
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor />
        </div>
    )
}