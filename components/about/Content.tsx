import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <section className="breakpoint my-auto flex flex-col-reverse py-[2.5rem] lg:flex-row">
      <div className="my-auto w-full lg:w-[50%]">
        <h2 className="h2 flex justify-start dark:text-white">Greg Miller</h2>
        <h3 className="h4 my-[.75rem] flex justify-start dark:text-white">
          Host
        </h3>
        <p className="body dark:bodydark">
          As an Airbnb host, I take pride in offering a welcoming and
          comfortable experience for all my guests. From thoughtfully curated
          spaces to personalized recommendations, I strive to make each stay
          memorable. Whether you're here for a weekend getaway or an extended
          visit, my goal is to ensure you feel right at home. I’m always
          available to answer questions, provide local tips, and help make your
          trip as smooth and enjoyable as possible.
        </p>
        <Link href="https://www.airbnb.com/help/article/99">
          <Button className="button mt-[.75rem] text-black">
            Airbnb Profile
          </Button>
        </Link>
      </div>
      <div className="my-auto mb-[1.25rem] w-full lg:mt-0 lg:w-[50%]">
        <Image
          src={"/DSC_0280.jpeg"}
          alt={"Listing Photo"}
          width={450}
          height={268}
          className="mx-auto size-[300px] rounded-full border-[3px] border-black bg-black  p-5 shadow-lg md:size-[325px] lg:size-[400px] xl:size-[420px]"
        />
      </div>
    </section>
  );
};

export default Content;
