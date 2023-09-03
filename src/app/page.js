"use client";


import Image from 'next/image'
import './globals.css'
import Navbar from './components/navbar'
import Type from './components/type';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Home() {

  const textArray = ["Frontend Developer", "Web Designer", "UI/UX Designer"];
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation once when it comes into view
  });

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const animationVariantsLine = {
    hidden: { opacity: 0, width: 0 }, // Start with width at 0
    visible: { opacity: 1, width: '100%' }, // Fully draw the line (width at '100%')
  };

  const animationTransition = {
    duration: 1,
  };
  const animationVariantsText = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and move down by 20px
    visible: { opacity: 1, y: 0 }, // Fully visible and at the original position
  };

  const animationTransitionText = {
    duration: 1,
  };
  const animationTransitionTextSmall = {
    duration: 1,
    delay: 0.2,
  };

  return (
    <div class='relative mobile-bg h-screen'>
      <Navbar />
      <div class='w-full h-screen flex flex-col xl:gap-y-0 gap-y-[40px] xl:flex-row items-center justify-center xl:justify-between relative'>
        <div class='flex justify-center p-6 xl:w-[50vw] xl:pl-[12.5%] flex-col gap-y-[40px] items-center xl:items-start'>
          <div class='header-gradient-item text-white text-[14px] font-semibold px-4 py-1'>
            <Type class='typer'/>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariantsText}
            transition={animationTransitionText}
          >
          <h1 class='md:text-[60px] max-w-[690px] text-[34px] xl:text-left text-center text-white font-bold'>
            Crafting digital
            <br></br>
            <span class='bg-clip-text animated-text text-transparent'>experiences </span>
            for <br></br> the new <br></br> generation
          </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariantsText}
            transition={animationTransitionTextSmall}
          >
          <p class='md:text-[16px] text-[14px] max-w-[480px] xl:text-left text-center font-semibold text-[#8A8A8A]'>
            With a 
            <span class='animated-text'> passion </span>
            for creating visually captivating and user-friendly digital
            experiences, I am a front-end developer and upcoming backend developer.
            Armed with 3 years of professional experience, I am dedicated to
            crafting engaging interfaces and seamless interactions that leave 
            a
            <span class='animated-text'> lasting <br></br> impact </span>
             on users.
          </p>
          </motion.div>
          <div class='flex flex-row items-center xl:ml-[-14px]'>
            <a href='#projects' class='gradient-btn cursor-pointer z-50  transition-all border border-white/0 hover:border-white/50 min-w-[190px] flex text-center flex-row items-center justify-center px-5 py-3 text-white text-[13px] md:text-[16px] font-semibold null'>Portfolio</a>
            <a href='#contact' class='ml-4 text-[#4E4E50] text=[16px]'>Reach out</a>
          </div>
          <div class='flex flex-row items-center gap-x-4'>
            <a href="mailto:sdoncaster5@gmail.com" class="bg-[#4E4E50] w-[40px] flex flex-col items-center justify-center h-[40px] rounded-full">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            </a>
            <a href="https://github.com/donkeyboy223" class="bg-[#4E4E50] w-[40px] flex flex-col items-center justify-center h-[40px] rounded-full">
            <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-white" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
              </path>
            </svg>
            </a>
          </div>
        </div>
      </div>
      <div id='skills' class='py-[120px] max-w-7xl mx-auto px-6 z-30 relative'>
        <div class='flex flex-row justify-between w-full my-6'>
          <h6 class='text-white text-[40px] md:text-[60px] font-bold'>Skills</h6>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariantsLine}
          transition={{ ...animationTransition, delay: 0.2 }} // Adjust the delay for staggered animation
        >
        <div class='w-full h-1 bg-[#4E4E50]'></div>
        </motion.div>
        <div class='flex flex-col px-6 items-center lg:flex-row  justify-between mt-[40px]'>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ ...animationTransition, delay: 0.75 }}
          >
            <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px]">HTML</h6>
            <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">4 Years Experience</p>
          </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ ...animationTransition, delay: 0.8 }}
          >
            <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px]">CSS</h6>
            <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">4 Years Experience</p>
            </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ ...animationTransition, delay: 1 }}
          >
            <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px]">Javascript</h6>
            <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">3 Years Experience</p>
            </motion.div>
          </div>
        </div>
        <div class='flex flex-col px-6 items-center lg:flex-row  justify-between gap-x-[6em] mt-[12px] lg:mt-[6em]'>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ ...animationTransition, delay: 0.2}}
          >
            <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px]">React</h6>
            <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">2.5 Years Experience</p>
            </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ ...animationTransition, delay: 1.2 }}
          >
            <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px]">NextJS</h6>
            <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">6 Months Experience</p>
            </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ ...animationTransition, delay: 0.6}}
          >
            <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px]">Tailwind</h6>
            <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">6 Months Experience</p>
            </motion.div>
          </div>
        </div>
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariantsLine}
            transition={{ ...animationTransition, delay: 0.2 }}
          >
        <div class='w-full h-1 bg-[#4E4E50] mt-[40px]'></div>
        </motion.div>
        <p class='text-[#4E4E50] text-center font-bold text-[16px] mt-[40px]'>Forever Evolving, Forever Learning</p>
      </div>
      <div id="portfolio" class="py-[120px] max-w-7xl mx-auto px-6 z-30 relative">

      </div>
    </div>
  )
}
