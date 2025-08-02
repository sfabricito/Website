
<template>
  <main class="relative">
    <!-- Navigation Bar with high z-index to stay above everything -->
    <nav class="fixed top-0 left-0 right-0 z-50 p-2 lg:p-4">
      <NavBar />
    </nav>
    
    <!-- Scroll container to enable scrolling - only on desktop -->
    <div class="hidden lg:block lg:h-[200vh]"></div>
    
    <!-- Hero Section - Full viewport height with scroll transition on desktop, normal flow on mobile -->
    <section ref="heroSection" class="hero-section flex flex-col items-center justify-center min-h-screen px-4 py-6 lg:py-12 mx-auto max-w-xl text-center relative transition-all duration-1000 ease-out lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-10">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
        Fabricio Solís
      </h1>
      <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-4">
        Software Engineer
      </h2>
      <p class="text-base sm:text-lg text-white/70 mb-6">
        I'm a soon-to-be Computer Engineering graduate, passionate about backend development and database systems, bit by bit. I love building solid, scalable solutions with a bit of magic that make everything run smoothly behind the scenes.
      </p>
      <div class="flex flex-wrap justify-center gap-4 mt-2">
        <a href="https://www.linkedin.com/in/sfabricito" target="_blank" rel="noopener" aria-label="LinkedIn" class="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 backdrop-blur-md transition">
          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6 mr-2" style="filter: brightness(0) invert(1);" />
          <span class="sr-only">LinkedIn</span>
          LinkedIn
        </a>
        <a href="https://github.com/sfabricito" target="_blank" rel="noopener" aria-label="GitHub" class="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 backdrop-blur-md transition">
          <img src="/assets/icons/github.svg" alt="GitHub" class="w-6 h-6 mr-2" style="filter: brightness(0) invert(1);" />
          <span class="sr-only">GitHub</span>
          GitHub
        </a>
        <a href="mailto:sfabricito@gmail.com" aria-label="Email" class="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 backdrop-blur-md transition">
          <img src="/assets/icons/mail.svg" alt="Email" class="w-6 h-6 mr-2" style="filter: brightness(0) invert(1);" />
          <span class="sr-only">Email</span>
          Email
        </a>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- About Section - Slides up to replace hero on desktop, flows naturally on mobile -->
    <section ref="aboutSection" id="about" class="about-section h-screen lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-10 px-4 pt-16 lg:pt-16 pb-8 mx-auto max-w-6xl transition-all duration-1000 ease-out overflow-y-auto lg:overflow-hidden">
      
      <!-- Two Column Layout: Experience and Projects with individual scrolling -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[calc(100vh-8rem)] min-h-full">
        
        <!-- Experience Section -->
        <div class="opacity-0 translate-y-8 transition-all duration-700 delay-500 flex flex-col h-auto lg:h-full min-h-0" ref="experienceSection">
          <h3 class="text-xl sm:text-2xl font-semibold text-white/90 mb-3 text-center flex-shrink-0">
            Experience
          </h3>
          <!-- Mobile: No scroll, show all content | Desktop: Scrollable only when section is at top -->
          <div class="experience-scroll lg:overflow-y-auto flex-1 pr-2 lg:min-h-0 pointer-events-none scroll-locked">
            <div class="space-y-3 pb-4">
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Backend Developer</h4>
                <p class="text-white/70 text-sm mb-2">Company Name • 2023 - Present</p>
                <p class="text-white/80 text-sm">Building scalable solutions with modern technologies and database optimization.</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Full Stack Developer</h4>
                <p class="text-white/70 text-sm mb-2">Another Company • 2022 - 2023</p>
                <p class="text-white/80 text-sm">Developed web applications using Vue.js, Node.js, and PostgreSQL.</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Computer Engineering Student</h4>
                <p class="text-white/70 text-sm mb-2">University • 2020 - 2025</p>
                <p class="text-white/80 text-sm">Focusing on software engineering, databases, and system architecture.</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Software Engineering Intern</h4>
                <p class="text-white/70 text-sm mb-2">Tech Startup • 2021 - 2022</p>
                <p class="text-white/80 text-sm">Developed REST APIs and worked on microservices architecture.</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Freelance Developer</h4>
                <p class="text-white/70 text-sm mb-2">Various Clients • 2020 - 2021</p>
                <p class="text-white/80 text-sm">Built custom web solutions for small businesses.</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Junior Developer</h4>
                <p class="text-white/70 text-sm mb-2">Local Agency • 2019 - 2020</p>
                <p class="text-white/80 text-sm">Started my professional journey working on client projects.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Section -->
        <div class="opacity-0 translate-y-8 transition-all duration-700 delay-700 flex flex-col h-full min-h-0" ref="projectsSection">
          <h3 class="text-xl sm:text-2xl font-semibold text-white/90 mb-3 text-center flex-shrink-0">
            Projects
          </h3>
          <!-- Mobile: No scroll, show all content | Desktop: Scrollable only when section is at top -->
          <div class="projects-scroll lg:overflow-y-auto flex-1 pr-2 lg:min-h-0 pointer-events-none scroll-locked">
            <div class="space-y-3 pb-4">
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Portfolio Website</h4>
                <p class="text-white/70 text-sm mb-2">Nuxt 3 • TailwindCSS • 2025</p>
                <p class="text-white/80 text-sm mb-3">Modern portfolio website with animated gradients and responsive design.</p>
                <div class="flex gap-1 flex-wrap">
                  <span class="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded">Vue.js</span>
                  <span class="px-2 py-1 bg-green-500/20 text-green-200 text-xs rounded">Nuxt 3</span>
                  <span class="px-2 py-1 bg-purple-500/20 text-purple-200 text-xs rounded">TailwindCSS</span>
                </div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Database Management System</h4>
                <p class="text-white/70 text-sm mb-2">Node.js • PostgreSQL • 2024</p>
                <p class="text-white/80 text-sm mb-3">Efficient database system for handling large-scale data operations.</p>
                <div class="flex gap-1 flex-wrap">
                  <span class="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs rounded">Node.js</span>
                  <span class="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded">PostgreSQL</span>
                  <span class="px-2 py-1 bg-red-500/20 text-red-200 text-xs rounded">Redis</span>
                </div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">API Gateway</h4>
                <p class="text-white/70 text-sm mb-2">Express.js • Microservices • 2024</p>
                <p class="text-white/80 text-sm mb-3">Scalable API gateway handling authentication and routing.</p>
                <div class="flex gap-1 flex-wrap">
                  <span class="px-2 py-1 bg-green-500/20 text-green-200 text-xs rounded">Express.js</span>
                  <span class="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded">Docker</span>
                  <span class="px-2 py-1 bg-purple-500/20 text-purple-200 text-xs rounded">JWT</span>
                </div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">E-Commerce Platform</h4>
                <p class="text-white/70 text-sm mb-2">React • MongoDB • 2023</p>
                <p class="text-white/80 text-sm mb-3">Full-stack e-commerce solution with payment integration.</p>
                <div class="flex gap-1 flex-wrap">
                  <span class="px-2 py-1 bg-cyan-500/20 text-cyan-200 text-xs rounded">React</span>
                  <span class="px-2 py-1 bg-green-500/20 text-green-200 text-xs rounded">MongoDB</span>
                  <span class="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded">Stripe</span>
                </div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Real-time Chat App</h4>
                <p class="text-white/70 text-sm mb-2">Socket.io • Redis • 2023</p>
                <p class="text-white/80 text-sm mb-3">WebSocket-based chat application with real-time messaging.</p>
                <div class="flex gap-1 flex-wrap">
                  <span class="px-2 py-1 bg-purple-500/20 text-purple-200 text-xs rounded">Socket.io</span>
                  <span class="px-2 py-1 bg-red-500/20 text-red-200 text-xs rounded">Redis</span>
                  <span class="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs rounded">JavaScript</span>
                </div>
              </div>
              
              <div class="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg hover:bg-white/15 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-2">Machine Learning Pipeline</h4>
                <p class="text-white/70 text-sm mb-2">Python • TensorFlow • 2022</p>
                <p class="text-white/80 text-sm mb-3">Data processing pipeline for predictive analytics.</p>
                <div class="flex gap-1 flex-wrap">
                  <span class="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded">Python</span>
                  <span class="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded">TensorFlow</span>
                  <span class="px-2 py-1 bg-green-500/20 text-green-200 text-xs rounded">Pandas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroSection = ref(null)
