import { motion  } from 'framer-motion';

const animals = [
  {
    image: "/sponsors/crab.svg",
  },
  {
    image: "/sponsors/seahorse.svg",
  },
  {
    image: "/sponsors/greenfish.svg",
  },
  {
    image: "/sponsors/starfish.svg",
  },
  {
    image: "/sponsors/orangefish.svg",
  },
  {
    image: "/public/threejelly.svg",
  },
  {
    image: "/sponsors/turtle.svg",
  },
  {
    image: "/sponsors/crab.svg",
  },
  {
    image: "/sponsors/greenwhale.svg",
  },

]

const animalLength = animals.length
const logoWidth = 96
const logoGap = 100

const maequeeSponsor = {
  animate: {
    x: [-animalLength * (logoWidth + logoGap), 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      }
    }
}
}

export default function Animals(){
  return(
    <section className="w-full flex flex-col overflow-x-hidden" id="animals">
      <motion.div
      variants={maequeeSponsor}
      animate="animate"
      className="flex flex-row w-full gap-[30px] mt-10 items-center">
          {animals.map((animal) => 
          <div className=' group relative flex justify-center items-center'>
            <img src={import.meta.env.BASE_URL + animal.image} width="96" className="object-contain min-w-[50px]"></img>
            </div>
          )}
      
      </motion.div>
    </section>
  )
}