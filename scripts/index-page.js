let comments = [
    {
      name: "Connor Walton",
      timestamp: "02/17/2021",
      text: "This is art. This is inexpicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Emilie Beach",
      timestamp: "01/09/2021",
      text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
      name: "Miles Acosta",
      timestamp: "12/20/2020",
      text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];

  const showComments = (comment) => {
    let commentDiv = document.createElement("div");
    let commentTop = document.createElement("div");
    let name = document.createElement("h3");
    let timestamp = document.createElement("p");
    let commentText = document.createElement("p");
  
    name.textContent = comment.name;
    timestamp.textContent = comment.timestamp;
    commentText.textContent = comment.text;
    commentTop.appendChild(name);
    commentTop.appendChild(timestamp);
    commentDiv.appendChild(commentTop);
    commentDiv.appendChild(commentText);
    commentDiv.style.display = "flex";
    commentDiv.style.flexDirection = "column";
    commentDiv.style.alignItems = "flex-start";
    commentDiv.style.width = "100%";
    commentTop.style.display = "flex";
    commentTop.style.flexDirection = "row";
    commentTop.style.justifyContent = "space-between";
    commentTop.style.width = "100%";
    commentText.style.width = "100%";
    name.style.margin = "0";
    timestamp.style.marginTop = "1.4rem";
    document.getElementById("comment-section").appendChild(commentDiv);
  };
  
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    showComments(comment);
  }
  

  const postComment = (e) => {
    e.preventDefault();
  
    const nameInput = document.querySelector('#name');
    const commentInput = document.querySelector('#comment');
    const commentSection = document.querySelector('#comment-section');
  
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    const newComment = {
      name: nameInput.value,
      timestamp: formattedDate,
      text: commentInput.value
    };
  
    comments.push(newComment);
  
    const commentDiv = document.createElement("div");
    const commentTop = document.createElement("div");
    const name = document.createElement("h3");
    const timestamp = document.createElement("p");
    const commentText = document.createElement("p");
  
    name.textContent = newComment.name;
    timestamp.textContent = newComment.timestamp;
    commentText.textContent = newComment.text;
    commentTop.appendChild(name);
    commentTop.appendChild(timestamp);
    commentDiv.appendChild(commentTop);
    commentDiv.appendChild(commentText);
    commentDiv.style.display = "flex";
    commentDiv.style.flexDirection = "column";
    commentDiv.style.alignItems = "flex-start";
    commentDiv.style.width = "100%";
    commentTop.style.display = "flex";
    commentTop.style.flexDirection = "row";
    commentTop.style.justifyContent = "space-between";
    commentTop.style.width = "100%";
    commentText.style.width = "100%";
    name.style.margin = "0";
    timestamp.style.marginTop = "1.4rem";
  
    // Append new comment to comment section
    commentSection.appendChild(commentDiv);
  
    // Clear input fields
    nameInput.value = '';
    commentInput.value = '';
  };

  document.querySelector('.comment__form').addEventListener('submit', postComment);
