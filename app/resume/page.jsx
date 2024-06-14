"use client"
import PageTransition from "@/components/ui/PageTransition";
import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiLaragon,
  SiCodeigniter,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = [
  {
    title: "About Me",
    description:
      "Enthusiastic Junior Web Developer with a passion for creating user-friendly and engaging web applications.Interested in exploring emerging technologies and staying at the forefront of web development trends.Committed to delivering high-quality work and meeting project deadlines.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Novebrian Setya Purwanto",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+62) 896-9492-9896",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Indonesian",
      },
      {
        fieldName: "Email",
        fieldValue: "novebrian211@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Indonesia, English",
      },
    ],
  },
];
const Resume = () => {
  return (
    <>
      <PageTransition />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaulValue="about"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="about" className='w-full'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                </div>
              </TabsContent>

              <TabsContent value="education" className='w-full'>
                about
              </TabsContent>

              <TabsContent value="skills" className='w-full'>
                about
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
