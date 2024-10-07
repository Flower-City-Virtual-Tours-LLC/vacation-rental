import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem]">
        <h2 className="h2 dark:text-white">Get Started</h2>
        <p className="dark:bodydark body flex max-w-[600px] text-center">
          Looking to book a short-term rental? Fill out the form below to
          inquire about availability, rates, and any special requests. Let’s
          make your stay unforgettable!
        </p>
        <Link href={"/contact"}>
          <Button className="button dark:buttondark bg-kw-red text-white hover:bg-black dark:bg-kw-red">
            Contact Host
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