const aboutSection = ref(null)
const experienceSection = ref(null)
const projectsSection = ref(null)

let scrollTimeout = null

const handleScroll = () => {
  // Skip scroll effects on mobile/tablet
  if (window.innerWidth < 1024) {
    return
  }
  
  const scrollY = window.scrollY
  const heroElement = heroSection.value
  const aboutElement = aboutSection.value
  const expElement = experienceSection.value
  const projElement = projectsSection.value
  
  if (!heroElement || !aboutElement) return
  
  // Calculate scroll progress (0 to 1)
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1)
  
  // Apply transforms based on scroll progress
  if (scrollProgress > 0.1) {
    // Hero section: fade out and slide up
    heroElement.style.opacity = Math.max(1 - scrollProgress * 2, 0)
    heroElement.style.transform = `translateY(-${scrollProgress * 50}vh)`
    
    // About section: slide up from bottom (fixed position)
    aboutElement.style.transform = `translateY(${100 - scrollProgress * 100}vh)`
    
    // Control individual section scrolling based on transition completion
    const experienceScrollContainer = document.querySelector('.experience-scroll')
    const projectsScrollContainer = document.querySelector('.projects-scroll')
    
    if (scrollProgress >= 1) {
      // Transition complete - enable individual section scrolling
      if (experienceScrollContainer) {
        experienceScrollContainer.style.pointerEvents = 'auto'
        experienceScrollContainer.classList.remove('scroll-locked')
      }
      if (projectsScrollContainer) {
        projectsScrollContainer.style.pointerEvents = 'auto'
        projectsScrollContainer.classList.remove('scroll-locked')
      }
    } else {
      // Transition in progress - disable individual section scrolling but keep scrollbars visible
      if (experienceScrollContainer) {
        experienceScrollContainer.style.pointerEvents = 'none'
        experienceScrollContainer.classList.add('scroll-locked')
      }
      if (projectsScrollContainer) {
        projectsScrollContainer.style.pointerEvents = 'none'
        projectsScrollContainer.classList.add('scroll-locked')
      }
    }
    
    // Animate about section content when it becomes visible
    if (scrollProgress > 0.3) {
      // Experience section animation
      if (expElement && scrollProgress > 0.3) {
        expElement.style.opacity = '1'
        expElement.style.transform = 'translateY(0)'
      }
      
      // Projects section animation
      if (projElement && scrollProgress > 0.4) {
        projElement.style.opacity = '1'
        projElement.style.transform = 'translateY(0)'
      }
    }
  } else {
    // Reset when at top
    heroElement.style.opacity = '1'
    heroElement.style.transform = 'translateY(0)'
    aboutElement.style.transform = 'translateY(100vh)'
    
    // Disable individual section scrolling when not at top but keep scrollbars visible
    const experienceScrollContainer = document.querySelector('.experience-scroll')
    const projectsScrollContainer = document.querySelector('.projects-scroll')
    
    if (experienceScrollContainer) {
      experienceScrollContainer.style.pointerEvents = 'none'
      experienceScrollContainer.classList.add('scroll-locked')
    }
    if (projectsScrollContainer) {
      projectsScrollContainer.style.pointerEvents = 'none'
      projectsScrollContainer.classList.add('scroll-locked')
    }
    
    // Reset about section content
    if (expElement) {
      expElement.style.opacity = '0'
      expElement.style.transform = 'translateY(2rem)'
    }
    if (projElement) {
      projElement.style.opacity = '0'
      projElement.style.transform = 'translateY(2rem)'
    }
  }
}

