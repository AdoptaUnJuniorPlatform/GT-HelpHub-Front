import { InfoProps, Notification, ProfileData } from "../types/types";

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
    photo: "https://s3-alpha-sig.figma.com/img/b470/47e7/35553aca826d2fa7e62735cacf60e054?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8C8uUn3ss~dsXdj9tfRJz93Hp1tIOB9R4mhHGlyKtl9jYxWUD5CWe53m~A5hOw1uqtnsv4HB7-QIghrzjZv7xRo-QKx8XVCr6noGNhcHSxFV9CO6oJ6oKbNCbc66Arp94~yML3BZJZ9ghcSrfL~evSmben9gfcGd~dtilB-KFHg95cx-FDxgP0EBe5iiHe6IsVRo-Uze3Jt34Km~32jCvQp3GbsJOc~Q~mnyrmWBXY8HTQ5WQSpdYZf55sMxzsbvayYQIKh~~7jq1HVdZ~hkIcn5xZbn4CuxYlf3h78XcnVl2F6AbgwiANP3V1T1-NHpSFMIvd-nhho5frForCTjg__",
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
      { name: 'July', city: 'Madrid', review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0XHYwba39Ar0xib3zGh9ufqtYMEKIodlexSnBnM6KK0OUUyG4TcDO6kUM0ydn4vdSzkICZyHWn4~i5sLqkqddM3rOV20mtYb9ePwupAYPw6H~wCOxLiDV8qbZr-pGW0Pm1OgdlCssgBl0evpYJ-FuMidZdejmNre2Lc4VtU9rLZ6Cx-lcjqMgHhGdheBjO-tWE795zwthRRK~HtAsGUtXPwwWxfY5ot-3uzS-tYWalW3954ee10mE4m8u5Pn8m8joFejpPwaXzUCAI6An94CPs31Kevxdqu13tUPOw0ZTSR9~I8BirfdLdkdrNovrNLU3rDYFEBf~SRTS7JDj24yg__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1QnYrsyHmb8-wKPhZ6DN9CHv6uqTXVLUbV-YJfT4AGtsNSXPEfX2ojQ~urn5VZdZukaF4bha-bftGkxZZCxpZ1np~vrf2xcFCwObMNTQDjt649kBQYlSbI5~25JkIg1hjxh9OUtljxaBUweBGtpjW6DtHQbEwvQfT1l48QdkfpxegDjnrqBs1K48Z5ObdPHfHmLae2eWbeR6bpg~8ZYrGp3lwIoYy-R41Vkk1N1LRjwKd5vfCFoHRCjNYv6JGtDQ-sCQei8sitMFm4CtnxW3I~a5S5lNjRJrFRIwkTB7~Mg3Xleu2FRMEmyLAnSUcRQTQ~Ur8CfbwhZUrz7UiTvtg__' }
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
      { name: 'July', city: 'Madrid', review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0XHYwba39Ar0xib3zGh9ufqtYMEKIodlexSnBnM6KK0OUUyG4TcDO6kUM0ydn4vdSzkICZyHWn4~i5sLqkqddM3rOV20mtYb9ePwupAYPw6H~wCOxLiDV8qbZr-pGW0Pm1OgdlCssgBl0evpYJ-FuMidZdejmNre2Lc4VtU9rLZ6Cx-lcjqMgHhGdheBjO-tWE795zwthRRK~HtAsGUtXPwwWxfY5ot-3uzS-tYWalW3954ee10mE4m8u5Pn8m8joFejpPwaXzUCAI6An94CPs31Kevxdqu13tUPOw0ZTSR9~I8BirfdLdkdrNovrNLU3rDYFEBf~SRTS7JDj24yg__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1QnYrsyHmb8-wKPhZ6DN9CHv6uqTXVLUbV-YJfT4AGtsNSXPEfX2ojQ~urn5VZdZukaF4bha-bftGkxZZCxpZ1np~vrf2xcFCwObMNTQDjt649kBQYlSbI5~25JkIg1hjxh9OUtljxaBUweBGtpjW6DtHQbEwvQfT1l48QdkfpxegDjnrqBs1K48Z5ObdPHfHmLae2eWbeR6bpg~8ZYrGp3lwIoYy-R41Vkk1N1LRjwKd5vfCFoHRCjNYv6JGtDQ-sCQei8sitMFm4CtnxW3I~a5S5lNjRJrFRIwkTB7~Mg3Xleu2FRMEmyLAnSUcRQTQ~Ur8CfbwhZUrz7UiTvtg__' }
    ],
    availability: "Flexibilidad dateria",
    description: "Desde hace 1 año dedico mis tiempos libres en pasear los perros de mis amigos, me encanta pasear con ellos",
    skills: ["Animales"]
  },
  {
    id: 3,
    photo: "https://s3-alpha-sig.figma.com/img/753a/bba2/19d1091e26612340e3d9e9d9b8183d7e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXDPGrP6JyfM7pyBDIKNqN4~ODZ5z3E-l7s6KUfce3UPnMQbitS1nYPKWIQOgP5cvpG5Adrrgnp9D4np~2EQ8uEfFdtTEf5zEi4b2IpT1UeorpmkZxhjxFMKg-iOKECo1wbIsFjSUFa-NAnnB-ukmo6T3cvQvXMzyzPsZIqfKxF4PNFXRSONBCeROrZDeBkFV~vPJfZMOaGptGEDOKF1RkukwcVSjdg3jX76nFm-tQZ2FbVZXBtfdsRsft5jFym61hpfivWPlMqxLlRMm2VfzKA7f1IRZ57B-y-ZK-JLZsMGDbX3Yq8R4WH0Sp7OHca3mL38eTdvg60S6Z6Y2dRV9g__",
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
      { name: 'July', city: 'Madrid', review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
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
      { name: 'July', city: 'Madrid', review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
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