document.addEventListener('DOMContentLoaded', function() {
    // Open To Dropdown functionality
    const openToBtn = document.getElementById('openToBtn');
    const openToMainBtn = document.getElementById('openToMainBtn');
    const openToDropdown = document.getElementById('openToDropdown');
    
    function toggleOpenToDropdown() {
        openToDropdown.classList.toggle('show');
    }
    
    if (openToBtn) {
        openToBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleOpenToDropdown();
        });
    }
    
    if (openToMainBtn) {
        openToMainBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleOpenToDropdown();
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!openToDropdown.contains(e.target)) {
            openToDropdown.classList.remove('show');
        }
    });

    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    document.body.appendChild(modalContainer);

    // Function to create modal
    function createModal(title, content) {
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-header">
                        <h2>${title}</h2>
                        <img src="https://via.placeholder.com/800x200/0077B5/FFFFFF?text=${encodeURIComponent(title)}" alt="${title}" class="modal-header-image">
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer">
                        <button class="cancel-btn">Cancel</button>
                        <button class="save-btn">Save</button>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.querySelector('.close-modal').addEventListener('click', closeModal);
        document.querySelector('.cancel-btn').addEventListener('click', closeModal);
        document.querySelector('.save-btn').addEventListener('click', saveModal);

        // Show modal
        modalContainer.style.display = 'block';
    }

    function closeModal() {
        modalContainer.style.display = 'none';
    }

    function saveModal() {
        // In a real implementation, this would save the form data
        alert('Changes saved!');
        closeModal();
    }

    // About Section Modal
    document.querySelector('.about-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <h3>Personal Information</h3>
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label>Professional Title or Designation</label>
                        <input type="text" placeholder="e.g., Software Engineer, Author, Consultant">
                    </div>
                    <div class="form-group">
                        <label>Tagline or Personal Brand Statement (optional)</label>
                        <input type="text" placeholder="Enter your tagline">
                    </div>
                </div>

                <div class="form-section">
                    <h3>Contact Information</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Country</label>
                            <input type="text" placeholder="Enter country">
                        </div>
                        <div class="form-group">
                            <label>City</label>
                            <input type="text" placeholder="Enter city">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Residential Address</label>
                        <input type="text" placeholder="Enter address">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label>Phone Number 1</label>
                            <input type="tel" placeholder="Enter phone number">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Phone Number 2</label>
                        <input type="tel" placeholder="Enter alternate phone number">
                    </div>
                    <div class="form-group">
                        <label>Date of Portfolio or Version</label>
                        <input type="date">
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Social Media Links</button>
                </div>

                <div class="form-section">
                    <h3>Professional Summary / Bio</h3>
                    <div class="form-group">
                        <label>Brief bio (3–6 sentences)</label>
                        <textarea placeholder="Summarize who you are professionally, your expertise and experience, what makes you unique or valuable, and your career or creative goals"></textarea>
                    </div>
                </div>

                <div class="form-section">
                    <h3>Areas of Expertise / Skills</h3>
                    <div class="form-group">
                        <label>Key skills or knowledge areas</label>
                        <textarea placeholder="List your skills (bulleted or comma-separated)"></textarea>
                    </div>
                </div>
            </form>
        `;
        createModal('Edit About Section', modalContent);
    });


   

    // Interests Modal
    document.querySelector('.interests-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Personal Interests / Hobbies</label>
                        <textarea placeholder="One-liners that humanize the profile (e.g., 'Passionate about photography and sustainable living.')"></textarea>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Interest</button>
                </div>
            </form>
        `;
        createModal('Edit Interests', modalContent);
    });

  

// Corporate Snapshot Modal
document.querySelector('.corporate-snapshot-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=CS" alt="Snapshot" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Legal Name">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Registration Number e.g RC8096532">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Year Established">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Corporate / Business Type">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Nature of Business / Industry (Brief Overview)">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Headquarters Branch Locations">
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Corporate Snapshot', modalContent);
});

// Core Services / Capability Modal
document.querySelector('.core-services-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=CS" alt="Services" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Description of main services or areas of expertise"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Technical or Specialized Skills"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Tools, Platforms, or Methodologies used"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Industry focus or Sector-specific capabilities"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Core Services / Capability', modalContent);
});

