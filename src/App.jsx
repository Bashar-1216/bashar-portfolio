import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Eye, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ExternalLink, 
  Download,
  ChevronDown,
  Cpu,
  Zap,
  Target,
  Award
} from 'lucide-react';
import './App.css';

// Import images
import profileImage from './assets/me.jpg';
import studentPredictionImage from './assets/stu.jpg';
import coffeeEcommerceImage from './assets/co.png';
import driverMonitoringImage from './assets/m.jpg';
import exerciseTrackerImage from './assets/e.jpg';
import medicalAppImage from './assets/mi.jpg';
import handGestureImage from './assets/h.png';
import cvFile from './assets/Mycv.pdf';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Student Performance Prediction System",
      description: "Engineered a robust Student Performance Prediction System utilizing a Decision Tree Classifier, achieving 95% prediction accuracy through meticulous hyperparameter tuning. This solution empowers educational institutions with early intervention capabilities, facilitating personalized learning recommendations and significantly improving student outcomes.",
      image: studentPredictionImage,
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Tkinter"],
      dates: "Sept 2024 – Oct 2024",
      github: "https://github.com/Bashar-1216/Student-Performance-Prediction-System.git"
    },
    {
      title: "AI-Enhanced E-Commerce Platform",
      description: "Developed an AI-Enhanced E-Commerce Platform dedicated to showcasing premium Yemeni coffee. This comprehensive online store features intuitive product categorization, distinct admin and customer roles, and a visually captivating interface designed to elevate user experience and authentically promote Yemeni cultural heritage.",
      image: coffeeEcommerceImage,
      tech: ["PHP", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript"],
      dates: "Sept 2024 – Nov 2024",
      github: "https://github.com/Bashar-1216/AI-Based-E-Commerce-Platform-for-Yemeni-Coffee.git"
    },
    {
      title: "Real-Time Driver Monitoring System",
      description: "Pioneered a Real-Time Driver Monitoring System leveraging advanced computer vision techniques to proactively detect driver drowsiness through precise analysis of eye closure rates and head tilt patterns. This critical safety solution integrates voice assistant commands and immediate auditory alerts, significantly enhancing road safety and accident prevention.",
      image: driverMonitoringImage,
      tech: ["OpenCV", "MediaPipe", "PyTTSX3", "SpeechRecognition", "Python"],
      dates: "06/2024 - 07/2024",
      github: "https://github.com/Bashar-1216/Real-Time-Driver-Monitoring-System.git"
    },
    {
      title: "AI-Powered Exercise Tracker",
      description: "Engineered an AI-Powered Exercise Tracker featuring real-time pose estimation to accurately monitor user form and count squat repetitions via precise joint angle detection. This intelligent fitness assistant provides immediate, actionable feedback on posture and performance, enabling users to optimize their workouts and prevent injuries.",
      image: exerciseTrackerImage,
      tech: ["Python", "OpenCV", "MediaPipe"],
      dates: "01/2025 - Ongoing",
      github: "https://github.com/Bashar-1216/AI-Powered-Exercise-Tracker-Squat-Counter-Gesture-Control.git"
    },
    {
      title: "Mobile Medical Image Analysis",
      description: "Developed a cross-platform Mobile Application for Medical Image Analysis using Flutter, designed for efficient loading and intuitive display of critical medical imagery (X-rays, CT, MRI). This foundational application is architected for seamless integration with advanced diagnostic AI models, poised to revolutionize medical image interpretation.",
      image: medicalAppImage,
      tech: ["Flutter", "TensorFlow Lite"],
      dates: "In Progress",
      github: "#"
    },
    {
      title: "Hand Gesture Computer Control",
      description: "Created an innovative Hand Gesture Computer Control System that enables intuitive interaction with computing functions—including mouse navigation, clicks, and screenshot capture—through real-time hand gesture recognition via webcam. This project demonstrates advanced capabilities in human-computer interaction and computer vision.",
      image: handGestureImage,
      tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Pynput", "NumPy"],
      dates: "Recent Project",
      github: "https://github.com/Bashar-1216/AI-Powered-Exercise-Tracker-Squat-Counter-Gesture-Control.git"
    }
  ];

  const skills = [
    { name: "Machine Learning", icon: Brain, level: "Advanced" },
    { name: "Deep Learning", icon: Cpu, level: "Advanced" },
    { name: "Computer Vision", icon: Eye, level: "Advanced" },
    { name: "Python", icon: Code, level: "Advanced" },
    { name: "Data Analysis", icon: Database, level: "Intermediate" },
    { name: "TensorFlow", icon: Zap, level: "Intermediate" }
  ];

  const certifications = [
    "Machine Learning Specialization (Coursera) - Mastered core ML algorithms, supervised/unsupervised learning, and model evaluation.",
    "Deep Learning Specialization (Udemy) - Developed expertise in neural networks, CNNs, RNNs, and advanced deep learning architectures.",
    "Generative AI (Google) - Explored cutting-edge generative models, including GANs and Transformers, for creative applications.",
    "Python for Data Science & Machine Learning (IBM) - Proficient in data manipulation, analysis, and visualization using Python libraries.",
    "Mobile Development Bootcamp (Udemy) - Gained practical skills in cross-platform mobile application development."
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold text-gradient cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              Bashar Almuntaser
            </motion.h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-accent' 
                      : 'text-foreground hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                {['home', 'about', 'projects', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize font-medium text-foreground hover:text-accent transition-colors duration-200"
                    whileHover={{ x: 10 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Driving Innovation in{' '}
                <span className="text-gradient">AI & Machine Learning</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                As a dedicated AI and Machine Learning enthusiast, I specialize in developing intelligent systems that transform complex data into actionable insights. My expertise spans advanced machine learning algorithms, deep learning architectures, and data-driven problem-solving, all aimed at creating tangible real-world impact.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore My AI Solutions
                  <ExternalLink size={20} />
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="border border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect with Me
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="https://github.com/Bashar-1216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/bashar-almontaser-4b367027b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:almuntaserbashar@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                >
                  <Mail size={24} />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 gradient-accent rounded-full opacity-20 animate-pulse"></div>
                <img
                  src={profileImage}
                  alt="Bashar Almuntaser"
                  className="w-full h-full object-cover rounded-full shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-accent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I am an Artificial Intelligence student with a proven track record in developing and deploying cutting-edge machine learning solutions. My academic journey at Emirates International University has equipped me with a robust foundation in AI principles, complemented by hands-on experience in diverse projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-accent" size={32} />
                <h3 className="text-2xl font-bold">Education & Certifications</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">B.Sc. in Artificial Intelligence</h4>
                <p className="text-muted-foreground mb-2">Emirates International University, Sana'a, Yemen | 2022 - Present</p>
                <p className="text-sm"><strong>Specialization:</strong> Machine Learning & Data Science</p>
                <p className="text-sm"><strong>Key Coursework:</strong> Deep Learning, Computer Vision, Natural Language Processing, Advanced Machine Learning Algorithms</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Certifications</h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{cert}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <Download size={20} />
              </motion.a>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-accent" size={32} />
                <h3 className="text-2xl font-bold">Core Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="text-accent" size={24} />
                    <div>
                      <p className="font-semibold text-sm">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Frameworks & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'Flask', 'Flutter', 'Git'].map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my diverse portfolio showcasing innovative AI/ML solutions that demonstrate technical expertise and real-world impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.dates}</p>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Project
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I am actively seeking opportunities to apply my expertise in AI and Machine Learning to impactful projects. Whether you have a challenging problem to solve, a collaborative idea, or a potential role that aligns with my skills, I welcome you to connect.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-card"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form action="https://formspree.io/f/mldnregk" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:almuntaserbashar@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-200"
                    whileHover={{ x: 10 }}
                  >
                    <Mail size={24} />
                    <span>almuntaserbashar@gmail.com</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/bashar-almontaser-4b367027b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-200"
                    whileHover={{ x: 10 }}
                  >
                    <Linkedin size={24} />
                    <span>linkedin.com/in/bashar-almontaser</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/Bashar-1216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-200"
                    whileHover={{ x: 10 }}
                  >
                    <Github size={24} />
                    <span>github.com/Bashar-1216</span>
                  </motion.a>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-2xl font-bold mb-4">Collaborate on Future Innovations</h3>
                <p className="text-muted-foreground mb-6">
                  I am eager to explore new ventures, contribute to groundbreaking research, and leverage my AI/ML capabilities to bring your vision to fruition. Let's connect to discuss how my skills can drive your next success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => scrollToSection('projects')}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </motion.button>
                  <motion.a
                    href={cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download CV
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Bashar Almuntaser</h3>
            <p className="text-primary-foreground/80 mb-6">AI & Machine Learning Expert</p>
            <div className="flex justify-center gap-6 mb-6">
              <motion.a
                href="https://github.com/Bashar-1216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/bashar-almontaser-4b367027b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:almuntaserbashar@gmail.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Bashar Almuntaser. All Rights Reserved. Built with passion and modern technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

