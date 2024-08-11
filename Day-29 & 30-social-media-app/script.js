// Updated JavaScript code with new functionalities

// Declare global variables
let posts = [];
const MAX_POSTS = 50;

document.addEventListener("DOMContentLoaded", () => {
    // Initial setup
    const loginForm = document.getElementById("login-form");
    const postSection = document.getElementById("post-section");
    const loginSection = document.getElementById("login-section");
    const postForm = document.getElementById("post-form");
    const postsFeed = document.getElementById("posts-feed");
    const fab = document.getElementById("create-post-fab");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const signupLink = document.getElementById("signup-link");
    const signupForm = document.getElementById("signup-form");
    const loginLink = document.getElementById("login-link");
    const logoutButton = document.getElementById("logout-button");
    const profileIcon = document.querySelector('.nav-icon.profile');
    const notificationsIcon = document.querySelector('.nav-icon.notifications');

    let loggedInUser = localStorage.getItem("loggedInUser");

    loadPosts();

    if (loggedInUser) {
        loginSection.classList.add("hidden");
        postSection.classList.remove("hidden");
        logoutButton.classList.remove("hidden");
    } else {
        logoutButton.classList.add("hidden");
    }

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        loggedInUser = null;
        loginSection.classList.remove("hidden");
        postSection.classList.add("hidden");
        logoutButton.classList.add("hidden");
        postsFeed.innerHTML = "";
        alert("You have been logged out.");
    });

    profileIcon.addEventListener("click", () => {
        if (loggedInUser) {
            alert(`Showing profile of ${loggedInUser}`);
        } else {
            alert("Please log in to view profile.");
        }
    });

    notificationsIcon.addEventListener("click", () => {
        alert("No new notifications.");
    });

    signupLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("signup-confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.some(user => user.username === username)) {
            alert("Username already exists. Please choose a different one.");
            return;
        }

        const profileImageUrl = `https://robohash.org/${username}?set=set1`;
        users.push({ username, email, password, profileImageUrl });
        localStorage.setItem("users", JSON.stringify(users));

        // Log the user in
        localStorage.setItem("loggedInUser", username);
        loggedInUser = username;
        loginSection.classList.add("hidden");
        postSection.classList.remove("hidden");
        loadPosts();

        alert("Account created successfully!");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            loggedInUser = username;
            localStorage.setItem("loggedInUser", username);
            loginSection.classList.add("hidden");
            postSection.classList.remove("hidden");
            loadPosts();
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        try {
            const content = document.getElementById("post-content").value;
            const imageFile = document.getElementById("post-image").files[0];

            if (content || imageFile) {
                const post = {
                    username: loggedInUser || "Anonymous",
                    content: content,
                    timestamp: new Date().toLocaleString(),
                    likes: 0,
                    comments: [],
                    likedBy: []
                };

                if (imageFile) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        post.imageUrl = event.target.result;
                        addPost(post);
                    };
                    reader.onerror = (error) => {
                        console.error("Error reading file:", error);
                    };
                    reader.readAsDataURL(imageFile);
                } else {
                    addPost(post);
                }

                postForm.reset();
                const previewContainer = document.querySelector(".image-preview-container");
                if (previewContainer) {
                    previewContainer.remove();
                }
            } else {
                console.log("No content or image to post");
            }
        } catch (error) {
            console.error("Error in post submission:", error);
        }
    });

    function addPost(post) {
        posts.unshift(post);
        if (posts.length > MAX_POSTS) {
            posts = posts.slice(0, MAX_POSTS);
        }
        savePosts();
        renderPosts();
    }

    function savePosts() {
        try {
            localStorage.setItem("posts", JSON.stringify(posts));
        } catch (e) {
            console.error("Failed to save posts to localStorage:", e);
            if (e.name === "QuotaExceededError") {
                posts = posts.slice(0, posts.length / 2);
                localStorage.clear();
                localStorage.setItem("posts", JSON.stringify(posts));
            }
        }
    }

    function loadPosts() {
        try {
            const savedPosts = localStorage.getItem("posts");
            if (savedPosts) {
                posts = JSON.parse(savedPosts);
                renderPosts();
            }
        } catch (e) {
            console.error("Failed to load posts from localStorage:", e);
            posts = [];
        }
    }

    window.likePost = (index) => {
        const post = posts[index];
        const userHasLiked = post.likedBy.includes(loggedInUser);

        if (userHasLiked) {
            alert("You have already liked this post.");
        } else {
            post.likes++;
            post.likedBy.push(loggedInUser);
            notifyUser("New like", post);
            savePosts();
            renderPosts();
        }
    };

    window.deletePost = function (index) {
        if (confirm("Are you sure you want to delete this post?")) {
            if (posts[index].username === loggedInUser) {
                posts.splice(index, 1);
                savePosts();
                renderPosts();
            } else {
                alert("You are not allowed to delete this post.");
            }
        }
    };

    function notifyUser(action, post) {
        const notification = `${action} on your post: "${post.content}"`;
        alert(notification);
    }


    function renderPosts() {
        postsFeed.innerHTML = "";

        posts.forEach((post, index) => {
            const profileImageUrl = `https://robohash.org/${post.username}?set=set1`;

            const postElement = document.createElement("div");
            postElement.className = "post animated fadeIn";

            postElement.innerHTML = `
                <div class="post-header">
                    <img src="${profileImageUrl}" alt="Profile Picture" class="profile-pic">
                    <div class="post-info">
                        <div class="username">${post.username}</div>
                        <div class="timestamp">${post.timestamp}</div>
                    </div>
                    ${loggedInUser === post.username ? `
                    <button class="btn-delete" onclick="deletePost(${index})">
                        <i class="fas fa-trash"></i>
                    </button>` : ''}
                </div>
                <div class="post-content">
                    ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post Image" class="post-image">` : ""}
                    <p>${post.content}</p>
                </div>
                <div class="post-actions">
                    <button onclick="likePost(${index})" class="btn-action">
                        <i class="fas fa-heart"></i> <span>${post.likes}</span>
                    </button>
                    <button onclick="toggleComments(${index})" class="btn-action">
                        <i class="fas fa-comment"></i> <span>${post.comments.length}</span>
                    </button>
                     <button onclick="sharePost(${index})" class="btn-action">
                        <i class="fas fa-share"></i> Share
                    </button>         
                </div>
                <div class="comments hidden">
                    <input type="text" placeholder="Add a comment" onkeypress="addComment(event, ${index})">
                    ${post.comments.map(comment => `
                        <div class="comment">
                            <img src="https://robohash.org/${comment.username}?set=set1" alt="Profile Picture" class="profile-pic">
                            <div class="comment-content">
                                <span class="username">${comment.username}</span>
                                <p>${comment.text}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            postsFeed.appendChild(postElement);
        });
    }


    window.toggleComments = (index) => {
        const commentSections = document.querySelectorAll('.comments');
        commentSections[index].classList.toggle('hidden');
    };

    window.addComment = (e, index) => {
        if (e.key === "Enter") {
            const commentText = e.target.value;
            if (commentText) {
                posts[index].comments.push({
                    username: loggedInUser || "Anonymous",
                    text: commentText
                });
                savePosts();
                renderPosts();
            }
        }
    };

    window.sharePost = (index) => {

        const post = posts[index];
        const postContent = post.content;
        const postUrl = window.location.href;

        const shareData = {
            title: 'Check out this post on SocialApp!',
            text: postContent,
            url: postUrl
        };

        if (navigator.share) {

            navigator.share(shareData)
                .then(() => console.log('Post shared successfully!'))
                .catch((error) => console.error('Error sharing the post:', error));
        } else if (navigator.clipboard) {

            navigator.clipboard.writeText(postUrl)
                .then(() => alert('Post URL copied to clipboard!'))
                .catch((error) => console.error('Failed to copy URL:', error));
        } else {

            alert('Sharing is not supported in this browser.');
        }
    };

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const icon = darkModeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    });

    fab.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById("post-content").focus();
    });

    const postImage = document.getElementById("post-image");
    postImage.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = document.createElement("img");
                img.src = event.target.result;
                img.className = "image-preview";
                const previewContainer = document.createElement("div");
                previewContainer.className = "image-preview-container";
                previewContainer.appendChild(img);
                postForm.insertBefore(previewContainer, postForm.querySelector(".post-options"));
            };
            reader.readAsDataURL(file);
        }
    });
});
