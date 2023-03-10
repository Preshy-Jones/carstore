import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import StoreLayout from "../components/layouts/StoreLayout";
import FinanceStats from "../components/CarStore/FinanceStats";
import Store from "../components/CarStore/Store";
import { NextPageWithLayout } from "./_app";
import CreateAlert from "../components/CarStore/CreateAlert";
import Browser from "../components/CarStore/Browser";
import GuideLine from "../components/CarStore/GuideLine";
import CommonQuestions from "../components/CarStore/CommonQuestions";

const Home: NextPageWithLayout = () => {
  return (
    <StoreLayout>
      <Head>
        <title>Used cars for sale or on finance</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.cazoo.co.uk/static/favicon.png" />
      </Head>
      <main className="py-7 flex justify-center font-robotoserif">
        <div className="w-[90%]">
          <div className="flex mb-3">
            <h3 className="text-primaryMain font-semibold">Home</h3>
            <span className="text-primaryMain mx-4">|</span>
            <h3 className="font-semibold">User cars</h3>
          </div>
          <h1 className="text-[2.225rem] font-semibold mb-3">
            Used cars for sale or on finance
          </h1>
          <p>
            We have a wide range of competitively priced used cars for sale that
            are available to buy or finance. In fact, you could save an average
            of £680* when you buy a car at Cazoo. Choose delivery to your door
            or collection from a Cazoo Customer Centre near you.
          </p>
          <FinanceStats />
          <Store />
          <CreateAlert />
          <Browser />
          <GuideLine />
          <CommonQuestions />
        </div>
      </main>
    </StoreLayout>
  );
};

// Home.getLayout = (page) => <StoreLayout>{page}</StoreLayout>;

export default Home;
