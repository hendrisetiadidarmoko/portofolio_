import React from 'react'

const Home = () => {
    return (
        <section id="home" className='mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-5 py-28 md:px-10 lg:grid-cols-2 lg:px-12 xl:px-16 scroll-mt-28'>
            <div className='order-2 space-y-7 lg:order-1'>
                <div className='inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm'>
                    <span className='h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]' />
                    Available to work and collaborate
                </div>

                <div className='space-y-4'>
                    <h2 className='max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl'>
                        Hi, saya{' '}
                        <span className='bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent'>
                            Hendri Setiadi Darmoko
                        </span>
                    </h2>
                    <p className='text-lg font-medium text-cyan-200 md:text-xl'>
                        Web Developer
                    </p>
                </div>

                <p className='max-w-2xl text-base leading-8 text-slate-300 md:text-lg'>
                    Saya membangun website yang modern, rapi, dan mudah dipakai, dengan fokus
                    pada performa, detail visual, dan pengalaman pengguna yang terasa premium.
                </p>

                <div className='flex flex-row flex-wrap items-center gap-4 pt-2'>
                    <a
                        href="/Hendri Setiadi Darmoko_CV_Download.pdf"
                        download
                        className='inline-block w-[170px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-center font-semibold text-white shadow-[0_18px_35px_rgba(8,145,178,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(8,145,178,0.35)] active:scale-95'
                    >
                        Download CV
                    </a>
                    <a
                        href='https://github.com/hendrisetiadidarmoko'
                        className='inline-flex w-[160px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:scale-105 active:scale-95'
                    >
                        Lihat Proyek
                    </a>
                </div>

            </div>
            <div className="order-1 flex items-center justify-center lg:order-2">
                <div className="relative group">

                    <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-cyan-500/25 via-sky-500/15 to-blue-500/25 blur-3xl opacity-70 transition duration-500 group-hover:opacity-100"></div>

                    <div className="relative h-80 w-80 md:h-96 md:w-96">
                        <img
                            src="/Foto_hendri.png"
                            alt="Hendri"
                            className="h-full w-full rounded-[2.5rem] border border-white/10 object-cover shadow-[0_30px_80px_rgba(2,6,23,0.5)] transition duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home
