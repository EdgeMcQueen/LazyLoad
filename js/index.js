// получаем все элементы img со страницы
let images = document.querySelectorAll('img');

// задаём параметры для IntersectionObserver
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

// создаём экземпляр IntersectionObserver
// В качестве параметра задаём  функции handleImg
function handleImg(myImg, observer) {
    // Берем img которые появляются при изменении положения на странице
    myImg.forEach( myImgSingle => {
        // добавляем свойство IntersectionRatio, которое показывает насколько img пересекла viewport
        console.log(myImgSingle.IntersectionRatio);
    })
}

// создаём объект позволяющий отследить элемент в зоне видимости(viewport) браузера
let observer = new IntersectionObserver(handleImg, options);

// привязываем объект IntersectionObserver на изображения
images.forEach( img => {
    // передаём методу observe все ихображения по-очереди
    observer.observe(img);
})
