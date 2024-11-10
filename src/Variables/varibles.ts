import { InfoProps, Notification, ProfileData } from "../types/types";

export const regex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@(gmail|yahoo|outlook|hotmail|icloud|aol|protonmail)\.(com|org|net|edu|gov|mil|info|co|co\.uk|us|io)$/;


export const Information: InfoProps[] = [
  {
    header: "Coordinar directamente por llamada",
    info: "No te preocupes, tu teléfono no está visible para todos los users. Solo estará visible para la persona con la que solicites un intercambio."
  }
];

export const categories = ['Animales', 'Ayuda', 'Consultoría y asesoramiento', 'Diseño', 'Idiomas', 'Informática', 'Reparaciones', 'Salud', 'Tutorías'];
export const subcategories = [
  {Animales: ['Alojamiento', "Cuidado a domicilio", "Paseo de perros"],
    Ayuda: ["Cuidado de personas mayores", "Arte y creatividad"],
    Diseño: ["Arte y creatividad", "Diseño digital"],
    Idiomas: ["Inglés", "Español", "Francés"],
    Salud: ["Fitness", "Cuidado personal"],
    Tutorías: ["Matemáticas", "Física", "Química", "Biología"]
  }
]
export const subCategories = ['Alojamiento', "Cuidado a domicilio", "Paseo de perros", "Cuidado de personas mayores", "Arte y creatividad", "Diseño digital", "Inglés", "Español", "Francés", "Fitness", "Química", "Biología"]

