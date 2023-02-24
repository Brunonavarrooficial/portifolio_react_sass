import {FaGithub} from 'react-icons/fa'
import {GoGlobe} from 'react-icons/go'

import '../assets/styles/components/projetoscontainer.sass'

import Exacttime from '../assets/image/projects/exacttime.gif'
import Agencyfake from '../assets/image/projects/agenciafake.gif'
import Agency from '../assets/image/projects/agency.gif'
import ClimaTempo from '../assets/image/projects/climatempo.gif'
import DevLink from '../assets/image/projects/devlinkpage.gif'
import Electrum from '../assets/image/projects/electrum.gif'
import BoxShadowGer from '../assets/image/projects/geradorboxshadow.gif'
import MoviesLib from '../assets/image/projects/movieslib.gif'
import PersonSpecterLitt from '../assets/image/projects/personspecterlitt.gif'
import PokeNext from '../assets/image/projects/pokenext.gif'

const projects = [
  {id:'01', name: 'Exact Time', image: Exacttime, stacks: 'Bootstrap, HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/ExactTime-Bootstrap', deploy:'https://exact-time-bn.netlify.app/' },
  {id:'02', name: 'Agência Fake', image: Agencyfake, stacks: 'HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/AgenciaFake_HTMLCSS', deploy:'https://agenciafake-bn.netlify.app/' },
  {id:'03', name: 'Agency', image: Agency, stacks: 'Bootstrap, HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/Agency-Sass', deploy:'https://agency-empresa-bn.netlify.app/' },
  {id:'04', name: 'Clima Tempo API', image: ClimaTempo, stacks: 'Javascript, HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/ClimaTempo-API-Js-', deploy:'https://climatempo-bn.netlify.app/' },
  {id:'05', name: 'Dev Link', image: DevLink, stacks: 'React, CSS, Javascript, Firebase', repositorio:'https://github.com/Brunonavarrooficial/DevLink-ReactJs', deploy:'https://devlinks-bn.netlify.app/' },
  {id:'06', name: 'Electrum', image: Electrum, stacks: 'Sass, HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/Electrum-Sass', deploy:'https://e-commerce-electrum-bn.netlify.app/' },
  {id:'07', name: 'Gerador Box Shadow', image: BoxShadowGer, stacks: 'javascript, HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/boxShadowGenerator', deploy:'https://boxshadowgenerator-bn.netlify.app/' },
  {id:'08', name: 'Movies Lib', image: MoviesLib, stacks: 'React, Javascript, CSS', repositorio:'https://github.com/Brunonavarrooficial/API-IMDBFilmes-ReactJs', deploy:'https://brunobonfimimdbfilmes.vercel.app/' },
  {id:'09', name: 'PersonSpecterLitt', image: PersonSpecterLitt, stacks: 'Javascript, HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/PearsonSpecterLitt-Js', deploy:'https://pearson-specter-litt-js.vercel.app/' },
  {id:'10', name: 'PokeNext', image: PokeNext, stacks: 'Next, Javascript, HTML, CSS', repositorio:'https://github.com/Brunonavarrooficial/PokeNextJs', deploy:'https://pokenext-js-eight.vercel.app/' },
]

const ProjetosContainer = () => {
  return (
    // <section className="projects-container">
    //     <h2>Projetos</h2>
    //     <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Veniam perspiciatis necessitatibus illo beatae consequatur
    //         voluptatem eveniet quidem eum, et iusto nihil.
    //         Esse earum architecto ipsum! Praesentium deleniti libero aut maxime?
    //     </p>
    //     <img src={Exacttime} alt="Projeto-hello" width={'300px'}/>
    //     <a href={"https://github.com/Brunonavarrooficial"} target={'_blank'} className="btn">
    //         Ver Projetos
    //     </a>
    // </section>
    <section className="projects-container">
        <h2>Projetos</h2>
        <div className="projects-grid">
            {projects.map((project) =>(
                <div className="projects-card" id={project.id} key={project.id}>
                   <img src={project.image} alt="projeto" /> 
                    <div className="projects-info">
                        <h3>{project.name}</h3>
                        <p>{project.stacks}</p>
                        <a href={project.repositorio} target={'_blank'} className="btnp"><FaGithub/></a>
                        <a href={project.deploy} target={'_blank'} className="btnp"><GoGlobe/></a>
                    </div>
                </div>
            ))}
        </div>
        <div className='repo'>
        <h2>Repositórios Github</h2>
        <div className='githubFollow'>
        <a href={"https://github.com/Brunonavarrooficial"} target={'_blank'} className="btn">
             Ver Projetos
         </a>
         </div>         
         </div>
    </section>
  )
}

export default ProjetosContainer