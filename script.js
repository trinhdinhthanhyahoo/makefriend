document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    createSnowflakes(); // Tạo hiệu ứng tuyết rơi ngay từ đầu

    // Xử lý chuyển câu hỏi
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextId = btn.getAttribute('data-next');
            transitionToNextQuestion(nextId);
        });
    });

    // Xử lý nút "Không"
    document.querySelectorAll('.no-btn').forEach(btn => {
        btn.addEventListener('click', handleNoButton);
    });

    // Xử lý nút "Để suy nghĩ"
    document.querySelector('#think-btn')?.addEventListener('click', handleThinkButton);

    // Xử lý nút đồng ý
    document.querySelector('.accept-btn')?.addEventListener('click', () => {
        showSuccessWithEmojis();
    });

    function transitionToNextQuestion(nextId) {
        const currentQuestion = document.querySelector('.question.active');
        const nextQuestion = document.getElementById(nextId);

        // Thêm hiệu ứng cho câu hỏi hiện tại
        currentQuestion.classList.add('animate__animated', 'animate__fadeOutLeft');

        setTimeout(() => {
            currentQuestion.classList.remove('active', 'animate__fadeOutLeft');
            nextQuestion.classList.add('active', 'animate__animated', 'animate__fadeInRight');

            // Hiệu ứng đặc biệt cho từng câu hỏi
            switch (nextId) {
                case 'q2':
                    createHearts();
                    createSparkles();
                    break;
                case 'q3':
                    createSparkles();
                    createBubbles();
                    break;
                case 'q4':
                    createSnowflakes();
                    createFireworks();
                    break;
            }
        }, 500);
    }

    function handleNoButton() {
        const btn = this;
        btn.style.position = 'relative';
        btn.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
    }

    function handleThinkButton() {
        const thinkBtn = this;
        thinkBtn.textContent = "Suy nghĩ kỹ nha... 🤔";
        thinkBtn.style.background = "#e74c3c";
        setTimeout(() => {
            thinkBtn.textContent = "Để suy nghĩ";
            thinkBtn.style.background = "#95a5a6";
        }, 2000);
    }

    function showSuccessWithEmojis() {
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.className = 'fullscreen-container';
        document.body.appendChild(fullscreenContainer);

        // Profile card với thiết kế đặc biệt
        const profileContent = `
            <div class="profile-card animate__animated animate__bounceIn">
                <div class="success-banner">
                    <h2 class="gradient-text">Mai Huyền ơi! 💝</h2>
                </div>
                <div class="message-content">
                <p class="winter-msg">xin chào Mai Huyền ✨</p>
                    <p class="winter-msg">Rất hân hạnh được làm quen!!! ❄️</p>
                    <div class="divider">
                        <span class="divider-icon">♡</span>
                    </div>
                    <div class="profile-info">
                        <p class="sender-name">From: Đình Thành 💌</p>
                        <p class="contact-info">📱</p>
                    </div>
                    <div class="social-links">
                        <a href="https://www.facebook.com/thanhgrey1410" class="social-btn instagram">Instagram <span class="icon">📸</span></a>
                        <a href="https://www.facebook.com/thanhgrey1410" class="social-btn facebook">Facebook <span class="icon">💌</span></a>
                    </div>
                </div>
            </div>
        `;
        fullscreenContainer.innerHTML = profileContent;

        // Tạo các vòng xoáy emoji
        const winterEmojis = ['❄️', '⛄', '🌨️', '✨', '💖', '🌟', '⭐', '🤍', '💝', '🎁'];

        // Tạo nhiều vòng xoáy với kích thước khác nhau
        for (let ring = 0; ring < 5; ring++) { // Tăng số lượng vòng
            const ringElement = document.createElement('div');
            ringElement.className = 'emoji-ring';
            ringElement.style.setProperty('--ring', ring);

            // Tăng số lượng emoji trong mỗi vòng
            const emojiCount = 40 + (ring * 20); // Tăng số lượng emoji

            for (let i = 0; i < emojiCount; i++) {
                const emoji = document.createElement('div');
                emoji.className = 'tornado-emoji';
                emoji.textContent = winterEmojis[Math.floor(Math.random() * winterEmojis.length)];
                emoji.style.setProperty('--i', i);
                emoji.style.setProperty('--total', emojiCount);
                emoji.style.setProperty('--delay', `${i * 0.03}s`);
                emoji.style.setProperty('--duration', `${Math.random() * 3 + 8}s`);
                emoji.style.setProperty('--scale', Math.random() * 0.5 + 0.5);
                ringElement.appendChild(emoji);
            }

            fullscreenContainer.appendChild(ringElement);
        }

        // Thêm các hiệu ứng khác
        createFireworks();
        createSparkles();
        createBubbles();
    }

    function createSnowflakes() {
        const snowflakesCount = 50;
        const snowflakeChars = ['❄', '❅', '❆', '•'];

        for (let i = 0; i < snowflakesCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];

            // Random properties
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5s
            snowflake.style.opacity = Math.random();
            snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px'; // 10-20px

            document.body.appendChild(snowflake);

            // Remove snowflake after animation
            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
            });
        }
    }

    function createHearts() {
        const colors = ['#ff6b6b', '#ff8585', '#ff9999', '#ffb3b3'];
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
    }

    function createSparkles() {
        const colors = ['#ffd700', '#fff', '#fffacd', '#ffffe0'];
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }
    }

    function createFireworks() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = Math.random() * 100 + 'vw';

                for (let j = 0; j < 30; j++) {
                    const spark = document.createElement('div');
                    spark.className = 'spark';
                    spark.style.background = colors[Math.floor(Math.random() * colors.length)];
                    spark.style.setProperty('--angle', (j * 12) + 'deg');
                    firework.appendChild(spark);
                }

                document.body.appendChild(firework);
                setTimeout(() => firework.remove(), 1000);
            }, i * 500);
        }
    }

    function createBubbles() {
        for (let i = 0; i < 20; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = Math.random() * 100 + 'vw';
            bubble.style.animationDuration = (Math.random() * 3 + 2) + 's';
            bubble.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(bubble);
            setTimeout(() => bubble.remove(), 5000);
        }
    }

    function createAuroraBorealis() {
        const aurora = document.createElement('div');
        aurora.className = 'aurora-container';
        for (let i = 0; i < 5; i++) {
            const light = document.createElement('div');
            light.className = 'aurora-light';
            light.style.setProperty('--index', i);
            aurora.appendChild(light);
        }
        document.body.appendChild(aurora);
    }

    function createGlowingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--delay', `${Math.random() * 5}s`);
            particle.style.setProperty('--size', `${Math.random() * 10 + 5}px`);
            particlesContainer.appendChild(particle);
        }

        document.body.appendChild(particlesContainer);
    }

    function addMagneticEffect(button) {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = x - centerX;
            const deltaY = y - centerY;

            button.style.transform = `translate(${deltaX * 0.2}px, ${deltaY * 0.2}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    }

    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.setProperty('--start-x', `${Math.random() * 100}vw`);
        star.style.setProperty('--start-y', `${Math.random() * 50}vh`);
        document.body.appendChild(star);

        setTimeout(() => star.remove(), 1000);
    }

    setInterval(createShootingStar, 2000);
}); 