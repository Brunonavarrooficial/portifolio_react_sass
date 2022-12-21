import AboutContainer from './AboutContainer'
import TecnologiesContainer from './TecnologiesContainer'
import ProjetosContainer from './ProjetosContainer'

import '../assets/styles/components/maincontest.sass'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiesContainer />
      <ProjetosContainer />
      </main>
  )
}

export default MainContent