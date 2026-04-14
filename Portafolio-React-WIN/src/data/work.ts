type Job = {
  title: string;
  timeline: string;
  description: string;
  remark?: string;
  activities?: string[];
  techs?: string | string[];
  links?: any;
};

const work: Record<string, Job[]> = {
  Careers: [
    {
      title: "Gamma Soluctions",
      timeline: "Jan 2026 - current",
      description: "A company based in Culiacan, Mexico specializing in Software Analysis, Design, and Development",
      remark: "Work in progress...",
    },
    {
      title: "Grupo STI",
      timeline: "Jul 2024 - Dec 2025",
      description: "A technology company headquartered in Mazatlán, Mexico, providing digital marketing services, custom software development, IT consulting, and staffing for leading companies in Mexico and Latin America.",
      remark:
        "A new beginning for me after working independently. I was able to learn a lot about people management and apply it to my daily work in project management.",
      activities: [
        "Developing additional tools to support an internal business unit",
        "Follow the Scrum framework's principles to engage in the software development process",
        "Define, apply and continuously improve the software development process to adapt and overcome challenges",
        "Actively review and improve individual skills competency over the time",
        "Tools used: IDEs & Development, Databases, Version Control & Collaboration, Project Management",
      ],
      techs: "Visual Studio Code, Informix, PostgreSQL, GitHub, Jira, Visual Basic 6.0, Python, Java,HTML, CSS  $2, $3, $4, $5, $6",
      links: {
        $1: ["IBM ELM toolsuite", "https://jazz.net/products/elm/"],
        $2: ["DXL", "https://en.wikipedia.org/wiki/DOORS_Extension_Language"],
        $3: ["OSLC", "https://open-services.net/"],
        $4: ["OpenSocial", "https://en.wikipedia.org/wiki/OpenSocial"],
        $5: ["ag-Grid", "https://www.ag-grid.com/"],
        $6: ["vis-network", "https://visjs.github.io/vis-network/docs/network/"],
      },
    },
	{
      title: "Independent Driver",
      timeline: "Jun 2024 - Jul 2024",
      description: "A Uber Technologies company",
      remark:
        "My experience here, though outside my technology background, strengthened skills such as adaptability, customer focus, and problem-solving, which I continue to apply in my field.",
      activities: [
        "Oversaw daily operations as a self‑managed business, including revenue tracking, vehicle upkeep, and customer service.",
        "Maintained an average rating of 4.9/5 across more than 1,000 trips, reflecting a strong commitment to quality and client satisfaction.",
        "Optimized routes using digital navigation tools and real‑time traffic analysis.",
		"Strengthened communication, problem‑solving, and time‑management skills in fast‑paced environments.",
      ],
      techs: "Uber Driver App, Google Maps, Waze, Digital Payment Systems, GPS-enabled mobile devices, in-app analytics.",
    },
    {
      title: "SuKarne",
      timeline: "Sep 2023 - Dec 2023",
      description: "SuKarne is a proudly Mexican company, dedicated to the production and marketing of quality animal protein, with a presence on four continents and in more than 13 countries.",
      remark:
        "This is the first company I joined after my graduation. I was able to experience a professional working environment and learned from my seniors.",
      activities: [
        "I redesigned user support and ETL automation, increasing data availability and reducing operational response times. ",
        "I implemented data quality control processes and monitoring dashboards that improved real‑time decision‑making.",
        "Tools used: Informatica Power Center, IBM Tool",
      ],
      techs: "Informix, XML",
    },
	{
      title: "Grupo Coppel",
      timeline: "Feb 2015 - Aug 2023",
      description: "Coppel is a proudly Mexican,with over 80 years of experience, more than 1,800 stores, financial services that simplify your life, and digital solutions that connect you with what you need, when you need it.",
      remark:
        "This is the first company I joined after my graduation. I was able to experience a professional working environment and learned from my seniors.",
      activities: [
        "Directed three concurrent projects with teams of 6–10 members, implementing Scrum methodologies and CI/CD pipelines that shortened the delivery cycle by 40%.",
        "Led the migration of a mission‑critical engine from C++ to Java/Spring Boot, delivering a 90% performance boost and a 30% reduction in incident resolution time, with production deployment achieved in just eight months.",
        "Optimized batch processing in the fingerprint engine, reducing execution time from 12 hours to 5 hours and significantly enhancing operational availability and business responsiveness.",
		"Established DevOps practices and embedded security controls throughout the development lifecycle, minimizing production failures and accelerating release cycles.",
		"Tools used: Tools used: IDEs & Development, Databases, Version Control & Collaboration, Project Management",
      ],
      techs: "Visual Studio Code, Informix, PostgreSQL, GitHub, Jira, Visual C++, Visual Basic 6.0, Python, Java,HTML, CSS Bootstrap, JS, Java",
    },
	{
      title: "Constructora Homex",
      timeline: "Feb 2005 - Apr 2013",
      description: "Founded in Culiacán, Sinaloa, in 1989, Homex is one of the homebuilders with the greatest geographic diversity in the country and holds a leading position in the four most important markets: the Metropolitan Area of Mexico City, Guadalajara, Monterrey, and Tijuana.",
      remark:
        "This is the first company I joined after my graduation. I was able to experience a professional working environment and learned from my seniors.",
      activities: [
        "Focused on driving productivity and quality in innovation projects, consistently increasing the value of this area with measurable impact across core business units.",
        "Applied administrative skills to structure and organize existing information, ensuring clarity and accessibility for stakeholders.",
		"Leveraged project management expertise to plan, coordinate, and monitor initiatives, securing timely delivery and alignment with strategic objectives.",
		"Conducted analysis of new requests from Super‑Obra to enhance operations and implement system improvements, translating business needs into actionable technical solutions.",
        "Tools used: IDEs & Development, Databases, Version Control & Collaboration, Project Management",
      ],
      techs: ".Net, Sql, Projet, Visual Fox",
    },
  ],
  "Side Works": [
    {
      title: "Fandom",
      timeline: "2016 - 2018",
      description:
        "A company providing wiki hosting and domain service for users and offering content created by users",
      remark:
        "Fandom (formerly Wikia) is the platform that I started as a volunteering helper during my time at college. I was able to engage in my very first international environment, where I could communicate with a lot of people from various countries.",
      activities: [
        "Monitor $1's activities",
        "Provide user support services",
        "Content translations (blogs, help pages, articles)",
        "Tools used: Slack, Jira, Crowdin, Google Docs",
      ],
      links: {
        $1: ["Vietnamese Community Central", "https://community.fandom.com/vi/wiki/Trang_Ch%C3%ADnh"],
      },
    },
    {
      title: "Fandom Developers",
      timeline: "2016 - 2021",
      description: "A community of Fandom volunteering developers",
      remark:
        "This is more or less my first code playground when I started to love front-end development. As a part of this community, I could learn and collaborate with the others to improve my coding skill. My favorite works: $2, $3.",
      activities: [
        "Develop extensions on top of the $1 platform (the core of every Fandom wiki)",
        "Cross-review, improve existing scripts",
        "Tool used: Fandom's code editor",
      ],
      techs: "HTML, CSS, JS, jQuery, $4",
      links: {
        $1: ["MediaWiki", "https://www.mediawiki.org/wiki/MediaWiki"],
        $2: ["ArticleRating", "https://dev.fandom.com/wiki/ArticleRating"],
        $3: ["FloatingToc", "https://dev.fandom.com/wiki/FloatingToc"],
        $4: ["MediaWiki API", "https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api"],
      },
    },
    {
      title: "Win7 Simu",
      timeline: "2019 - present",
      description: "A simulator of Windows 7 on mobile",
      remark:
        "This is the biggest side project that I have started with a lot of time and effort invested. At first, it was simply made for me to apply things I have learned, something I would have fun building, but apparently it has some unforeseen potential, as it is surprisingly well-received and gets a lot of positive feedback and encouragement to advance it further. Visit its $1.",
      activities: [
        "Simulate the functionalities and features of Windows 7 through web technologies",
        "Integrate with Android's JS Interface, build and deploy to app store",
        "Actively engage in user's experience and collect feedback",
        "Tools used: Visual Studio Code, Android Studio, Crowdin",
      ],
      techs: "HTML, Sass, JS, VueJS, Vuex, Vue-i18n, axios, Firebase, FabricJS, Java",
      links: {
        $1: ["App page", "https://play.google.com/store/apps/details?id=com.visnalize.win7simu"],
      },
    },
    {
      title: "Winport",
      timeline: "2020/2022",
      description: "A window-styled, multi-theming portfolio",
      remark:
        "This very site you are viewing is my first website portfolio. The core design is inspired by Microsoft's Windows, with icons provided by $1 and $2. I built the $4 in 2020 out of fun and to practice a little bit into React's basic concepts. After 2 years, I came back to it and rewrote the whole thing from scratch using the same tech stacks as in my current job demand. It was a great experience building the $5 and realized how my skills had improved over the time. Feel free to check out the source code I made publicly available on $3, and do not hesitate to put a star if you like it.",
      techs: ["v1 - HTML, Sass, JS, ReactJS, React Router", "v2 - NextJS, TypeScript, Framer Motion, Theme UI"],
      links: {
        $1: ["Freepik", "https://www.freepik.com/"],
        $2: ["React Icons", "https://react-icons.github.io/react-icons"],
        $3: ["Github", "https://github.com/khang-nd/khang-nd.github.io"],
        $4: ["first version", "https://khang-nd.github.io"],
        $5: ["second version", "https://khang-nd.vercel.app"],
      },
    },
    {
      title: "Lucky Draw",
      timeline: "2020",
      description: "A simple web tool for organizing lucky drawing events",
      remark:
        "A side project in collaboration with my colleague, this tool was built to support a customer in organizing his special event. You can visit it $1.",
      techs: "HTML, Bootstrap, ReactJS, React-i18n",
      links: {
        $1: ["here", "https://quayso.com.vn/"],
      },
    },
    {
      title: "Fandom Utils",
      timeline: "2020",
      description: "Useful Fandom utilities all together",
      remark:
        "My first browser extension built to bring together all the utilities developed by me and fellow developers at the $1. The project is open-sourced, feel free to check out the source code on $2.",
      techs: "HTML, CSS, JS, Svelte, Web Extension Polyfill",
      links: {
        $1: ["Fandom Dev Wiki", "https://dev.fandom.com/"],
        $2: ["Github", "https://github.com/khang-nd/fandom-utils"],
      },
    },
    {
      title: "7.css",
      timeline: "2020",
      description: "A tiny CSS framework to recreate the Windows 7 UI",
      remark:
        "My first published Node package where people can download and use in their projects. Check it out $1. You can read more about the progress and what I learned from developing it in $2.",
      techs: "HTML, SCSS, JS, EJS, PostCSS",
      links: {
        $1: ["here", "https://khang-nd.github.io/7.css"],
        $2: ["my blog", "https://dev.to/khangnd/7-css-my-case-study-50d1"],
      },
    },
  ],
};

export default work;
