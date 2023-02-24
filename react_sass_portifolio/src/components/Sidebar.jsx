import Avatar from '../assets/image/eu01.jpg'
import SocialNetwork from './SocialNetwork'
import InformationContainer from './InformationContainer'

import '../assets/styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="avatar" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="https://github.com/Brunonavarrooficial/portifolio_react_sass/raw/main/react_sass_portifolio/src/assets/documents/Bruno_Bonfim_Curr%C3%ADculo.pdf" target={'_blank'} className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar