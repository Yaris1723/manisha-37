const reasons = [
    "Because life’s simply better with you in it. Advance Happy Porandhanaal , Manisha.",
    "You’re someone I’d never want to replace or lose",
    "You’ve become part of my daily thoughts without even knowing",
    "You give me reasons to smile even on the heaviest days",
    "You make memories feel like treasures, not just moments",
    "You’re proof that every good things is surrounded by thorn fence",
    "You handle me very easily without big effort",
    "You make me see things from a different angle",
    "Your curiosity about small things is contagious",
    "You don’t just exist in my life u made a impact",
    "You’re literally a free stress-buster machine for everyone",
    "You have that mix of kindness + savage that’s rare",
    "You’ve taught me to chill instead of stressing over everything",
    "You bring out my best side (even the one I didn’t know existed)",
    "You’re the hardest person to talk to and also to leave.",
    "You actually care about people’s feelings",
    "You have this way of turning even mistakes into funny stories",
    "Your patience level is insane compared to mine",
    "You’re lowkey inspiring without trying to be",
    "You somehow balance being silly and being wise",
    "You have the most random thoughts",
    "You make time useful just by spending with you",
    "You have a “main character energy” that’s hard to match",
    "You share memes like they’re medicine for bad moods",
    "You remember small details about people, and that’s special",
    "You don’t fake things — you’re real, and I admire that",
    "You know how to laugh at yourself, which is rare",
    "You have that energy which turns a dull day into a good one",
    "You give honest opinions (even if I don’t like them)",
    "You somehow manage you and flex ur like strong",
    "Your “random thoughts” are way more interesting than movies",
    "You make even boring moments fun just by being around",
    "You pushed me to smile",
    "The way you explain things even u know what i will do",
    "you are the only person cared me without any reason and need",
    "You laugh at most of the nonsense things i made and it makes my day",
    "You always listen to my random nonsense without judging"
].reverse(); // Reverse to show #1 last

const cardContainer = document.querySelector('.card-container');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const reasonCardsPage = document.getElementById('reason-cards');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let cards = [];
let currentCardIndex = 0;

function createCard(reason, number) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="reason-number">#${number}</div>
        <p>${reason}</p>
    `;
    return card;
}

function loadCards() {
    reasons.forEach((reason, index) => {
        const cardNumber = index + 1;
        const card = createCard(reason, cardNumber);
        cardContainer.appendChild(card);
        cards.push(card);
    });
    showCard(currentCardIndex);
}

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === cards.length - 1;

    if (index === cards.length - 1) {
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    }
}

nextBtn.addEventListener('click', () => {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    }
});

// Page transitions
setTimeout(() => {
    page1.classList.remove('active');
    page2.classList.add('active');
}, 3000);

// A simple click anywhere on page 2 will transition
page2.addEventListener('click', () => {
    page2.classList.remove('active');
    reasonCardsPage.classList.add('active');
    loadCards();
});