import React from 'react'
import { 
  SiLaravel, SiHtml5, SiJavascript, 
  SiReact, SiTailwindcss, SiBootstrap, 
  SiMysql, SiPostgresql, SiGit 
} from 'react-icons/si'

import { FaCss3Alt, FaUsers } from 'react-icons/fa'

const skills = [
  { name: 'Laravel', icon: <SiLaravel className='text-red-500 text-5xl' /> },
  { name: 'HTML', icon: <SiHtml5 className='text-orange-500 text-5xl' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-blue-500 text-5xl' /> },
  { name: 'JavaScript', icon: <SiJavascript className='text-yellow-400 text-5xl' /> },
  { name: 'React', icon: <SiReact className='text-cyan-400 text-5xl' /> },
  { name: 'Tailwind', icon: <SiTailwindcss className='text-cyan-300 text-5xl' /> },
  { name: 'Bootstrap', icon: <SiBootstrap className='text-purple-500 text-5xl' /> },
  { name: 'MySQL', icon: <SiMysql className='text-blue-300 text-5xl' /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className='text-blue-400 text-5xl' /> },
  { name: 'Git', icon: <SiGit className='text-orange-400 text-5xl' /> },
  { name: 'Teamwork', icon: <FaUsers className='text-gray-300 text-5xl' /> },
]

const Skills = () => {
  return (
    <section id="skills" className='mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20 md:px-10 lg:px-12 scroll-mt-28'>
      <div className='flex flex-col items-center justify-center'>
        <span className='rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm'>
          Skills
        </span>
        <h2 className='mt-4 max-w-2xl text-center text-3xl font-semibold text-white md:text-5xl'>
          Toolset yang saya pakai untuk membangun produk yang rapi dan kuat.
        </h2>
      </div>
      

      <div className='grid grid-cols-2 gap-5 pt-12 md:grid-cols-4 xl:grid-cols-5'>
        {skills.map((skill, index) => (
          <div 
            key={index}
            className='group flex flex-col items-center justify-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-6 text-white shadow-[0_16px_40px_rgba(2,6,23,0.2)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10'
          >
            <div className='transition duration-300 group-hover:scale-110'>
              {skill.icon}
            </div>
            <p className='font-medium tracking-wide text-slate-200'>{skill.name}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills
