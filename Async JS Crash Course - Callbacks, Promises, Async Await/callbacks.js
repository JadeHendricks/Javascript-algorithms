const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

//THE PROBLEM
//*******************************************************************************************************************************/

//GetsPosts and writes it to the dom over the course of 1 second
// function getPosts() {

//   setTimeout(() => {

//     let output = '';
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;

//   }, 1000);

// }


//This takes too long to happen so it happens after the getPosts function and resulting in it now being push to the post array
// function createPost(post) {

//   setTimeout (() => {
//     posts.push(post);
//   }, 2000); 

// }

// createPost({title: 'Post Three', body: 'This is post 3'});
// getPosts();



//THE CALLBACK SOLUTION
function getPosts() {

  setTimeout(() => {

    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;

  }, 1000);

}

//it can be called anything, but we add a callback as callback as it is best practise
function createPost(post, callback) {

  setTimeout (() => {
    posts.push(post);
    //we want to use the callback right after we do something
    //then all we have to do it make the getPosts function the callback so that it runs right after it is pushed and not afterwards
    callback();
  }, 2000); 

}

createPost({title: 'Post Three', body: 'This is post 3'}, getPosts);