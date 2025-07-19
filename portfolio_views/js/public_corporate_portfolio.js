document.addEventListener('DOMContentLoaded', function() {
    // Open To Dropdown functionality
    const openToMainBtn = document.getElementById('openToMainBtn');
    const openToDropdown = document.getElementById('openToDropdown');
    
    function toggleOpenToDropdown() {
        openToDropdown.classList.toggle('show');
    }
    
    if (openToMainBtn) {
        openToMainBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleOpenToDropdown();
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (openToDropdown && !openToDropdown.contains(e.target) && e.target !== openToMainBtn) {
            openToDropdown.classList.remove('show');
        }
    });

    // Create modal container with proper styling
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    modalContainer.style.display = 'none';
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '0';
    modalContainer.style.left = '0';
    modalContainer.style.width = '100%';
    modalContainer.style.height = '100%';
    modalContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modalContainer.style.zIndex = '1000';
    modalContainer.style.justifyContent = 'center';
    modalContainer.style.alignItems = 'center';
    document.body.appendChild(modalContainer);

    // Function to create an image upload box for an entry
    function createImageUploadBox(entryId) {
        return `
            <div class="modal-image-upload" data-entry-id="${entryId}" style="width:100px; height:100px; display:flex; align-items:center; justify-content:center; border:1px dashed #ccc; border-radius:8px; cursor:pointer; overflow:hidden; background:#fafbfc;">
                <img src="https://via.placeholder.com/100x100?text=Image" alt="Upload" style="max-width:100%; max-height:100%; object-fit:cover; display:none;" id="modalImagePreview-${entryId}">
                <span style="color:#888; font-size:12px;">Click to upload</span>
                <input type="file" accept="image/*" style="display:none;" id="modalImageInput-${entryId}">
            </div>
        `;
    }

    // Helper to add image upload logic for all image upload boxes in a modal
    function addImageUploadLogic(modalRoot) {
        modalRoot.querySelectorAll('.modal-image-upload').forEach(function(imageBox) {
            const entryId = imageBox.getAttribute('data-entry-id');
            const imageInput = imageBox.querySelector('input[type="file"]');
            const imagePreview = imageBox.querySelector('img');
            const span = imageBox.querySelector('span');
            
            imageBox.addEventListener('click', function(e) {
                if (e.target !== imageInput) imageInput.click();
            });
            
            imageInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(ev) {
                        imagePreview.src = ev.target.result;
                        imagePreview.style.display = 'block';
                        span.style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            });
        });
    }

    // Function to create modal
    function createModal(title, content) {
        modalContainer.innerHTML = `
            <div class="modal-overlay" style="width:100%; height:100%; display:flex; justify-content:center; align-items:center;">
                <div class="modal-content" style="background:white; padding:20px; border-radius:8px; width:80%; max-width:600px; max-height:80vh; overflow-y:auto;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                        <h2 style="margin:0;">${title}</h2>
                        <span class="close-modal" style="cursor:pointer; font-size:24px;">&times;</span>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer" style="margin-top:20px; display:flex; justify-content:flex-end; gap:10px;">
                        <button class="cancel-btn" style="padding:8px 16px; background:#f0f0f0; border:none; border-radius:4px; cursor:pointer;">Cancel</button>
                        <button class="save-btn" style="padding:8px 16px; background:#0073b1; color:white; border:none; border-radius:4px; cursor:pointer;">Save</button>
                    </div>
                </div>
            </div>
        `;
        
        addImageUploadLogic(modalContainer);
        
        // Add event listeners
        modalContainer.querySelector('.close-modal').addEventListener('click', closeModal);
        modalContainer.querySelector('.cancel-btn').addEventListener('click', closeModal);
        modalContainer.querySelector('.save-btn').addEventListener('click', saveModal);
        
        modalContainer.style.display = 'flex';
    }

    function closeModal() {
        modalContainer.style.display = 'none';
    }

    function saveModal() {
        alert('Changes saved!');
        closeModal();
    }

    // Function to safely add event listeners
    function addEditButtonListener(selector, callback) {
        // Try immediately
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener('click', callback);
            return;
        }
        
        // If not found, wait for potential dynamic loading
        const observer = new MutationObserver(function(mutations, obs) {
            const element = document.querySelector(selector);
            if (element) {
                element.addEventListener('click', callback);
                obs.disconnect();
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Add all edit button listeners
    addEditButtonListener('.about-section .edit-btn', function() {
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
                <!-- Rest of your about section form -->
            </form>
        `;
        createModal('Edit About Section', modalContent);
    });

    // Add similar listeners for other sections
    addEditButtonListener('.activity-section .edit-btn', function() {
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

    // Add listeners for all other sections similarly...
    // For each section you want to make editable, add a similar addEditButtonListener call

    // Example for awards section
    addEditButtonListener('.awards-section .edit-btn', function() {
        const entryId = 'awards-1';
        const modalContent = `
            <form class="modal-form">
                <div class="entry-row" style="display:flex; align-items:flex-start; gap:16px;">
                    ${createImageUploadBox(entryId)}
                    <div class="entry-fields" style="flex:1;">
                        <div class="form-section">
                            <div class="form-group">
                                <textarea placeholder="Key Accomplishments/ Major Projects"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Awards and Certifications">
                            </div>
                            <!-- Rest of awards form -->
                        </div>
                    </div>
                </div>
            </form>
        `;
        createModal('Edit Awards, Certifications, and Recognitions', modalContent);
    });

    // Add more sections as needed...
}); 