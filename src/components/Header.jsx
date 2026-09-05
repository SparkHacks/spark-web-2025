

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from "./styles/Header.module.css"

const links = [
  { name: 'HackPack', href: 'https://youthful-mayflower-02b.notion.site/HackPack-2025-16c1bf81ade280e9b4f6ea19a572a181', svg: "" },
  { name: 'About', href: '#about', svg: "" },
  { name: 'Workshops', href: '#workshops', svg: ""},
  { name: 'Schedule', href: '#schedule', svg: "" },
  { name: 'FAQ', href: '#faq', svg: ""},
  { name: 'Sponsors', href: '#sponsors', svg: "" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    controls.start(isMenuOpen ? 'closed' : 'open');
  };

  const handleApply = () => window.open('https://dashboard.sparkhacks.org', "_blank");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [isMenuOpen]); 

  return (
    <header 
      className="header fixed z-[100] w-full flex flex-row items-center justify-end backdrop-blur-sm bg-gradient-to-b from-[#041D33] to-[#fff0] px-8 py-3 text-white"
    >
      <ul className="space-x-11 hidden min-[820px]:flex">
        {
          links.map((link, index) => (
            <li key={index} className = "flex content-center flex-wrap font-bold">
              <a href={link.href}>{link.name}</a>
            </li>
          ))
        }
        <li className={styles.apply}>
          <a onClick={handleApply} className="cursor-pointer">Apply</a>
        </li>
      </ul>
      <div className="min-[820px]:hidden">
        <button
          onClick={toggleMenu}
          className="text-white font-darkline text-[30px] font-normal"
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={controls}
        variants={{
          open: { y: 0},
          closed: { y: '120%' },
        }}
        transition={{ duration: 1 }}
        className={`min-[820px]:hidden fixed top-0 right-0 h-screen w-full bg-gradient-to-b from-[#014E6F] to-[#041D33] text-white flex justify-center items-center py-[30px]`}
      > 
        <div className="flex flex-col items-center justify-center z-[61]">
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[50px] font-bold text-[35px] font-hyperhelix mb-6 flex md:flex-row flex-col justify-center items-center gap-2">
              <img className="w-[100px] h-auto" src={import.meta.env.BASE_URL + "/sparkhacks-logo.svg"}/>
              <h1>SparkHacks 2025</h1>
          </motion.span>
          {
            links.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.2 }}
                href={link.href}
                onClick={toggleMenu}
                className="mb-6 flex flex-row gap-2 justify-center items-center"
              >
                <h1>{link.name}</h1>
              </motion.a>
            ))
          }
          <motion.button
            onClick={handleApply}
            className={`cursor-pointermb-6 flex flex-row gap-2 justify-center items-center ${styles.apply2}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
          >
            <h1>Apply</h1>
          </motion.button>
          <motion.button
            onClick={toggleMenu}
            className="text-[30px] flex flex-row gap-2 justify-center items-center mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
          >
            <div className='invert w-[30px] h-[30px]'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00191 9.41621C7.61138 9.02569 7.61138 8.39252 8.00191 8.002C8.39243 7.61147 9.0256 7.61147 9.41612 8.002L12.0057 10.5916L14.5896 8.00771C14.9801 7.61719 15.6133 7.61719 16.0038 8.00771C16.3943 8.39824 16.3943 9.0314 16.0038 9.42193L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.004C15.6133 16.3945 14.9802 16.3945 14.5896 16.004L12.0057 13.42L9.42192 16.0038C9.03139 16.3943 8.39823 16.3943 8.00771 16.0038C7.61718 15.6133 7.61718 14.9801 8.00771 14.5896L10.5915 12.0058L8.00191 9.41621Z" fill="#0F0F0F"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#0F0F0F"></path> </g></svg>
            </div>
            <h1>Close</h1>
          </motion.button>
        </div>
        
        <img src={import.meta.env.BASE_URL + "/Jellyfish.svg"} className='block absolute bottom-10 left-10 h-[150px] animate-bob-med'/>
      </motion.div>      
    </header>
  );
}
