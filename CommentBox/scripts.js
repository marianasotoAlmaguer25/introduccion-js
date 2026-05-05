
const addBtn = document.getElementById('add-btn');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');

addBtn.addEventListener('click', () => {
    const commentText = commentInput.value;

    if (commentText.trim() === "") {
        alert("Please enter a comment!");
        return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment-card');

    const timestamp = new Date().toLocaleString('en-US');


    commentDiv.innerHTML = `
        <p>${commentText}</p>
        <span class="timestamp">${timestamp}</span>
        <button class="delete-btn">Delete</button>
    `;


    commentDiv.querySelector('.delete-btn').addEventListener('click', () => {
        commentDiv.remove();
    });

    commentList.appendChild(commentDiv);
    commentInput.value = "";
});