export const profiles: ProfileData[] = [
  {
    id: 1,
    photo: "https://s3-alpha-sig.figma.com/img/b470/47e7/35553aca826d2fa7e62735cacf60e054?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvfBI-53mILClVb~BwTGs25cPzeZhQu9u3jwoHnK654YqzhphiLhEevXiI9HEOVhUA1dE3Y4CSQ9aCGS2VnX28ONrKKuZ0gXKJNGP1pLjQq6W3HbrizoD~1wunaWykTRIXkw2tIHjVR6tCG90x22XxnJMIvrb0AlAV4~zYuXAD1~70b-VFka7UeuwOh9ExBUP9nqwg9WsTd4ysJq49-28mOSjb8VSYpf-4OWZsth4IbvzL4XhNYXmoJJvLnHTv0UbyAwQyIqZ1vS12sRrLhkGV2Ra8KZnkmghORF7U92M~FCZpViXkvDl2ZX1ThGjBSaMOh2TRvm0Vd99LuE2a7V5g__",
    name: "Juanita Perez",
    service: "Cuidado de animales",
    location: "14011 Córdoba, Córdoba provincia",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: true },
      { name: "Experto", active: false }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', 
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura',
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oMDP~SxLWSvBJhZSe0OzeuYNqmeYbFnmVfN7AuHi8D11btp1o-vKcS91H-EZNFtFLK2P0ZZVGpkIJ2T26o9SHr3uzeCd1sCCGnMTsjP4GSdzmf60XTW-O8yN0s5AbOU-4iGbjSzyHkcuJk5XrKYZj7~QvNJmLLqqsBUlpmveZHrB2Rd-sgOPVRSQ0A2BdUcu3MLL23kl2Nxc7FjVe34U~pYee7q~MB12~1X3k9q9j1axO6v8Bc8NJLHXMTiaX4AVuDUk~pLP1AXdM~hf29UuKDVBFioXWwMk066fbiBMFPduQwu7Z2YioIKab89gs6eTsvf9gTyC2VGx5QeCeONl4A__' },
      { name: 'Evy', 
        city: 'Madrid',
        givenSkill: 'Salud',
        recivedSkill: 'Idiomas', 
        review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', 
        photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EAq921R~RBFPrZSSR3~WRvx7AxZ76ArDeNvF00GIP9LL36cM4b~nQk2rLx9euYurMucfDpQYDDzJLTS-Ac4iEQV5v2oAY0BAFfyY0nikgVUsIqzvV1nUsMHK1H1tdFqF1DLbpWXR64hDKI3~UEQKTeLHNEQAQEgUG8ksPYsYUIbq8ohB~zWcNgwyxM02eXDYWcf97UyUbM98h98H1V5JOOVsGRPwdBgagl-l7hz6N8u43k12hIyQqsg2DAt5qcowQM94-KJfmgN4tE7IRf3X6jDmUgsiNTZgB6WhSuyme7Egqa~sF0-9iOG8QtOEshl7-cGG2w-sRMdb2R0Ofmixxg__' },
      { name: 'Ely', 
        city: 'Madrid', 
        review: 'Una gran maestra muy dedicada y educada',
        givenSkill: 'Animales',
        recivedSkill: 'Tutorias',  
        photo: 'https://s3-alpha-sig.figma.com/img/24f1/7eb6/c73b9a48db63e19cb69ac9a12339e6b8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MD36jntuE-3zExqe4PTtDD~v8n-7B7cRm2NFOGcXozv2l-zYY58bHBJ625gLlRKUkTtSYatiTOWeA6lMmaxV2CtFFxU9oYkTfpV~FeQh3Fy2DLkAd3aer-X3NaYyhGEX9QxyWKVLtByxU5SW1h4I7LdJGYzmiUHc0-w8of9MsO3GdXtA17M0uS~6cd1-fa4BxTtiQTozqnj8YsZs5OXHKON5VtZLA85zp8t75cNy~0cmH-232CUrUXCBboeTNXKEYkMoKDslIFYXicy6q3stjuGP5QD-u~QYtn8zugKu2jq4stnBpfj2IOAqSonwKkb5tWEhxVxM4QVlF9e~6v5JNg__' },
      { name: 'Laura García', 
        city: 'Madrid', 
        review: 'Las clases de pintura al óleo han sido absolutamente maravillosas. La técnica y paciencia que he podido desarrollar en cada sesión han superado mis expectativas, ¡es realmente inspirador! Además, el intercambio de habilidades de cocina vegetariana ha sido todo un acierto. He aprendido a preparar recetas deliciosas y sorprendentes, y me ha motivado a explorar aún más en la cocina. Este intercambio ha sido una experiencia enriquecedora en muchos sentidos, desde la creatividad artística hasta el descubrimiento de nuevos sabores. ¡Muy recomendado!"',
        givenSkill: 'Animales',
        recivedSkill: 'Tutorias',  
        photo: 'https://s3-alpha-sig.figma.com/img/9cce/b03b/9fc0ca1876d1c41c54d00f55bac718e2?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MPZYr2Y83TQ5zI97WBaRbiy0Y9tZths7K7FJC2Sy242ftjeOShOWu5sifFLCYcQsuwfHyTjWFwvBE2x15U~OhAqzQUNA79KQo153nj7Q617ukWg8IpXTaKMn0cICf8IUTpEQhe~f904TcyUUTrSUrOdygcseT9QH9Rl1X5KYYGhFWdjBWCzszbYK1t5cTDd0XR2qQydXG08QvBKrJYurCJm~DzqbP5QAfAq3IIvEpy1P8Bmj6P9DNIJ50WVpIJaFbmNJ6jsM-QENGzEcZ8TebVqUVFHcK4jE5IIsTwF9UJDcF1iPicu8jMHkH5aSv0f6WZIH5P1cPFnYLkF4lLEfRA__'}
    ],
    availability: "9:00hs a 14:00hs",
    description: "Tengo una amplia experiencia en cuidar animales, he trabajado en una guardería de mascotas por 2 años.",
    skills: ["Animales", "Pintura"],
    interestSkills: ["Informática", "Idiomas", "Tutorias"]
  },
  {
    id: 2,
    photo: "https://s3-alpha-sig.figma.com/img/579b/b647/277f60d43c33a8814c60a8b79d718888?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4Mdz1DpyM8qwlZaOJCe9TyeDtg2Q5S7hXqKsWElm6RdH4aqAF2CgCEoPc1TCfy-yERPqaMrJjOCYKPktUNOstL3cDLJ80ifTGtaEebOd90BI2LTZHq2~X1AFLl3OPU5v1doNZVTqyXnbnBTqZ86JDKAhRe8Llok1ImO1Bbicn-yCQCZaFpbsVZWyEUQUA55Vdk7foTeU-LOIrsfkxtmoDFtQJhS60~vt83FwjcwIzoMOv~6EiVIwXzdI3NvHDn~jLyQ-oUZVlfU4BONgYEnKQSNe33Lz7mXgOUbBXn60ZVXMJjCxNBTVZIzX-ZphRiWXpdelVCqMjb5J2Jeh25GZQ__",
    name: "Aina Pons",
    service: "Paseo de animales",
    location: "14011 Córdoba, Córdoba provincia",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: false },
      { name: "Experto", active: true }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia',
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura', 
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0XHYwba39Ar0xib3zGh9ufqtYMEKIodlexSnBnM6KK0OUUyG4TcDO6kUM0ydn4vdSzkICZyHWn4~i5sLqkqddM3rOV20mtYb9ePwupAYPw6H~wCOxLiDV8qbZr-pGW0Pm1OgdlCssgBl0evpYJ-FuMidZdejmNre2Lc4VtU9rLZ6Cx-lcjqMgHhGdheBjO-tWE795zwthRRK~HtAsGUtXPwwWxfY5ot-3uzS-tYWalW3954ee10mE4m8u5Pn8m8joFejpPwaXzUCAI6An94CPs31Kevxdqu13tUPOw0ZTSR9~I8BirfdLdkdrNovrNLU3rDYFEBf~SRTS7JDj24yg__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1QnYrsyHmb8-wKPhZ6DN9CHv6uqTXVLUbV-YJfT4AGtsNSXPEfX2ojQ~urn5VZdZukaF4bha-bftGkxZZCxpZ1np~vrf2xcFCwObMNTQDjt649kBQYlSbI5~25JkIg1hjxh9OUtljxaBUweBGtpjW6DtHQbEwvQfT1l48QdkfpxegDjnrqBs1K48Z5ObdPHfHmLae2eWbeR6bpg~8ZYrGp3lwIoYy-R41Vkk1N1LRjwKd5vfCFoHRCjNYv6JGtDQ-sCQei8sitMFm4CtnxW3I~a5S5lNjRJrFRIwkTB7~Mg3Xleu2FRMEmyLAnSUcRQTQ~Ur8CfbwhZUrz7UiTvtg__' }
    ],
    availability: "Flexibilidad horaria",
    description: "Desde hace 1 año dedico mis tiempos libres en pasear los perros de mis amigos, me encanta pasear con ellos",
    skills: ["Animales"]
  },
  {
    id: 3,
    photo: "https://s3-alpha-sig.figma.com/img/753a/bba2/19d1091e26612340e3d9e9d9b8183d7e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHuJSOiSexEORzWlHMPcmCuXYbc1ZjnNqqvaYbr8eHM-tAELMZmolU2XEfDzLzjTMzwuZyQGGYwFTkqI765mze6vmb547rEPRwDZreWHOxcOmMq1KWWF-3XF0WOjqNpTGD7pnzaJigDro4sPo2GJWpgNL31AOawTRG0D4g8oEBFj-sPkSQ~o5rsIdE8YOkjRcX77hTiZcN1DORdeMMeRZnktMMl34pe8qDfLCucmAuoVUnWYM8be1KwZFmq8bk3v2cKKWE0O-5-UAaqrvFTruyBTKJ7JWSDrxQB~eBdm3D2y4h34pOgOplP4iZiADZT1CQZHty7HzFPuRlflVd~SuQ__",
    name: "Aaron Moreno",
    service: "Consejos de animales",
    location: "Online",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: true },
      { name: "Experto", active: false }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', 
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura',
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0XHYwba39Ar0xib3zGh9ufqtYMEKIodlexSnBnM6KK0OUUyG4TcDO6kUM0ydn4vdSzkICZyHWn4~i5sLqkqddM3rOV20mtYb9ePwupAYPw6H~wCOxLiDV8qbZr-pGW0Pm1OgdlCssgBl0evpYJ-FuMidZdejmNre2Lc4VtU9rLZ6Cx-lcjqMgHhGdheBjO-tWE795zwthRRK~HtAsGUtXPwwWxfY5ot-3uzS-tYWalW3954ee10mE4m8u5Pn8m8joFejpPwaXzUCAI6An94CPs31Kevxdqu13tUPOw0ZTSR9~I8BirfdLdkdrNovrNLU3rDYFEBf~SRTS7JDj24yg__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1QnYrsyHmb8-wKPhZ6DN9CHv6uqTXVLUbV-YJfT4AGtsNSXPEfX2ojQ~urn5VZdZukaF4bha-bftGkxZZCxpZ1np~vrf2xcFCwObMNTQDjt649kBQYlSbI5~25JkIg1hjxh9OUtljxaBUweBGtpjW6DtHQbEwvQfT1l48QdkfpxegDjnrqBs1K48Z5ObdPHfHmLae2eWbeR6bpg~8ZYrGp3lwIoYy-R41Vkk1N1LRjwKd5vfCFoHRCjNYv6JGtDQ-sCQei8sitMFm4CtnxW3I~a5S5lNjRJrFRIwkTB7~Mg3Xleu2FRMEmyLAnSUcRQTQ~Ur8CfbwhZUrz7UiTvtg__' }
    ],
    availability: "17:00hs a 21:00hs",
    description: "Tengo 3 años de estudios en medicina veterinaria, por lo cual puedo dar recomendaciones  a los dueños de mascotas",
    skills: ["Animales"]
  },
  { id: 4,
    photo: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "María Delgado",
    service: "Aseo de animales",
    location: "08001 Barcelona, España",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: true },
      { name: "Experto", active: false }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', 
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura',
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0XHYwba39Ar0xib3zGh9ufqtYMEKIodlexSnBnM6KK0OUUyG4TcDO6kUM0ydn4vdSzkICZyHWn4~i5sLqkqddM3rOV20mtYb9ePwupAYPw6H~wCOxLiDV8qbZr-pGW0Pm1OgdlCssgBl0evpYJ-FuMidZdejmNre2Lc4VtU9rLZ6Cx-lcjqMgHhGdheBjO-tWE795zwthRRK~HtAsGUtXPwwWxfY5ot-3uzS-tYWalW3954ee10mE4m8u5Pn8m8joFejpPwaXzUCAI6An94CPs31Kevxdqu13tUPOw0ZTSR9~I8BirfdLdkdrNovrNLU3rDYFEBf~SRTS7JDj24yg__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1QnYrsyHmb8-wKPhZ6DN9CHv6uqTXVLUbV-YJfT4AGtsNSXPEfX2ojQ~urn5VZdZukaF4bha-bftGkxZZCxpZ1np~vrf2xcFCwObMNTQDjt649kBQYlSbI5~25JkIg1hjxh9OUtljxaBUweBGtpjW6DtHQbEwvQfT1l48QdkfpxegDjnrqBs1K48Z5ObdPHfHmLae2eWbeR6bpg~8ZYrGp3lwIoYy-R41Vkk1N1LRjwKd5vfCFoHRCjNYv6JGtDQ-sCQei8sitMFm4CtnxW3I~a5S5lNjRJrFRIwkTB7~Mg3Xleu2FRMEmyLAnSUcRQTQ~Ur8CfbwhZUrz7UiTvtg__' }
    ],
    availability: "10:00hs a 18:00hs",
    description: "Especialista en aseo y cuidado de mascotas con 5 años de experiencia. Ofrezco servicios de peluquería y baños para perros y gatos.",
    skills: ["Animales", "Peluquería"]
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "completed",
    user: "Laura González",
    message: "La cadena de favores está llegando a su fin. Cuéntanos tu experiencia.",
    date: "12:44 pm",
    imageUser: "https://s3-alpha-sig.figma.com/img/e770/1743/70f48b588224adfd9d1c4c3ae9b06873?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B72LHQPNYQ~ipcoK16EJi27PP0IZXA0Mb~0ZeZk4GUfVDk3dPhEE8xhSm9YVaRL8jxXs6ev2oi9ck8fq6uaLQeK~hP~WrE44qXgPYa-1kzh27aUDZFcU4XMf3rF4v5P47WB0zgY4pIIq8QL~Hg05PzaMm3TfiWmKOMkJr1e4MNQiPHiJUY7dpQ76bvTaVVDUNEuAqFY4Fe~5F0I8~zx-aOnnKAyhWKDjTz3zaob2EDX9Vf4VZhKycPrIPPba0O11yzLSWnM905AEEfSFdZI9B9LZMrpaXefxXRyBYYwBxvQRco5ucnD5kByoD5znmUMmJRBW-fc3Yzb4DNp~v45jJA__" 
  },
  {
    id: 2,
    type: "request",
    user: "Alberto Zuñiga",
    message: "ha enviado una solicitud.",
    date: "01:30 pm",
    imageUser: "https://s3-alpha-sig.figma.com/img/d2b4/7434/0cf0b35e03856e3b9d399657ad1a7ec4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eZbbl1okwjAsCqY4gF0K0yvGAn8SYLPARtQYqwttFuVz8jW2z7K7QxY93b1q4CYh6N~8QwYtU9u5wWoZqZ~HakP3ucHZLYUSujqF8Nlx00HsLkib4bMzIfQdW3y~kFU3R1HKUMwdHfh~GGbdLjLw4o6cDrXCURgb5ldDeK1LZIZ7xzIIioxO-Vj2TjGcFGLbTSVOZIF6KlD78ckffK-lc3X~FdlfcaOA~-yiYhzq6kgcDuwKkC53~H9jtpLniW1pk4N7~a0x6kPs6gOD7XrDnurRPRfxCmW1JnhtP-wzfMXVDe6WDr7PYjS7pmsPrCVX70AKwCmC8oCoV~Oa6XeJEQ__"
  },
  {
    id: 3,
    type: "accepted",
    user: "Valeska Jara",
    message: "El intercambio ha comenzado. Envía tu primer mensaje y conoce a la otra persona.",
    date: "10:15 am",
    imageUser: "https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbdVozXdGhWuBoSoCgFAjZLEH2CsS3opWdQVEcU8BvSNjch0FMskyve0BY-HmdSKKhqUv6UVZKPk3e6GhF6EgEkI0848gBMZ7n4TRaMZOIKKqyvZ0zWx4GIQIRrb7sDfnp~i4ahmzu~WIcFwMy1-GXPpg-JM7dZm20-M6ueMECJmyZOVpBCaUIyb5exSYVgOZ6SU~jOPFmUvynCVusiC8TSwcpxDTXdqh3FYksC1hHpKtRcl~sY3TAHaZoGo2-f88QrvwwzP6AMnfrQTTPKK4s9IWesrVUbPRcMK-87-q2joYNqK32mwd4xn38eEV~dpxjxklPI5KSHOu54bpzQ88w__"
  },
  {
    id: 4,
    type: "rejectedExchange",
    user: "Andrés Castro",
    message: "Lo sentimos, busca otras habilidades para intercambiar.",
    date: "11:20 am",
    imageUser: "https://s3-alpha-sig.figma.com/img/56ba/d462/2730638ef64135973f6dd27e6cb23301?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i6Elm37jMKhZyISJaWZxb29963ITD0ietbXHdjee4y3pfjN7~lMR8iTY6pSe2uUN6CnO0BHET1P~2frK4FcZYNTWEMU9E33V29cOg5RPz0ZY6k6-qwi-mzzlxDFFd0OHJQidhwR615vZtBV35KUvk-3LKOnEkC~IQhlOGmPe9VPvlzCHW2ItsmXkxhZRy6iXuQnJb0rsUvufWYZJdJr-aVR6kbCz0kyGR3zScBxtAZOEtUOHjZgZ0BMTajpG4yPsIaXhEX9GqOjUU2k7hAYuaRiE6F~VYN2en3n1SOZPyEV7uO9v2RrFJP12YY3b2-G8PZC~bK~vNtZVPLYoq2dV5w__"
  },
  {
    id: 5,
    type: "rejectedRequest",
    user: "Estela Naiad",
    message: "Has rechazado la solicitud de intercambio.",
    date: "09:50 am",
    imageUser: "https://s3-alpha-sig.figma.com/img/957a/9171/1abea02b1ea90a2145b69535c0452819?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mQH1uoe7Huj8XRbD8QQdtbQm0nyuwjmTgoQhLj99HuBpEs1DfiobdW29mbIWZIGO2K7e84WYmLFFtCJW~2VQoVP8WNQo1khnTph8qz1u6OXSaMtPfNtKrwuGhdLmMAeX8SbGdfMHqxqp5WvRTQQnkVmBldP147JALwUpPD~3Dn9xFdGIeERBZ7F1eO~LpmZBQRVLm2pEI-YcGU3I4If71oVbRCMg05jhOqVusiWdJaDT4xaqo2lgBH78AIUTVDnp7iExh4iB-0fTRTigsGPbNOh-l2Gvko6~Sr-dplrZbTgwuUtlZUTCCbfBo-rJ4k7w21P5dcrV6CeLshbghvm55w__"
  }
];