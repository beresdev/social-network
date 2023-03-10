import { logout } from '../lib/index.js';
import { auth, onAuthStateChanged } from '../firebase/firebaseInit.js';
import { serverTimestamp } from '../firebase/firestoreInit.js';
import {
  addPost,
  onGetPosts,
  deletePost,
  getPost,
  updatePost,
} from '../firebase/firestoreFunctions.js';

export const Feed = () => {
  const body = document.getElementById('body');
  const mainContainer = document.getElementById('main');
  const footerContainer = document.getElementById('footer');

  mainContainer.innerHTML = '';
  footerContainer.innerHTML = '';

  const header = document.createElement('header');
  const logoSection = document.createElement('figure');
  const logo = document.createElement('img');
  const helloSection = document.createElement('div');
  const myPostSection = document.createElement('section');
  const myPostContainer = document.createElement('div');
  const myPost = document.createElement('textarea');
  const publishButton = document.createElement('button');
  const postsSection = document.createElement('section');
  const inputEdit = document.createElement('input');
  const buttonUpdate = document.createElement('button');
  const buttonCancelUpdate = document.createElement('button');
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

  buttonUpdate.innerText = 'Listo';
  buttonUpdate.id = 'updateComent';
  buttonUpdate.className = 'update-button';

  buttonCancelUpdate.innerText = 'X';
  buttonCancelUpdate.id = 'cancelUpdate';
  buttonCancelUpdate.className = 'cancel-update';

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
  let docId = '';
  let likedByA = [];
  let counter = 0;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      usid = user.uid;
      usname = user.displayName;

      helloSection.innerHTML = `<p class='hello-feed'>Hola,</p>
        <p id='userName' class='userName-feed'>${user.displayName}</p>`;

      onGetPosts((querySnapshot) => {
        let html = '';
        let menuOptions = '';
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          if (usid === post.user) {
            menuOptions = `
              <div class='fa-solid fa-ellipsis menu-icon'>
                <ul id='optionsmenu' class='options-menu'>
                  <li class='option op-edit' id='edit' data-id ='${doc.id}'>editar</li>
                  <li class='option op-delete' id='delete' data-id ='${doc.id}'>elimiar</li>
                </ul>
              </div>
              `;
          } else {
            menuOptions = '';
          }
          html += `
            <div class='publishPost-container' id='publishPost-container'>
            <div id='optionsContainer' class='options-container'>
              <p id='userpost' class='post-username'>${post.username}</p>
              ${menuOptions}
            </div>
            <div id='${doc.id}' class='post-content'>
              <p class='text-content' value = '${post.content}'>${post.content}</p>
            </div>
            <div id='datacontainer' class='data-container'>
              <p id='date' class='post-date'>${post.date}</p>
              <div id='likesContainer' class='likes-container'>
                <p id='likesCounter' class='likes-counter'>${post.likes}</p>
                <span id='likes' class='likes'>
                  <i class='fa-solid fa-heart' data-id ='${doc.id}'></i>
                </span>
              </div>
            </div>
          </div>
            `;
        });
        publishedPosts.innerHTML = html;

        const btnDelete = publishedPosts.querySelectorAll('.op-delete');
        btnDelete.forEach((btn) => {
          btn.addEventListener('click', ({ target: { dataset } }) => {
            if (confirm('¿Segura que deseas eliminar el post?')) { /* eslint-disable-line */
              deletePost(dataset.id);
            }
          });
        });

        const btnEdit = publishedPosts.querySelectorAll('.op-edit');
        btnEdit.forEach((btn) => {
          btn.addEventListener('click', async ({ target: { dataset } }) => {
            const doc = await getPost(dataset.id);
            const post = doc.data();
            docId = doc.id;
            const postEdit = document.getElementById(doc.id);
            inputEdit.value = post.content;
            postEdit.innerHTML = '';
            postEdit.appendChild(inputEdit);
            postEdit.appendChild(buttonUpdate);
            postEdit.appendChild(buttonCancelUpdate);

            const btnUpdate = document.getElementById('updateComent');
            btnUpdate.addEventListener('click', () => {
              const d = new Date();
              const date = d.toDateString();
              if (inputEdit.value.trim() !== '') {
                updatePost(
                  docId,
                  {
                    createdAt: serverTimestamp(),
                    date: date, /* eslint-disable-line */
                    content: inputEdit.value,
                  },
                );
              }
            });
            const btnCancel = document.getElementById('cancelUpdate');
            btnCancel.addEventListener('click', () => {
              postEdit.innerHTML = `<p class="text-content" value="que tal editado">${post.content}</p>`;
            });
          });
        });

        const btnLike = publishedPosts.querySelectorAll('.likes');
        btnLike.forEach((btn) => {
          btn.addEventListener('click', async ({ target: { dataset } }) => {
            const doc = await getPost(dataset.id);
            const post = doc.data();
            docId = doc.id;
            likedByA = post.likedBy;
            if (likedByA.includes(usid)) {
              likedByA = likedByA.filter((item) => item !== usid);
            } else {
              likedByA.push(usid);
            }
            counter = likedByA.length;
            updatePost(docId, { likedBy: likedByA, likes: counter });
          });
        });
      });
    } else {
      console.log('usuaria no logeada');
      mainContainer.innerHTML = '';
      body.removeChild(header);
      logout();
    }
  });

  publishB.addEventListener('click', () => {
    const d = new Date();
    const date = d.toDateString();
    if (contentT.value.trim() !== '') {
      addPost(date, usid, usname, contentT.value);
      contentT.value = '';
    } else {
      alert('Escribe algo para compartir');
    }
  });

  logoutB.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('¿Segura que quieres cerrar sesión?')) { /* eslint-disable-line */
      logout();
    }
  });
};
