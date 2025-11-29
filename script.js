// Background Image Slideshow
const slides = document.querySelectorAll('.background-slideshow .slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Verify profile image loads
const profileImg = document.getElementById('profileImg');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        console.error('Profile image failed to load. Check the path: images/profile.jpg');
        // Try alternative paths
        const altPaths = ['images/profile.png', 'images/profile.jpeg', './images/profile.jpg'];
        let currentPathIndex = 0;
        const tryNextPath = () => {
            if (currentPathIndex < altPaths.length) {
                this.src = altPaths[currentPathIndex];
                currentPathIndex++;
            }
        };
        tryNextPath();
    });
    profileImg.addEventListener('load', function() {
        console.log('Profile image loaded successfully');
    });
}

// Navigation toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project data
const projects = {
    project1: {
        title: "Enterprise System Integration",
        duration: "Jan 2023 - Dec 2023",
        role: "Business Systems Analyst / Scrum Master",
        description: "Led the integration of multiple enterprise systems to streamline business processes and improve data consistency across the organization. Managed a cross-functional team of 12 members using Agile methodologies.",
        responsibilities: [
            "Gathered and documented business requirements from 20+ stakeholders",
            "Facilitated daily stand-ups, sprint planning, and retrospectives",
            "Created user stories and managed product backlog in JIRA",
            "Coordinated with technical teams to ensure requirements were met",
            "Conducted UAT and managed defect resolution"
        ],
        technologies: ["JIRA", "Confluence", "SQL", "Agile/Scrum", "REST APIs", "Postman"],
        outcome: "Successfully integrated 5 enterprise systems, resulting in 40% reduction in manual data entry and 30% improvement in data accuracy."
    },
    project2: {
        title: "Agile Transformation Initiative",
        duration: "Jan 2022 - Dec 2022",
        role: "Scrum Master / Agile Coach",
        description: "Spearheaded the organization's transition from waterfall to Agile methodology, training teams and establishing best practices for iterative development and continuous improvement.",
        responsibilities: [
            "Trained 50+ team members on Agile principles and practices",
            "Established Scrum framework across 8 development teams",
            "Created and maintained Agile metrics dashboard",
            "Facilitated cross-team coordination and dependency management",
            "Coached Product Owners on backlog management"
        ],
        technologies: ["Agile/Scrum", "SAFe", "JIRA", "Confluence", "Power BI"],
        outcome: "Achieved 25% faster time-to-market, 35% increase in team velocity, and 50% reduction in production defects."
    },
    project3: {
        title: "Cloud Migration Project",
        duration: "Mar 2022 - Nov 2022",
        role: "Business Systems Analyst / Project Manager",
        description: "Managed the migration of critical business applications from on-premise infrastructure to cloud-based solutions, ensuring minimal disruption to business operations.",
        responsibilities: [
            "Conducted gap analysis and created migration roadmap",
            "Managed project timeline, budget, and resources",
            "Coordinated with vendors and internal teams",
            "Developed test strategies and managed risk mitigation",
            "Created training materials and conducted user training"
        ],
        technologies: ["AWS", "Azure", "Project Management", "Risk Management", "Change Management"],
        outcome: "Successfully migrated 15 applications to cloud, reducing infrastructure costs by 45% and improving system availability to 99.9%."
    },
    project4: {
        title: "Digital Transformation Program",
        duration: "Sep 2022 - Aug 2023",
        role: "Business Systems Analyst / Product Owner",
        description: "Led the digital transformation initiative to modernize customer-facing applications and improve user experience through innovative technology solutions.",
        responsibilities: [
            "Conducted market research and competitive analysis",
            "Defined product vision and roadmap",
            "Prioritized features based on business value and user feedback",
            "Collaborated with UX/UI teams on design requirements",
            "Managed stakeholder expectations and communications"
        ],
        technologies: ["Product Management", "User Experience Design", "API Integration", "Analytics", "A/B Testing"],
        outcome: "Launched new digital platform resulting in 60% increase in user engagement and 35% improvement in customer satisfaction scores."
    }
};

// Project dropdown functionality
const projectSelect = document.getElementById('projectSelect');
const projectDetails = document.getElementById('projectDetails');

// Load default project on page load
function loadDefaultProject() {
    const defaultProject = projectSelect.value;
    if (defaultProject && projects[defaultProject]) {
        displayProjectDetails(projects[defaultProject]);
    }
}

// Load default project when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadDefaultProject();
});

projectSelect.addEventListener('change', function() {
    const selectedProject = this.value;
    
    if (selectedProject && projects[selectedProject]) {
        displayProjectDetails(projects[selectedProject]);
    } else {
        projectDetails.innerHTML = '<p class="project-placeholder">Select a project from the dropdown to view details</p>';
    }
});

// Display project details
function displayProjectDetails(project) {
    const responsibilitiesList = project.responsibilities.map(resp => 
        `<li>${resp}</li>`
    ).join('');
    
    const technologiesList = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    projectDetails.innerHTML = `
        <div class="project-card">
            <h3>${project.title}</h3>
            <div class="project-meta">
                <span><i class="fas fa-calendar"></i> ${project.duration}</span>
                <span><i class="fas fa-user-tie"></i> ${project.role}</span>
            </div>
            <p><strong>Description:</strong> ${project.description}</p>
            <div>
                <strong>Key Responsibilities:</strong>
                <ul style="margin: 1rem 0; padding-left: 2rem; line-height: 1.8;">
                    ${responsibilitiesList}
                </ul>
            </div>
            <div>
                <strong>Technologies Used:</strong>
                <div class="project-tech">
                    ${technologiesList}
                </div>
            </div>
            <div style="margin-top: 1.5rem; padding: 1rem; background: #e8f5e9; border-radius: 5px; border-left: 4px solid #4caf50;">
                <strong><i class="fas fa-trophy"></i> Outcome:</strong>
                <p style="margin-top: 0.5rem;">${project.outcome}</p>
            </div>
        </div>
    `;
}

// Project links in navigation dropdown
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        projectSelect.value = projectId;
        projectSelect.dispatchEvent(new Event('change'));
        
        // Scroll to projects section
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download Resume functionality
const downloadResume = document.getElementById('downloadResume');
downloadResume.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Try to find a resume file in the directory
    const resumeFiles = ['Ramanathan_Sathappan_Profile.docx'];
    
    // For now, we'll create a download link to the first available resume
    // In a real scenario, you would have the actual file path
    const resumePath = resumeFiles[0];
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = resumePath;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show a message if file doesn't exist
    setTimeout(() => {
        alert('Please ensure the resume file is available in the portfolio directory. You can update the file path in script.js');
    }, 100);
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Skills dropdown functionality (if needed for mobile)
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.textContent.includes('Skills')) {
            e.preventDefault();
            document.getElementById('skills').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

