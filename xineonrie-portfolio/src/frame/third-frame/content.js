import image01 from './images/001.png';
import image02 from './images/002.png';
import image03 from './images/003.png';
import image04 from './images/004.png';
import image05 from './images/005.png';
import image06 from './images/006.png';

export const items = [
    {
        titleTop: 'TIKTOK CHINA',
        titleSecond:'OFFICIAL WEBSITE',
        time: '2020.9-2020.12',
        notes: ['Official Website','Creative Front-End', 'SEO', 'Responsive Layout'],
        techs: ['Fullpage Scroll','Parallax Scrolling','Performance Optimization', 'React.js', 'Echarts.js'],
        url: image01,
        p1:'This official website for TikTok China was designed to showcase the brand’s identity and enhance its digital presence. While the visual design was led by the TikTok design team, I was fully responsible for the front-end development.',
        p2:'The site features immersive parallax animations and seamless full-page scrolling, effectively conveying the brand’s core message: “Make your day.” I contributed to marketing and branding efforts by delivering a high-performance front-end architecture, which consistently supported over 100,000 daily page views.',
        p3:'To further enhance the user experience, I optimized rendering performance, eliminated frame drops, and implemented backward compatibility with Internet Explorer 8—ensuring smooth access for users on legacy systems.',
        link:'https://www.douyin.com/home'
    },
    {
        titleTop: 'TIKTOK CHINA',
        titleSecond:'CREATOR SERVICE',
        titleThird: 'PLATFORM',
        time: '2020.7-2021.7',
        notes: ['Service platform','Video Upload', 'Dashboard Analytics'],
        techs: ['SPA Structure','Micro Frontend','Data Visualization', 'React.js'],
        p1:'TikTok China Creator Service Platform is a management platform designed for TikTok China users to oversee their accounts and video content. I was primarily responsible for maintaining the video upload and data analytics modules.',
        p2:'I visualized user video metrics with ECharts.js within this platform, enabling creators to gain insights into their content performance. This feature empowered hundreds of millions of creators to better understand and optimize their content strategy on TikTok.',
        url:image02,
        link: 'https://creator.douyin.com/'
    },
    {
        titleTop: 'ONLINE MOVIE',
        titleSecond:'TICKET PLATFORM',
        time: '2021.7-2021.9',
        notes: ['Cross-Platform','Mobile Ticketing', 'Secure Payment', 'Seat Selection'],
        techs: ['Cross-Platform Architecture','Native Performance','RESTful API Integration'],
        p1:'This project involved building an in-app movie ticketing page within the TikTok app, providing a full-featured ticket purchase flow—including movie selection, showtime and seat selection, payment processing, and e-ticket delivery.',
        p2:'I participated in the front-end development of this feature. As an in-app page, it was developed using the Lynx cross-platform framework, allowing a single codebase to run seamlessly on both iOS and Android.',
        p3:'I learned the Lynx framework from scratch and successfully completed the entire development within one month. This feature contributed millions in revenue to TikTok’s entertainment business.',
        url:image03,
    },
    {
        titleTop: 'SPRING FESTIVE',
        titleSecond:'CAMPAIGN PAGE',
        time: '2021.10-2022.3',
        notes: ['Cross-Platform','Intuitive UI', 'Front End Game', 'User Growth'],
        techs: ['Cross-Platform Mini Game','Gamified Interaction','Countdown-Driven Flow', 'Timer-Based Event Triggering'],
        url: image04,
        p1:'This was the Chinese New Year campaign page for TikTok China, featuring a core interactive gameplay where users could tap every 60 seconds to enter a red envelope draw, choosing one of three options for a chance to win rewards. As one of the primary user acquisition mechanics during the campaign, this page played a crucial role in boosting engagement.',
        p2:'I was responsible for most of the animation work, including the main screen’s 60-second interactive animation loop, the full animation sequence for the red envelope selection popup, and the countdown logic behind the gameplay flow.',
        p3:'This page achieved the highest user acquisition ROI of all Chinese New Year campaign pages that year, and has since been repurposed into a regular growth feature, continuing to attract new users for TikTok China.',
    },
    {
        titleTop: 'MOBILE PAGE',
        titleSecond:'MONITOR SYSTEM',
        time: '2022.4-2022.9',
        // notes: ['official website','Creative Front-End', 'SEO', 'Responsive Layout'],
        techs: ['Performance Monitoring','Exception Reporting','White Screen Warning', 'Custom Logs'],
        p1:'I designed and developed a performance monitoring and alerting SDK for the mobile web pages within TikTok China app. Due to the presence of numerous in-app front-end pages that could not be covered by existing monitoring systems, I led the design of a dedicated performance evaluation solution tailored to these pages.',
        p2:'The SDK supports real-time detection and alerting for issues such as performance degradation and abnormal rendering behaviors. ',
        p3:'It has been officially adopted as part of the infrastructure standard for TikTok China, with integration now required for all new pages. The SDK has been rolled out to 10+ business units and is actively contributing to front-end stability and observability across the platform.',
        url: image05
    },
    {
        titleTop: 'INSTANT MESSAGE',
        titleSecond:'DYNAMIC CARDS SYSTEM',
        time: '2022.9-2023.7',
        notes: ['Dynamic IM Card System','Schema-Driven UI', 'Reusable Components'],
        techs: ['Modular Card System','Instant Rendering','Dynamic Content Rendering', 'Native Performance'],
        url: image06,
        p1:'This project involved building a dynamic low-code card system for the TikTok China Instant Messaging (IM) feed. To support sending flexible and content-rich cards within message streams, I designed a configurable solution that enables schema-driven rendering of dynamic cards.',
        p2:'The solution achieves near-native performance while significantly reducing development effort—what previously required two mobile engineers (iOS and Android) for each card now only requires a single front-end developer, cutting resource costs by half.',
        p3:'To date, the system has supported the integration of hundreds of cards across nearly 20 business units, and has become a core infrastructure component of TikTok China’s IM experience.',
    }
]