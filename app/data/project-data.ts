export interface projectDataType {
    title: string,
    desc: string,
    tech: Array<{ label: string, icon: string }>
    feature: Array<string>
    github: string,
    deployLink: string,
    img: string
}

export const projectData: projectDataType[] = [
    {
        title: 'go-hijrah',
        desc: 
            'Program ini dirancang agar dapat menggunakan para pengguna yang ingin membaca al-quran secara online tanpa perlu menginstall sebuah aplikasi. selain itu, program ini juga dibuat agar pengguna dapat mengakses hal lain selain al-quran secara online seperti hadits, bacaan tahlil, dan doa sehari-hari yang masing masing dilengkapi dengan artinya, serta jadwal sholat dimanapun dan kapanpun.',
        tech: [
            {
                label: "Vue JS",
                icon: 'i-lucide-code'
            },
            {
                label: "AOS",
                icon: 'i-lucide-package'
            },
            {
                label: "Tailwind CSS",
                icon: 'i-lucide-package'
            },
            {
                label: "Vercel",
                icon: 'i-lucide-server'
            },
            {
                label: "Tanstack Vue Query",
                icon: 'i-lucide-code'
            },
            {
                label: "Axios",
                icon: 'i-lucide-code'
            },
            {
                label: "Primevue",
                icon: 'i-lucide-package'
            },
            {
                label: "CSS",
                icon: 'i-lucide-code'
            }
        ],
        feature: ['Al-quran', 'Jadwal Sholat di masing masing daerah', '99 Nama Allah (Asmaul Husna)', 'Hadits-Hadits terkenal', 'Bacaan-Bacaan Tahlil', 'Doa Sehari-hari', 'Sholawat Nabi Muhammad SAW.', 'Kisah dari 25 Nabi'],
        github: 'https://github.com/d4goat/go-hijrah',
        deployLink: 'https://go-hijrah.vercel.app',
        img: '/images/project-detail/go-hijrah.png'
    }
]