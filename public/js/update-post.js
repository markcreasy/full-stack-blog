
async function updatePost(){
  event.preventDefault();

  const postId = window.location.pathname.split('/').pop();
  const post_body = document.getElementById('postBodyInput').value;

  fetch(`/api/posts/${postId}`,{
    method:"PUT",
    body: JSON.stringify({post_body}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if(response.ok){
      // TODO: replace alert with Bootstrap modal
      alert("update successful");
      document.location.replace('/dashboard');
    }
  }).catch(err => {
    console.log(err);
    // TODO: replace alert with Bootstrap modal
    alert('update failed');
  })
}

document.getElementById('updatePostBtn').addEventListener("click",updatePost);
