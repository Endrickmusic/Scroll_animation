import { motion, AnimatePresence } from 'framer-motion'

export function Overlay() {

  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>


      </motion.header>
      <AnimatePresence>
   
          <motion.section key="main" {...config}>
            <div className="section--container">
              <motion.div
                key="title"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 3.3 }}>
                <h1>LET'S DO IT.</h1>
              </motion.div>

              <div className="support--content">
                <motion.div
                  key="p"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    damping: 7,
                    stiffness: 30,
                    restDelta: 0.001,
                    duration: 10.6,
                    delay: 0.2,
                    delayChildren: 0.2
                  }}>
                  <p>
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. <strong>Aenean vulputate eleifend tellus.</strong> Integer tincidunt. Cras dapibus.
                  </p>
                  <button onClick={() => (state.intro = false)}>
                    CUSTOMIZE IT
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.section>


      </AnimatePresence>
    </div>
  )
}
