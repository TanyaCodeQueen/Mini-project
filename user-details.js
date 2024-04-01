const userId = new URL(location.href).searchParams.get('id');


fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(res => res.json())
    .then(user => {
        function foo(obj, parentDiv = null) {
            let div = document.createElement('div');
            div.setAttribute('class', 'div');

            for (const key in obj) {
                if (typeof obj[key] === 'object') {
                    foo(obj[key], div); // Pass the current div as parentDiv
                } else {
                    let p = document.createElement('p');
                    p.innerText = key.toUpperCase() + ':' + obj[key];

                    p.setAttribute('class', 'p');
                    div.appendChild(p);
                }
            }

            // If parentDiv is provided, append the current div to it,
            // otherwise, append it to the document body
            if (parentDiv) {
                div.setAttribute('class', 'div2');
                parentDiv.appendChild(div);
            } else {
                document.body.appendChild(div);
            }
        }

        foo(user);


        let flag = false; // Флажок, що показує, чи вже були завантажені пости

        let createButton = () => {
            let button = document.createElement('button');
            button.innerText = 'POSTS';
            button.setAttribute('class', 'button');

            button.addEventListener('click', () => {
                if (!flag) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                        .then(res => res.json())
                        .then(posts => {

                            let container = document.createElement('div');
                            container.setAttribute('class', 'container');
                            for (let post of posts) {
                                let holder = document.createElement('div');
                                holder.setAttribute('class', 'holder');
                                let p = document.createElement('p');
                                p.setAttribute('class', 'p2');
                                let a = document.createElement('a');
                                a.setAttribute('class','a')
                                p.innerText = `${post.title}`;
                                a.href = 'post-details.html?id=' + post.id;
                                a.text = 'Get full post';
                                holder.appendChild(p);
                                holder.appendChild(a);
                                container.appendChild(holder);
                            }
                            document.body.appendChild(container);
                            flag = true; // Встановлюємо флажок у true, щоб позначити, що дані вже завантажені
                        });
                }
            });

            document.body.appendChild(button);
        }

        createButton();
    });
