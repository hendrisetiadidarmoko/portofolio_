import React, { useEffect, useState } from 'react'

const projectsData = [
    {
    title: 'Portfolio',
    desc: 'Project ini merupakan website portfolio pribadi yang dibuat untuk menampilkan informasi tentang diri saya, keahlian, serta berbagai project yang telah saya kerjakan. Website ini dibangun menggunakan React dan Tailwind CSS dengan tampilan yang modern, responsif, dan user-friendly. Selain itu, dilengkapi dengan animasi interaktif dan struktur komponen yang terorganisir untuk memberikan pengalaman pengguna yang lebih menarik dan profesional.',
    image: '/Untitled12222.png'
    },
    {
    title: 'LandingPage PerpusKita',
    desc: 'Project ini merupakan website landing page PerpusKita yang berfungsi sebagai media informasi bagi pengguna terkait berbagai konten seperti artikel, event, dan informasi lainnya. Website ini merupakan hasil migrasi dari platform WordPress ke Laravel dengan tujuan meningkatkan performa, fleksibilitas, dan kemudahan dalam pengelolaan sistem. Tampilan antarmuka dikembangkan menggunakan Tailwind CSS sehingga menghasilkan desain yang modern, responsif, dan user-friendly. Selain itu, struktur sistem yang lebih terorganisir memungkinkan pengembangan fitur lebih lanjut di masa depan.',
    image: '/2.png'
    },
    {
        title: 'TiseraHub',
        desc: 'Project ini merupakan website landing page Tisera Hub yang dikembangkan menggunakan Laravel dan Tailwind CSS untuk menghasilkan tampilan yang modern, responsif, dan user-friendly.',
        image: '/tiserahub.png'
        },
    { 
        title: 'Kang Suplay', desc: 'Project ini merupakan sistem informasi berbasis website untuk koperasi pada sebuah yayasan yang bertujuan meningkatkan efisiensi pengelolaan data dan transaksi. Dibangun menggunakan Laravel Livewire dan Bootstrap dengan database MySQL, sistem ini menyediakan fitur seperti manajemen anggota, pengelolaan stok, transaksi penjualan, serta laporan otomatis sehingga operasional koperasi menjadi lebih efektif, akurat, dan terorganisir.', image: '/kangsuplay.png' 
    },
    { 
        title: 'ID Farms', desc: 'Sistem berbasis web untuk memonitor dan mengelola ternak secara efisien, termasuk data kesehatan dan pertumbuhan.', image: '/farms.png' 
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

        return [
            projectsData[prev],
            projectsData[currentIndex],
            projectsData[next]
        ]
    }

    const visibleProjects = getVisibleProjects()

    return (
        <section id='projects' className='min-h-screen flex flex-col justify-center items-center px-5 '>

            <div className='flex flex-col items-center'>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-2xl md:text-4xl font-bold'>
                    Projects
                </h2>
                <div className='w-24 h-1 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400'></div>
            </div>

            <div className='w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-blue-500/20 backdrop-blur-md border border-blue-300/30 text-white font-semibold py-5 px-5 rounded-2xl gap-6 mt-10'>

                <img
                    src={projectsData[currentIndex].image}
                    alt={projectsData[currentIndex].title}
                    className='w-full h-[400px] object-cover rounded-xl'
                />

                <div className='flex flex-col justify-center'>
                    <h3 className='text-white text-2xl font-bold'>
                        {projectsData[currentIndex].title}
                    </h3>
                    <p className='text-gray-300 mt-2'>
                        {projectsData[currentIndex].desc}
                    </p>
                </div>

            </div>

            <div
                className='flex items-center justify-center gap-6 mt-10'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {total > 3 && (
                    <button
                        onClick={prevSlide}
                        className='text-white text-2xl px-3 py-2 hover:scale-110 transition'
                    >
                        ◀
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
                            className={`cursor-pointer transition-all duration-500 ease-in-out rounded-2xl overflow-hidden
              ${isActive
                                    ? 'scale-110 opacity-100 z-10 shadow-[0_0_25px_rgba(56,189,248,0.5)]'
                                    : 'scale-90 opacity-50'}
              `}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-[250px] h-[160px] object-cover'
                            />
                        </div>
                    )
                })}

                {/* BUTTON RIGHT */}
                {total > 3 && (
                    <button
                        onClick={nextSlide}
                        className='text-white text-2xl px-3 py-2 hover:scale-110 transition'
                    >
                        ▶
                    </button>
                )}

            </div>

        </section>
    )
}

export default Projects