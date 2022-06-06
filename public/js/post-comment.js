

async function submitNewComment(){
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

  const response = await fetch('/api/comments',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(jsonData)
  })

  if(response.ok){
    console.log("comment added successfully");
    location.reload();
  }else{
    alert("failed to add new comment");
    console.log(response);
  }

}

document.getElementById('newCommentSubmit').addEventListener('click',submitNewComment);
