export interface projectDataType {
    title: string,
    desc: string,
    tech: Array<{ label: string, icon: string }>
    feature: Array<string>
    github: string,
    deployLink?: string,
    img: Array<string>,
    isDeploy?: boolean,
    detailLink?: string,
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
        feature: ['Al-quran', 'Jadwal Sholat di masing masing daerah', 'Hadits-Hadits terkenal', 'Bacaan-Bacaan Tahlil', 'Kisah dari 25 Nabi'],
        github: 'https://github.com/d4goat/go-hijrah',
        isDeploy: true,
        deployLink: 'https://go-hijrah.vercel.app',
        detailLink: 'project/go-hijrah',
        img: ['/images/project-detail/go-hijrah.png', '/images/project-detail/go-hijrah3.png', '/images/project-detail/go-hijrah4.png', '/images/project-detail/go-hijrah2.png']
    },
    {
        title: 'matix-cineplex',
        desc: 
            'Program ini memungkinkan pengguna untuk memesan tiket nonton bioskop secara online: mencari film pilihan, memilih jadwal & kursi, hingga melakukan pembayaran tanpa antri. Tersedia juga info sinopsis, trailer, dan promo menarik dalam satu aplikasi yang cepat dan aman.',
        tech: [
            {
                label: "Vue JS",
                icon: 'i-lucide-code'
            },
            {
                label: "Laravel",
                icon: 'i-lucide-code'
            },
            {
                label: "Vite",
                icon: 'i-lucide-package'
            },
            {
                label: "Yup",
                icon: 'i-lucide-code'
            },
            {
                label: "AOS",
                icon: 'i-lucide-package'
            },
            {
                label: "Headless UI",
                icon: 'i-lucide-package'
            },
            {
                label: "Tailwind CSS",
                icon: 'i-lucide-package'
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
        feature: ['Pilih Film', 'Jadwal tayang film masing masing bioskop', 'Trailer', 'Sinopsis', 'Rating Film'],
        github: 'https://github.com/d4goat/moviez-ukk',
        isDeploy: false,
        detailLink: 'project/matix-cineplex',
        img: ['/images/project-detail/matix.png', '/images/project-detail/matix2.png', '/images/project-detail/matix3.png', '/images/project-detail/matix4.png']
    },
]