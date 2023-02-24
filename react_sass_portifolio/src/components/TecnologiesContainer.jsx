import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiGit,
    DiBootstrap,
    DiDocker,
    DiEclipse,
    DiFirebase,
    DiHeroku,
    DiJava,
    DiLinux,
    DiMarkdown,
    DiMongodb,
    DiNginx,
    DiRedis,
    DiSass,
    DiSqllite,
    DiTrello,
    DiVisualstudio,
    DiGithubBadge
} from 'react-icons/di'

import {
    SiAmazonaws,
    SiGraphql,
    SiInsomnia,
    SiKubernetes,
    SiNetlify,
    SiNextdotjs,
    SiPostgresql,
    SiPostman,
    SiRancher,
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiVercel
} from 'react-icons/si'

import '../assets/styles/components/technologiescontainer.sass'

const technologies = [
    {id:'html', name: 'HTML5', icon: <DiHtml5 />, info: 'Front-End'},
    {id:'css', name: 'CSS3', icon: <DiCss3 />, info: 'Front-End' },
    {id:'js', name: 'javaScript', icon: <DiJsBadge />, info: 'Front-End' },
    {id:'typescript', name: 'Typescript', icon: <SiTypescript />, info: 'Front-End' },
    {id:'react', name: 'React', icon: <DiReact />, info: 'Front-End' },
    {id:'nextjs', name: 'Next-Js', icon: <SiNextdotjs />, info: 'Front-End' },
    {id:'tailwindcss', name: 'Tailwindcss', icon: <SiTailwindcss />, info: 'Front-End' },
    {id:'bootstrap', name: 'Bootstrap', icon: <DiBootstrap />, info: 'Front-End' },
    {id:'markdown', name: 'Markdown', icon: <DiMarkdown />, info: 'Front-End' },
    {id:'sass', name: 'Sass', icon: <DiSass />, info: 'Front-End' },
    {id:'trello', name: 'Trello', icon: <DiTrello />, info: 'Scrum' },
    {id:'visualstudio', name: 'VsCode', icon: <DiVisualstudio />, info: 'Full-Stack' },
    {id:'node', name: 'Node.js', icon: <DiNodejsSmall />, info: 'Back-End' },
    {id:'git', name: 'Git', icon: <DiGit />, info: 'Back-End' },
    {id:'github', name: 'Github', icon: <DiGithubBadge />, info: 'Back-End' },
    {id:'postman', name: 'Postman', icon: <SiPostman />, info: 'Back-End' },
    {id:'graphql', name: 'Graphql', icon: <SiGraphql />, info: 'Back-End' },
    {id:'insomnia', name: 'Insomnia', icon: <SiInsomnia />, info: 'Back-End' },
    {id:'java', name: 'Java', icon: <DiJava />, info: 'Back-End' },
    {id:'spring', name: 'Spring', icon: <SiSpring />, info: 'Back-End' },
    {id:'eclipse', name: 'Eclipse', icon: <DiEclipse />, info: 'Back-End' },
    {id:'mysql', name: 'MySQL', icon: <DiMysql />, info: 'Database' },
    {id:'postgres', name: 'Postgres', icon: <SiPostgresql />, info: 'Database' },
    {id:'firebase', name: 'Firebase', icon: <DiFirebase />, info: 'Database' },
    {id:'mongodb', name: 'Mongodb', icon: <DiMongodb />, info: 'Database' },
    {id:'sqlite', name: 'SQlite', icon: <DiSqllite />, info: 'Database' },
    {id:'redis', name: 'Redis', icon: <DiRedis />, info: 'Database' },
    {id:'linux', name: 'Linux', icon: <DiLinux />, info: 'Command Bash' },
    {id:'netlify', name: 'Netlify', icon: <SiNetlify />, info: 'Cloud Computing' },
    {id:'vercel', name: 'Vercel', icon: <SiVercel />, info: 'Cloud Computing' },
    {id:'docker', name: 'Docker', icon: <DiDocker />, info: 'Cloud Computing' },
    {id:'kubernetes', name: 'Kubernetes', icon: <SiKubernetes />, info: 'Cloud Computing' },
    {id:'heroku', name: 'Heroku', icon: <DiHeroku />, info: 'Cloud Computing' },
    {id:'nginx', name: 'Nginx', icon: <DiNginx />, info: 'Cloud Computing' },
    {id:'rancher', name: 'Rancher', icon: <SiRancher />, info: 'Cloud Computing' },
    {id:'aws', name: 'Aws', icon: <SiAmazonaws />, info: 'Cloud Computing' },
]

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) =>(
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.info}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TecnologiesContainer