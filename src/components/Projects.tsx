import React, { useEffect, useState } from 'react'

const projectsData = [
  {
    title: 'Portfolio',
    desc: 'Project ini merupakan website portfolio pribadi yang dibuat untuk menampilkan informasi tentang diri saya, keahlian, serta berbagai project yang telah saya kerjakan. Website ini dibangun menggunakan React dan Tailwind CSS dengan tampilan yang modern, responsif, dan user-friendly.',
    image: '/portofolio.png',
  },
  {
    title: 'LandingPage PerpusKita',
    desc: 'Project ini merupakan website landing page PerpusKita yang berfungsi sebagai media informasi bagi pengguna terkait berbagai konten seperti artikel, event, dan informasi lainnya. Website ini merupakan hasil migrasi dari platform WordPress ke Laravel dengan tujuan meningkatkan performa, fleksibilitas, dan kemudahan dalam pengelolaan sistem.',
    image: '/2.png',
  },
  {
    title: 'TiseraHub',
    desc: 'Project ini merupakan website landing page Tisera Hub yang dikembangkan menggunakan Laravel dan Tailwind CSS untuk menghasilkan tampilan yang modern, responsif, dan user-friendly.',
    image: '/tiserahub.png',
  },
  {
    title: 'Kang Suplay',
    desc: 'Project ini merupakan sistem informasi berbasis website untuk koperasi pada sebuah yayasan yang bertujuan meningkatkan efisiensi pengelolaan data dan transaksi. Dibangun menggunakan Laravel Livewire dan Bootstrap dengan database MySQL.',
    image: '/kangsuplay.png',
  },
  {
    title: 'ID Farms',
    desc: 'Sistem berbasis web untuk memonitor dan mengelola ternak secara efisien, termasuk data kesehatan dan pertumbuhan.',
    image: '/farms.png',
  },
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const total = projectsData.length

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered, total])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  const getVisibleProjects = () => {
    if (total <= 3) return projectsData

    const prev = (currentIndex - 1 + total) % total
    const next = (currentIndex + 1) % total

    return [projectsData[prev], projectsData[currentIndex], projectsData[next]]
  }

  const visibleProjects = getVisibleProjects()

  return (
    <section id='projects' className='mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20 md:px-10 lg:px-12'>
      <div className='flex flex-col items-center'>
        <span className='rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm'>
          Projects
        </span>
        <h2 className='mt-4 max-w-2xl text-center text-3xl font-semibold text-white md:text-5xl'>
          Beberapa project yang mencerminkan proses, detail, dan hasil kerja saya.
        </h2>
      </div>

      <div className='mt-12 grid w-full grid-cols-1 gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-5 text-white shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-md lg:grid-cols-2 lg:p-6'>
        <img
          src={projectsData[currentIndex].image}
          alt={projectsData[currentIndex].title}
          className='h-[320px] w-full rounded-[1.5rem] object-cover md:h-[420px]'
        />

        <div className='flex flex-col justify-center rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-6 lg:p-8'>
          <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>
            Featured Work
          </p>
          <h3 className='mt-3 text-2xl font-bold text-white md:text-3xl'>
            {projectsData[currentIndex].title}
          </h3>
          <p className='mt-4 leading-8 text-slate-300'>
            {projectsData[currentIndex].desc}
          </p>
        </div>
      </div>

      <div
        className='mt-10 flex items-center justify-center gap-5'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {total > 3 && (
          <button
            onClick={prevSlide}
            className='rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:scale-105 hover:border-cyan-300/40 hover:bg-white/10'
          >
            ‹
          </button>
        )}

        {visibleProjects.map((project, index) => {
          const isActive = index === 1 || total <= 3

          return (
            <div
              key={index}
              onClick={() => {
                if (total > 3) {
                  if (index === 0) prevSlide()
                  if (index === 2) nextSlide()
                }
              }}
              className={`cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out
                ${isActive
                  ? 'scale-105 z-10 opacity-100 shadow-[0_0_30px_rgba(56,189,248,0.35)]'
                  : 'scale-95 opacity-55'}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className='h-[140px] w-[220px] object-cover md:h-[160px] md:w-[250px]'
              />
            </div>
          )
        })}

        {total > 3 && (
          <button
            onClick={nextSlide}
            className='rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:scale-105 hover:border-cyan-300/40 hover:bg-white/10'
          >
            ›
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects
