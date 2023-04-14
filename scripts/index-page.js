let comments = [
    {
      name: "Connor Walton",
      timestamp: "02/17/2021",
      text: "This is art. This is inexpicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Emilie Beach",
      timestamp: "01/09/2021",
      text: "This is art."
    },
    {
      name: "Miles Acosta",
      timestamp: "12/20/2020",
      text: "This is art."
    }
  ];

  const showComments = (comment) => {
    let commentDiv = document.createElement("div");
    let name = document.createElement("h3");
    let timestamp = document.createElement("p");
    let commentText = document.createElement("p");

    name.textContent = comment.name;
    timestamp.textContent = comment.timestamp;
    commentText.textContent = comment.commentText;

    commentContainer.appendChild(name);
    commentContainer.appendChild(timestamp);
    commentContainer.appendChild(commentText);

    document.getElementById("comment").appendChild(commentDiv);
  }