import { ethers } from "ethers"

export interface OverviewData {
  totalRewards: ethers.BigNumber
  decryptionSessions: number
  votesParticipated: number
  discussions: number
}

export interface DiscussionData {
  id: number
  title: string
  creator: string
  numberComments: number
}

export interface VoteData {
  id: number
  title: string
  description: string
  status: string
  options: {
    id: number
    name: string
    voteCount: number
  }[]
}

export const overviewData: OverviewData = {
  totalRewards: ethers.utils.parseEther("1.27"),
  decryptionSessions: 5,
  votesParticipated: 12,
  discussions: 63,
}

export const discussionData: DiscussionData[] = [
  {
    id: 1,
    title: "Topic 1 xxxxxxxxxxxxxxxxxxxxxxxxxx sadf asdf asd f",
    creator: ethers.constants.AddressZero,
    numberComments: 5,
  },
  {
    id: 2,
    title: "Topic 2 xxxxx",
    creator: ethers.constants.AddressZero,
    numberComments: 2,
  },
  {
    id: 3,
    title: "Topic 3 xxxxx",
    creator: ethers.constants.AddressZero,
    numberComments: 3,
  },
  {
    id: 4,
    title: "Topic 4 xxxxx",
    creator: ethers.constants.AddressZero,
    numberComments: 17,
  },
]

export const voteData: VoteData[] = [
  {
    id: 1,
    title: "Proposal 1",
    description: "Lorem Ipsum",
    status: "Closed",
    options: [
      {
        id: 1,
        name: "Option 1",
        voteCount: 751,
      },
      { id: 2, name: "Option 2", voteCount: 1578 },
    ],
  },
  {
    id: 2,
    title: "Proposal 2",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    status: "In Progress",
    options: [
      {
        id: 1,
        name: "Option 1",
        voteCount: 751,
      },
      {
        id: 2,
        name: "Option 2",
        voteCount: 1578,
      },
      {
        id: 3,
        name: "Option 3",
        voteCount: 12,
      },
    ],
  },
]
