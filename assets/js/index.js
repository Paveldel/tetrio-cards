const MAX_PROGRESS = 300000;
const AMOUNT_OF_CARDS = 3;
const AMOUNT_OF_POSSIBLE_CARDS = 22;

const CARD_NAMES = ["The Fool", "The Magician", "The Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Justice", "The Hermit", "Wheel of Fortune", "Strength", "The Hanged Man", "Death", "Temperance", "The Devil", "The Star", "The Tower", "The Moon", "The Sun", "Judgement", "The World"];

function getCardTemplate() {
    return document.querySelector("#card").content.firstElementChild.cloneNode(true);
}

function getCardUrl(card) {
    return `/images/tarot/${card}.png`;
}

function getRandomProgress() {
    return `${Math.floor(MAX_PROGRESS * Math.random())}/${MAX_PROGRESS}`;
}

function getRandomCard() {
    const $card = getCardTemplate();
    const randomCard = Math.floor(Math.random() * AMOUNT_OF_POSSIBLE_CARDS);
    $card.querySelector("img").setAttribute("src", getCardUrl(randomCard));
    $card.querySelector("img").setAttribute("alt", CARD_NAMES[randomCard]);
    $card.querySelector(".progress p").innerText = getRandomProgress();
    return $card;
}

function displaySomeCards() {
    const cards = [];
    for (let i = 0; i < AMOUNT_OF_CARDS; i++) {
        cards.push(getRandomCard());
    }
    const $container = document.querySelector(".cards")
    cards.forEach(card => $container.insertAdjacentElement('beforeend', card))
}

function selectCard(e) {
    const $card = e.target.closest("div");
    if (!$card.classList.contains("card")) return;
    if ($card.classList.contains("selected")) $card.classList.remove("selected");
    else {$card.classList.add("selected")}
}

function bindSelectHandlers() {
    document.querySelector(".cards").addEventListener('click', selectCard);
}

function init() {
    displaySomeCards();
    bindSelectHandlers();
}

init();