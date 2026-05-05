
const addBtn = document.getElementById('add-btn');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');

addBtn.addEventListener('click', () => {
    const text = commentInput.value;


    if (text.trim() === "") {
        alert("Please write something first!");
        return;
    }


    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');

    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    commentCard.innerHTML = `
        <p class="comment-text">${text}</p>
        <small class="timestamp">Published on: ${dateString} at ${timeString}</small>
        <button class="delete-btn">Delete</button>
    `;


    commentCard.querySelector('.delete-btn').addEventListener('click', () => {
        commentCard.remove();
    });

    commentList.prepend(commentCard);


    commentInput.value = "";
});