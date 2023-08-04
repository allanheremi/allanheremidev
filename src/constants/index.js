import {
    mobile,
    backend,
    blockchain,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    solidity,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    enics, 
    ethereum,
    salt
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Mobile developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain developer",
      icon: blockchain,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
  
    },
    {
      name: "TypeScript",
      icon: typescript,
    
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Redux Toolkit",
      icon: redux,

    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "solidity",
      icon: solidity,
    },

  ];
  
  const experiences = [
    {
      title: "CSO",
      company_name: "Enics",
      icon: enics,
      iconBg: "#E6DEDD",
      date: "Sep 2017 - Sep 2020",
      points: [
        "Managing end-to-end supply chain operations to ensure timely and efficient delivery of products.",
        "Collaborating with suppliers, vendors, and distributors to optimize inventory levels and maintain adequate stock.",
        "Coordinating order processing, shipment tracking, and delivery scheduling to meet customer requirements.",
        "Monitoring and analyzing supply chain performance metrics to identify areas for improvement and implement strategic enhancements.",
      ],
    },
    {
      title: "Sourcing quote leader",
      company_name: "Enics",
      icon: enics,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Sep 2021",
      points: [
        "Collaborating closely with procurement, engineering, and finance teams to understand project requirements and cost drivers.",
        "Reviewing supplier proposals and negotiating pricing, terms, and contracts to achieve cost savings and favorable agreements.",
        "Analyzing supplier capabilities, capacity, and financial stability to mitigate risks and ensure a reliable supply chain.",
        "Monitoring market trends, industry dynamics, and regulatory changes to inform sourcing strategies and optimize supplier partnerships.",
      ],
    },
    {
      title: "Product owner / Founder",
      company_name: "Ethereum",
      icon: ethereum,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - May 2023",
      points: [
        "Conceptualizing, planning, and overseeing the development of decentralized applications (DApps) and products on the Ethereum blockchain.",
        "Collaborating with blockchain developers, smart contract engineers, and UI/UX designers to bring the Ethereum-based product to life.",
        "Engaging with the Ethereum community, networking with potential users, investors, and collaborators to promote the product and gather feedback.",
        "Defining and tracking key performance indicators (KPIs) to measure the success and adoption of the Ethereum-based solution.",
      ],
    },
    {
      title: "Software development consultant",
      company_name: "<SALT/>",
      icon: salt,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Collaborating with clients to assess their software needs, business goals, and technical requirements.",
        "Assisting in the evaluation and integration of third-party tools and technologies.",
        "Collaborating with development teams to contribute to coding, debugging, and testing tasks.",
        "Applying software architecture principles and best practices.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };