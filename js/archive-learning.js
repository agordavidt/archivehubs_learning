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
}); 