// Portfolio of Work / Project Modal
document.querySelector('.portfolio-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=PW" alt="Portfolio" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Project Title">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Client Name (If not under NDA)">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Industry / Sector">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" placeholder="Date">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Duration">
                    </div>
                </div>
                <div class="form-group">
                    <textarea placeholder="Objectives / Client Brief"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Scope of work / Services Delivered"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Challenges and Solutions"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Results / Achievements (Preferably with metrics or KPIs)"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <label>Images / Visuals (Mockups, Photos, Diagrams)</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Add</button>
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Project</button>
            </div>
        </form>
    `;
    createModal('Edit Portfolio of Work / Project', modalContent);
});

// Team / Expertise Highlights Modal
document.querySelector('.team-expertise-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=TE" alt="Team" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Profile of Key Personnel (Optional)">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Certifications and Qualifications">
                </div>
                <div class="form-group">
                    <textarea placeholder="Team Capabilities or Departmental Strengths (Optional)"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Team / Expertise Highlights', modalContent);
});

// Key Clients / Partners Modal
document.querySelector('.key-clients-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=KC" alt="Clients" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Names of Notable Clients">
                </div>
                <div class="form-group">
                    <textarea placeholder="Testimonials (If Available)"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Repeat Clients or long-term Partnerships">
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Client</button>
            </div>
        </form>
    `;
    createModal('Edit Key Clients / Partners', modalContent);
});

// Awards, Certifications, and Recognitions Modal
document.querySelector('.awards-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=AC" alt="Awards" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Key Accomplishments/ Major Projects"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Awards and Certifications">
                </div>
                <div class="form-group">
                    <label>Attach Certificate</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" placeholder="Issued Date">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Credential ID">
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Membership in Professional Association">
                </div>
                <div class="form-group">
                    <label>Attach Certificate</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Award</button>
            </div>
        </form>
    `;
    createModal('Edit Awards, Certifications, and Recognitions', modalContent);
});

// Tools, Technologies and Methodologies Modal
document.querySelector('.tools-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=TT" alt="Tools" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Software / tools regularly used"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Proprietary Processes or Innovation Approaches"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Tech Stacks, Design Frameworks, or Logistic Systems (If relevant)"></textarea>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Tool</button>
            </div>
        </form>
    `;
    createModal('Edit Tools, Technologies and Methodologies', modalContent);
});

// Financial Highlights Modal
document.querySelector('.financial-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Revenue Trend">
                </div>
                <div class="form-group">
                    <label>Upload Files</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Profitability (If applicable)">
                </div>
                <div class="form-group">
                    <label>Upload Files</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Key Financial Ratios or Performance Indicators">
                </div>
                <div class="form-group">
                    <label>Upload Files</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Financial Highlights', modalContent);
});

// Future plans / Strategic Goals Modal
document.querySelector('.future-plans-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Short and long-term growth strategies"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Innovation Plans or Expansion Goals"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Future plans / Strategic Goals', modalContent);
});

// Case Studies or Deep Dives Modal
document.querySelector('.case-studies-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="More detailed breakdown of 1-3 landmark projects"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Success metrics, timelines, budgets (If sharable)"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <label>Upload Files</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach Files</button>
                    </div>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Case Studies or Deep Dives', modalContent);
});

// Client Testimonials Modal
document.querySelector('.testimonials-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=CT" alt="Testimonials" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Quotes from satisfied clients"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Context or reference to the project they relate to"></textarea>
                </div>
                <div class="form-group">
                    <label>Upload Files</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach Files</button>
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Testimonial</button>
            </div>
        </form>
    `;
    createModal('Edit Client Testimonials', modalContent);
});

// Publications Modal
document.querySelector('.publications-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=PB" alt="Publications" class="modal-header-image">
            <div class="form-section">
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Author">
                    </div>
                </div>
                <div class="form-group">
                    <textarea placeholder="Description of Topic"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <select placeholder="Status">
                            <option>Published</option>
                            <option>Draft</option>
                            <option>In Progress</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="date" placeholder="Date of Publication">
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Publication</button>
            </div>
        </form>
    `;
    createModal('Edit Publications', modalContent);
});

// Contact & Links Modal
document.querySelector('.contact-links-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=CL" alt="Contact" class="modal-header-image">
            <div class="form-section">
                <h3>Corporate Data</h3>
                <div class="form-group">
                    <input type="text" placeholder="Corporate Name">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" placeholder="Date of Registration">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Registration ID / Number">
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Tax Identification Number (TIN)">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Postal Address">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Branch Address">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Corporate Address">
                </div>
                <div class="form-group">
                    <input type="email" placeholder="Corporate email">
                </div>
                <div class="form-group">
                    <input type="url" placeholder="Archivehubs Profile Link">
                </div>
                <div class="form-group">
                    <input type="url" placeholder="Corporate website or blog">
                </div>
                <div class="form-group">
                    <input type="tel" placeholder="Phone">
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <input type="url" placeholder="GitHub, Behance, Dribbble, Medium, or other portfolio platforms link">
                </div>
            </div>
        </form>
    `;
    createModal('Edit Contact & Links', modalContent);
});

// Appendices Modal
document.querySelector('.appendices-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=AP" alt="Appendices" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <label>Attach Whitepapers or Brochure</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Attach Press Mentions</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Attach Charts</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Attach Legal Documents</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Attach Credentials</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Appendix</button>
            </div>
        </form>
    `;
    createModal('Edit Appendices', modalContent);
});