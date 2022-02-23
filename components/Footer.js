import React from "react";
import FooterText from "./common/FooterText";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialDribbble,
} from "react-icons/ti";
import FooterTextSmall from "./common/FooterTextSmall";

function Footer() {
  return (
    <div className="w-full flex flex-col bg-[#ebedf2] text-gray-400 md:h-[60vh] px-6 md:px-36 py-11">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-[70%]">
          <a
            className="uppercase cursor-context-menu text-xs text-[#262930] font-semibold leading-7 mb-4"
            href="#"
          >
            Browse
          </a>
          <div className="flex justify-between md:mr-20">
            <div className="flex flex-col">
              <FooterText text={"Streaming Library"} />
              <FooterText text={"Live TV"} />
              <FooterText text={"Live News"} />
              <FooterText text={"Live Sports"} />
            </div>
            <div className="flex flex-col">
              <FooterText text={"TV Shows"} />
              <FooterText text={"Movies"} />
              <FooterText text={"Originals"} />
              <FooterText text={"Networks"} />
              <FooterText text={"Kids"} />
              <FooterText text={"FX"} />
            </div>
            <div className="flex flex-col">
              <FooterText text={"HBO Max"} />
              <FooterText text={"CineMax"} />
              <FooterText text={"Showtime"} />
              <FooterText text={"StarZ"} />
            </div>
            <div className="flex flex-col max-w-[100px] md:max-w-[150px]">
              <FooterText text={"Hulu, Disney+, and ESPN+"} />
              <FooterText text={"Hulu (No Ads), Disney+, and ESPN+"} />
              <FooterText text={"Student Discount"} />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-[30%]">
          <div className="flex flex-col">
            <p className="uppercase cursor-context-menu text-xs text-[#262930] font-semibold leading-7 mb-4">
              help
            </p>
            <div className="flex flex-col">
              <FooterText text={"Account & Billing"} />
              <FooterText text={"Plans & Pricing"} />
              <FooterText text={"Supported Devices"} />
              <FooterText text={"Accessibility"} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="uppercase cursor-context-menu text-xs text-[#262930] font-semibold leading-7 mb-4">
              about us
            </p>
            <div className="flex flex-col">
              <FooterText text={"Shop Hulu"} />
              <FooterText text={"Press"} />
              <FooterText text={"Jobs"} />
              <FooterText text={"Contact"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 md:mt-12">
        <div className="flex items-center gap-6 mb-2 md:mb-10">
          <a href="#">
            <TiSocialFacebook className="text-2xl text-gray-500" />
          </a>
          <a href="#">
            <TiSocialTwitter className="text-2xl text-gray-500" />
          </a>
          <a href="#">
            <TiSocialYoutube className="text-2xl text-gray-500" />
          </a>
          <a href="#">
            <TiSocialLinkedin className="text-2xl text-gray-500" />
          </a>

          <a href="#">
            <TiSocialInstagram className="text-2xl text-gray-500" />
          </a>
          <a href="#">
            <TiSocialDribbble className="text-2xl text-gray-500" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <FooterTextSmall text={"© 2022 Hulu, LLC"} />
          <FooterTextSmall text={"About Ads"} />
          <FooterTextSmall text={"Terms of Use"} />
          <FooterTextSmall text={"Privacy Policy"} />
          <FooterTextSmall text={"Do Not Sell My Personal Information"} />
          <FooterTextSmall text={"Your California Privacy Rights"} />
          <FooterTextSmall text={"TV Parental Guidelines"} />
          <FooterTextSmall text={"Sitemap"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
