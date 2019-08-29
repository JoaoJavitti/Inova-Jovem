var carrossel = 1;
var carrossel1 = document.getElementById('carrossel-1');
var carrossel2 = document.getElementById('carrossel-2');
var carrossel3 = document.getElementById('carrossel-3');
var maxCarrossel = 3;
carrossel1.style.display = 'flex';

setInterval(() => {
    if (carrossel >= maxCarrossel) {
        carrossel = 1;
    } else {
        carrossel++;
    }

    ativateCarrossel();
}, 3500);

function ativateCarrossel() {
    switch (carrossel) {
        case 1:
            carrossel1.style.display = 'flex';
            carrossel2.style.display = 'none';
            carrossel3.style.display = 'none';
            break;
        case 2:
            carrossel1.style.display = 'none';
            carrossel2.style.display = 'flex';
            carrossel3.style.display = 'none';
            break;
        case 3:
            carrossel1.style.display = 'none';
            carrossel2.style.display = 'none';
            carrossel3.style.display = 'flex';
            break;
    }
}

function preCarrossel() {
    if (carrossel > 1) {
        carrossel--;
    } else if (carrossel === 1) {
        carrossel = maxCarrossel;
    }
    ativateCarrossel();
}

function proxCarrossel() {
    if (carrossel < maxCarrossel) {
        carrossel++;
    } else if (carrossel === maxCarrossel) {
        carrossel = 1;
    }
    ativateCarrossel();
}