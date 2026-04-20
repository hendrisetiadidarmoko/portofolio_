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
    <section id="skills" className='min-h-screen flex flex-col justify-center py-10'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 text-xl md:text-4xl font-bold text-center'>
        Skills
        </h2>
        <div className='w-24 h-1 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400'></div>
      </div>
      

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-5'>
        {skills.map((skill, index) => (
          <div 
            key={index}
            className='flex flex-col items-center justify-center gap-3 bg-blue-500/20 backdrop-blur-md border border-blue-300/30 text-white font-semibold py-5 px-5 rounded-2xl transition duration-300 transform hover:bg-blue-500/30 hover:scale-105 active:scale-95'
          >
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills