// 1. Select the elements from the HTML
const addBtn = document.getElementById('add-btn');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');

// 2. Listen for the click event
addBtn.addEventListener('click', () => {
    const text = commentInput.value;

    // Validation: Don't allow empty comments
    if (text.trim() === "") {
        alert("Please write something first!");
        return;
    }

    // 3. Create a new div for the comment
    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');

    // 4. Generate Date and Time
    const now = new Date();
    const timestamp = now.toLocaleDateString() + " at " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 5. Fill the card with content
    commentCard.innerHTML = `
        <p class="comment-text">${text}</p>
        <span class="timestamp">${timestamp}</span>
        <button class="delete-btn">Delete</button>
    `;

    // 6. Add functionality to the new Delete button
    commentCard.querySelector('.delete-btn').addEventListener('click', () => {
        commentCard.remove();
    });

    // 7. Inject the comment into the list (at the top)
    commentList.prepend(commentCard);

    // 8. Clear the textarea
    commentInput.value = "";
});