"use client"
import { Introduction } from '@/app/(Public)/(home)/(components)/Introduction';
import { GeneralInformation } from '@/app/(Public)/(home)/(components)/GeneralInformation';
import EmpowermentSection from '@/app/(Public)/(home)/(components)/Features';
import { WhyRegister } from '@/app/(Public)/(home)/(components)/WhyRegister';
import { WhyInvestmentLearning } from '@/app/(Public)/(home)/(components)/WhyInvestmentLearning';
import { WhatIsInvesting } from '@/app/(Public)/(home)/(components)/WhatIsInvesting';
import { InvestmentTypes } from '@/app/(Public)/(home)/(components)/InvestmentTypes';
import EducationFirm from '@/app/(Public)/(home)/(components)/EducationFirm';
import Investing from '@/app/(Public)/(home)/(components)/Investing';
import Management from '@/app/(Public)/(home)/(components)/Management';
import LearningShow from '@/app/(Public)/(home)/(components)/LearningShow';
import Conclusion from '@/app/(Public)/(home)/(components)/Conclusion';
import FAQ from '@/app/(Public)/(home)/(components)/FAQ';
import HighLight from '@/app/(Public)/(home)/(components)/HighLight';
export default function HomePage() {

    return (
        <div
        >
            <Introduction />
            <GeneralInformation />
            <EmpowermentSection />
            <WhyRegister />
            <WhyInvestmentLearning />
            <WhatIsInvesting />
            {/* <InvestmentTypes /> */}
            <EducationFirm />
            <Management />
            <Investing />
            <LearningShow />
            <Conclusion />
            <FAQ />
            <HighLight />
        </div>
    );
};