import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import {
  discussionData,
  voteData,
} from "../../components/dashboard/dummydata";
import Overview from "../../components/dashboard/Overview";
import Proposal from "../../components/dashboard/Proposal";
import PageLayout from "../../components/layouts/PageLayout";
import { SocialsFooter } from "../../components/SocialsFooter";

export default function Home() {
  const router = useRouter();
  const { isConnecting, address } = useAccount();
  const { bal } = router.query;

  function onDiscussVote() {
    router.push("/dashboard/governance");
  }
  function onManageSbt() {
    router.push({ pathname: "/dashboard/manage-membership", query: { bal } });
  }

  return (
    <>
      {!address || isConnecting ? (
        <PageLayout containerClassName="bg-custom-blue bg-cover min-h-screen">
          <div className="text-center mt-20 min-w-full">
            <h1 className="font-bold text-custom-purple text-3xl leading-tight">
              Please Sign In To View Dashboard
            </h1>
          </div>
        </PageLayout>
      ) : (
        <PageLayout containerClassName="bg-custom-blue bg-cover min-h-screen">
          <div className="text-center my-5 md:my-10 w-full">
            <Proposal
              discussionData={discussionData}
              voteData={voteData}
            />
            <SocialsFooter />
          </div>
        </PageLayout>
      )}
    </>
  );
}
