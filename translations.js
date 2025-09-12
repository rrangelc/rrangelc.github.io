export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            blog: "Blog",
            contact: "Contact"
        },
        home: {
            title: "Full Stack Developer & 3D Designer",
            subtitle: "Creating immersive and memorable digital experiences",
            description: "Passionate about building innovative web applications with cutting-edge technologies. Specialized in 3D web experiences, interactive interfaces, and scalable solutions.",
            scroll: "Scroll to explore",
            rotatingWords: [
                'Innovative',
                'Creative',
                'Dynamic',
                'Interactive',
                'Modern',
                'Responsive',
                'Scalable',
                'Efficient',
                'Beautiful',
                'Powerful'
            ],
            stats: {
                projects: "50+ Projects",
                experience: "5+ Years",
                clients: "30+ Clients"
            }
        },
        about: {
            title: "About Me",
            bio: "I am a passionate Full Stack Developer with over 5 years of experience creating innovative digital solutions. My expertise spans from modern web technologies to immersive 3D experiences, always focusing on user-centered design and performance optimization.",
            passion: "I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
            experience: {
                title: "Professional Experience",
                subtitle: "My journey in tech",
                jobs: [
                    {
                        title: "Senior Full Stack Developer",
                        company: "TechCorp",
                        period: "2022 - Present",
                        description: "Leading development of enterprise web applications with React, Node.js, and Three.js. Mentoring junior developers and implementing best practices."
                    },
                    {
                        title: "Full Stack Developer",
                        company: "WebSolutions",
                        period: "2020 - 2022",
                        description: "Developed scalable web applications and 3D visualization tools. Collaborated with design teams to create immersive user experiences."
                    },
                    {
                        title: "Frontend Developer",
                        company: "DigitalAgency",
                        period: "2018 - 2020",
                        description: "Built responsive websites and interactive interfaces. Specialized in modern CSS, JavaScript, and performance optimization."
                    }
                ]
            },
            skills: {
                title: "Technical Skills",
                subtitle: "Technologies I work with",
                categories: {
                    frontend: {
                        title: "Frontend",
                        skills: ["React", "Vue.js", "TypeScript", "Three.js", "WebGL", "CSS3", "HTML5"]
                    },
                    backend: {
                        title: "Backend",
                        skills: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
                    },
                    tools: {
                        title: "Tools & Others",
                        skills: ["Git", "Docker", "AWS", "Figma", "Blender", "Webpack", "Vite"]
                    }
                }
            },
            education: {
                title: "Education",
                degree: "Bachelor's in Computer Science",
                university: "Tech University",
                year: "2018"
            }
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Some of my recent work",
            description: "Here are some of the projects I've worked on, showcasing my skills in web development, 3D design, and user experience.",
            projects: [
                {
                    title: "3D E-Commerce Platform",
                    description: "A revolutionary e-commerce platform featuring 3D product visualization, AR try-on capabilities, and immersive shopping experiences.",
                    technologies: ["React", "Three.js", "Node.js", "MongoDB"],
                    features: ["3D Product Models", "AR Integration", "Real-time Inventory", "Payment Processing"],
                    demo: "Live Demo",
                    github: "View Code"
                },
                {
                    title: "Interactive Data Visualizer",
                    description: "An advanced data visualization tool that transforms complex datasets into interactive 3D charts and graphs.",
                    technologies: ["Vue.js", "D3.js", "WebGL", "Python"],
                    features: ["3D Charts", "Real-time Data", "Custom Animations", "Export Options"],
                    demo: "Live Demo",
                    github: "View Code"
                },
                {
                    title: "3D Portfolio Builder",
                    description: "A drag-and-drop portfolio builder with 3D templates and customizable themes for creative professionals.",
                    technologies: ["React", "Three.js", "Firebase", "Tailwind CSS"],
                    features: ["3D Templates", "Drag & Drop", "Custom Themes", "Analytics"],
                    demo: "Live Demo",
                    github: "View Code"
                },
                {
                    title: "Virtual Reality Web App",
                    description: "A VR-enabled web application for virtual tours and immersive experiences using WebXR technology.",
                    technologies: ["WebXR", "Three.js", "WebGL", "Progressive Web App"],
                    features: ["VR Support", "360° Tours", "Interactive Elements", "Mobile Optimized"],
                    demo: "Live Demo",
                    github: "View Code"
                }
            ]
        },
        blog: {
            title: "Latest Articles",
            subtitle: "Thoughts on technology and development",
            description: "Sharing insights, tutorials, and thoughts about web development, 3D graphics, and emerging technologies.",
            posts: [
                {
                    title: "Building Interactive 3D Web Experiences with Three.js",
                    date: "March 15, 2024",
                    category: "3D Development",
                    description: "A comprehensive guide to creating immersive 3D experiences on the web using Three.js, covering everything from basic setup to advanced techniques.",
                    readTime: "8 min read",
                    tags: ["Three.js", "WebGL", "3D Graphics"]
                },
                {
                    title: "Optimizing WebGL Performance for Better User Experience",
                    date: "March 10, 2024",
                    category: "Performance",
                    description: "Deep dive into WebGL optimization techniques, including shader optimization, texture management, and rendering pipeline improvements.",
                    readTime: "12 min read",
                    tags: ["WebGL", "Performance", "Optimization"]
                },
                {
                    title: "The Future of Web Development: WebGPU and Beyond",
                    date: "March 5, 2024",
                    category: "Technology",
                    description: "Exploring the next generation of web graphics with WebGPU, and how it will revolutionize 3D web applications.",
                    readTime: "10 min read",
                    tags: ["WebGPU", "Future Tech", "Graphics"]
                },
                {
                    title: "Creating Responsive 3D Interfaces for Mobile Devices",
                    date: "February 28, 2024",
                    category: "Mobile Development",
                    description: "Best practices for designing and implementing 3D interfaces that work seamlessly across all device sizes and capabilities.",
                    readTime: "6 min read",
                    tags: ["Mobile", "Responsive Design", "3D UI"]
                }
            ]
        },
        contact: {
            title: "Let's Work Together",
            subtitle: "Ready to start your next project?",
            description: "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Tell me about your project...",
                send: "Send Message",
                success: "Message sent successfully!",
                error: "Error sending message. Please try again."
            },
            info: {
                email: "hello@yourportfolio.com",
                location: "San Francisco, CA",
                availability: "Available for new projects"
            },
            social: {
                github: "GitHub",
                linkedin: "LinkedIn",
                twitter: "Twitter",
                dribbble: "Dribbble"
            }
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            projects: "Proyectos",
            blog: "Blog",
            contact: "Contacto"
        },
        home: {
            title: "Desarrollador Full Stack & Diseñador 3D",
            subtitle: "Creando experiencias digitales inmersivas y memorables",
            description: "Apasionado por construir aplicaciones web innovadoras con tecnologías de vanguardia. Especializado en experiencias 3D web, interfaces interactivas y soluciones escalables.",
            scroll: "Scroll para explorar",
            rotatingWords: [
                'Innovador',
                'Creativo',
                'Dinámico',
                'Interactivo',
                'Moderno',
                'Responsivo',
                'Escalable',
                'Eficiente',
                'Hermoso',
                'Potente'
            ],
            stats: {
                projects: "50+ Proyectos",
                experience: "5+ Años",
                clients: "30+ Clientes"
            }
        },
        about: {
            title: "Sobre Mí",
            bio: "Soy un desarrollador Full Stack apasionado con más de 5 años de experiencia creando soluciones digitales innovadoras. Mi experiencia abarca desde tecnologías web modernas hasta experiencias 3D inmersivas, siempre enfocándome en el diseño centrado en el usuario y la optimización del rendimiento.",
            passion: "Me encanta convertir problemas complejos en soluciones simples, hermosas e intuitivas. Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o compartiendo conocimiento con la comunidad de desarrolladores.",
            experience: {
                title: "Experiencia Profesional",
                subtitle: "Mi viaje en tecnología",
                jobs: [
                    {
                        title: "Senior Full Stack Developer",
                        company: "TechCorp",
                        period: "2022 - Presente",
                        description: "Liderando el desarrollo de aplicaciones web empresariales con React, Node.js y Three.js. Mentoría de desarrolladores junior e implementación de mejores prácticas."
                    },
                    {
                        title: "Full Stack Developer",
                        company: "WebSolutions",
                        period: "2020 - 2022",
                        description: "Desarrollé aplicaciones web escalables y herramientas de visualización 3D. Colaboré con equipos de diseño para crear experiencias de usuario inmersivas."
                    },
                    {
                        title: "Frontend Developer",
                        company: "DigitalAgency",
                        period: "2018 - 2020",
                        description: "Construí sitios web responsivos e interfaces interactivas. Especializado en CSS moderno, JavaScript y optimización de rendimiento."
                    }
                ]
            },
            skills: {
                title: "Habilidades Técnicas",
                subtitle: "Tecnologías con las que trabajo",
                categories: {
                    frontend: {
                        title: "Frontend",
                        skills: ["React", "Vue.js", "TypeScript", "Three.js", "WebGL", "CSS3", "HTML5"]
                    },
                    backend: {
                        title: "Backend",
                        skills: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
                    },
                    tools: {
                        title: "Herramientas y Otros",
                        skills: ["Git", "Docker", "AWS", "Figma", "Blender", "Webpack", "Vite"]
                    }
                }
            },
            education: {
                title: "Educación",
                degree: "Licenciatura en Ciencias de la Computación",
                university: "Universidad Tecnológica",
                year: "2018"
            }
        },
        projects: {
            title: "Proyectos Destacados",
            subtitle: "Algunos de mis trabajos recientes",
            description: "Aquí están algunos de los proyectos en los que he trabajado, mostrando mis habilidades en desarrollo web, diseño 3D y experiencia de usuario.",
            projects: [
                {
                    title: "Plataforma E-commerce 3D",
                    description: "Una plataforma de comercio electrónico revolucionaria con visualización 3D de productos, capacidades de prueba AR y experiencias de compra inmersivas.",
                    technologies: ["React", "Three.js", "Node.js", "MongoDB"],
                    features: ["Modelos 3D de Productos", "Integración AR", "Inventario en Tiempo Real", "Procesamiento de Pagos"],
                    demo: "Demo en Vivo",
                    github: "Ver Código"
                },
                {
                    title: "Visualizador de Datos Interactivo",
                    description: "Una herramienta avanzada de visualización de datos que transforma conjuntos de datos complejos en gráficos y tablas 3D interactivas.",
                    technologies: ["Vue.js", "D3.js", "WebGL", "Python"],
                    features: ["Gráficos 3D", "Datos en Tiempo Real", "Animaciones Personalizadas", "Opciones de Exportación"],
                    demo: "Demo en Vivo",
                    github: "Ver Código"
                },
                {
                    title: "Constructor de Portafolios 3D",
                    description: "Un constructor de portafolios drag-and-drop con plantillas 3D y temas personalizables para profesionales creativos.",
                    technologies: ["React", "Three.js", "Firebase", "Tailwind CSS"],
                    features: ["Plantillas 3D", "Drag & Drop", "Temas Personalizados", "Analytics"],
                    demo: "Demo en Vivo",
                    github: "Ver Código"
                },
                {
                    title: "Aplicación Web de Realidad Virtual",
                    description: "Una aplicación web habilitada para VR para tours virtuales y experiencias inmersivas usando tecnología WebXR.",
                    technologies: ["WebXR", "Three.js", "WebGL", "Progressive Web App"],
                    features: ["Soporte VR", "Tours 360°", "Elementos Interactivos", "Optimizado para Móvil"],
                    demo: "Demo en Vivo",
                    github: "Ver Código"
                }
            ]
        },
        blog: {
            title: "Últimos Artículos",
            subtitle: "Pensamientos sobre tecnología y desarrollo",
            description: "Compartiendo ideas, tutoriales y pensamientos sobre desarrollo web, gráficos 3D y tecnologías emergentes.",
            posts: [
                {
                    title: "Construyendo Experiencias Web 3D Interactivas con Three.js",
                    date: "15 de Marzo, 2024",
                    category: "Desarrollo 3D",
                    description: "Una guía completa para crear experiencias 3D inmersivas en la web usando Three.js, cubriendo todo desde configuración básica hasta técnicas avanzadas.",
                    readTime: "8 min de lectura",
                    tags: ["Three.js", "WebGL", "Gráficos 3D"]
                },
                {
                    title: "Optimizando el Rendimiento WebGL para Mejor Experiencia de Usuario",
                    date: "10 de Marzo, 2024",
                    category: "Rendimiento",
                    description: "Análisis profundo de técnicas de optimización WebGL, incluyendo optimización de shaders, gestión de texturas y mejoras del pipeline de renderizado.",
                    readTime: "12 min de lectura",
                    tags: ["WebGL", "Rendimiento", "Optimización"]
                },
                {
                    title: "El Futuro del Desarrollo Web: WebGPU y Más Allá",
                    date: "5 de Marzo, 2024",
                    category: "Tecnología",
                    description: "Explorando la próxima generación de gráficos web con WebGPU, y cómo revolucionará las aplicaciones web 3D.",
                    readTime: "10 min de lectura",
                    tags: ["WebGPU", "Tecnología Futura", "Gráficos"]
                },
                {
                    title: "Creando Interfaces 3D Responsivas para Dispositivos Móviles",
                    date: "28 de Febrero, 2024",
                    category: "Desarrollo Móvil",
                    description: "Mejores prácticas para diseñar e implementar interfaces 3D que funcionen perfectamente en todos los tamaños y capacidades de dispositivos.",
                    readTime: "6 min de lectura",
                    tags: ["Móvil", "Diseño Responsivo", "UI 3D"]
                }
            ]
        },
        contact: {
            title: "Trabajemos Juntos",
            subtitle: "¿Listo para comenzar tu próximo proyecto?",
            description: "Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo posible por responderte!",
            form: {
                name: "Tu Nombre",
                email: "Tu Email",
                subject: "Asunto",
                message: "Cuéntame sobre tu proyecto...",
                send: "Enviar Mensaje",
                success: "¡Mensaje enviado exitosamente!",
                error: "Error al enviar mensaje. Por favor intenta de nuevo."
            },
            info: {
                email: "hola@tuportafolio.com",
                location: "San Francisco, CA",
                availability: "Disponible para nuevos proyectos"
            },
            social: {
                github: "GitHub",
                linkedin: "LinkedIn",
                twitter: "Twitter",
                dribbble: "Dribbble"
            }
        }
    }
}; 