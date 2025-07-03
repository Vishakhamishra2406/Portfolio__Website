// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation for hero section
const text = "Vishakha Mishra";
const typingText = document.querySelector('.typing-cursor');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Dynamic projects data
const projects = [
    {
        title: "Weather Application",
        description: "The Weather Application is a user-friendly web-based tool that provides real-time weather updates for any city entered by the user. It leverages API integration to fetch current weather data and displays it dynamically on the web page. The application is designed to offer a clean interface, allowing users to easily check the temperature, weather conditions, and other relevant details.",
        technologies: ["HTML", "CSS", "JavaScript","Bootstrap"],
        image: "https://static.vecteezy.com/system/resources/previews/020/274/817/original/sun-with-cloud-in-flat-icon-weather-app-forecast-summer-climate-free-vector.jpg",
        link: "https://vishakhamishra2406.github.io/Weather-Application/"
    },
    {
        title: "Leet-Metric",
        description: "LeetMetric is a responsive web application that allows users to track and visualize their LeetCode problem-solving progress. By entering a valid LeetCode username, the app fetches and displays the number of problems solved in different difficulty categories—Easy, Medium, and Hard. It features animated progress rings, a clean user interface, and smooth user interaction to encourage consistent coding practice.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "https://tse3.mm.bing.net/th/id/OIP.6rTS0lk6vicYKzwt0v69ygHaE8?pid=Api&P=0&h=180",
        link: "https://vishakhamishra2406.github.io/Leet-Metrics/"
    },
    {
        title: "Project 3",
        description: "Description of your third project",
        technologies: ["Python", "Django", "PostgreSQL"],
        image: "assets/images/project3.png",
        link: "#"
    }
];

// Load projects dynamically
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">${tech}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" class="text-blue-400 hover:text-blue-300 transition duration-300">View Project →</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Skills data
const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Bootstrap", level: 80 },
    { name: "Java", level: 75 }
];

// Load skills with animation
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'bg-gray-700 p-4 rounded-lg';
        skillElement.innerHTML = `
            <div class="flex justify-between mb-2">
                <span class="text-white">${skill.name}</span>
                <span class="text-gray-300">${skill.level}%</span>
            </div>
            <div class="w-full bg-gray-600 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 0%" data-level="${skill.level}"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll('[data-level]');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`;
    });
}

// Initialize EmailJS with your Public Key
emailjs.init("0YsU7Lisjq8Xx_SCT");

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    formStatus.textContent = 'Sending message...';
    formStatus.className = 'mt-4 text-center text-blue-400';
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send email
    emailjs.send("service_razwy9k", "template_69vtmw9", formData)
        .then(function(response) {
            // Show success message
            formStatus.textContent = 'Message sent successfully!';
            formStatus.className = 'mt-4 text-center text-green-400';
            
            // Reset form
            contactForm.reset();
            
            // Clear success message after 3 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 3000);
        })
        .catch(function(error) {
            // Show error message
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.className = 'mt-4 text-center text-red-400';
            console.error('Error:', JSON.stringify(error));
        });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-gray-800');
        nav.classList.remove('bg-gray-800/90');
    } else {
        nav.classList.remove('bg-gray-800');
        nav.classList.add('bg-gray-800/90');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadSkills();
}); 