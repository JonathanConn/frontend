import Link from "next/link";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { useContainerDimensions } from "../../hooks/useContainerDimensions";
import { abbrevAccount } from "../../utils";
import { DiscussionData, VoteData } from "./dummydata";

export default function DiscussionNVote({
  discussionData,
  voteData,
}: {
  discussionData: DiscussionData[];
  voteData: VoteData[];
}) {
  const [voteContainer, setVoteContainer] = useState<HTMLDivElement | null>();
  const { width: containerWidth } = useContainerDimensions(
    voteContainer as HTMLDivElement
  );

  return (
    <div className="w-stretch m-5 md:mx-28 md:my-12 h-fit py-6 px-4 md:p-10 hero">
      <div className="flex justify-between items-center">
        <h2 className="text-left text-2xl font-normal">Discussion</h2>
        <Link
          href={{
            pathname: "/dashboard/governance",
            query: { "initial-active-tab": "forum" },
          }}
          className="font-normal text-custom-purple"
        >
          View All Discussions
        </Link>
      </div>

      <div className="flex w-full overflow-x-auto text-left text-md mt-4 py-2">
        {discussionData?.map((discussion) => {
          return (
            <div
              key={discussion.id}
              className="border-2 rounded-lg mr-4 p-4 w-1/3"
            >
              <div className="flex flex-col truncate w-full text-2xl">
                <div>{discussion.title}</div>

                <div className="flex w-max text-custom-text-gray text-sm mt-2">
                  <span>{abbrevAccount(discussion.creator)}</span>
                  <span className="mx-2">|</span>
                  <span>{discussion.numberComments} comments</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-8 w-full h-0.5 bg-custom-border opacity-25"></div>

      <div className="flex justify-between items-center">
        <h2 className="text-left text-2xl font-normal">Vote</h2>
        <Link
          href={{
            pathname: "/dashboard/governance",
            query: { "initial-active-tab": "proposal" },
          }}
          className="font-normal text-custom-purple"
        >
          View All Proposals
        </Link>
      </div>
      <div
        ref={(ref) => setVoteContainer(ref)}
        className="flex flex-col w-full text-left text-sm mt-4 py-2"
      >
        {voteData?.map((vote) => {
          const totalVotes = vote.options.reduce(
            (total, o) => total + o.voteCount,
            0
          );

          const maxVoteCount = Math.max(
            ...vote.options.map((o) => o.voteCount)
          );

          const widthPerVote = containerWidth / totalVotes;

          return (
            <div key={vote.id} className="border-2 rounded-lg mb-4 p-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{vote.title}</span>
                  <span className="text-md rounded-full border-2 border-gray py-1 px-4">
                    {vote.status}
                  </span>
                </div>

                <span className="text-custom-gray text-sm my-4">
                  {vote.description}
                </span>

                {vote.options.map((option) => {
                  return (
                    <span key={`${option.id}`}>
                      <div
                        className="absolute flex items-center bg-custom-purple bg-opacity-20 my-2 py-2 px-4 rounded-lg h-9"
                        style={{
                          width: widthPerVote * option.voteCount,
                        }}
                      />

                      <div className="flex items-center my-2 py-2 px-4 rounded-lg">
                        <div className="mx-2 w-6">
                          {option.voteCount === maxVoteCount && (
                            <IoIosCheckmark size="20" />
                          )}
                        </div>

                        <span> {option.name}</span>

                        <span className="ml-2 text-custom-gray">
                          {option.voteCount} vote
                        </span>
                      </div>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
