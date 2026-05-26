import React from 'react'

const About = () => {
  return (
    <section id="about" className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20 md:px-10 lg:px-12 scroll-mt-28">
      <div className="mb-10 flex flex-col gap-3">
        <span className="w-fit rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm">
          About Me
        </span>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          Pengalaman saya dibangun dari proyek nyata, bukan hanya konsep.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.25)] backdrop-blur-md">
          <p className="leading-relaxed text-slate-300">
            Saya adalah seorang Web Developer yang memiliki minat dalam pengembangan aplikasi berbasis web.
            Saya terbiasa menggunakan Laravel dan React untuk membangun sistem yang efisien, terstruktur,
            dan mudah digunakan.
          </p>

          <p className="leading-relaxed text-slate-300">
            Selain pengembangan fitur, saya juga terbiasa bekerja dengan database, optimasi query,
            serta alur kerja yang rapi agar aplikasi terasa stabil dan siap dipakai jangka panjang.
          </p>
        </div>
        </div>
        

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.25)] backdrop-blur-md">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h5 className="text-white font-semibold">Full Stack Developer Intern</h5>
              <p className="text-sm text-slate-400">
                PT Tiga Serangkai Pustaka Mandiri • Desember 2025 - Sekarang
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Mengembangkan sistem CRM berbasis Laravel + React untuk mendukung manajemen data pengguna</li>
                <li>Melakukan migrasi dari WordPress ke Laravel untuk website PerpusKita</li>
                <li>Melakukan migrasi dari WordPress ke Laravel untuk website TiseraHub</li>
                <li>Mengoptimasi query database untuk meningkatkan performa aplikasi</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h5 className="text-white font-semibold">Web Developer</h5>
              <p className="text-sm text-slate-400">
                Yayasan Arsa Nur Hasta • Oktober 2025 - Desember 2025
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Mengembangkan website pemesanan berbasis web untuk mempermudah proses pemesanan layanan</li>
                <li>Mendesain dan mengelola database menggunakan MySQL untuk menyimpan data pesanan</li>
                <li>Mengimplementasikan fitur CRUD untuk manajemen data pemesanan</li>
                <li>Membangun sistem validasi form untuk memastikan data yang diinput sesuai</li>
                <li>Melakukan pengujian sistem untuk memastikan aplikasi berjalan dengan baik</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h5 className="text-white font-semibold">Praktik Kerja Lapangan</h5>
              <p className="text-sm text-slate-400">
                Cahz ID • Juli 2024 - Agustus 2024
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Berkontribusi dalam pengembangan website ID Farms berbasis web</li>
                <li>Membuat tabel database</li>
                <li>Mengimplementasikan fitur dasar untuk mendukung kebutuhan sistem</li>
                <li>Berkolaborasi dengan tim dalam proses pengembangan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
