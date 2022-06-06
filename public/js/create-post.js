
async function createNewPost(){
  event.preventDefault();

  // get comment textarea
  const postTitle = document.getElementById('postTitleInput').value;
  const postBody = document.getElementById('postBodyInput').value;
  // create json string
  const jsonData = {
    title:postTitle,
    post_body:postBody
  };

  console.log(JSON.stringify(jsonData));

  const response = await fetch('/api/posts',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(jsonData)
  })

  console.log(response);

  if(response.ok){
    alert("Post Added Successfully!");
    location.reload();
  }else{
    alert("Post add failed");
  }

}

document.getElementById('addPostBtn').addEventListener('click',createNewPost);
