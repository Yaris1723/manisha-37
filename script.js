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
];

const cardContainer = document.querySelector('.card-container');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const reasonCardsPage = document.getElementById('reason-cards');

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
        const cardNumber = reasons.length - index;
        const card = createCard(reason, cardNumber);
        cardContainer.appendChild(card);
    });
    addSwipeListeners();
}

function addSwipeListeners() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        let startX;
        let startY;
        let isDragging = false;

        card.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            startY = e.clientY;
            isDragging = true;
            card.style.cursor = 'grabbing';
        });

        card.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const currentX = e.clientX;
            const currentY = e.clientY;
            const diffX = currentX - startX;
            const diffY = currentY - startY;
            card.style.transform = `translate(${diffX}px, ${diffY}px) rotate(${diffX / 10}deg)`;
        });

        card.addEventListener('mouseup', (e) => {
            isDragging = false;
            card.style.cursor = 'grab';
            const currentX = e.clientX;
            const diffX = currentX - startX;

            if (Math.abs(diffX) > 100) {
                const direction = diffX > 0 ? 1 : -1;
                card.style.transform = `translate(${direction * 500}px, 0) rotate(${direction * 30}deg)`;
                card.style.opacity = 0;
                setTimeout(() => card.remove(), 300);

                if (index === reasons.length - 1) {
                    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                }
            } else {
                card.style.transform = 'translate(0, 0) rotate(0)';
            }
        });
    });
}

setTimeout(() => {
    page1.classList.remove('active');
    page2.classList.add('active');
}, 3000);

page2.addEventListener('swiped-left', () => {
    page2.classList.remove('active');
    reasonCardsPage.classList.add('active');
    loadCards();
});

// Basic swipe detection for page 2
let touchstartX = 0;
let touchendX = 0;
    
function checkDirection() {
  if (touchendX < touchstartX) {
      page2.dispatchEvent(new Event('swiped-left'));
  }
}

page2.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

page2.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});
