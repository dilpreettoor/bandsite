

  const showComments = (comment) => {
    let commentDiv = document.createElement("div");
    let commentTop = document.createElement("div");
    let name = document.createElement("h3");
    let timestamp = document.createElement("p");
    let commentText = document.createElement("p");
  
    name.textContent = comment.name;
    const dateObj = new Date(comment.timestamp);
    const formattedDated = dateObj.toLocaleDateString();
    timestamp.textContent = formattedDated;
    commentText.textContent = comment.comment;
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
  
  

  const postComment = (e) => {
    e.preventDefault();
  
    const nameInput = document.querySelector("#name");
    const commentInput = document.querySelector("#comment");
  
    const newComment = {
      name: nameInput.value,
      comment: commentInput.value,
    };
  
    axios
      .post(`https://project-1-api.herokuapp.com/comments?api_key=dilpreetbandsite`, newComment)
      .then((response) => {
        showComments(response.data);
        axios
          .get("https://project-1-api.herokuapp.com/comments?api_key=dilpreetbandsite")
          .then((response) => {
            const comments = response.data.sort((a, b) => b.timestamp - a.timestamp);
            const commentSection = document.getElementById("comment-section");
            commentSection.innerHTML = "";
            comments.forEach((comment) => {
              showComments(comment);
            });
          })
          .catch((error) => {
            console.log("Woops: " + error.message);
          });
      })
      .catch((error) => {
        console.log("Woops: " + error.message);
      });
  
    // Clear input fields
    nameInput.value = "";
    commentInput.value = "";
  };
  
  

  const showApi = axios.get(
    "https://project-1-api.herokuapp.com/comments?api_key=dilpreetbandsite"
  );
  showApi.then((response) => {
    const comments = response.data.sort(
      (a, b) => b.timestamp - a.timestamp
    );
      const commentSection = document.getElementById("comment-section");
      commentSection.innerHTML = "";

    console.log(comments);
    comments.forEach((comment) => {
      showComments(comment);

    });
    
  });
  showApi.catch((error) => {
    console.log("Woops: " + error.message);
  });



  document.querySelector('.comment__form').addEventListener('submit', postComment);
