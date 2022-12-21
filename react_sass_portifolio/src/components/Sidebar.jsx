import Avatar from '../assets/image/eu01.jpg'
import SocialNetwork from './SocialNetwork'
import InformationContainer from './InformationContainer'

import '../assets/styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="avatar" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar