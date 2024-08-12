import { useState } from "react";
import { Button } from "@/components/commons/Button";
import { Title } from "@/components/commons/Title";
import { useTranslation } from "react-i18next";
import Background from "@/public/assets/images/home/test.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerVariants } from "@/constants/StaggerVariant";
import { Reveal } from "@/components/animations/Reveal";

const MotionText  : React.FC<React.PropsWithChildren>= ({ children }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    className="text-lg mb-6"
  >
    {children}
  </motion.p>
);

export const GeneralInformation = () => {
  const [showMore, setShowMore] = useState(false); // Trạng thái để theo dõi việc nhấn nút
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "29%",
    backgroundRepeat: "no-repeat",
  };

  const { t } = useTranslation();

  // Hàm để xử lý khi nhấn nút
  const handleButtonClick = () => {
    setShowMore((prevState) => !prevState); // Chuyển đổi trạng thái
  };

  return (
    <section className="w-full relative top-[-50px] z-10 mx-auto">
      <motion.div
        variants={staggerVariants}
        whileInView="in"
        initial="initial"
        exit="out"
        className="bg-gray-50 shadow-2xl container rounded-lg p-20 mx-auto"
      >
        <Title className="tracking-wider ml-12">{t("TitleAtGenerall")}</Title>
        <div className="grid justify-items-center grid-cols-1 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <Reveal>
              <MotionText>{t("TextBoldAtGenerall")}</MotionText>
            </Reveal>
            <Reveal>
              <MotionText>{t("TextStartAtGen")}</MotionText>
            </Reveal>
            {/* Hiển thị thêm các đoạn văn bản khi nhấn nút */}
            {showMore && (
              <>
                <Reveal>
                  <MotionText>{t("TextMidAtGen")}</MotionText>
                </Reveal>
                <Reveal>
                  <MotionText>{t("TextEndAtGen")}</MotionText>
                </Reveal>
              </>
            )}
          </div>
          <div className="flex flex-col lg:col-span-3 lg:relative lg:top-[-30px] lg:right-[-30px] ">
            <Image
              alt=""
              className="object-cover w-auto"
              src={Background}
            ></Image>
            <div className="w-full flex items-center justify-center mt-10 ">
              <Reveal>
                <Button className="uppercase text-white bg-mainbg hover:shadow-mainbg" onClick={handleButtonClick}>
                  {t(showMore ? "Button2AtGen" : "ButtonAtGen")}
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
