import {
  aboutImg,
  heroImg,
  courseImg1,
  courseImg2,
  courseImg3,
  chooseUsImg,
} from "../assets/index";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Courses",
    url: "#courses",
  },
  {
    display: "Why Us?",
    url: "#whyUs",
  },
];

const heroData = {
  tagline: "Online Learning Made Easy",
  title: `Anytime Anywhere,`,
  subtitle: "Learn on your Schedule",
  desc: "We are professional tutors who are solely dedicated to creating and devising ways and strategies to make learning fun and interesting, while also allowing for easy comprehension and understanding regardless of educational background and upbringing!",
  image: heroImg,
};

const aboutData = {
  title: "About Us",
  desc: "Our professional tutors are well versed in computer science. We teach Java, JavaScript, React.js, c++, Node.js, and Svelte to students. With multiple tutors with University degrees in Mathematics or currently doing an Undergraduate for Mathematics, our students will excel and thrive in this field of study, regardless of educational background.",
  image: aboutImg,

  countUpArr: [
    {
      suffix: "K",
      startTime: 0,
      endTime: 15,
      duration: 2.5,
      desc: "Ongoing Projects",
    },
    {
      suffix: "K",
      startTime: 0,
      endTime: 300,
      duration: 3,
      desc: "Learners in Canada",
    },
  ],
};

const coursesData = {
  coursesArr: [
    {
      title: "UI/UX Front-End/Full-Stack Web Development in 2023",
      lesson: 12,
      students: 4.3,
      rating: 4.1,
      ImgUrl: courseImg1,
      imgAlt: "Front-End Dev",
    },

    {
      title: "Software Engineering for Beginners, Python, C++, Java in 2023",
      lesson: 15,
      students: 7.9,
      rating: 7.4,
      ImgUrl: courseImg2,
      imgAlt: "Software Engineering",
    },

    {
      title: "Search Engine Optimization for Beginners in 2023",
      lesson: 9,
      students: 2.9,
      rating: 3.5,
      ImgUrl: courseImg3,
      imgAlt: "Search Engine Optimization",
    },
  ],

  title: "Our Courses",
  desc: "We can provide students in Grade 11 – First Year of University with the best online tutoring possible. The teaching subjects we offer are Computer Science, front-end develoment, and search engine optimization training. We combine excellent teaching ethics along with real-world projects and solutions to ensure you are ready for whatever industry you dive into.",
  btnText: "Learn for free",
};

const chooseData = {
  title: "Why choose Us?",
  desc: "We have developed an action plan that we have been implementing into students’ learning for just over 20 years. Through countless trials and errors, we have narrowed down teaching and student learning to 3 important factors. After using our services and being taught with our proven and tested strategies, students reported excellent marks and felt confident in areas they previously had concerns about.",
  image: chooseUsImg,
};

const ReasonsData = [
  {
    title: "Quick Learning",
    desc: "Online learning is the quickest, easiest, and most efficent way to develop new skills in 2023. And we are the best among online learning services.",
    icon: "ri-draft-line",
  },

  {
    title: "24/7 Complete Support",
    desc: "Our customer and client support will always answer any questions, concerns, or issues you may encounter immediately.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Certified benefits, such as a modern and up-to-date portfolio boasting real-world projects that many businesses and clients will love.",
    icon: "ri-contacts-book-line",
  },
];

const testimonialData = {
  testimonialArr: [
    {
      name: "Alicia J.",
      title: "Excellent teaching strategies",
      desc: "Implemented great teaching strategies that helped me succeed in my field and master a new skill",
      location: "Toronto, Ontario",
    },

    {
      name: "Steven M.",
      title: "Fanstastic Support Services",
      desc: "All my questions, including help on assignments and homework were answered completely and correctly within less than an hour after posting it.",
      location: "Brampton, Ontario",
    },

    {
      name: "Mark A.",
      title: "Enjoyed Every Lesson",
      desc: "The tutors got to know me on a personal level to really help and know all my strengths in my subject as well as my weaknesses. It really helped to know exactly which areas and topics I should be focusing on to improve.",
      location: "Toronto, Ontario",
    },
  ],
};

const contactData = {
  title: "Get in touch with Us:",
  info: {
    title: "Learn Easy, Learn Fast",
    subtitle:
      "Experienced professionals ready and waiting to answer your every question.",
    phone: {
      icon: "FaPhoneAlt",
      number: "+1 (365) 776 9254",
    },
    email: {
      icon: "FaEnvelope",
      address: "admin@onlinetutors.com",
    },
  },

  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

const footerData = {
  quickLinks: [
    {
      display: "Home",
      url: "#home",
    },
    {
      display: "About",
      url: "#about",
    },
    {
      display: "Courses",
      url: "#courses",
    },
    {
      display: "Why Us?",
      url: "#whyUs",
    },
  ],
  infoLinks: [
    {
      display: "Privacy Policy",
      url: "#",
    },
    {
      display: "Membership",
      url: "#",
    },

    {
      display: "Purchases Guide",
      url: "#",
    },

    {
      display: "Terms of Service",
      url: "#",
    },
  ],
  tagline: "Online Learning Made Easy",
};

export {
  navLinks,
  testimonialData,
  ReasonsData,
  chooseData,
  coursesData,
  aboutData,
  heroData,
  contactData,
  footerData,
};
