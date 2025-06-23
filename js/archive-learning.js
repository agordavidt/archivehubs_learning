// Archive Learning JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Submenu functionality
    const submenuToggle = document.querySelector('.submenu-toggle');
    if (submenuToggle) {
        submenuToggle.addEventListener('click', function(event) {
            event.preventDefault();
            const parentItem = this.parentElement;
            parentItem.classList.toggle('expanded');
        });
    }

    // Submenu item click handlers
    const submenuItems = document.querySelectorAll('.submenu-item a');
    submenuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Update active state for submenu items
            submenuItems.forEach(subItem => subItem.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    // Lesson list item click handlers (without pop-ups)
    const lessonListItems = document.querySelectorAll('.lesson-list-item a:not(.submenu-toggle)');
    lessonListItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Update active lesson styling
            lessonListItems.forEach(li => li.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    // Completion Checkmark Logic
    // Map lesson/quiz keys to sidebar selectors
    const completionMap = {
        'introduction': 'archive_learning_2.html',
        'assessment': 'archive_learning_assessment.html',
        'overview-purpose': 'overview_purpose.html',
        'overview-benefits': 'overview_benefits.html',
        'overview-knowledge-check': 'quiz_results.html', // quiz flow
        'kc-knowledge-check': 'kc_results.html', // knowledge check flow
    };

    // Helper: get completion from localStorage
    function isCompleted(key) {
        return localStorage.getItem('archivehubs_completed_' + key) === 'true';
    }
    // Helper: set completion in localStorage
    function setCompleted(key) {
        localStorage.setItem('archivehubs_completed_' + key, 'true');
    }

    // On results pages, mark as completed
    const path = window.location.pathname.split('/').pop();
    if (path === 'quiz_results.html') {
        setCompleted('overview-knowledge-check');
    }
    if (path === 'kc_results.html') {
        setCompleted('kc-knowledge-check');
    }
    if (path === 'archive_learning_2.html') {
        setCompleted('introduction');
    }
    if (path === 'archive_learning_assessment.html') {
        setCompleted('assessment');
    }
    if (path === 'overview_purpose.html') {
        setCompleted('overview-purpose');
    }
    if (path === 'overview_benefits.html') {
        setCompleted('overview-benefits');
    }

    // Update sidebar checkmarks
    Object.entries(completionMap).forEach(([key, file]) => {
        if (isCompleted(key)) {
            // Find the sidebar link for this file
            const link = document.querySelector(`.lesson-list-item a[href$='${file}'], .submenu-item a[href$='${file}']`);
            if (link) {
                let icon = link.querySelector('.lesson-status-icon');
                if (!icon) {
                    // Add checkmark if not present
                    icon = document.createElement('i');
                    icon.className = 'fas fa-check-circle lesson-status-icon';
                    link.appendChild(icon);
                }
                icon.style.color = '#10b981'; // Green
                icon.style.display = 'inline';
            }
        }
    });
}); 