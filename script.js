phones.forEach((phones) =>{
    let newLi = document.createElement('li');
    let title = document.createElement('h2');
    let img = document.createElement('img');
    let desc = document.createElement('p');
    let time = document.createElement('p');
    let gen = document.createElement('p');
    let kilo = document.createElement('p');
    let brain = document.createElement('p');
    let batt = document.createElement('p');


    title.textContent = phones.title;
    time.textContent = phones.released_time;
    gen.textContent = phones.gender;
    kilo.textContent = phones.weight;
    brain.textContent = phones.memory;
    batt.textContent = phones.battery;
    
    img.setAttribute('src', phones.imgSrc)
    newLi.setAttribute('class', 'box')

    newLi.appendChild(img)
    newLi.appendChild(title)
    newLi.appendChild(desc)
    newLi.appendChild(time)
    newLi.appendChild(gen)
    newLi.appendChild(kilo)
    newLi.appendChild(brain)
    newLi.appendChild(batt)



    list.appendChild(newLi)
})

