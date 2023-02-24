import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../assets/styles/components/socialnetwork.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/brunobonfimdev' },
    {name: "github", icon: <FaGithub />, link: 'https://github.com/Brunonavarrooficial' },
    {name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/brunonavarrooficial' }

]

const SocialNetwork = () => {
  return (
    <section id="social-network">
        {socialNetworks.map((network) => (
        <a href={network.link} target='_blank' className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
        ))}
    </section>
  )
}

export default SocialNetwork