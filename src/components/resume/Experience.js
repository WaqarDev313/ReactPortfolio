import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Developer"
            subTitle="(2022 - Present)"
            result="pakistan"
            des="Experience my expertise in React development, where I create intuitive interfaces and optimize performance. Dive into my portfolio to see how I craft dynamic web applications that prioritize user experience."
          />
          <ResumeCard
            title="Web Developer & React"
            subTitle="(2023 - present)"
            result="pakistan"
            des="I specialize in building dynamic, responsive interfaces. Explore my portfolio to see how I leverage React to create visually appealing and high-performing websites.In upper section i mentioned my web projects in React."
          />
          <ResumeCard
            title="PHP and Laravel"
            subTitle="(2023 - 2024)"
            result="pakistan"
            des="Experience my proficiency in PHP and Laravel development, where I specialize in crafting robust and scalable web applications. Explore my portfolio to see how I leverage Laravel's powerful features to build dynamic and efficient solutions. From e-commerce platforms to content management systems, I excel in creating tailored experiences that meet client needs."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