onMounted(() => {
  // Throttle scroll events for better performance
  const throttledScroll = () => {
    if (scrollTimeout) return
    scrollTimeout = setTimeout(() => {
      handleScroll()
      scrollTimeout = null
    }, 16) // ~60fps
  }
  
  window.addEventListener('scroll', throttledScroll, { passive: true })
  
  // Initial setup - show content immediately on mobile
  if (window.innerWidth < 1024) {
    // Mobile: Show content immediately
    if (experienceSection.value) {
      experienceSection.value.style.opacity = '1'
      experienceSection.value.style.transform = 'translateY(0)'
    }
    if (projectsSection.value) {
      projectsSection.value.style.opacity = '1'
      projectsSection.value.style.transform = 'translateY(0)'
    }
  } else {
    // Desktop: Initial setup for scroll animations
    // Ensure individual section scrolling is disabled initially but scrollbars are visible
    const experienceScrollContainer = document.querySelector('.experience-scroll')
    const projectsScrollContainer = document.querySelector('.projects-scroll')
    
    if (experienceScrollContainer) {
      experienceScrollContainer.style.pointerEvents = 'none'
      experienceScrollContainer.classList.add('scroll-locked')
    }
    if (projectsScrollContainer) {
      projectsScrollContainer.style.pointerEvents = 'none'
      projectsScrollContainer.classList.add('scroll-locked')
    }
    
    handleScroll()
  }
})

