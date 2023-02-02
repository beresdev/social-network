export const setPosts = (data, ) => {
    if(data.length) {
        let html = '';
        data.forEach(doc => {
            const post = doc.data()
            console.log(post);
            const div = 
            `
            <div class="publishPost-container" id="publishPost-container">
                <div id="optionsContainer" class="options-container">
                    <p id="userpost" class="post-username">Tu</p>
                    <div class="fa-solid fa-ellipsis menu-icon">
                    <ul id="optionsmenu" class="options-menu">
                        <li class="option" id="edit">editar</li>
                        <li class="option" id="delete">elimiar</li>
                    </ul>
                    </div>
                </div>
                <div id="postContent" class="post-content">
                    <p id="textContent" class="text-content">Hola mundo, este es un post de ejemplo</p>
                </div>
                <div id="datacontainer" class="data-container">
                    <p id="date" class="post-date">Hoy a las 07:30</p>
                    <div id="likesContainer" class="likes-container">
                    <p id="likesCounter" class="likes-counter">2</p>
                    <span id="likes" class="likes">
                        <i class="fa-solid fa-heart"></i>
                    </span>
                    </div>
                </div>
                </div>
            `
            html += div;
        });
    } else {
        console.log("No hay post")
    }
}