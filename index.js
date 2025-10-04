 
        // Course Data with Image URLs
        const courses = [
            {
                id: 1,
                title: "Complete Web Development Bootcamp",
                description: "Learn HTML, CSS, JavaScript, React, Node.js and more! Build real projects.",
                category: "web-dev",
                instructor: "Sarah Johnson",
                duration: "42 hours",
                level: "Beginner",
                price: "$89.99",
                image: "./img/img1.avif",
                enrolled: false,
                completed: false,
                modules: [
                    { id: 1, title: "Introduction to HTML", duration: "2 hours", completed: false },
                    { id: 2, title: "CSS Fundamentals", duration: "3 hours", completed: false },
                    { id: 3, title: "JavaScript Basics", duration: "4 hours", completed: false },
                    { id: 4, title: "React Components", duration: "5 hours", completed: false },
                    { id: 5, title: "Node.js Backend", duration: "6 hours", completed: false }
                ]
            },
            {
                id: 2,
                title: "Data Science Fundamentals",
                description: "Master Python, statistics, machine learning, and data visualization.",
                category: "data-science",
                instructor: "Michael Chen",
                duration: "36 hours",
                level: "Intermediate",
                price: "$94.99",
                image: "./img/img2.avif",
                enrolled: false,
                completed: false,
                modules: [
                    { id: 1, title: "Python for Data Analysis", duration: "4 hours", completed: false },
                    { id: 2, title: "Statistical Concepts", duration: "5 hours", completed: false },
                    { id: 3, title: "Data Visualization", duration: "4 hours", completed: false },
                    { id: 4, title: "Machine Learning Basics", duration: "6 hours", completed: false }
                ]
            },
            {
                id: 3,
                title: "UI/UX Design Masterclass",
                description: "Learn user-centered design principles, prototyping, and usability testing.",
                category: "design",
                instructor: "Emma Rodriguez",
                duration: "28 hours",
                level: "Beginner",
                price: "$79.99",
                image: "./img/img3.avif",
                enrolled: false,
                completed: false,
                modules: [
                    { id: 1, title: "Design Thinking", duration: "3 hours", completed: false },
                    { id: 2, title: "Wireframing", duration: "4 hours", completed: false },
                    { id: 3, title: "Prototyping", duration: "5 hours", completed: false },
                    { id: 4, title: "Usability Testing", duration: "3 hours", completed: false }
                ]
            },
            {
                id: 4,
                title: "Mobile App Development with React Native",
                description: "Build cross-platform mobile applications using React Native and JavaScript.",
                category: "mobile-dev",
                instructor: "Alex Thompson",
                duration: "32 hours",
                level: "Intermediate",
                price: "$84.99",
                image: "./img/img4.avif",
                enrolled: false,
                completed: false,
                modules: [
                    { id: 1, title: "React Native Basics", duration: "4 hours", completed: false },
                    { id: 2, title: "Navigation & Routing", duration: "5 hours", completed: false },
                    { id: 3, title: "State Management", duration: "4 hours", completed: false },
                    { id: 4, title: "Native Features", duration: "6 hours", completed: false }
                ]
            },
            {
                id: 5,
                title: "Digital Marketing Strategy",
                description: "Learn SEO, social media marketing, content strategy, and analytics.",
                category: "marketing",
                instructor: "Jessica Lee",
                duration: "24 hours",
                level: "Beginner",
                price: "$74.99",
                image: "./img/img5.avif",
                enrolled: false,
                completed: false,
                modules: [
                    { id: 1, title: "SEO Fundamentals", duration: "3 hours", completed: false },
                    { id: 2, title: "Social Media Strategy", duration: "4 hours", completed: false },
                    { id: 3, title: "Content Marketing", duration: "5 hours", completed: false },
                    { id: 4, title: "Analytics & Reporting", duration: "4 hours", completed: false }
                ]
            },
            {
                id: 6,
                title: "Python for Beginners",
                description: "Start your programming journey with Python. Learn syntax, data structures, and basic algorithms.",
                category: "programming",
                instructor: "Daniel M. Mutahi",
                duration: "20 hours",
                level: "Beginner",
                price: "$69.99",
                image: "./img/img6.jpg",
                enrolled: false,
                completed: false,
                modules: [
                    { id: 1, title: "Python Basics", duration: "3 hours", completed: false },
                    { id: 2, title: "Data Structures", duration: "4 hours", completed: false },
                    { id: 3, title: "Functions & Modules", duration: "4 hours", completed: false },
                    { id: 4, title: "Basic Algorithms", duration: "5 hours", completed: false }
                ]
            },
            {
                id: 7,
                title: "AI for Software Engineering",
                description: "Discover how artificial intelligence is transforming software engineering. Learn AI-powered tools, code generation, testing, and optimization techniques.",
                category: "programming",
                instructor: "Daniel M. Mutahi",
                duration: "25 hours",
                level: "Intermediate",
                price: "$89.99",
                image: "./img/img7.webp",
                enrolled: false,
                completed: false,
                modules: [
                    { id: 1, title: "Introduction to AI in Software Engineering", duration: "3 hours", completed: false },
                    { id: 2, title: "AI-Powered Code Generation", duration: "5 hours", completed: false },
                    { id: 3, title: "Automated Testing with AI", duration: "6 hours", completed: false },
                    { id: 4, title: "Optimization & Debugging with AI Tools", duration: "6 hours", completed: false },
                    { id: 5, title: "Future of AI in Software Development", duration: "5 hours", completed: false }
                ]
            }

        ];

        // User State
        let currentUser = null;
        let isLoginMode = true;

        // DOM Elements
        const courseContainer = document.getElementById('course-container');
        const dashboardCourses = document.getElementById('dashboard-courses');
        const courseDetailSection = document.getElementById('course-detail-section');
        const coursesSection = document.getElementById('courses-section');
        const dashboardSection = document.getElementById('dashboard-section');
        const loginModal = document.getElementById('login-modal');
        const loginBtn = document.getElementById('login-btn');
        const authForm = document.getElementById('auth-form');
        const modalTitle = document.getElementById('modal-title');
        const switchToSignup = document.getElementById('switch-to-signup');
        const userGreeting = document.getElementById('user-greeting');
        const navLinks = document.querySelectorAll('.nav-link');

        // Initialize the platform
        function init() {
            renderCourses();
            setupEventListeners();
            updateUI();
            initAnimations();
        }

        // Initialize animations
        function initAnimations() {
            // Add animation classes to elements
            document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .bounce-in').forEach(el => {
                // Add a small delay for staggered animations
                const delay = parseInt(el.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    el.classList.add('active');
                }, delay);
            });

            // Add hover animations to buttons
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                btn.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        }

        // Render courses
        function renderCourses() {
            courseContainer.innerHTML = '';
            
            courses.forEach((course, index) => {
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card bounce-in';
                courseCard.setAttribute('data-id', course.id);
                courseCard.setAttribute('data-delay', index * 100);
                courseCard.innerHTML = `
                    <div class="course-image" style="background-image: url('${course.image}')"></div>
                    <div class="course-content">
                        <span class="course-category">${formatCategory(course.category)}</span>
                        <h3 class="course-title">${course.title}</h3>
                        <p class="course-description">${course.description}</p>
                        <div class="course-meta">
                            <span><i class="far fa-clock"></i> ${course.duration}</span>
                            <span><i class="fas fa-signal"></i> ${course.level}</span>
                        </div>
                        <div class="course-footer">
                            <div class="course-price">${course.price}</div>
                            <button class="btn ${course.enrolled ? 'btn-primary' : 'btn-outline'}">
                                ${course.enrolled ? 'Continue' : 'Enroll Now'}
                            </button>
                        </div>
                    </div>
                `;
                courseContainer.appendChild(courseCard);
            });
            
            // Add event listeners to course cards
            document.querySelectorAll('.course-card').forEach(card => {
                card.addEventListener('click', function() {
                    const courseId = parseInt(this.getAttribute('data-id'));
                    showCourseDetail(courseId);
                });
            });

            // Trigger animations after rendering
            setTimeout(initAnimations, 100);
        }

        // Show course detail
        function showCourseDetail(courseId) {
            const course = courses.find(c => c.id === courseId);
            if (!course) return;
            
            coursesSection.style.display = 'none';
            dashboardSection.style.display = 'none';
            courseDetailSection.style.display = 'block';
            
            courseDetailSection.innerHTML = `
                <div class="back-btn" id="back-to-courses">
                    <i class="fas fa-arrow-left"></i> Back to Courses
                </div>
                <div class="course-detail-header">
                    <div class="course-detail-image scale-in" style="background-image: url('${course.image}')"></div>
                    <div class="course-detail-info">
                        <span class="course-category">${formatCategory(course.category)}</span>
                        <h1 class="course-detail-title slide-in-right">${course.title}</h1>
                        <div class="course-detail-meta fade-in">
                            <div><i class="fas fa-user"></i> ${course.instructor}</div>
                            <div><i class="far fa-clock"></i> ${course.duration}</div>
                            <div><i class="fas fa-signal"></i> ${course.level}</div>
                        </div>
                        <p class="course-detail-description fade-in">${course.description}</p>
                        <div class="course-footer">
                            <div class="course-price">${course.price}</div>
                            <button class="btn ${course.enrolled ? 'btn-success' : 'btn-primary'}" id="enroll-btn">
                                ${course.enrolled ? 'Enrolled' : 'Enroll Now'}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="course-modules">
                    <h3 class="slide-in-left">Course Content</h3>
                    ${course.modules.map((module, index) => `
                        <div class="module ${module.completed ? 'completed' : ''} fade-in" data-module-id="${module.id}" data-delay="${index * 100}">
                            <div class="module-info">
                                <div class="module-checkbox ${module.completed ? 'checked' : ''}">
                                    ${module.completed ? '<i class="fas fa-check"></i>' : ''}
                                </div>
                                <div>
                                    <div>${module.title}</div>
                                    <small>${module.duration}</small>
                                </div>
                            </div>
                            <div>
                                <i class="fas fa-play-circle"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            // Add event listeners
            document.getElementById('back-to-courses').addEventListener('click', showCourses);
            
            const enrollBtn = document.getElementById('enroll-btn');
            if (enrollBtn) {
                enrollBtn.addEventListener('click', function() {
                    if (!currentUser) {
                        showLoginModal();
                        return;
                    }
                    
                    if (!course.enrolled) {
                        enrollInCourse(courseId);
                        enrollBtn.textContent = 'Enrolled';
                        enrollBtn.className = 'btn btn-success';
                        
                        // Add animation to button
                        enrollBtn.classList.add('pulse');
                        setTimeout(() => {
                            enrollBtn.classList.remove('pulse');
                        }, 2000);
                    }
                });
            }
            
            // Add event listeners to module checkboxes
            document.querySelectorAll('.module-checkbox').forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    if (!currentUser) {
                        showLoginModal();
                        return;
                    }
                    
                    const moduleElement = this.closest('.module');
                    const moduleId = parseInt(moduleElement.getAttribute('data-module-id'));
                    
                    toggleModuleCompletion(courseId, moduleId);
                    
                    // Toggle UI with animation
                    this.classList.toggle('checked');
                    moduleElement.classList.toggle('completed');
                    
                    if (this.classList.contains('checked')) {
                        this.innerHTML = '<i class="fas fa-check"></i>';
                    } else {
                        this.innerHTML = '';
                    }
                    
                    // Check if all modules are completed
                    checkCourseCompletion(courseId);
                });
            });

            // Trigger animations
            setTimeout(initAnimations, 100);
        }

        // Show courses list
        function showCourses() {
            coursesSection.style.display = 'block';
            dashboardSection.style.display = 'none';
            courseDetailSection.style.display = 'none';
            
            // Update active nav link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === 'courses-section') {
                    link.classList.add('active');
                }
            });
        }

        // Show dashboard
        function showDashboard() {
            coursesSection.style.display = 'none';
            dashboardSection.style.display = 'block';
            courseDetailSection.style.display = 'none';
            renderDashboardCourses();
            
            // Update active nav link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === 'dashboard-section') {
                    link.classList.add('active');
                }
            });
        }

        // Render dashboard courses
        function renderDashboardCourses() {
            dashboardCourses.innerHTML = '';
            
            const enrolledCourses = courses.filter(course => course.enrolled);
            
            if (enrolledCourses.length === 0) {
                dashboardCourses.innerHTML = '<p class="fade-in">You are not enrolled in any courses yet. Browse our catalog to get started!</p>';
                return;
            }
            
            enrolledCourses.forEach((course, index) => {
                const completedModules = course.modules.filter(module => module.completed).length;
                const totalModules = course.modules.length;
                const progress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
                
                const dashboardCourse = document.createElement('div');
                dashboardCourse.className = 'dashboard-course bounce-in';
                dashboardCourse.setAttribute('data-id', course.id);
                dashboardCourse.setAttribute('data-delay', index * 100);
                dashboardCourse.innerHTML = `
                    <h4>${course.title}</h4>
                    <p>Instructor: ${course.instructor}</p>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${progress}%"></div>
                    </div>
                    <p>${progress}% Complete (${completedModules}/${totalModules} modules)</p>
                    <button class="btn btn-primary">Continue Learning</button>
                `;
                dashboardCourses.appendChild(dashboardCourse);
            });
            
            // Add event listeners to dashboard course cards
            document.querySelectorAll('.dashboard-course').forEach(card => {
                card.addEventListener('click', function() {
                    const courseId = parseInt(this.getAttribute('data-id'));
                    showCourseDetail(courseId);
                });
            });

            // Trigger animations
            setTimeout(initAnimations, 100);
        }

        // Format category for display
        function formatCategory(category) {
            return category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        }

        // Enroll in a course
        function enrollInCourse(courseId) {
            const courseIndex = courses.findIndex(course => course.id === courseId);
            if (courseIndex !== -1 && !courses[courseIndex].enrolled) {
                courses[courseIndex].enrolled = true;
                
                // Show success message with animation
                const successMsg = document.createElement('div');
                successMsg.className = 'fade-in';
                successMsg.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--success);
                    color: white;
                    padding: 15px 20px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    z-index: 1000;
                    animation: slideInRight 0.5s, slideOutRight 0.5s 2.5s;
                `;
                successMsg.innerHTML = `Successfully enrolled in "${courses[courseIndex].title}"!`;
                document.body.appendChild(successMsg);
                
                setTimeout(() => {
                    document.body.removeChild(successMsg);
                }, 3000);
                
                // Update dashboard if visible
                if (dashboardSection.style.display === 'block') {
                    renderDashboardCourses();
                }
            }
        }

        // Toggle module completion
        function toggleModuleCompletion(courseId, moduleId) {
            const course = courses.find(c => c.id === courseId);
            if (!course) return;
            
            const module = course.modules.find(m => m.id === moduleId);
            if (module) {
                module.completed = !module.completed;
            }
        }

        // Check if course is completed
        function checkCourseCompletion(courseId) {
            const course = courses.find(c => c.id === courseId);
            if (!course) return;
            
            const allCompleted = course.modules.every(module => module.completed);
            if (allCompleted && !course.completed) {
                course.completed = true;
                
                // Show completion message with animation
                const completionMsg = document.createElement('div');
                completionMsg.className = 'fade-in';
                completionMsg.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--primary);
                    color: white;
                    padding: 15px 20px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    z-index: 1000;
                    animation: slideInRight 0.5s, slideOutRight 0.5s 3.5s;
                `;
                completionMsg.innerHTML = `Congratulations! You've completed "${course.title}"!`;
                document.body.appendChild(completionMsg);
                
                setTimeout(() => {
                    document.body.removeChild(completionMsg);
                }, 4000);
            }
        }

        // Show login modal
        function showLoginModal() {
            loginModal.style.display = 'flex';
        }

        // Hide login modal
        function hideLoginModal() {
            loginModal.style.display = 'none';
            authForm.reset();
        }

        // Switch between login and signup
        function toggleAuthMode() {
            isLoginMode = !isLoginMode;
            modalTitle.textContent = isLoginMode ? 'Sign In' : 'Sign Up';
            document.querySelector('button[type="submit"]').textContent = isLoginMode ? 'Sign In' : 'Sign Up';
            switchToSignup.textContent = isLoginMode ? 'Sign up' : 'Sign in';
        }

        // Handle authentication
        function handleAuth(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (isLoginMode) {
                // Simulate login
                currentUser = {
                    name: email.split('@')[0],
                    email: email
                };
                userGreeting.textContent = `Hello, ${currentUser.name}!`;
                loginBtn.textContent = 'Logout';
                
                // Show login success animation
                const loginSuccess = document.createElement('div');
                loginSuccess.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--success);
                    color: white;
                    padding: 15px 20px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    z-index: 1000;
                    animation: slideInRight 0.5s, slideOutRight 0.5s 2.5s;
                `;
                loginSuccess.innerHTML = 'Successfully signed in!';
                document.body.appendChild(loginSuccess);
                
                setTimeout(() => {
                    document.body.removeChild(loginSuccess);
                }, 3000);
            } else {
                // Simulate signup
                currentUser = {
                    name: email.split('@')[0],
                    email: email
                };
                userGreeting.textContent = `Hello, ${currentUser.name}!`;
                loginBtn.textContent = 'Logout';
                
                // Show signup success animation
                const signupSuccess = document.createElement('div');
                signupSuccess.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--success);
                    color: white;
                    padding: 15px 20px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    z-index: 1000;
                    animation: slideInRight 0.5s, slideOutRight 0.5s 2.5s;
                `;
                signupSuccess.innerHTML = 'Account created successfully!';
                document.body.appendChild(signupSuccess);
                
                setTimeout(() => {
                    document.body.removeChild(signupSuccess);
                }, 3000);
            }
            
            hideLoginModal();
            updateUI();
        }

        // Handle logout
        function handleLogout() {
            currentUser = null;
            userGreeting.textContent = 'Hello, Guest!';
            loginBtn.textContent = 'Sign In';
            updateUI();
        }

        // Update UI based on authentication state
        function updateUI() {
            if (currentUser) {
                // User is logged in
                if (dashboardSection.style.display === 'block') {
                    renderDashboardCourses();
                }
            } else {
                // User is not logged in
                if (dashboardSection.style.display === 'block') {
                    showCourses();
                }
            }
        }

        // Setup event listeners
        function setupEventListeners() {
            // Navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = this.getAttribute('data-target');
                    
                    if (target === 'courses-section') {
                        showCourses();
                    } else if (target === 'dashboard-section') {
                        if (currentUser) {
                            showDashboard();
                        } else {
                            showLoginModal();
                        }
                    }
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Login button
            loginBtn.addEventListener('click', function() {
                if (currentUser) {
                    handleLogout();
                } else {
                    showLoginModal();
                }
            });
            
            // Auth form submit
            authForm.addEventListener('submit', handleAuth);
            
            // Switch between login and signup
            switchToSignup.addEventListener('click', function(e) {
                e.preventDefault();
                toggleAuthMode();
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target === loginModal) {
                    hideLoginModal();
                }
            });
        }

        // Initialize the platform when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    