
async function updatePost(){
  event.preventDefault();

  const postId = window.location.pathname.split('/').pop();
  const post_body = document.getElementById('postBodyInput').value;

  const response = await fetch(`/api/posts/${postId}`,{
    method:"PUT",
    body: JSON.stringify({post_body}),
    headers: {
      'Content-Type': 'application/json'
    }
  })

    if(response.ok){
      // TODO: replace alert with Bootstrap modal
      alert("update successful");
      document.location.replace('/dashboard');
    }else{
      console.log(response);
      // TODO: replace alert with Bootstrap modal
      alert('update failed');
    }
}

async function deletePost(){
  event.preventDefault();

  const postId = window.location.pathname.split('/').pop();

  const response = await fetch(`/api/posts/${postId}`,{method:"DELETE"});

  if(response.ok){
    alert("Delete successful");
    document.location.replace('/dashboard');
  }else{
    alert("delete failed");
    console.log(response);s
  }
}

document.getElementById('updatePostBtn').addEventListener("click",updatePost);
document.getElementById('deletePostBtn').addEventListener("click",deletePost);
