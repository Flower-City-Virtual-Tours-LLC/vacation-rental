/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reviews = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem] md:flex-row">
        <div className="flex justify-center md:w-[50%]">
          <Link href={"portfolio/605-wild-mallard-trail"}>
            <Image
              src={"/DSC_0272.jpeg"}
              alt={"Listing Photo"}
              width={450}
              height={268}
              className="rounded-[.5rem] border-2 border-black shadow-lg"
            />
          </Link>
        </div>
        <div className="md:w-[50%] ">
          <h2 className="h2 mb-[.66rem] dark:text-white">My Reviews</h2>
          <p className="body dark:bodydark">
            "My stay was amazing! The house was clean and the host was very
            accommodating. I would definitely stay here again!"
          </p>
          <Link href={"https://www.airbnb.com"} target="_blank">
            <button className="button dark:buttondark mx-auto mt-[1.25rem] flex">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
