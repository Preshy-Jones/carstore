import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoMdChatboxes } from "react-icons/io";
const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-1.5 bg-primaryMain"></div>
      <div className="bg-backgroundDarker flex justify-center h-[4rem] items-center">
        <p className="mr-4">Have a question? We’re here to help.</p>
        <div>
          <button className="flex bg-white text-textPrimary p-[0.4375rem] items-center rounded-md">
            <IoMdChatboxes />
            <span>Chat with us</span>
          </button>
        </div>
      </div>
      <div className="bg-backgroundDark py-6 px-6">
        <p className="mb-8">
          If you need any help, we’re available from 8am-8pm, 7 days a week.
          Please see our Christmas opening hours.
        </p>
        <div className="flex text-[1.6rem] mb-6">
          <AiOutlineTwitter className="mr-8" />
          <GrFacebookOption className="mr-8" />
          <AiOutlineInstagram />
        </div>
        <div className="flex mb-6 font-[14px] justify-around">
          <h4>Support</h4>
          <h4>About us</h4>
          <h4>Car finance calculator</h4>
          <h4>Manage subscription</h4>
          <h4>Careers</h4>
          <h4>Press</h4>
          <h4>Investors</h4>
          <h4>Sponsorships</h4>
          <h4>Terms of use</h4>
          <h4>Privacy policy</h4>
          <h4>Cookie policy</h4>
          <h4>Modern slavery statement</h4>
          <h4>Sitemap</h4>
        </div>
        <p>
          Cazoo Ltd is an appointed representative of ITC Compliance Limited
          (ITC) which is authorised and regulated by the Financial Conduct
          Authority (ITCs firm reference number is 313486). Permitted activities
          include entering into regulated hire agreements, advising on and
          arranging general insurance contracts as an intermediary and acting as
          a credit broker not a lender. Finance is only available to UK
          residents aged 18 or over, subject to status. We can introduce you to
          a limited number of lenders to finance your car purchase. We do not
          charge fees for our consumer credit services, but we might receive a
          payment or other benefits from those lenders or our brokers if you
          enter into an agreement with them. The payment or benefit we receive
          varies by lender and product type and is based on a fixed fee or fixed
          percentage of the amount you borrow. It does not impact the rate you
          are offered.
        </p>
        <p className="mt-4">© 2022 Cazoo Ltd. All rights reserved</p>

        <div className="flex font-black mt-4">
          <h2 className="mr-3">United Kingdom</h2>
          <h2>France</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
