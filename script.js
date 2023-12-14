const numberData = [
    { number: 0, word: 'zero' },
    { number: 1, word: 'um' },
    { number: 2, word: 'dois' },
    { number: 3, word: 'três' },
    { number: 4, word: 'quatro' },
    { number: 5, word: 'cinco' },
    { number: 6, word: 'seis' },
    { number: 7, word: 'sete' },
    { number: 8, word: 'oito' },
    { number: 9, word: 'nove' },
    { number: 10, word: 'dez' },
    { number: 11, word: 'onze' },
    { number: 12, word: 'doze' },
    { number: 13, word: 'treze' },
    { number: 14, word: 'quatorze' },
    { number: 15, word: 'quinze' },
    { number: 16, word: 'dezesseis' },
    { number: 17, word: 'dezessete' },
    { number: 18, word: 'dezoito' },
    { number: 19, word: 'dezenove' },
    { number: 20, word: 'vinte' },
    { number: 21, word: 'vinteum' },
    { number: 22, word: 'vintedois' },
    { number: 23, word: 'vintetrês' },
    { number: 24, word: 'vintequatro' },
    { number: 25, word: 'vintecinco' },
    { number: 26, word: 'vinteseis' },
    { number: 27, word: 'vintessete' },
    { number: 28, word: 'vinteoito' },
    { number: 29, word: 'vintenove' },
    { number: 30, word: 'trinta' }
];

const gameContainer = document.getElementById('game-container');
const numbersContainer = document.getElementById('numbers-container');
const instructionContainer = document.getElementById('instruction-container');
const resultMessage = document.getElementById('result-message');

// Adicionar os números dinamicamente ao contêiner
numberData.forEach((data, index) => {
    const numberCard = document.createElement('div');
    numberCard.classList.add('number-card');
    numberCard.textContent = data.number;
    numberCard.addEventListener('click', () => checkNumber(data.number, data.word, numberCard));

    if (index % 6 === 0) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('number-row');
        numbersContainer.appendChild(rowContainer);
    }

    numbersContainer.lastChild.appendChild(numberCard);
});

function getRandomNumberWord() {
    const randomIndex = Math.floor(Math.random() * numberData.length);
    return numberData[randomIndex].word;
}

// Mostrar a palavra aleatória inicialmente
const initialWord = getRandomNumberWord();
document.getElementById('number-instruction').textContent = `Diga o número correspondente à palavra: "${initialWord}"`;

function checkNumber(clickedNumber, clickedWord, card) {
    if (clickedWord === initialWord) {
        card.classList.add('correct');
        resultMessage.textContent = 'Parabéns! Você acertou!';

        // Adicionar chuva de emojis e música
        addEmojiRain();
        playCelebrationMusic();
    } else {
        card.classList.add('incorrect');
        resultMessage.textContent = 'Número errado! Tente novamente.';
    }
}

function addEmojiRain() {
    const numberOfEmojis = 5;
    const emojiContainer = document.createElement('div');
    emojiContainer.classList.add('emoji-rain');

    for (let i = 0; i < numberOfEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = '🎉';
        emoji.style.left = `${Math.random() * window.innerWidth}px`;
        emoji.style.animationDuration = `${Math.random() * 2 + 1}s`;
        emoji.style.animationDelay = `${Math.random()}s`;

        emojiContainer.appendChild(emoji);
    }

    document.body.appendChild(emojiContainer);

    // Remover a chuva de emojis após algum tempo
    setTimeout(() => {
        document.body.removeChild(emojiContainer);
    }, 5000); // Remova emojis após 5 segundos
}

function playCelebrationMusic() {
    const audio = new Audio('assets\music\Y2meta.app - Queen - We are the champions (Chorus only) (256 kbps).mp3');
    audio.play();
}
