import sympo from './src/assets/project/sympoWebsite.png'
import frontCalculator from './src/assets/project/Front-calculator.png'
import key01 from './src/assets/project/keyboard1.png'
import pepsi from './src/assets/project/pepsi.png';
import box from './src/assets/project/3D.png'
import waterDrop from './src/assets/project/waterDrop.png'
import counter from './src/assets/project/counter.png'
import form from './src/assets/project/form.png'
import shopping from './src/assets/project/Shopping.png'
import admin from './src/assets/project/admin.png'
import crud from './src/assets/project/CRUD.png'
import stuReact from './src/assets/project/StudentReact.png'
import mentorBack from './src/assets/project/mentorBack.png'
import mail from './src/assets/project/mail.png'
import notes from './src/assets/project/notes.png'

export const projectArray = [
    {
        id : "01",
        type : 'full',
        name : 'Notes Application',
        image : notes,
        details : {
            github : 'https://github.com/Ravin01/Notes-Taking-frontend',
            githubBack : 'https://github.com/Ravin01/Notes-Taking-backend',
            live : 'https://timely-tapioca-6da940.netlify.app',
            tech : ['HTML','CSS','JS','React.js','node.js', 'mongoDB', 'Express.js'],
            time : 'November-2023',
            note : 'I had created complete Notes Taking Application using MERN stack',
            features : ['login','Authentication', 'JWT','nodeMailer', 'bcrypt', 'middleware', 'password reset', 'send bulk Mail', 'dotenv', 'mongoDB Atlas', 'react-router-dom', 'session storage', 'Responsive', 'search Functionality', 'customize theme', 'user can create new folder'],
            host : {
                frontEnd : 'Netlify',
                BackEnd : 'Render',
            },
            user : {
                email : 'user@gmail.com',
                password : 'password'
            }
        }
    },
    {
        id : "02",
        type : 'full',
        name : 'Mail System',
        image : mail,
        details : {
            github : 'https://github.com/Ravin01/capstone1-bulkMail-frontend',
            githubBack : 'https://github.com/Ravin01/capstone1-bulkMail-backend',
            live : 'https://main--incredible-cannoli-8bf71b.netlify.app',
            tech : ['HTML','CSS','JS','React.js','node.js', 'mongoDB', 'Express.js'],
            time : 'October-2023',
            note : 'I had created complete Bulk Mail System using MERN stack',
            features : ['login','Authentication', 'JWT','nodeMailer', 'bcrypt', 'middleware', 'password reset', 'send bulk Mail', 'dotenv', 'mongoDB Atlas', 'react-router-dom', 'session storage', 'Responsive'],
            host : {
                frontEnd : 'Netlify',
                BackEnd : 'Render',
            },
            user : {
                email : 'user@gmail.com',
                password : 'password'
            }
        }
    },
    {
        id : "03",
        type : 'front',
        name : 'Student Mentor',
        image : stuReact,
        details : {
            github : 'https://github.com/Ravin01/task14-day26',
            live : 'https://main--preeminent-treacle-e716c4.netlify.app',
            tech : ['HTML', 'CSS', 'Js', 'React.js'],
            time : 'August-2023',
            note : 'I had practiced CRUD Using React.js',
            features : ['Components Based approach','Responsive', 'CRUD', 'react-router-dom'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "04",
        type : 'back',
        name : 'Mentor Student',
        image : mentorBack,
        details : {
            github : 'https://github.com/Ravin01/changeMentor-day37',
            live : 'https://task20-day36.onrender.com',
            tech : ['node.js', 'mongoDB', 'Express.js'],
            time : 'October-2023',
            note : 'I had practiced CRUD operation Using node.js',
            features : ['Router','Implement CRUD', 'Students and mentor assigning respectively'],
            host : {
                BackEnd : 'Render',
            }
        }
    },
    
    {
        id : "05",
        type : 'front',
        name : 'CRUD operation',
        image : crud,
        details : {
            github : 'https://github.com/Ravin01/task13-day23',
            live : 'https://master--shiny-malabi-965173.netlify.app',
            tech : ['HTML', 'CSS', 'Js', 'React.js'],
            time : 'july-2023',
            note : 'I had practiced CRUD Using React.js',
            features : ['Components Based approach','Responsive', 'CRUD', 'react-router-dom'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "06",
        type : 'front',
        name : 'Admin page',
        image : admin,
        details : {
            github : 'https://github.com/Ravin01/task12-day22',
            live : 'https://main--cheery-tapioca-3b9321.netlify.app',
            tech : ['HTML', 'CSS', 'Js', 'React.js'],
            time : 'july-2023',
            note : 'I had created this Admin page Using React.js',
            features : ['Components Based approach','Responsive'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "07",
        type : 'front',
        name : 'Simple Forms',
        image : form,
        details : {
            github : 'https://github.com/Ravin01/forms-day-14',
            live : 'https://verdant-tiramisu-97e326.netlify.app',
            tech : ['HTML', 'CSS', 'Js', 'DOM'],
            time : 'April-2023',
            note : 'I had created this Forms for practice JS and DOM',
            features : ['Simple Form and Database','Desktop View Only', 'When you submit the form, you will get the data in database section'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "08",
        type : 'front',
        name : 'Shopping Cart',
        image : shopping,
        details : {
            github : 'https://github.com/Ravin01/task11-day21',
            live : 'https://sunny-youtiao-aa51c3.netlify.app',
            tech : ['HTML', 'CSS', 'Js', 'React.js'],
            time : 'july-2023',
            note : 'I had created this Shop list card Using React.js',
            features : ['You can add cart and remove cart','Responsive'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    
    {
        id : "09",
        type : 'front',
        name : 'Symposium Website',
        image : sympo,
        details : {
            github : 'https://github.com/Ravin01/fetra-sympo',
            live : 'https://fetra2k23-gcedpi-ece.web.app',
            tech : ['HTML', 'CSS', 'JavaScript', 'DOM'],
            time : 'April-2022',
            note : 'I had created this website for a national level tech symposium during my college days',
            features : ['Responsive', 'Registration'],
            host : {
                frontEnd : 'firebase',
            }
        }
    },
    {
        id : "10",
        type : 'ui',
        name : 'Keyboard',
        image : key01,
        details : {
            github : 'https://github.com/Ravin01/FrontEnd-Keyboard01',
            live : 'https://main--rainbow-marshmallow-3c7315.netlify.app',
            tech : ['HTML', 'CSS'],
            time : 'January-2023',
            note : 'I had created this Keyboard layout for practice HTML and CSS',
            features : ['Look like Colorful keyboard','Desktop view only'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "11",
        type : 'front',
        name : 'Calculator',
        image : frontCalculator,
        details : {
            github : 'https://github.com/Ravin01/FrontEnd-Calculator',
            live : 'https://phenomenal-klepon-80afac.netlify.app',
            tech : ['HTML', 'CSS', 'JavaScript', 'DOM'],
            time : 'April-2023',
            note : 'I had created this calculator for practice DOM',
            features : ['Responsive', 'Registration'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "12",
        type : 'ui',
        name : '3D Box',
        image : box,
        details : {
            github : 'https://github.com/Ravin01/FrontEnd-3d',
            live : 'https://eloquent-narwhal-76b675.netlify.app',
            tech : ['HTML', 'CSS'],
            time : 'December-2022',
            note : 'I had created this 3D Animation for practice HTML and CSS Animation',
            features : ['Look like a Animation','Responsive', 'This 3D box is rotates 360 degree automatically'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "13",
        type : 'ui',
        name : 'Pepsi',
        image : pepsi,
        details : {
            github : 'https://github.com/Ravin01/FrontEnd-pepsi',
            live : 'https://dynamic-caramel-f2d48c.netlify.app',
            tech : ['HTML', 'CSS'],
            time : 'December-2022',
            note : 'I had created this Card for practice HTML and CSS',
            features : ['Look like a Card','Responsive', 'When you hover then this card will expand and show the details'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    
    {
        id : "14",
        type : 'ui',
        name : 'Water Drop',
        image : waterDrop,
        details : {
            github : 'https://github.com/Ravin01/FrontEnd-waterDrop',
            live : 'https://delightful-brioche-32eb6d.netlify.app',
            tech : ['HTML', 'CSS'],
            time : 'January-2023',
            note : 'I had created this Drop like Effect for practice HTML and CSS',
            features : ['Look like a Water Drop','Responsive', 'When you hover then this shape will change to circle shape'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    {
        id : "15",
        type : 'front',
        name : 'Time Counter',
        image : counter,
        details : {
            github : 'https://github.com/Ravin01/FrontEnd-Counter',
            live : 'https://main--stately-dodol-1369d2.netlify.app',
            tech : ['HTML', 'CSS', 'Js', 'DOM'],
            time : 'October-2022',
            note : 'I had created this Counter for practice JS and DOM',
            features : ['Proper Function Time counter','Desktop View Only'],
            host : {
                frontEnd : 'Netlify',
            }
        }
    },
    
]



export const skillsArray = [
    {
        name : 'HTML',
        type : 'front'
    },
    {
        name : 'CSS',
        type : 'front'
    },
    {
        name : 'Bootstrap',
        type : 'front'
    },
    {
        name : 'JavaScript',
        type : 'front'
    },
    {
        name : 'TypeScript',
        type : 'front'
    },
    {
        name : 'React.js',
        type : 'front'
    },
    {
        name : 'Node.js',
        type : 'Back'
    },
    {
        name : 'Express.js',
        type : 'Back'
    },
    {
        name : 'MongoDB',
        type : 'Back'
    },
    {
        name : 'GitHub',
        type : 'version'
    },
    {
        name : 'Postman',
        type : 'api'
    },
    {
        name : 'JWT',
        type : 'package'
    },
    {
        name : 'Scokit',
        type : 'package'
    },
    {
        name : 'razorpay',
        type : 'package'
    },
    {
        name : 'Authentication',
        type : 'package'
    },
]