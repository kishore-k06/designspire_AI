import { motion,AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import State from '../store'
import { CustomButton } from '../components'
import { headContentAnimation, headContainerAnimation, headTextAnimation,slideAnimation } from '../config/motion'

const Home = () => {
    const snap = useSnapshot(State);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET&apos;S <br className='xl:block hidden' /> DO IT.
                        </h1>
                    </motion.div>
                    <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Where AI meets creativity—design your perfect T-shirt with our brand-new 3D 
                            customization tool. <strong>Unleash your imagination</strong> and define 
                            your unique style.
                        </p>

                        <CustomButton 
                            type="filled"
                            title="Customize It"
                            handleClick={()=>State.intro=false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home