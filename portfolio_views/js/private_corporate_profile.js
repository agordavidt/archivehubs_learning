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

    // Activity Section Modal
    document.querySelector('.activity-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <div class="form-section">
                    <div class="form-group">
                        <label>Create a Post</label>
                        <textarea placeholder="What do you want to talk about?"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Add Media</label>
                        <div class="file-upload">
                            <button type="button" class="attach-btn"><i class="fas fa-thumbtack"></i> Attach Files</button>
                        </div>
                    </div>
                </div>
            </form>
        `;
        createModal('Create Post', modalContent);
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
                </div>
            </form>
        `;
        createModal('Edit Corporate Overview', modalContent);
    });

    // Vision Section Modal
    document.querySelector('.vision-section .edit-btn').addEventListener('click', function() {
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

    // Products Section Modal
    document.querySelector('.products-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <img src="https://via.placeholder.com/100x100/008000/FFFFFF?text=PS" alt="Products" class="modal-header-image">
                <div class="form-section">
                    <div class="form-group">
                        <label>Product or Service Type</label>
                        <input type="text" placeholder="Enter product/service type">
                    </div>
                    <div class="form-group">
                        <label>Description of Key Products and/or service offerings</label>
                        <textarea placeholder="Enter description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Features and benefits</label>
                        <textarea placeholder="Enter features and benefits"></textarea>
                        <button type="button" class="add-more-btn"><i class="fas fa-plus"></i> Add</button>
                    </div>
                    <div class="form-group">
                        <label>Any Unique Selling Points (USPs)</label>
                        <textarea placeholder="Enter USPs"></textarea>
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

    // Market Section Modal
    document.querySelector('.market-section .edit-btn').addEventListener('click', function() {
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

    // Achievements Section Modal
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

    // CSR Section Modal
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

    // Contact Section Modal
    document.querySelector('.contact-section .edit-btn').addEventListener('click', function() {
        const modalContent = `
            <form class="modal-form">
                <img src="https://via.placeholder.com/100x100/0000FF/FFFFFF?text=CL" alt="Contact" class="modal-header-image">
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

    // Appendices Section Modal
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

    // Appendix Section Modal
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

    // Interests Section Modal
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
}); 