/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Phillip Maire",
  title: "Hi everyone, I'm Phil",
  subTitle: emoji(
    ["Your go-to data expert for transforming complex data into simple solutions: Data Science / MLOps / Data Engineering. PhD in Systems Neuroscience, USC, hireslab.org. I am passionate about all things related to data, information processing, and intelligent systems!"]
  ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/sd6ja0ujpqudsebb43ula/Phillip_Maire_resume.pdf?rlkey=gh9bduqcr5h4r7yy80e02n4du&dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/phillipmaire/",
  linkedin: "https://www.linkedin.com/in/phillip-maire-ba17a4b6/",
  gmail: "deep.data.phil@gmail.com",
  // gitlab: "____________",
  // facebook: "____________",
  // medium: "____________",
  stackoverflow: "https://stackoverflow.com/users/13944456/phillip-maire",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Everything data! Modeling, MLOps, smart model selection, data engineering, visualization and more",
  skills: [
    emoji(
      "⚡ Project Scoping and pipeline design"
    ),
    emoji(
      "⚡ Clean and optimize data for model based solutions"
    ),
    emoji(
      "⚡ Train and deploy models for production"
      ),
    emoji(
      "⚡ Maintain models through data/concept drift to ensure their long term utility"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MLOps",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Deep learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    { 
      skillName: "Data visualization",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
  skillName: "AWS",
  fontAwesomeClassname: "fab fa-aws"
    },
    {
  skillName: "Google Cloud",
  fontAwesomeClassname: "fab fa-google"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/job_images/uscLogoWhiteBackground.png"),
      subHeader: "Doctor of Philosophy, Neuroscience",
      duration: "July 2015 - June 2023",
      desc: "Developed a python package to save thousands of hours using a 2-stage deep learning model. Modeled neural time-series and animal behavior ",
      descBullets: [
        "WhACC: Whisker Automatic Contact Classifier with Expert Human-Level Performance. (in review, 2023) https://github.com/hireslab/whacc",
        "Active touch remaps barrel cortex output from a representation of self-motion to object location. (PLoS Biology 2020)",
        "The behavioral basis of whisker-guided anteroposterior object localization in head-fixed mice. (Current Biology 2019)",
        "NIH T32 grant recipient, Institutional National Research Service Award"
      ]
    },
    {
      schoolName: "University of Louisville",
      logo: require("./assets/job_images/University_of_Louisville_seal_white_backbround.png"),
      subHeader: "Bachelor of Science, Psychology",
      duration: "July 2009 - December 2013",
      desc: "Graduated with honors and completed a thesis on animal vision and neural response properties in the primary visual cortex",
      descBullets: ["Awarded a position in the Kentucky Biomedical Research Infrastructure Network (KBRIN) summer research program"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Doctoral Researcher",
      company: "University of Southern California, Dr. Andrew Hires Laboratory",
      companylogo: require("./assets/job_images/uscLogoBackground.png"),
      date: "July 2015 - June 2023",
      desc: "completed my dissertation \"Tactile Object Localization: Behavioral Correlates, Neural Representations, and a Deep Learning Hybrid Model to Classify Touch\". Published 3 Journal articles.",
     descBullets: [
      "Developed an open-source Python package to classify video frames (WhACC)",
      "Developed data pipelines to massively improve data processing efficiency",
      "Modeled behavioral and neural time-series data"

      ]
    },
    {
      role: "Assistant Research Scientist",
      company: "University of Louisville, Dr. Marth Bickford's Laboratory",
      companylogo: require("./assets/job_images/University_of_Louisville_seal_white_backbround.png"),
      date: "May 2014 – June 2015",
      desc: "Gathered and analyzed data | crafted visual representations",
      descBullets: [
      "Analyze and visualize neurophysiology data from whole cell recordings",
      "Communicate scientific findings and contribute valuable data to publish a paper (Zhou, Maire et al. 2017)",
      "Contributed to help secure a grant worth nearly $2 million"
      ]
    },
    {
      role: "Research Assistant",
      company: "University of Louisville, Dr. Heywood Petry's Laboratory",
      companylogo: require("./assets/job_images/University_of_Louisville_seal_white_backbround.png"),
      date: "Febuary 2010 – December 2015",
      desc: "Gathered and analyzed data | developed tools",
      descBullets: [
      "Developed tools and performed statistical analysis to answer questions about vision and the brain",
      "Collected and analyzed single unit electrophysiology and behavioral data",
      "Programmed a reverse correlation stimulus program to map spatiotemporal visual receptive fields in the visual cortex",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open.",
  number: "(502) 310-9622",
  email_address: "deep.data.phil@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
