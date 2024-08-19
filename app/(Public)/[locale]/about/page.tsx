"use client";

import React, { useState } from "react";
import { Title } from "@/components/commons/Title";
import CheckIcon from "@/public/assets/images/check-faq.webp";
import OurTeam from "@/public/assets/images/about/our-team.png";
import { Button } from "@/components/commons/Button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { SystemColor } from "@/constants/Color";
import Link from "next/link";
import { LocalizedLink } from "@/components/commons/LocalizedLink";

export default function AboutPage() {
  const { t } = useTranslation();

  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div
      style={{ backgroundColor: SystemColor.grayBackground }}
      key="about"
      className="text-white bg-cover bg-center w-full flex flex-col items-center mb-30"
    >
      <div className="my-16"></div>
      <div className="container mx-auto grid grid-cols-3 gap-4 mb-5  px-4">
        <div className="col-span-2 max-md:col-span-full">
          <div className="h-full flex items-center justify-center">
            <div className="w-full">
              <h1 className="text-3xl font-bold">{t("TitSmAtAboutPage")}</h1>
              <p className="font-bold text-xl my-5">
                {t("TextStartAtAboutPage")}
              </p>
              <p className="text-xl mb-5">{t("TextMidAtAboutPage")}</p>
              <p className="text-xl">{t("TextEndAtAboutPage")}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 max-md:col-span-full">
          <div className="h-full flex relative top-[30px] z-[0] items-center justify-center w-full">
            <Image src={OurTeam} alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="container text-black mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
        <div className="px-8 py-6 bg-white rounded-lg shadow-lg">
          <div className="flex gap-6">
            <Image className="object-contain" src={CheckIcon} alt=""></Image>
            <p className="font-bold text-2xl my-4">{t("TitBor1AtAboutPage")}</p>
          </div>
          <p className="text-xl">{t("TextBor1AtAboutPage")}</p>
          {isReadMore && (
            <p className="text-xl mt-5">
              {t("TextBorMore1AtAboutPage")}
              <p className="mt-5">{t("TextBorMore2AtAboutPage")}</p>
            </p>
          )}
          <button
            onClick={handleReadMore}
            className="mt-3 text-blue-500 text-lg"
          >
            {isReadMore ? t("ButSmLessAtAboutPage") : t("ButSmMoreAtAboutPage")}
          </button>
        </div>
        <div className="px-8 py-6 bg-white rounded-lg shadow-lg">
          <div className="flex gap-6">
            <Image className="object-contain" src={CheckIcon} alt=""></Image>
            <p className="font-bold text-2xl my-4">{t("TitBor2AtAboutPage")}</p>
          </div>
          <p className="text-xl">{t("TextBor2AtAboutPage")}</p>
        </div>
      </div>

      <div className="text-center mb-12 ">
        <Button>
          <LocalizedLink
            href="/register"
            className="uppercase font-bold text-xl px-4"
          >
            {t("ButBigAtAboutPage")}
          </LocalizedLink>
        </Button>
      </div>
    </div>
  );
}