onUnmounted(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Desktop: Fixed positioning for scroll animations */
@media (min-width: 1024px) {
  .hero-section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
}

.about-section {
  /* Transparent to show the shared BackgroundGradient underneath */
  background: transparent;
}

/* Custom scrollbar styles with glass effect */
.experience-scroll,
.projects-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.08);
}

/* Scroll locked state - prevents scrolling but keeps scrollbars visible */
.scroll-locked {
  position: relative;
}

.scroll-locked::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  pointer-events: auto;
  background: transparent;
}

/* Scrollbar styling remains the same for locked state */
.experience-scroll::-webkit-scrollbar,
.projects-scroll::-webkit-scrollbar {
  width: 12px;
}

.experience-scroll::-webkit-scrollbar-track,
.projects-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  margin: 4px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
}

.experience-scroll::-webkit-scrollbar-thumb,
.projects-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.5) 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    rgba(255, 255, 255, 0.4) 100%);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease-in-out;
}

.experience-scroll::-webkit-scrollbar-thumb:hover,
.projects-scroll::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.6) 0%, 
    rgba(255, 255, 255, 0.4) 50%, 
    rgba(255, 255, 255, 0.5) 100%);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 3px rgba(255, 255, 255, 0.4);
  transform: scale(1.05);
}

.experience-scroll::-webkit-scrollbar-thumb:active,
.projects-scroll::-webkit-scrollbar-thumb:active {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.7) 0%, 
    rgba(255, 255, 255, 0.5) 50%, 
    rgba(255, 255, 255, 0.6) 100%);
  transform: scale(0.98);
}

/* Mobile: Hide custom scrollbars */
@media (max-width: 1024px) {
  .experience-scroll,
  .projects-scroll {
    overflow-y: visible !important;
  }
  
  .experience-scroll::-webkit-scrollbar,
  .projects-scroll::-webkit-scrollbar {
    display: none;
  }
}

/* Mobile-specific animations and layout adjustments */
@media (max-width: 1024px) {
  /* Mobile: Make hero section normal block element */
  .hero-section {
    position: relative !important;
    transform: none !important;
    opacity: 1 !important;
    min-height: 100vh !important;
    padding-top: 3rem !important; /* Reduced from 4rem */
    padding-bottom: 2rem !important;
  }
  
  /* Mobile: Make about section flow naturally after hero */
  .about-section {
    position: relative !important;
    transform: none !important;
    opacity: 1 !important;
    margin-top: 0 !important;
    height: auto !important;
    min-height: 100vh;
    overflow-y: visible !important;
    padding-top: 2rem !important;
  }
  
  /* Mobile: Show content immediately */
  .about-section .opacity-0 {
    opacity: 1 !important;
    transform: none !important;
  }
  
  /* Mobile: Remove height constraints, let content flow naturally */
  .grid.grid-cols-1 {
    height: auto !important;
    min-height: auto;
    padding-top: 0;
  }
  
  .grid.grid-cols-1 > div {
    height: auto !important;
    min-height: auto;
  }
  
  /* Mobile: Remove flex constraints */
  .grid.grid-cols-1 > div > div:last-child {
    flex: none;
  }
  
  /* Mobile: Reduce title margins for tighter spacing */
  .hero-section h1 {
    margin-bottom: 0.5rem !important;
  }
  
  .hero-section h2 {
    margin-bottom: 1rem !important;
  }
  
  .hero-section p {
    margin-bottom: 1.5rem !important;
  }
  
  /* Mobile: Hide scroll indicator */
  .hero-section .animate-bounce {
    display: none !important;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>