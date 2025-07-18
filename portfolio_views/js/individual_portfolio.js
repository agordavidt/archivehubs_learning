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

    // Work Experience Modal
    document.querySelector('.experience-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Job Title</label>
                        <input type="text" placeholder="Enter job title">
                    </div>
                    <div class="form-group">
                        <label>Company/Organization</label>
                        <input type="text" placeholder="Enter company name">
                    </div>
                    <div class="form-group">
                        <label>Tools or platforms used</label>
                        <input type="text" placeholder="List tools/platforms">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Start Date</label>
                            <input type="date">
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <input type="date">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Key Responsibilities</label>
                        <textarea placeholder="Describe your responsibilities"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Achievements/Projects handled</label>
                        <textarea placeholder="List your achievements"></textarea>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Position</button>
                </div>
            </form>
        `;
        createModal('Edit Work Experience', modalContent);
    });

    // Education Modal
    document.querySelector('.education-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Degree / Qualification</label>
                        <input type="text" placeholder="Enter degree/qualification">
                    </div>
                    <div class="form-group">
                        <label>Institution Name</label>
                        <input type="text" placeholder="Enter institution name">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Start Year</label>
                            <input type="number" placeholder="YYYY">
                        </div>
                        <div class="form-group">
                            <label>End Year</label>
                            <input type="number" placeholder="YYYY">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Major subjects or areas of focus</label>
                        <input type="text" placeholder="Enter major subjects">
                    </div>
                    <div class="form-group">
                        <label>Honors or distinctions (if any)</label>
                        <input type="text" placeholder="Enter honors/distinctions">
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Education</button>
                </div>
            </form>
        `;
        createModal('Edit Education', modalContent);
    });

    // Work Showcase Modal
    document.querySelector('.showcase-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Project Title</label>
                        <input type="text" placeholder="Enter project title">
                    </div>
                    <div class="form-group">
                        <label>Client/Organization/Personal</label>
                        <input type="text" placeholder="Enter client/organization">
                    </div>
                    <div class="form-group">
                        <label>Date Completed</label>
                        <input type="date">
                    </div>
                    <div class="form-group">
                        <label>Tools/Technologies Used</label>
                        <input type="text" placeholder="List tools/technologies">
                    </div>
                    <div class="form-group">
                        <label>Objective / Brief</label>
                        <textarea placeholder="Describe the project objective"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Process / Approach</label>
                        <textarea placeholder="Describe your process"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Outcome / Impact</label>
                        <textarea placeholder="Describe the outcomes"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Visuals</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach Images/Links</button>
                        </div>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Project</button>
                </div>
            </form>
        `;
        createModal('Edit Work Showcase', modalContent);
    });

    // Licenses & Certifications Modal
    document.querySelector('.licenses-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Certification Name</label>
                        <input type="text" placeholder="Enter certification name">
                    </div>
                    <div class="form-group">
                        <label>Issuing Platform/Institution</label>
                        <input type="text" placeholder="Enter issuing organization">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Date Acquired</label>
                            <input type="date">
                        </div>
                        <div class="form-group">
                            <label>Validity Period</label>
                            <input type="text" placeholder="Enter validity period">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Credential ID</label>
                        <input type="text" placeholder="Enter credential ID">
                    </div>
                    <div class="form-group">
                        <label>Attach Certificate</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                        </div>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Certification</button>
                </div>
            </form>
        `;
        createModal('Edit Licenses & Certifications', modalContent);
    });

    // Awards Modal
    document.querySelector('.awards-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Title of award or honor</label>
                        <input type="text" placeholder="Enter award title">
                    </div>
                    <div class="form-group">
                        <label>Awarding body</label>
                        <input type="text" placeholder="Enter awarding organization">
                    </div>
                    <div class="form-group">
                        <label>Year received</label>
                        <input type="number" placeholder="YYYY">
                    </div>
                    <div class="form-group">
                        <label>Brief context</label>
                        <textarea placeholder="Describe the award context"></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Attach Award</label>
                            <div class="file-upload">
                                <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Attach Photo</label>
                            <div class="file-upload">
                                <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Award</button>
                </div>
            </form>
        `;
        createModal('Edit Awards', modalContent);
    });

    // Professional Affiliations Modal
    document.querySelector('.affiliations-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Memberships in industry bodies or associations</label>
                        <input type="text" placeholder="Enter memberships">
                    </div>
                    <div class="form-group">
                        <label>Roles held (if any)</label>
                        <input type="text" placeholder="Enter roles">
                    </div>
                    <div class="form-group">
                        <label>Upload Award</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                        </div>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Affiliation</button>
                </div>
            </form>
        `;
        createModal('Edit Professional Affiliations', modalContent);
    });

    // Languages Modal
    document.querySelector('.languages-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>List languages and fluency levels</label>
                        <textarea placeholder="Example: English (Fluent), Spanish (Intermediate)"></textarea>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Language</button>
                </div>
            </form>
        `;
        createModal('Edit Languages', modalContent);
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

    // Skills Modal
    document.querySelector('.skills-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Technical skills</label>
                        <textarea placeholder="List your technical skills"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Soft skills</label>
                        <textarea placeholder="List your soft skills"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Industry-specific tools/software</label>
                        <textarea placeholder="List tools/software you're proficient with"></textarea>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Skill</button>
                </div>
            </form>
        `;
        createModal('Edit Skills', modalContent);
    });

    // Volunteer Work Modal
    document.querySelector('.volunteer-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Organization Name</label>
                        <input type="text" placeholder="Enter organization name">
                    </div>
                    <div class="form-group">
                        <label>Role</label>
                        <input type="text" placeholder="Enter your role">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Start Date</label>
                            <input type="date">
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <input type="date">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Contribution/Impact</label>
                        <textarea placeholder="Describe your contributions"></textarea>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Volunteer Experience</button>
                </div>
            </form>
        `;
        createModal('Edit Volunteer Work', modalContent);
    });

    // Testimonials Modal
    document.querySelector('.testimonials-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Referee Name</label>
                        <input type="text" placeholder="Enter referee name">
                    </div>
                    <div class="form-group">
                        <label>Referee Designation</label>
                        <input type="text" placeholder="Enter referee designation">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea placeholder="Quotes from clients, employers, or mentors"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Referee Organization</label>
                        <input type="text" placeholder="Enter organization">
                    </div>
                    <div class="form-group">
                        <label>Reference Date</label>
                        <input type="date">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="Enter phone">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Upload File</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                        </div>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Testimonial</button>
                </div>
            </form>
        `;
        createModal('Edit Testimonials', modalContent);
    });

    // Publications Modal
    document.querySelector('.publications-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" placeholder="Enter publication title">
                    </div>
                    <div class="form-group">
                        <label>Author</label>
                        <input type="text" placeholder="Enter author name">
                    </div>
                    <div class="form-group">
                        <label>Status</label>
                        <select>
                            <option>Published</option>
                            <option>Unpublished</option>
                            <option>In Progress</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Date of Publication</label>
                        <input type="date">
                    </div>
                    <div class="form-group">
                        <label>Description of Topic</label>
                        <textarea placeholder="Describe the publication topic"></textarea>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Publication</button>
                </div>
            </form>
        `;
        createModal('Edit Publications', modalContent);
    });

    // Extracurricular Activities Modal
    document.querySelector('.extracurricular-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Organization</label>
                        <input type="text" placeholder="Enter organization name">
                    </div>
                    <div class="form-group">
                        <label>Responsibility/Position</label>
                        <input type="text" placeholder="Enter your role">
                    </div>
                    <div class="form-group">
                        <label>Activities</label>
                        <textarea placeholder="Describe your activities"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Date</label>
                        <input type="date">
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Activity</button>
                </div>
            </form>
        `;
        createModal('Edit Extracurricular Activities', modalContent);
    });

    // Contact & Links Modal
    document.querySelector('.contact-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <h3>Personal Data</h3>
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter full name">
                    </div>
                    <div class="form-group">
                        <label>Residential Address</label>
                        <input type="text" placeholder="Enter residential address">
                    </div>
                    <div class="form-group">
                        <label>Postal Address</label>
                        <input type="text" placeholder="Enter postal address">
                    </div>
                    <div class="form-group">
                        <label>Date of Birth</label>
                        <input type="date">
                    </div>
                    <div class="form-group">
                        <label>Home Address</label>
                        <input type="text" placeholder="Enter home address">
                    </div>
                    <div class="form-group">
                        <label>Place of Birth</label>
                        <input type="text" placeholder="Enter place of birth">
                    </div>
                    <div class="form-group">
                        <label>Nationality</label>
                        <input type="text" placeholder="Enter nationality">
                    </div>
                    <div class="form-group">
                        <label>Marital Status</label>
                        <select>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                        </select>
                    </div>
                    <div class="form-group marital-status-details" style="display:none;">
                        <label>Name of Spouse</label>
                        <input type="text" placeholder="Enter spouse name">
                        <label>Address of Spouse</label>
                        <input type="text" placeholder="Enter spouse address">
                        <label>Number of Children</label>
                        <input type="number" placeholder="Enter number of children">
                    </div>
                </div>

                <div class="form-section">
                    <h3>Contact Information</h3>
                    <div class="form-group">
                        <label>Professional email</label>
                        <input type="email" placeholder="Enter professional email">
                    </div>
                    <div class="form-group">
                        <label>Archivehubs Profile link</label>
                        <input type="url" placeholder="Enter profile URL">
                    </div>
                    <div class="form-group">
                        <label>Personal website or blog</label>
                        <input type="url" placeholder="Enter website URL">
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" placeholder="Enter phone number">
                    </div>
                    <div class="form-group">
                        <label>GitHub, Behance, Dribble, Medium, or other portfolio platforms link</label>
                        <input type="url" placeholder="Enter portfolio URL">
                    </div>
                </div>

                <div class="form-section">
                    <h3>Next of Kin</h3>
                    <div class="form-group">
                        <label>Any Next of Kin</label>
                        <select id="nextOfKinSelect">
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                    <div class="next-of-kin-details" style="display:none;">
                        <div class="form-group">
                            <label>Name of Next of Kin</label>
                            <input type="text" placeholder="Enter name">
                        </div>
                        <div class="form-group">
                            <label>Relationship with Next of Kin</label>
                            <input type="text" placeholder="Enter relationship">
                        </div>
                        <div class="form-group">
                            <label>Next of Kin Address</label>
                            <input type="text" placeholder="Enter address">
                        </div>
                        <div class="form-group">
                            <label>Next of Kin Email</label>
                            <input type="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label>Next of Kin Phone</label>
                            <input type="tel" placeholder="Enter phone number">
                        </div>
                    </div>
                </div>
            </form>

            <script>
                // Show/hide marital status details
                document.querySelector('select[name="maritalStatus"]').addEventListener('change', function() {
                    const details = document.querySelector('.marital-status-details');
                    details.style.display = this.value === 'Married' ? 'block' : 'none';
                });

                // Show/hide next of kin details
                document.getElementById('nextOfKinSelect').addEventListener('change', function() {
                    const details = document.querySelector('.next-of-kin-details');
                    details.style.display = this.value === 'Yes' ? 'block' : 'none';
                });
            </script>
        `;
        createModal('Edit Contact & Links', modalContent);
    });

    // Appendix Modal
    document.querySelector('.appendix-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Attach Resume</label>
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
                    <div class="form-group">
                        <label>Attach Project timelines</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Attach Detailed case studies</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Attach Press features or publications</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                        </div>
                    </div>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Appendix Item</button>
                </div>
            </form>
        `;
        createModal('Edit Appendix', modalContent);
    });

    // References & Links Modal
document.querySelector('.references-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <div class="form-section">
                <h3>References (Optional)</h3>
                <p class="form-note">Include contact details with permission</p>
                <div class="form-group">
                    <label>Referee Name</label>
                    <input type="text" placeholder="Enter referee name">
                </div>
                <div class="form-group">
                    <label>Referee Designation</label>
                    <input type="text" placeholder="Enter referee designation">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea placeholder="Enter reference description"></textarea>
                </div>
                <div class="form-group">
                    <label>Referee Organization</label>
                    <input type="text" placeholder="Enter organization">
                </div>
                <div class="form-group">
                    <label>Reference Date</label>
                    <input type="date">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" placeholder="Enter phone">
                    </div>
                </div>
                <div class="form-group">
                    <label>Upload File</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Reference</button>
            </div>
        </form>
    `;
    createModal('Edit References & Links', modalContent);
});

});