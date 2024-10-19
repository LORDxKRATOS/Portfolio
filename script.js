const typingText = document.getElementById('typing-text');
const professions = ['Saurabh Adhikari', 'a Software Engineer'];
let i = 0;
let j = 0;
let currentProfession = '';
let isDeleting = false;
const typingSpeed = 50;  // Typing speed
const deletingSpeed = 50; // Deleting speed
const delayBetweenWords = 1000;  // Delay between profession transitions

function type() {
    if (i < professions.length) {
        if (!isDeleting && j <= professions[i].length) {
            currentProfession = professions[i].slice(0, ++j);
            typingText.innerHTML = currentProfession; // Update typing text
        }

        if (isDeleting && j <= professions[i].length) {
            currentProfession = professions[i].slice(0, --j);
            typingText.innerHTML = currentProfession; // Update deleting text
        }

        if (!isDeleting && j == professions[i].length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);  // Delay before deleting starts
            return;
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % professions.length;  // Move to the next profession, loop back when done
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', type);

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log('Email:', email, 'Subject:', subject, 'Message:', message);

    alert('Message sent!'); // Feedback to the user
});

// Tab Switching for Skills, Education, and Certifications
document.querySelectorAll('.skills-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all buttons
        document.querySelectorAll('.skills-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));

        // Show the corresponding content section
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Dynamic Content for Skills, Education, and Certifications
document.getElementById('show-skills').addEventListener('click', function () {
    const skillsContent = `
        <li>Go</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
    `;
    document.getElementById('content-list').innerHTML = skillsContent;
});

document.getElementById('show-education').addEventListener('click', function () {
    const educationContent = `
        <li>Bachelor's Degree in Computer Science</li>
    `;
    document.getElementById('content-list').innerHTML = educationContent;
});

document.getElementById('show-certifications').addEventListener('click', function () {
    const certificationsContent = `
        <li>Ethnus MERN Full Stack Internship Program</li>
        <li>The Complete 2023 Web Development Bootcamp by Dr. Angela Yu</li>
    `;
    document.getElementById('content-list').innerHTML = certificationsContent;
});

// JavaScript to handle project buttons and display content
document.querySelectorAll('.projects-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all buttons
        document.querySelectorAll('.projects-btn').forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        // Hide all project content sections
        document.querySelectorAll('.projects-box .content-section').forEach(section => section.classList.remove('active'));

        // Show the corresponding project section
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});
