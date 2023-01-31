export const Feed = () => {
  console.log('entrando a vista de feed');
  const body = document.getElementById('body');
  const mainContainer = document.getElementById('main');
  const footerContainer = document.getElementById('footer');

  mainContainer.innerHTML = '';
  footerContainer.innerHTML = '';

  // alert('Welcome to <P💛werL>');
  const header = document.createElement('header');
  const logoSection = document.createElement('figure');
  const logo = document.createElement('img');
  const helloSection = document.createElement('div');
  const hello = document.createElement('p');
  const userName = document.createElement('p');
  const myPostSection = document.createElement('section');
  const myPostContainer = document.createElement('div');
  const myPost = document.createElement('textarea');
  const publishButton = document.createElement('button');
  const postsSection = document.createElement('section');
  const publishedPostContainer = document.createElement('div');
  const optionsContainer = document.createElement('div');
  const userPost = document.createElement('p');
  const menuIcon = document.createElement('div');
  const optionsMenu = document.createElement('ul');
  const postContent = document.createElement('div');
  const textContent = document.createElement('p');
  const dataContainer = document.createElement('div');
  const postDate = document.createElement('p');
  const likesContainer = document.createElement('div');
  const likesCounter = document.createElement('p');
  const likes = document.createElement('span');
  const logoutButton = document.createElement('div');

  header.appendChild(logoSection);
  header.appendChild(helloSection);
  logoSection.appendChild(logo);
  helloSection.appendChild(hello);
  helloSection.appendChild(userName);

  header.className = 'header-feed';

  logoSection.className = 'feed-section-logo';

  helloSection.className = 'feed-section-hello';

  logo.src = '../powerL-logo-removebg-preview.png';
  logo.className = 'logo-feed';

  hello.innerText = 'Hola,';
  hello.className = 'hello-feed';

  userName.id = 'userName';
  userName.className = 'userName-feed';
  userName.innerText = 'Beres';

  myPostSection.appendChild(myPostContainer);
  myPostContainer.appendChild(myPost);
  myPostContainer.appendChild(publishButton);

  myPostSection.className = 'section-myPost';

  myPostContainer.className = 'myPost-container';

  myPost.id = 'myPostTextArea';
  myPost.className = 'myPostTextArea';
  myPost.placeholder = '¡Hola mundo!';

  publishButton.className = 'publish-button';
  publishButton.id = 'publishButton';
  publishButton.innerText = 'Publicar';

  postsSection.appendChild(publishedPostContainer);

  publishedPostContainer.appendChild(optionsContainer);
  publishedPostContainer.appendChild(postContent);
  publishedPostContainer.appendChild(dataContainer);
  optionsContainer.appendChild(userPost);
  optionsContainer.appendChild(menuIcon);
  menuIcon.appendChild(optionsMenu);
  postContent.appendChild(textContent);
  dataContainer.appendChild(postDate);
  dataContainer.appendChild(likesContainer);
  likesContainer.appendChild(likesCounter);
  likesContainer.appendChild(likes);

  postsSection.className = 'section-postsPublished';

  publishedPostContainer.className = 'publishPost-container';
  publishedPostContainer.id = 'publishPost-container';

  optionsContainer.id = 'optionsContainer';
  optionsContainer.className = 'options-container';

  userPost.id = 'userpost';
  userPost.className = 'post-username';
  userPost.innerText = 'Tu';

  menuIcon.className = 'fa-solid fa-ellipsis menu-icon';

  optionsMenu.id = 'optionsmenu';
  optionsMenu.className = 'options-menu';
  optionsMenu.innerHTML = '<li class="option" id="edit">editar</li><li class="option" id="delete">elimiar</li>';

  postContent.id = 'postContent';
  postContent.className = 'post-content';

  textContent.id = 'textContent';
  textContent.className = 'text-content';
  textContent.innerText = 'Hola mundo, este es un post de ejemplo';

  dataContainer.id = 'datacontainer';
  dataContainer.className = 'data-container';

  postDate.id = 'date';
  postDate.className = 'post-date';
  postDate.innerText = 'Hoy a las 07:30';

  likesContainer.id = 'likesContainer';
  likesContainer.className = 'likes-container';

  likesCounter.id = 'likesCounter';
  likesCounter.className = 'likes-counter';
  likesCounter.innerText = '2';

  likes.innerHTML = '<i class="fa-solid fa-heart"></i>';
  likes.id = 'likes';
  likes.className = 'likes';

  mainContainer.appendChild(myPostSection);
  mainContainer.appendChild(postsSection);
  footerContainer.appendChild(logoutButton);

  logoutButton.id = 'logout';
  logoutButton.className = 'logout-button';
  logoutButton.innerHTML = '<i class="fa-solid fa-right-from-bracket icon-logout"></i>';

  body.appendChild(header);
  body.appendChild(mainContainer);
  body.appendChild(footerContainer);

  body.className = 'feed-body';
  mainContainer.className = 'feed-main';
  footerContainer.className = 'feed-footer';
};
