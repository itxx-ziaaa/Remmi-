// Select all filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Add click event listeners to each button
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');

        let url;
        switch (category) {
            case 'fashion':
                url = 'fashion.html'; // Replace with your actual URL for Fashion
                break;
            case 'technology':
                url = 'technology.html'; // Replace with your actual URL for Technology
                break;
            case 'streetwear':
                url = 'streetwear.html'; // Replace with your actual URL for Streetwear
                break;

            case 'all':
                url = 'index.html'; // Replace with your actual URL for Streetwear
                break;
        }

        window.open(url, '_blank'); // Open the determined URL in a new tab
    });
});



// Smooth Scroll for Menu Links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header with Scroll
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Hero Section Animation
const heroTitle = document.querySelector('.hero-title');
const heroImage = document.querySelector('.hero-image img');
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition < 600) {
        heroTitle.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});

// Gallery Filter Animation
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Team Section Animation
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach((member, index) => {
    member.style.animationDelay = `${index * 0.2}s`;
    member.classList.add('fade-in');
});

// Intersection Observer for Lazy Loading Animations
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');
    
    let valid = true;

    // Real-time validation for name
    name.addEventListener('input', () => {
        name.style.borderColor = name.value.trim() === "" ? 'red' : 'green';
    });

    // Real-time validation for email
    email.addEventListener('input', () => {
        email.style.borderColor = validateEmail(email.value) ? 'green' : 'red';
    });

    // Real-time validation for message
    message.addEventListener('input', () => {
        message.style.borderColor = message.value.trim() === "" ? 'red' : 'green';
    });

    if (name.value.trim() === "") {
        valid = false;
        name.style.borderColor = 'red';
        name.placeholder = 'Name is required';
    } else {
        name.style.borderColor = 'green';
    }

    if (!validateEmail(email.value)) {
        valid = false;
        email.style.borderColor = 'red';
        email.placeholder = 'Invalid email';
    } else {
        email.style.borderColor = 'green';
    }

    if (message.value.trim() === "") {
        valid = false;
        message.style.borderColor = 'red';
        message.placeholder = 'Message is required';
    } else {
        message.style.borderColor = 'green';
    }
    
    if (valid) {
        alert('Form submitted successfully!');
        // Form submission logic here (e.g., AJAX)
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerText = '⬆️';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Counter for Stats (if any)
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Testimonials Slider (Basic Version)
const testimonialsContainer = document.querySelector('.testimonials');
const testimonials = testimonialsContainer.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

showTestimonial(currentTestimonial);

// Auto-play for testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000); // Change testimonial every 5 seconds

document.querySelector('.next-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Blog Data
const blogPosts = [
    {
        id: 1,
        title: "The Fusion of Fashion and Technology",
        category: "technology",
        image: "blog1.jpg",
        excerpt: "Explore how fashion is embracing technology for the future...",
        meta: "Published on October 1, 2024",
    },
    {
        id: 2,
        title: "Streetwear Trends for 2024",
        category: "streetwear",
        image: "blog2.jpg",
        excerpt: "Check out the latest streetwear trends and styles that are taking over...",
        meta: "Published on September 28, 2024",
    },
    {
        id: 3,
        title: "Sustainable Fashion: The Future of Streetwear",
        category: "fashion",
        image: "blog3.jpg",
        excerpt: "Discover how sustainability is shaping the future of streetwear...",
        meta: "Published on September 20, 2024",
    },
    // Add more blog posts as needed
];

// Load Blogs
let postsPerLoad = 3;
let currentLoaded = 0;

function loadBlogs() {
    document.querySelector('.loader').style.display = 'block'; // Show loader
    const blogContainer = document.querySelector('.blog-posts');
    const fragment = document.createDocumentFragment();

    setTimeout(() => { // Simulate loading delay
        blogPosts.slice(currentLoaded, currentLoaded + postsPerLoad).forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post', 'fade-in');
            postElement.setAttribute('data-category', post.category);
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p class="post-meta">${post.meta}</p>
                <p>${post.excerpt}</p>
                <button class="like-btn">❤️ Like</button>
                <button class="comment-btn">💬 Comment</button>
            `;
            fragment.appendChild(postElement);
        });

        blogContainer.appendChild(fragment);
        currentLoaded += postsPerLoad;

        // Check if all posts are loaded
        if (currentLoaded >= blogPosts.length) {
            document.querySelector('.load-more-btn').style.display = 'none';
        }

        // Trigger animation for blog posts
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(element => {
            observer.observe(element);
        });

        document.querySelector('.loader').style.display = 'none'; // Hide loader
    }, 1000);
}

// Filter Blogs
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const allPosts = document.querySelectorAll('.blog-post');

        allPosts.forEach(post => {
            if (category === 'all' || post.getAttribute('data-category') === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

// Load more blogs when clicking the button
document.querySelector('.load-more-btn').addEventListener('click', loadBlogs);

// Like Button Functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('like-btn')) {
        e.target.innerText = e.target.innerText === '❤️ Like' ? '❤️ Liked' : '❤️ Like';
    }
});
