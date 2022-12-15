import Link from "next/link";
import { useState } from "react";
import { useContainerDimensions } from "../../hooks/useContainerDimensions";

export default function Proposal({
}: {
    }) {
    const [voteContainer, setVoteContainer] = useState<HTMLDivElement | null>();
    const { width: containerWidth } = useContainerDimensions(
        voteContainer as HTMLDivElement
    );

    return (
        <div className="w-stretch m-5 md:mx-28 md:my-12 h-fit py-6 px-4 md:p-10 hero">
            <div className="flex justify-between items-center">
                <h2 className="text-left text-2xl font-normal">Add New Proposal</h2>
                <Link
                    href={{
                        pathname: "/dashboard/governance",
                    }}
                    className="font-normal text-custom-purple"
                >
                    View All Proposals
                </Link>
            </div>
            <div className="my-8 w-full h-0.5 bg-custom-border opacity-25"></div>
            <form action="/send-data-here" method="post">
                <label htmlFor="first">Title</label>
                <input type="text" id="title" name="title" />
                <label htmlFor="last">Description</label>
                <input type="text" id="desc" name="desc" />
                <label htmlFor="last">Option 1</label>
                <input type="text" id="option1" name="option1" />
                <label htmlFor="last">Option 2</label>
                <input type="text" id="option2" name="option2" />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}
