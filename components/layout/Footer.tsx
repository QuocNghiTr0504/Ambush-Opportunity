import { Footer } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/logo-head.png";
import { SystemColor } from "@/constants/Color";
import { LocalizedLink } from "../commons/LocalizedLink";
import { useTranslation } from "react-i18next";

export default function WebFooter() {
  const { t } = useTranslation()
  return (
    <Footer
      style={{ backgroundColor: SystemColor.footerBackground }}
      className="px-10"
    >
      <main className="flex flex-wrap gap-y-4  justify-between">
        <Image
          className="max-h-[70px] relative bottom-2 w-auto object-cover"
          src={logo}
          alt="Logo"
        />
        <div className="items-center flex flex-wrap gap-x-[60px] gap-y-[15px]">
          <LocalizedLink
            className="h-fit text-white whitespace-nowrap  text-xl"
            href="/"
          >
            {t("TermsAtFooter")}
          </LocalizedLink>
          <LocalizedLink
            className="h-fit text-white whitespace-nowrap text-xl"
            href="/"
          >
            {t("PrivacyAtFooter")}
          </LocalizedLink>
        </div>
      </main>
      <div></div>
    </Footer>
  );
}
