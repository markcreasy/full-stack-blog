

function submitNewComment(){
  event.preventDefault();

  // get post id
  const post_id = window.location.pathname.split('/').pop();
  // get comment textarea
  const commentText = document.getElementById('commentInput').value;
  // create json string
  const jsonData = {
    comment_text:commentText,
    post_id:post_id
  };

  console.log(JSON.stringify(jsonData));

  fetch('/api/comments',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => response.json())
  .then(data => {
    if(data.success){
      console.log("comment added successfully");
      location.reload();
    }else{
      alert("failed to add new comment");
      console.log("comment post data:",data);
    }
  }).catch((err) => {
    console.log(err);
  })

}

document.getElementById('newCommentSubmit').addEventListener('click',submitNewComment);
