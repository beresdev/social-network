export const Feed = () => {
  console.log('entrando a vista de feed');
  const body = document.getElementById('body');
  const mainContainer = document.getElementById('main');
  const footerContainer = document.getElementById('footer');

  mainContainer.innerHTML = '';
  footerContainer.innerHTML = '';

  alert('Welcome to <P💛werL>');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const hello = document.createElement('p');
  const userName = document.createElement('p');
  const myPostSection = document.createElement('section');
  const myPostContainer = document.createElement('div');
  const myPost = document.createElement('textarea');
  const publishButton = document.createElement('button');
  const postsSection = document.createElement('section');
  const publishedPostContainer = document.createElement('div');
  const userPost = document.createElement('p');
  const postContent = document.createElement('div');
  const textContent = document.createElement('div');
  const postDate = document.createElement('p');
  const deletePost = document.createElement('div');
  const editPost = document.createElement('div');
  const likesCounter = document.createElement('span');
  const likes = document.createElement('span');
  const logoutButton = document.createElement('div');

  header.appendChild(logo);
  header.appendChild(hello);
  header.appendChild(userName);

  logo.src = '../powerL-logo-removebg-preview.png';
  logo.className = 'logo-feed';

  hello.innerText = 'Hola ,';
  hello.className = 'hello-feed';

  userName.id = 'userName';
  userName.className = 'userName-feed';

  myPostSection.appendChild(myPostContainer);
  myPostContainer.appendChild(myPost);
  myPostContainer.appendChild(publishButton);

  myPostSection.className = 'section-myPost';

  myPostContainer.className = 'myPost-container';

  myPost.id = 'myPostTextArea';
  myPost.className = 'myPostTextArea';
  myPost.placeholder = '¡Hola mundo!';

  publishButton.className = 'publish-button';
  publishButton.id = 'publishButton'
  publishButton.innerText = 'Publicar';

  postsSection.appendChild(publishedPostContainer);
  publishedPostContainer.appendChild(userPost);
  publishedPostContainer.appendChild(postContent);
  postContent.appendChild(textContent);
  postContent.appendChild(likesCounter);
  postContent.appendChild(likes);
  publishedPostContainer.appendChild(postDate);
  publishedPostContainer.appendChild(deletePost);
  publishedPostContainer.appendChild(editPost);

  postsSection.className = 'section-postsPublished';

  publishedPostContainer.className = 'publishPost-container';
  publishedPostContainer.id = 'publishPost-container';

  userPost.className = 'username';
  userPost.id = 'username'

  postContent.id = 'postContent';
  postContent.className = 'post-content';

  textContent.id = 'textContent';
  textContent.className = 'text-content';

  likesCounter.id = 'likesCounter';
  likesCounter.className = 'likes-counter';

  likes.innerHTML = '<i class="fa-solid fa-heart"></i>';
  likes.id = 'likes';
  likes.className = 'likes'

  postDate.id = 'date';
  postDate.className = 'post-date';

  deletePost.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deletePost.id = 'deletePost';
  deletePost.className = 'delete-post';

  editPost,innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
  editPost.id = 'editPost';
  editPost.className = 'edit-post';

  mainContainer.appendChild(header);
  mainContainer.appendChild(myPostSection);
  mainContainer.appendChild(postsSection);

  footerContainer.appendChild(logoutButton);

  logoutButton.id = 'logout';
  logoutButton.className = 'logout-button';
  logoutButton.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>'

  body.appendChild(mainContainer);
  body.appendChild(footerContainer);
};
