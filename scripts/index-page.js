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
    let name = document.createElement("h3");
    let timestamp = document.createElement("p");
    let commentText = document.createElement("p");
  
    name.textContent = comment.name;
    timestamp.textContent = comment.timestamp;
    commentText.textContent = comment.text;
  
    commentDiv.appendChild(name);
    commentDiv.appendChild(timestamp);
    commentDiv.appendChild(commentText);
  
    commentDiv.style.display = "flex";
    commentDiv.style.flexDirection = "column";
    commentDiv.style.alignItems = "flex-start";
    commentDiv.style.width = "100%";

    
  
    document.getElementById("comment-section").appendChild(commentDiv);
  }
  
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    showComments(comment);
  }