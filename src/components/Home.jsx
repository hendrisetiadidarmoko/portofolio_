import React from 'react'

const Home = () => {
    return (
        <section id="home" className='min-h-screen grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 px-5 md:px-20 xl:px-50 py-10'>
            <div className='space-y-3 order-2 lg:order-1'>
                <div className='mb-5'>
                    <h2 className='text-white font-bold text-5xl'>Hi, Saya <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400'>Hendri Setiadi Darmoko</span></h2>
                    <p className='text-blue-200 font-medium text-lg md:text-xl mt-1'>Full-Stack Developer</p>
                </div>

                <p className='text-blue-200 font-base text-md '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas magni, ab aliquam nisi harum atque in rerum quae, ipsam commodi tempora explicabo assumenda voluptates distinctio perspiciatis obcaecati minima aspernatur ad?
                </p>
                <div className='flex flex-row flex-wrap gap-5 items-center mt-5'>
                    <a
                        href="/Hendri Setiadi Darmoko_CV_Download.pdf"
                        download
                        className='bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl text-white font-semibold py-2 px-5 transform transition duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer inline-block w-[160px] text-center'
                    >
                        Download CV
                    </a>
                    <a href='https://github.com/hendrisetiadidarmoko' className="w-[160px] bg-white/10 backdrop-blur-md border border-white/20
                text-white font-semibold py-2 px-5 rounded-2xl
                transition duration-300 transform
                hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer text-center">
                        Lihat Proyek
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center order-1 lg:order-2">
                <div className="relative group">

                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

                    <div className="relative w-72 h-72 self-end">
                        <img
                            src="/Foto_hendri.png"
                            alt="Hendri"
                            className="w-full h-full rounded-full border-4 border-white/10 shadow-2xl object-cover transition duration-500 group-hover:scale-105 translate-y-6"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home