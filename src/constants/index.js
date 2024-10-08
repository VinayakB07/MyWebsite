import {
    mobile,
    backend,
    creator,
    web,
    accio,
    matrical,
    illusion,
    flutter,
    dart,
    vscode,
    firebase,
    java,
    springboot,
    mysql,
    javascript,
    typescript,
    html,
    css,
    dhruthi,
    movie,
    clinikx,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Application Developer",
      icon: mobile,
    },
    {
      title: "Website Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Spring-Boot",
      icon: springboot,
    },

    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
    {
      name: "git",
      icon: git,
    },
  
  ];
  
  const experiences = [
    {
      title: "Bootcamp Trainee",
      company_name: "AccioJob",
      icon: accio,
      iconBg: "#FFFFFF",
      date: "Aug 2022 - Jul 2023",
      points: [
        "Gained hands-on experience in Java, Spring Boot, MySQL, and frontend technologies like HTML, CSS, and JavaScript during Bootcamp training at Acciojob.",
        "Worked on various projects, applying both backend and frontend skills in real-world scenarios.",
        "Collaborated with and received guidance from employees of top MNCs, enhancing learning and project quality.",
        "Strengthened technical skills and gained practical insights into full-stack development, solidifying my foundation in software engineering principles.",
      ],
    },
    {
      title: "Junior App Developer",
      company_name: "Matrical Technologies",
      icon: matrical,
      iconBg: "#FFFFFF",
      date: "Aug 2023 - Present",
      points: [
        "Successfully delivered multiple projects on time using Flutter, Firebase, and Dart as an App Developer at Matrical Technologies.",
        "Designed and developed mobile applications with a focus on delivering seamless user experiences.",
        "Integrated backend services and ensured smooth cross-platform performance across Android and iOS.",
        "Worked efficiently under pressure while maintaining high-quality standards in project delivery.",
      ],
    },
    {
      title: "Freelance Developer",
      company_name: "Illusionary Branding",
      icon: illusion,
      iconBg: "#FFFFFF",
      date: "Mar 2024 - Present",
      points: [
        "Successfully delivered multiple projects using Flutter, Firebase, and Dart as a Freelance Developer at Illusionary Branding, consistently meeting deadlines and exceeding client expectations.",
        "Designed and implemented mobile applications, focusing on seamless functionality and user experience.",
        "Integrated backend services and ensured high performance of mobile apps.",
        "Contributed to website development, enhancing skills in both mobile and web development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ClinikX",
      description:
        "An app that streamlines appointment booking and patient management. Patients book via QR codes at hospitals, while doctors manage records and schedules efficiently.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "GitHub",
          color: "white-text-gradient",
        },
      ],
      image: clinikx,
      source_code_link: "https://clinikx-doctor.netlify.app/",
    },
    {
      name: "Dhruthi Technologies",
      description:
        "Built a responsive website for Dhruthi Technologies with CNC machine booking, using Flutter and Firebase for seamless cross-device experience.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "Dart",
          color: "white-text-gradient",
        },
      ],
      image: dhruthi,
      source_code_link: "https://dhruthitechnologies.com/",
    },
    {
      name: "Movie Booking API",
      description:
        "A Spring Boot backend application for movie bookings, allowing users to explore films, search titles, find showtimes, and book tickets through 10-12 APIs for efficient management.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring-boot",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/VinayakB07/BookMyShow-Backend-Application",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };