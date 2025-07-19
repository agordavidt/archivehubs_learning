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


// Corporate Overview Modal
document.querySelector('.corporate-overview-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=CO" alt="Corporate" class="modal-header-image">
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
                    <input type="text" placeholder="Nature of Business / Industry">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Headquarters Branch Locations">
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Founder(s) and Key Personnel">
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Brief Profile"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Key Personnel">
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Corporate Overview', modalContent);
});

// Vision, Mission, and Core Values Modal
document.querySelector('.vision-mission-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=VM" alt="Vision" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Vision Statement – Long-term aspirational goal"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Mission Statement – Purpose and how it operates"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Core Values – Beliefs guiding behavior and decision-making"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Vision, Mission, and Core Values', modalContent);
});

// Products and Services Modal
document.querySelector('.products-services-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=PS" alt="Products" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Product or Service Type">
                </div>
                <div class="form-group">
                    <textarea placeholder="Description of Key Products and/or service offerings"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Features and benefits"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Any Unique Selling Points (USPs)"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Products and Services', modalContent);
});

// Organizational Structure Modal
document.querySelector('.org-structure-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=OS" alt="Structure" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Management Team">
                </div>
                <div class="form-group">
                    <textarea placeholder="Leadership Bios"></textarea>
                </div>
                <div class="form-group">
                    <label>Attach Organization Chart</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <textarea placeholder="Company Hierarchy/ or Organization Chart"></textarea>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Organizational Structure', modalContent);
});

// Market and Client Base Modal
document.querySelector('.market-client-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=MC" alt="Market" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Target Market / Industry Sectors">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Notable Clients or Partners">
                </div>
                <div class="form-group">
                    <textarea placeholder="Client Description"></textarea>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Market Segment</button>
            </div>
        </form>
    `;
    createModal('Edit Market and Client Base', modalContent);
});

// Achievements and Milestones Modal
document.querySelector('.achievements-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=AM" alt="Achievements" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Key Accomplishments/ Major Projects"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Awards and Certifications">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Name of organization">
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
                    <label>Attach Certificate</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Achievement</button>
            </div>
        </form>
    `;
    createModal('Edit Achievements and Milestones', modalContent);
});

// Corporate Social Responsibility Modal
document.querySelector('.csr-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=CS" alt="CSR" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Environmental Sustainability Efforts"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Community Engagement"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Ethical Practices"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Others"></textarea>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another CSR Activity</button>
            </div>
        </form>
    `;
    createModal('Edit Corporate Social Responsibility', modalContent);
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
                    <input type="url" placeholder="Archivehubs Portfolio Link">
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
                    <label>Attach Credentials</label>
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
                    <label>Attach Press Mentions</label>
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

// Organizational Overview Modal (Second Set)
document.querySelector('.org-overview-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=OO" alt="Org Overview" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Full Name and Acronym">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Registration Number e.g RC8096532 (If applicable)">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Year of Establishment">
                </div>
                <div class="form-group">
                    <textarea placeholder="Mandate or Legal Foundation"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Parent Ministry or Supervisory Authority">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Jurisdiction e.g National, State, Regional, Local, International">
                </div>
            </div>
        </form>
    `;
    createModal('Edit Organizational Overview', modalContent);
});

// Vision, Mission, and Core Values Modal (Second Set)
document.querySelector('.vision-mission-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=VM" alt="Vision" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Vision Statement – Future-focused aspiration"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Mission Statement – Purpose and operational focus"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Core Values – Guiding Principles and Public Service Ethics"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Vision, Mission, and Core Values', modalContent);
});

// Organizational Structure Modal (Second Set)
document.querySelector('.org-structure-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=OS" alt="Structure" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Leadership (Director General, Minister, Head, etc)">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Key Departments / Units">
                </div>
                <div class="form-group">
                    <label>Attach Organization Chart</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <div class="form-group">
                    <textarea placeholder="Company Hierarchy / or Organization Chart"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Staffing Overview (Number of employee, distribution, etc)"></textarea>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Organizational Structure', modalContent);
});

// Functions and Mandates Modal
document.querySelector('.functions-mandates-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=FM" alt="Functions" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Primary Responsibilities and legal mandates"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
                <div class="form-group">
                    <textarea placeholder="Scope of Authority (Policy-making, Implementation, Regulation, Service Delivery, etc)"></textarea>
                    <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Functions and Mandates', modalContent);
});

// Key Programs and Services Modal
document.querySelector('.key-programs-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=KP" alt="Programs" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Ongoing Initiatives, Public Services, or Policy Programs"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Target Populations or Beneficiaries">
                </div>
                <div class="form-group">
                    <textarea placeholder="Delivery Mechanisms (Offices, Digital Platforms, Partnerships)"></textarea>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Program</button>
            </div>
        </form>
    `;
    createModal('Edit Key Programs and Services', modalContent);
});

// Strategic Goals and Objectives Modal
document.querySelector('.strategic-goals-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=SG" alt="Goals" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Medium-to long-term Plans"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Performance Indicators (If applicable)">
                </div>
                <div class="form-group">
                    <textarea placeholder="Alignment with National Development Frameworks, SDGs, etc"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Delivery Mechanisms (Offices, Digital Platforms, Partnerships)"></textarea>
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
    createModal('Edit Strategic Goals and Objectives', modalContent);
});

// Major Achievements Modal (Second Set)
document.querySelector('.major-achievements-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=MA" alt="Achievements" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Key Accomplishments in Recent Years"></textarea>
                </div>
                <div class="form-group">
                    <textarea placeholder="Impact Summaries with data or success stories"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Recognition, Awards, or Major Milestones">
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
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Achievement</button>
            </div>
        </form>
    `;
    createModal('Edit Major Achievements', modalContent);
});

// Budget and Funding Sources Modal
document.querySelector('.budget-funding-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=BF" alt="Budget" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Annual Budget Summary (Expenditures and Allocations)"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Sources of Funding (Government Appropriation, Donors, Support, Grants)">
                </div>
                <div class="form-group">
                    <textarea placeholder="Financial Accountability and Audit Practices"></textarea>
                </div>
                <div class="form-group">
                    <label>Attach Report</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Budget and Funding Sources', modalContent);
});

// Partnerships and Stakeholders Modal
document.querySelector('.partnerships-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=PS" alt="Partnerships" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Collaborations with other Government Bodies, NGOs, International Agencies, or Private Sector"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Community Engagement Mechanisms">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Public-Private Partnership (If any)">
                </div>
                <div class="form-group">
                    <label>Attach Photo</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach File</button>
                    </div>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Partnership</button>
            </div>
        </form>
    `;
    createModal('Edit Partnerships and Stakeholders', modalContent);
});

// Policy and Regulatory Framework Modal
document.querySelector('.policy-framework-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=PR" alt="Policy" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="Relevant laws, Regulations, or Policy Documents"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Oversight Mechanisms and Accountability Structures">
                </div>
                <div class="form-group">
                    <textarea placeholder="Compliance with National and International Standards"></textarea>
                </div>
                <div class="form-group">
                    <label>Attach Files</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach Files</button>
                    </div>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Policy and Regulatory Framework', modalContent);
});

// Monitoring, Evaluation, and Reporting Modal
document.querySelector('.monitoring-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <div class="form-section">
                <div class="form-group">
                    <textarea placeholder="How the Organization measures performance"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Monitoring tools or Dashboards">
                </div>
                <div class="form-group">
                    <textarea placeholder="Reporting Procedures and Public Disclosure"></textarea>
                </div>
                <div class="form-group">
                    <label>Attach Files</label>
                    <div class="file-upload">
                        <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach Files</button>
                    </div>
                </div>
            </div>
        </form>
    `;
    createModal('Edit Monitoring, Evaluation, and Reporting', modalContent);
});

// Contact Information Modal
document.querySelector('.contact-info-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/0077B5/FFFFFF?text=CI" alt="Contact" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <input type="text" placeholder="Headquarters Address">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Regional Offices">
                </div>
                <div class="form-group">
                    <textarea placeholder="Official emails, helplines, websites, and social media handles"></textarea>
                </div>
                <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add Another Contact</button>
            </div>
        </form>
    `;
    createModal('Edit Contact Information', modalContent);
});

// Appendices Modal
document.querySelector('.appendices-section .edit-btn').addEventListener('click', function() {
    const modalContent = `
        <form class="modal-form">
            <img src="https://via.placeholder.com/100x100/800000/FFFFFF?text=AP" alt="Appendix" class="modal-header-image">
            <div class="form-section">
                <div class="form-group">
                    <label>Attach Whitepapers or Brochure</label>
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
                    <label>Attach Press Mentions</label>
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