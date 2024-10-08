import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
<div options={{mac:45, scale:1, speed:450}}
className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '>
<img src={icon} alt={title} className='w-16 h-16 object-contain'/>
<h3 className='text-white text-[20px] text-bold text-center'>{title}</h3>
</div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] w-full leading-[30px]'>
      I am a Application Developer with over a year of experience in building dynamic mobile applications. My skill set includes Dart, Flutter, Firebase, Java, Spring Boot, MySQL,React, JavaScript, HTML, CSS, GitHub, etc which allows me to contribute to both front-end and back-end development. I excel in creating responsive, modern UIs and integrating real-time data management with Firebase. With a strong grasp of state management and scalable architecture, I am passionate about staying on the cutting edge of technology and thrive in fast-paced environments. My blend of technical expertise and creativity ensures I deliver high-quality solutions, whether working independently or within a team.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')