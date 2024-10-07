import Link from "next/link";
import React from "react";

const ListYours = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem]">
        <h2 className="h2 dark:text-white">Book A Stay</h2>
        <p className="body dark:bodydark flex max-w-[600px] text-center">
          Looking to book a short-term rental? Fill out the form below to
          inquire about availability, rates, and any special requests. Let’s
          make your stay unforgettable!
        </p>
        <Link href={"/contact"}>
          <button className="button dark:buttondark">Contact Host</button>
        </Link>
      </div>
    </section>
  );
};

export default ListYours;
