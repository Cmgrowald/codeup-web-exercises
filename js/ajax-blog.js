"use strict";

fetch("data/blog.json").then(resp => resp.json()).then(data => {
    console.log(data)

    data.forEach(post => {
        const div = document.createElement('div')

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');


        const titleDiv = document.createElement('h2')
        titleDiv.innerText = post.title;

        const contentDiv = document.createElement('div')
        contentDiv.innerText = post.content;
        contentDiv.classList.add('post-content')

        const dateDiv = document.createElement('div')
        dateDiv.innerText = post.date;
        dateDiv.classList.add('post-date')

        const categoriesDiv = document.createElement('div')
        categoriesDiv.innerText = post.categories.join(', ');
        categoriesDiv.classList.add('post-categories')







        postDiv.appendChild(titleDiv);
        postDiv.appendChild(contentDiv);
        postDiv.appendChild(categoriesDiv);
        postDiv.appendChild(dateDiv);

        document.querySelector('#posts').appendChild(postDiv);
    })
})


