const postId = new URL(location.href).searchParams.get('id');

// Fetch post

async function fetchFunction() {
  let query1 = await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
    let query2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())

return[query1,query2]}





         fetchFunction()
             .then(([post, comments]) => {

                 let postDiv = document.createElement('div');
                 postDiv.setAttribute('class','postDiv')
                 for (let postDetail in post) {
                     let p = document.createElement('p');
                     p.setAttribute('class','p1')
                     p.innerText = `${postDetail}: ${post[postDetail]};`
                     postDiv.appendChild(p);
                 }
                 document.body.appendChild(postDiv);



                  let container=document.createElement('div')
                 container.setAttribute('class','container')
                 for (let comment of comments) {

                     let div = document.createElement('div');
                     div.setAttribute('class','commDiv')
                     let p = document.createElement('p');
                     p.setAttribute('class','p2');
                     p.innerText = `${comment.id} ${comment.name} ${comment.email};`
                     div.appendChild(p)
                     container.appendChild(div);
                 }
                 document.body.appendChild(container);


             });



