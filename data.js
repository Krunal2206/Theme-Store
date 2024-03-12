import { FiHome, FiStar, FiUser } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const LinkItems = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Categories', icon: BiCategory, href: '/categories' },
    { name: 'Popular', icon: FiStar, href: '/popular' },
    { name: 'About', icon: FiUser, href: '/about' },
];

export const SocialButtons = [
    {
        icon: <FaGithub />,
        label: 'Github',
        url: 'https://github.com/Krunal2206/',
    },
    {
        icon: <FaLinkedin />,
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/krunal2206/',
    },
    {
        icon: <FaInstagram />,
        label: 'Instagram',
        url: '#',
    }
]

export const CategoryItems = [
    {
        category: 'editorial',
        img: 'https://images.unsplash.com/photo-1604284152441-cea1d4d4d649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGVkaXRvcmlhbHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        category: 'wallpapers',
        img: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHwxOHx8V2FsbHBhcGVyc3xlbnwwfHx8fDE3MDM3NTg3MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'cityscape',
        img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHwyfHxDaXR5c2NhcGV8ZW58MHx8fHwxNzAzNzU5OTc5fDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'god',
        img: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHwzfHxHb2R8ZW58MHx8fHwxNzAzNzczODYzfDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'religion',
        img: 'https://images.unsplash.com/photo-1616548321600-2a8ff15f2114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHwyN3x8UmVsaWdpb258ZW58MHx8fHwxNzAzNzczOTY5fDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'flower',
        img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw1fHxGbG93ZXJ8ZW58MHx8fHwxNzAzNzc0MDIzfDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'clouds',
        img: 'https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw3fHxDbG91ZHN8ZW58MHx8fHwxNzAzNzc0NDU5fDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'sports',
        img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw0fHxTcG9ydHN8ZW58MHx8fHwxNzAzNzc0NTAxfDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'food',
        img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw5fHxGb29kfGVufDB8fHx8MTcwMzc3NDY4MHww&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'animals',
        img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw1fHxBbmltYWxzfGVufDB8fHx8MTcwMzc3NDc4M3ww&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'anime',
        img: 'https://images.unsplash.com/photo-1541562232579-512a21360020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw4fHxBbmltZXxlbnwwfHx8fDE3MDM3NzcxNzZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'travel',
        img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw0fHx0cmF2ZWx8ZW58MHx8fHwxNzAzNzc3MjM1fDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'nature',
        img: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHwxOHx8bmF0dXJlfGVufDB8fHx8MTcwMzc3NzMxMHww&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'business',
        img: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw3fHxidXNpbmVzc3xlbnwwfHx8fDE3MDM3NzczNDB8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'architecture',
        img: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHwxM3x8YXJjaGl0ZWN0dXJlfGVufDB8fHx8MTcwMzc3NzM5MHww&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'spirituality',
        img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHw1fHxzcGlyaXR1YWxpdHl8ZW58MHx8fHwxNzAzNzc3NDI0fDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        category: 'fashion',
        img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDk4MjJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9ufGVufDB8fHx8MTcwMzc3NzQ2OHww&ixlib=rb-4.0.3&q=80&w=1080'
    },
];

export const squareData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 8,
        src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
    },
];