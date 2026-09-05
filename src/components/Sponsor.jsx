import { motion  } from 'framer-motion';
import './SponStyle.css';

const sponsors = [
  {
    name: "CME Group",
    image: "/sponsors/cme-logo.png",
  },
  {
    name: "UIC CS Department",
    image: "/sponsors/uicengineering.svg",
  },
  {
    name: "John Deere",
    image: "/sponsors/johndeere.svg",
  },
  {
    name: "Grainger",
    image: "/sponsors/grainger.svg",
  },
  {
    name: "Fulcrum",
    image: "/sponsors/fulcrum.svg",
  },
]

const sponsorLength = sponsors.length
const logoWidth = 250
const logoGap = 30

const maequeeSponsor = {
  animate: {
    x: [-sponsorLength * (logoWidth + logoGap), 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      }
    }
  }
}

const expandedSponsors = [...sponsors, ...sponsors, ...sponsors]

export default function Sponsor(){
  return(
    <section className="w-full flex flex-col overflow-x-hidden" id="sponsor">
      <motion.div
      variants={maequeeSponsor}
      animate="animate"
      className="flex flex-row w-full gap-[30px] mt-10 items-center">
        {expandedSponsors.map((sponsor, i) => 
          <div key={sponsor.name + i}  className=' group relative flex justify-center items-center min-h-[160px]'>
            <span className=' shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#CDA5C7] backdrop-blur-[19.5px]  absolute opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100  w-[70%] text-center text-[white] font-poppin '>{sponsor.name}</span>
            <img src={import.meta.env.BASE_URL + sponsor.image} width="250" height="250" className="object-contain min-w-[250px]"/>    
          </div>
        )}
      </motion.div>
    </section>
  )
}