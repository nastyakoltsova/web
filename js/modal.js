document.addEventListener('DOMContentLoaded', () => {
    let modal = document.getElementById("myModal");
    let modalText = document.getElementById("modalText");
    let modalImage = document.getElementById("modalImage");
    let btns = document.getElementsByClassName("card");
    let span = document.getElementsByClassName("close")[0];

    Array.from(btns).forEach(function(btn) {
        btn.onclick = function() {
            let text = this.getElementsByClassName("card-content")[0].innerHTML;
            let imageSrc = this.getElementsByTagName("img")[0].src;
            modalText.innerHTML = text;
            modalImage.src = imageSrc;
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    const reviewsContainer = document.getElementById('reviews');

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            preloader.style.display = 'none';
            content.style.display = 'block';

            const randomComments = data.sort(() => 0.5 - Math.random()).slice(0, 5);

            randomComments.forEach(comment => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review';
                reviewDiv.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                `;
                reviewsContainer.appendChild(reviewDiv);
            });
        })
        .catch(error => console.error('Ошибка:', error));
        setTimeout(() => {
            if (preloader.style.display !== 'none') {
                reviewsContainer.innerHTML = 'Что-то пошло не так... Обновите страницу и попробуйте снова';
                preloader.style.display = 'none'
            }
        }, 5000);
});


