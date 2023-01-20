import type { NextPage } from "next";
import Landing from "../components/landing/landing";
import { useMeQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Home = () => {
  const {data,loading} = useMeQuery();
  const router = useRouter();

  useEffect( () => {
    if(!loading && data?.me) {
      // router.push('/cours');
    }
  } ,[data,loading,router])

  return (
    <>
      <Landing />
    </>
  );
};

export default withApollo({ssr:true})(Home);
