


fetch(" https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {


        let container = document.createElement('div');
        container.setAttribute('class', 'container')
        for(let user of users){
          let div= document.createElement('div');
            div.setAttribute('class', 'div');
           let p= document.createElement('p');
           p.setAttribute('class', 'p')
           p.innerText= `Id:${user.id}   Name: ${user.name}`

            let a= document.createElement('a');
            a.href='user-details.html?id='+user.id;
            a.text='Click to get info about:'+user.name
            div.appendChild(p);
            div.appendChild(a);
           container.appendChild(div)


        }
        document.body.appendChild(container)




    })

// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули