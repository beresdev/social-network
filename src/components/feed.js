import { logout } from '../firebase/firebaseFunctions.js';
import { auth, onAuthStateChanged } from '../firebase/firebaseInit.js';
import { addPost, onGetPosts, deletePost, getPost, updatePost } from '../firebase/firestoreFunctions.js';

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
  const myPostSection = document.createElement('section');
  const myPostContainer = document.createElement('div');
  const myPost = document.createElement('textarea');
  const publishButton = document.createElement('button');
  const postsSection = document.createElement('section');
  const publishedPostContainer = document.createElement('div');
  const logoutButton = document.createElement('div');
  let usid = '';
  let usname = ''; 

  header.appendChild(logoSection);
  header.appendChild(helloSection);
  logoSection.appendChild(logo);

  header.className = 'header-feed';

  logoSection.className = 'feed-section-logo';

  helloSection.className = 'feed-section-hello';

  logo.src = '../powerL-logo-removebg-preview.png';
  logo.className = 'logo-feed';

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
  postsSection.className = 'section-postsPublished';
  postsSection.id = 'published-posts';

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
  
  const contentT = document.getElementById('myPostTextArea');
  const publishB = document.getElementById('publishButton');
  const publishedPosts = document.getElementById('published-posts');
  const logoutB = document.getElementById('logout');
  let editStatus = false;
  let docId = '';
  
  onAuthStateChanged(auth, (user) => {
    if(user) {
      usid = user.uid;
      usname = user.displayName;

      console.log('usuaria: ', user.uid, ' logeada -> true', 'username: ', user.displayName);
      helloSection.innerHTML =
      `<p class="hello-feed">Hola,</p>
        <p id="userName" class="userName-feed">${user.displayName}</p>` ;
        
        onGetPosts((querySnapshot) => {
          let html = '';
          let menuOptions = '';
          querySnapshot.forEach((doc) => {
            const post = doc.data()
            if(usid === post.user) {

              menuOptions = `
              <div class="fa-solid fa-ellipsis menu-icon">
                <ul id="optionsmenu" class="options-menu">
                  <li class="option op-edit" id="edit" data-id ='${doc.id}'>editar</li>
                  <li class="option op-delete" id="delete" data-id ='${doc.id}'>elimiar</li>
                </ul>
              </div>
              `;
            } else {
              menuOptions = '';
            }
            console.log(post);
            html += `
            <div class="publishPost-container" id="publishPost-container">
            <div id="optionsContainer" class="options-container">
              <p id="userpost" class="post-username">${post.username}</p>
              ${menuOptions}
            </div>
            <div id="postContent" class="post-content">
              <p id="textContent" class="text-content">${post.content}</p>
            </div>
            <div id="datacontainer" class="data-container">
              <p id="date" class="post-date">${post.date}</p>
              <div id="likesContainer" class="likes-container">
                <p id="likesCounter" class="likes-counter">2</p>
                <span id="likes" class="likes">
                  <i class="fa-solid fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
            `;
            //console.log(post);
          });
          publishedPosts.innerHTML = html;
          
          const btnDelete = publishedPosts.querySelectorAll('.op-delete');
          btnDelete.forEach(btn => {
            btn.addEventListener('click', ({target: { dataset }}) => {
              if (confirm('¿Segura que deseas eliminar el post?')) 
              {
                deletePost(dataset.id);
              }
            })
          })

          const btnEdit = publishedPosts.querySelectorAll('.op-edit');
          btnEdit.forEach((btn) => {
            btn.addEventListener('click', async ({target: {dataset}}) => {
              const doc = await getPost(dataset.id)
              const post = doc.data();
              contentT.value = post.content;
              editStatus = true;
              docId = doc.id;
              publishButton.innerText = 'Actualizar';
            })
          })
        }) 

    } else {
      console.log('usuaria no logeada')
      mainContainer.innerHTML = '';
      body.removeChild(header);
      logout();
      //alert("Inicia sesión para ver el feed y publicar")
    }
  });

  publishB.addEventListener('click', (e) => {
    //e.preventDefault();
    const d = new Date();
    const date = d.toDateString();
    if(editStatus) {
      updatePost(docId, {content: contentT.value})
      publishButton.innerText = 'Publicar';
      console.log('updating')
    } else {
      addPost(date,usid,usname,contentT.value);
    }
    contentT.value = "";
    //alert('Post guardado en Firestore');
  });

  logoutB.addEventListener('click', (e) => {
    e.preventDefault();
    if(confirm('¿Segura que quieres cerrar sesión?'))
    {
      logout();
    }
  });
};
