import { AiFillHtml5 } from "react-icons/ai";
import { FaSass, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { DiNodejs, DiJava } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";

export const skills = [
  { id: 4, name: "React", icon: FaReact, color: "B4D2E7" },
  { id: 1, name: "HTML", icon: AiFillHtml5, color: "A882DD" },
  { id: 2, name: "SCSS", icon: FaSass, color: "F08080" },
  { id: 3, name: "JavaScript", icon: SiJavascript, color: "93827F" },
  { id: 12, name: "Bootstrap", icon: BsFillBootstrapFill, color: "8a12fc" },
  { id: 11, name: "MaterialUI", icon: SiJavascript, color: "016dd9" },
  { id: 5, name: "Node.js", icon: DiNodejs, color: "7D8CC4" },
  { id: 6, name: "Express", icon: SiExpress, color: "C3BEF7" },
  { id: 7, name: "Python", icon: FaPython, color: "FFC145" },
  { id: 8, name: "Java", icon: DiJava, color: "6D9DC5" },
  { id: 9, name: "C", icon: GrPersonalComputer, color: "242038" },
  { id: 10, name: "MongoDB", icon: SiMongodb, color: "A6D3A0" },
];

export const educations = [
  {
    id: 2,
    school: "Croatian School",
    fromDate: "Sep 2016",
    toDate: "May 2018",
    location: "Mississauga, ON",
  },
  {
    id: 1,
    school: "Chirst The King Catholic Secondary School",
    fromDate: "Sep 2016",
    toDate: "May 2020",
    location: "Halton Hills, ON",
    program: "Technology Specialist High Skills Majors (SHSM)",
  },
  {
    id: 3,
    school: "University of Guelph",
    fromDate: "Sep 2020",
    toDate: "May 2025",
    location: "Guelph, ON",
    program: "Software Engineering (CO-OP), Bachelor of Computing",
    last: true,
  },
];

export const projects = [
  {
    id: 1,
    title: "TicketScout",
    description:
      "A Node.js web application powered by express to track and manage tickets, payments, and customers. Made for computer and phone technicians",
    points: [
      "Allows for fast SMS communication between a business and its client, implenented with Twilio SMS API",
      "Built an internal real-time order tracking system for a variety of shipping couriers, implenented with Google API",
      "Securely and effeciently stored business and client data using Bcrpyt and MongoDB",
      "Implemented secure log-in, sign-up, and email verification using Passport.Js Authentication",
      "Utilized Web Sockets to allow for fast, dynamic, and real-time updates for users",
    ],
    stack: [
      ["HTML", "A882DD"],
      ["SCSS", "F08080"],
      ["JavaScript", "93827F"],
      ["NodeJs", "B4D2E7"],
      ["Express", "7D8CC4"],
      ["MongoDB", "C3BEF7"],
      ["Pusher Web Sockets", "FFC145"],
      ["Google API", "6D9DC5"],
      ["Twilio SMS API", "242038"],
      ["GoShippo Tracking API", "A6D3A0"],
    ],
    photos: [
      "photos/ticketscout/1.jpeg",
      "photos/ticketscout/2.png",
      "photos/ticketscout/3.jpeg",
      "photos/ticketscout/4.png",
      "photos/ticketscout/5.jpeg",
    ],
    links: [
      "https://github.com/anthonyvid/TicketScout",
      "https://ticketscout.herokuapp.com/",
    ],
  },
  {
    id: 3,
    title: "SVG Viewer & Editor",
    description:
      "An application built in 4th term that can create, edit, and manipulate SVG files",
    points: [
      "Upload and edit SVG files",
      "Download your edited SVG files",
      "Create new SVG files from scratch",
      "View information about uploaded SVG files",
    ],
    stack: [
      ["HTML", "A882DD"],
      ["CSS", "F08080"],
      ["JavaScript", "93827F"],
      ["NodeJs", "B4D2E7"],
      ["Express", "7D8CC4"],
    ],
    photos: [
      "photos/svgviewer/1.png",
      "photos/svgviewer/2.png",
      "photos/svgviewer/3.png",
    ],
    links: ["https://github.com/anthonyvid/SVG-Viewer-and-Editor", ""],
  },
  {
    id: 2,
    title: "COVID-19 Data Analyzer",
    description:
      "A team project for Software Design II (CIS*2250) class that shows and graphs COVID-19 data with a GUI",
    points: [
      "Developed software to accurately plot COVID-19 data based on specific requirements using Python",
      "Created a user interface to visualize data using Tkinter framework and Matplot library, which increased useability and practicality",
      "Followed agile development practices with weekly stand-ups and monthly sprints, which resulted in successful testing and time management",
    ],
    stack: [
      ["Python", "FFC145"],
      ["Tkinter", "F08080"],
      ["Matplot", "93827F"],
    ],
    photos: [
      "photos/coviddatatracker/1.png",
      "photos/coviddatatracker/2.png",
      "photos/coviddatatracker/3.png",
      "photos/coviddatatracker/4.png",
    ],
    links: [
      "https://github.com/anthonyvid/CovidDataTracker",
      "https://replit.com/@CIS2250/PROJECTL01-CIS2250-3#README.md",
    ],
  },
  {
    id: 4,
    title: "React Todo List",
    description: "A simple todo list made with React!",
    points: [],
    stack: [["React", "5ed3f3"]],
    photos: ["photos/reacttodolist/1.png"],
    links: [
      "https://github.com/anthonyvid/react-todolist",
      "https://react-todolist-anthony.netlify.app/",
    ],
  },
  {
    id: 5,
    title: "React Colour Viewer",
    description: "A simple app to view colours with React!",
    points: ["Allows you to copy the hex code of any colour you type in"],
    stack: [["React", "5ed3f3"]],
    photos: ["photos/colourviewer/1.png"],
    links: [
      "https://github.com/anthonyvid/react-colour-viewer",
      "https://react-colour-viewer.netlify.app/",
    ],
  },
];

export const jobs = [
  {
    id: 1,
    company: "Toppers Pizza",
    position: "Pizza Maker",
    type: "part-time",
    fromDate: "Sep 2017",
    toDate: "Apr 2018",
    location: "Halton Hills, ON",
    website: "https://www.toppers.ca/",
    tasks: [
      "Made all sorts of pizza's from scratch!",
      "Stocking shelves/freezer",
      "General cleaning such as washing dishes",
      "Front cashier",
    ],
  },
  {
    id: 2,
    company: "Compumaster",
    position: "Computer Technician",
    fromDate: "Sep 2019",
    toDate: "Apr 2020",
    location: "Halton Hills, ON",
    type: "co-op",
    wesite: "https://www.compu-master.ca/",
    tasks: [
      "Repaired and replaced primary components for a variety of different laptop brands",
      "Performed hundreds of operating system installations for Windows, Mac, and Linux",
      "Provided hardware and software support for over a dozen business clients",
    ],
  },
  {
    id: 3,
    company: "Compumobile",
    position: "Software & Hardware Technician",
    fromDate: "Jun 2020",
    toDate: "Jul 2021",
    location: "Milton, ON",
    type: "part-time/full-time",
    website: "https://compumobile.com/",
    tasks: [
      "Performed hundreds of phone and computer repairs on all brands and models",
      "Provided hands-on training for three co-op students who are now all part-time employees",
      "Demonstrated independent and collaborative problem-solving skills while under strict time constraints",
    ],
  },
  {
    id: 4,
    company: "TAMVOES Health Inc.",
    position: "Front-end Software Developer",
    fromDate: "May 2022",
    toDate: "Dec 2022",
    location: "Waterloo, ON",
    type: "co-op",
    website: "https://tamvoes.com/main/",
    newRoles: [{ type: "Part Time" }],
    tasks: [
      "Improved company's website performance by up to 25% by adding newly optimized features.",
      "Converted dated HTML code into composable React components decreasing render times by 50%.",
      "Designed multiple dynamic and browser-compatible pages using HTML5, CSS3, Bootstrap5, and JavaScript (React, Redux).",
      "Work in a fast paced agile environment closely with developers and clients to meet project requirements, goals, and functionality",
    ],
  },
  {
    id: 6,
    company: "Sera4",
    position: "React Software Developer",
    fromDate: "Sep 2022",
    toDate: "Dec 2022",
    location: "Waterloo, ON",
    type: "co-op",
    website: "https://www.sera4.com/",
    tasks: [
      "Optimized React components using techniques such as memoization, increasing code efficiency by 20%.",
      "Designed and implemented features as per user requirements with 100% client satisfaction.",
      "Produced multiple visual elements of web applications by translating UI/UX design wireframes into code, producing stunning high-quality pages using React and Redux.",
      "Worked closely with an agile team of 10 members and provided end-to-end solutions for clients, resulting in improved user experience.",
    ],
  },
  {
    id: 6,
    company: "Hootsuite",
    position: "Software Developer",
    fromDate: "May 2023",
    toDate: "Dec 2023",
    location: "Vancouver, BC",
    type: "co-op",
    website: "https://www.hootsuite.com/",
    tasks: [
      "Supported the development of a powerful social media management tool, serving 750+ Fortune 1000 companies to effectively engage with customers and drive business growth.",
      "Integrated key performance metrics such as FID, LCP, and CLS through user-friendly dashboards, enabling data- driven optimizations resulting in faster page load times, a smoother user experience, and heightened user engagement.",
      "Utilized Playwright for robust end-to-end testing, optimizing functionality and cross-browser compatibility.",
    ],
  },
  {
    id: 6,
    company: "Descartes",
    position: "Software Developer",
    fromDate: "Jan 2024",
    toDate: "Current",
    location: "Waterloo, ON",
    type: "co-op",
    last: true,
    website: "https://www.descartes.com/home",
    tasks: [],
  },
];

export const workterms = [
  {
    id: 1,
    company: "TAMVOES HEALTH Inc.",
    position: "Frontend Software Developer",
    fromDate: "May 2022",
    toDate: "Sep 2022",
    location: "remote",
    website: "https://tamvoes.com/main/",
    type: "4-month | Semester 4",
    intro:
      "My summer 2022 co-op work term was at TAMVOES HEALTH Inc. It was my first co-op so I was really looking forward to getting used to the work environment of being a developer and learning as much as possible.",
    employerInfo: `TAMVOES is a health management platform
								supporting the information of individuals,
								families, and their professional team. Founded
								in 2019, and based in Waterloo Ontario, TAMVOES
								is a women-led startup with the goal to empower
								individuals with their health information;
								giving them the ability to make more informed
								health care decisions.`,
    goals: [
      {
        id: 1,
        name: "Technological Literacy",
        description:
          "My first goal while working at TAMVOES was to become more familiar with popular frontend technilogies such as React. The way I achieved this was by simply asking to work on more react tasks to learn more about how to use it and what it can do.",
      },
      {
        id: 2,
        name: "Oral Communication",
        description:
          "My second skill was to become better at communicating with my colleagues. Something that helped me get better at this is consistently going to my daily stand-up meetings and engaging in conversations.",
      },
      {
        id: 3,
        name: "Critical & Creative Thinking",
        description:
          "Lastly, I wanted to get better at solving problems and thinking in creative ways. One of the ways I practiced this was to start my solutions on paper and think of the general problem rather then the specifics right away. This allowed me to think more thoroughly and be a better problem solver.",
      },
    ],
    jobDescription: `Working with a small and fast pace team like TAMVOES gives you the oppurtunity to learn lots of new skills. As a Frontend Software Developer, my main job was to fix bugs and add features onto the website. TAMVOES works in an agile envirnment, which gave me the ability to work on both larger and small tasks in my sprints.`,
    technologies: {
      header: "Some technologies I used:",
      items: ["HTML", "CSS", "Bootstrap", "React", "JavaScript", "JQuery"],
    },
    responsibilities: {
      header: "Some of my technical responsibilities include:",
      items: [
        "Working as an integral member of our fast-paced AGILE software development team",
        "Tool and technology assessment and selection",
        "Designing, developing and maintaining product features",
        "Detecting, reporting, investigating, and fixing defects in test and in production",
        "Writing efficient code and participating in code reviews",
        "Test driven development and unit-testing",
        "Maintaining software documentation",
      ],
    },
    focus:
      "My main focus for this work term was to focus on learning React. One large task I worked on that involved a lot of React was converting pages from legacy code to React.",
    conclusion:
      "After finishing my co-op with TAMVOES Health Inc. I have learned lots about what being a developer is in a small and fast paced team. I have also learned many skills that I will be able to use as a developer in the future. Starting September 2022, I will be working as a part-time Frontend Software Developer at TAMVOES Health Inc!",
    acknowledgments:
      "Thank you to TAMVOES Health Inc. and all of my coworkers for being welcoming and positive. Thank you to my mentor Andrew D'Agostino for helping me achieve my goals and pursue my career as a developer.",
  },
  {
    id: 2,
    company: "Sera4",
    position: "React Developer",
    fromDate: "Sept 2022",
    toDate: "Dec 2022",
    location: "remote/Waterloo",
    website: "https://www.sera4.com/",
    type: "4-month | Semester 5",
    intro:
      "My Fall 2022 co-op work term was at Sera4. It was my second co-op so I was looking to gain some more intermediate experience as a software developer.",
    employerInfo: `Sera4 is a Canadian technology company who holds core patents for keyless physical access. With its state-of-art cloud technology, Sera4 brings increased security and efficiency to access management of Critical Infrastructure. Sera4’s head office is based in Waterloo, Ontario, home to a strong technology sector with hundreds of high-tech firms.`,
    goals: [
      {
        id: 1,
        name: "Technological Literacy",
        description:
          "My first goal while working at Sera4 was to become an intermediate React developer. The way I achieved this was by working with my supervisor on advanced topics in React. One thing I can take away from this is the concept of Memoization!",
      },
      {
        id: 2,
        name: "Oral Communication",
        description:
          "My second skill was to become better at communicating with my colleagues. Something that helped me get better at this is consistently going to my daily stand-up meetings and engaging in conversations.",
      },
      {
        id: 3,
        name: "Critical & Creative Thinking",
        description:
          "Lastly, I wanted to get better at solving problems and thinking in creative ways. One of the ways I practiced this was to start my solutions on paper and think of the general problem rather then the specifics right away. This allowed me to think more thoroughly and be a better problem solver.",
      },
    ],
    jobDescription: `As a React Developer at Sera4, my main task was to help lead their next generation UI efforts with React to design, implement and test new React components, expose capabilities from new APIs and ensure that web applications are as secure as possible.`,
    technologies: {
      header: "Some technologies I used:",
      items: ["React", "MaterialUI", "JavaScript", "Postman"],
    },
    responsibilities: {
      header: "Some of my technical responsibilities include:",
      items: [
        "Developing key product features and enhancements within a single unified roadmap",
        "Ensuring deliverables happen on time and per requirements",
        "Develop automated unit tests and integration tests to ensure the product features are working",
        "Responding to user experience feedback and make necessary changes and iterative improvements",
        "Writing efficient code and participating in code reviews",
      ],
    },
    focus:
      "My main focus for this work term was educating myself on intermediate React concepts. One intermediate React concept I worked on was memoization. I increased a single components efficiency by 20%.",
    conclusion:
      "After finishing my co-op with Sera4. I have learned lots about being an intermediate React developer, which helped in understanding my future as a software developer.",
    acknowledgments:
      "Thank you to Sera4 and all of my coworkers for being welcoming and positive. Thank you to my mentor Jeff for helping me achieve my goals and pursue my career as a developer.",
  },
  {
    id: 3,
    company: "Hootsuite",
    position: "Software Developer",
    fromDate: "May 2023",
    toDate: "August 2023",
    location: "remote/Toronto",
    website: "https://www.hootsuite.com/",
    type: "4-month | Semester 7",
    intro:
      "My 3rd coop placement took place at Hootsuite! This report will go over what I did as a Software Developer at Hootsuite and some of my goals.",
    employerInfo: `Hootsuite is a social media management software designed to help you create more engaging content, get more followers, and make your business shine online.`,
    goals: [
      {
        id: 1,
        name: "Technological Literacy - Becoming an outstanding React developer",
        description: `For each of my goals I used a method that inolves creating high-level goal, accompanied by a series of smaller, manageable goals. Once I complete all of the smaller goals then I would have successfully reached my high-level goal.`,
        descriptionPoints: [
          "I'm familiar with the structure of the codebase",
          "I am able comfortable doing large code reviews and providing useful feedback",
          "I completed 70 pull requests",
          "I have added a major feature to Hootsuite that real users use",
        ],
      },
      {
        id: 2,
        name: "Oral Communication",
        description: "I will become a better communicator at work",
        descriptionPoints: [
          "I actively engage in conversation with team members",
          "I am able to communicate about topics my team talks about on a day-to-day basis",
        ],
      },
      {
        id: 3,
        name: "Technological Literacy",
        description:
          "Complete first 3 phases of FE SLO Monitoring & Alerting project",
        descriptionPoints: [
          "Adopt FID, LCS, CLS libraries",
          "Define V1 SLOs based on these metrics",
          "Integrate visuals of these metrics in Composer Health Dashboard",
        ],
      },
    ],
    jobDescription: `As a Software Developer at Hootsuite, I primarily worked as front-end development on team Ferrix! I contributed to many different projects and helped with fixing bugs and polishing up parts of the UI. One main thing I worked on was adopting performance metrics such as FID, LCP, and CLS.`,
    technologies: {
      header: "Some technologies I used:",
      items: ["React", "JavaScript", "Jest", "Playwright"],
    },
    focus:
      "My main focus for this work term was to learn more about the workings of a large scale software company. This experience marked a significant point in my career compared to my previous co-ops at much smaller companies, exposing me to an entirely new and dynamic environment.",
    conclusion:
      "After finishing my co-op with Hootsuite, I have gained valuable insights into the processes and strategies that drive the success of such expansive enterprises. I have also learned a lot more about front-end development and increased my skills as a React developer.",
    acknowledgments:
      "Thank you to Hootsuite and team Ferrix for being welcoming and positive. Thank you to my manager Brandon and onboarding buddy Luke for helping me achieve my goals and pursue my career as a developer.",
  },
  {
    id: 4,
    company: "Descartes",
    position: "Software Developer",
    fromDate: "Jan 2024",
    toDate: "April 2024",
    location: "remote/Waterloo",
    website: "https://www.descartes.com/home",
    type: "4-month | Semester 8",
    intro:
      "My fourth co-op placement was at Descartes. In this report, I’ll dive into my experiences as a Software Developer during the four-month co-op period.",
    employerInfo: `Descartes is a Global Leader in Uniting Businesses in Commerce by Providing Cloud-based Logistics and Supply Chain Solutions.`,
    goals: [
      {
        id: 1,
        name: "Personal Learning Goal - Becoming a better TypeScript Developer",
        description: `To achieve each of my goals, I used the OKR-Lite method. This approach involves setting a clear primary goal and breaking it down into smaller, achievable milestones. By completing all these milestones, I successfully reach my overall objective.`,
        descriptionPoints: [
          "I am coding in TypeScript instead of JavaScript for all of my work at Descartes.",
          "I have learnt about generic types in TypeScript and implemented it in several areas of the Descartes codebase.",
        ],
      },
      {
        id: 2,
        name: "Technology Literacy",
        description:
          "Have a deep understanding of the Descartes codebase, as well as OneFace.",
        descriptionPoints: [
          "I now have a deep understanding of the codebase, and can participate in discussion about this.",
        ],
      },
      {
        id: 3,
        name: "Technological Literacy",
        description: "Create OneFace React Framework",
        descriptionPoints: [
          "I have built out the OneFace React Framework for Descartes, and am continuing to do so.",
        ],
      },
    ],
    jobDescription: `In my role as a Software Developer at Descartes, I was part of the OneFace team. My primary responsibility involved creating the React framework for OneFace from the ground up. Additionally, I actively promoted the adoption of OneFace React by other teams.`,
    technologies: {
      header: "Some technologies I used:",
      items: ["React", "JavaScript", "TypeScript", "Jest", "Playwright"],
    },
    focus:
      "During this work term, my primary focus was to assume greater responsibility and take initiative as a developer. Over the course of these four months, I’ve gained a wealth of knowledge—perhaps even more than all my previous co-op experiences combined. Specifically, I’ve acquired the skills to create a large-scale component library and efficiently distribute it.",
    conclusion:
      "As I reflect on my four months at Descartes, I am immensely satisfied with the experience. I am thrilled to share that my co-op has been extended for another four months, and I eagerly look forward to the exciting opportunities ahead.",
    acknowledgments:
      "Thank you to Descartes and the OneFace team for their warm welcome and positive atmosphere. As I look ahead, I am eagerly anticipating the next four months of exciting opportunities and growth.",
  },
  {
    id: 5,
    last: true,
    company: "Descartes",
    position: "Software Developer",
    fromDate: "May 2024",
    toDate: "August 2024",
    location: "remote/Waterloo",
    website: "https://www.descartes.com/home",
    type: "4-month",
    intro:
      "I am lucky enough to have returned to Descartes for my 5th and final co-op placement. In this report, I’ll dive into the continuation of my experiences as a Software Developer during the four-month co-op period.",
    employerInfo: `Descartes is a Global Leader in Uniting Businesses in Commerce by Providing Cloud-based Logistics and Supply Chain Solutions.`,
    goals: [
      {
        id: 1,
        name: "Personal Learning Goal - Becoming a better TypeScript Developer",
        description: `To achieve each of my goals, I used the OKR-Lite method. This approach involves setting a clear primary goal and breaking it down into smaller, achievable milestones. By completing all these milestones, I successfully reach my overall objective.`,
        descriptionPoints: [
          "I am coding in TypeScript instead of JavaScript for all of my work at Descartes.",
          "I have learnt about generic types in TypeScript and implemented it in several areas of the Descartes codebase.",
        ],
      },
      {
        id: 2,
        name: "Technology Literacy",
        description:
          "Have a deep understanding of the Descartes codebase, as well as OneFace.",
        descriptionPoints: [
          "I now have a deep understanding of the codebase, and can participate in discussion about this.",
        ],
      },
      {
        id: 3,
        name: "Technological Literacy",
        description: "Create OneFace React Framework",
        descriptionPoints: [
          "I have built out the OneFace React Framework for Descartes, and am continuing to do so.",
        ],
      },
    ],
    jobDescription: `In my role as a Software Developer at Descartes, I was part of the OneFace team. My primary responsibility involved creating the React framework for OneFace from the ground up. Additionally, I actively promoted the adoption of OneFace React by other teams.`,
    technologies: {
      header: "Some technologies I used:",
      items: ["React", "JavaScript", "TypeScript", "Jest", "Playwright"],
    },
    focus:
      "During my second co-op term at Descartes, I concentrated on advancing the OneFace React framework to a more sophisticated level. I integrated unit tests and end-to-end tests within a pipeline, and created comprehensive Storybook documentation for all the React components I developed. Additionally, I successfully onboarded several teams to use my React library and have been providing ongoing support for them.",
    conclusion:
      "As I reflect on my four months at Descartes, I am immensely satisfied with the experience and invaluable knowledge I have gained.",
    acknowledgments:
      "Thank you to Descartes and the OneFace team for their warm welcome and positive atmosphere.",
  },
];
