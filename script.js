function showQuestion() {
    document.getElementById('initialMessage').classList.add('hidden');
    document.getElementById('questionMessage').classList.remove('hidden');
}

function handleYes() {
    document.getElementById('questionMessage').classList.add('hidden');
    document.getElementById('yesMessage').classList.remove('hidden');
    // Add confetti effect here if you want
    createConfetti();
}

function handleNo() {
    document.getElementById('questionMessage').classList.add('hidden');
    document.getElementById('question2').classList.remove('hidden');
}

function handleNo2() {
    document.getElementById('question2').classList.add('hidden');
    document.getElementById('question3').classList.remove('hidden');
}

function handleNo3() {
    document.getElementById('question3').classList.add('hidden');
    document.getElementById('finalQuestion').classList.remove('hidden');
}

function createConfetti() {
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Function to display current date in a romantic format
function displayDate() {
    const date = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}

// Call displayDate when yes is clicked
function handleYes() {
    document.getElementById('questionMessage').classList.add('hidden');
    document.getElementById('question2')?.classList.add('hidden');
    document.getElementById('question3')?.classList.add('hidden');
    document.getElementById('finalQuestion')?.classList.add('hidden');
    document.getElementById('yesMessage').classList.remove('hidden');
    displayDate();
    createConfetti();
    playHeartAnimation();
}

function playHeartAnimation() {
    const hearts = ['❤️', '💖', '💕', '💗', '💓'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 300);
    }
}

// Add confetti styles
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        top: -10px;
        width: 10px;
        height: 10px;
        animation: fall 3s linear forwards;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }

    .floating-heart {
        position: fixed;
        top: -10px;
        font-size: 24px;
        animation: floatUp 3s linear forwards;
        z-index: 1000;
    }

    @keyframes floatUp {
        0% {
            transform: translateY(100vh) scale(0);
        }
        50% {
            transform: translateY(50vh) scale(1.5);
        }
        100% {
            transform: translateY(-20vh) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);