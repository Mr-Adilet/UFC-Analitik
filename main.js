document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    const suggestions = document.getElementById('suggestions');

    const fighters = [
        { name: 'Брэндон Морено', url: 'Брэндон Морено.html' },
        { name: 'Александр Пантожа', url: 'Карточки бойца/alexandre_pantoja.html' },
        { name: 'Шон О\'Мэлли', url: 'Карточки бойца/sean_omalley.html' },
        { name: 'Илия Топурия', url: 'Карточки бойца/ilia_topuria.html' },
        { name: 'Дрикус Дю Плесси', url: 'Карточки бойца/dricus_du_plessis.html' },
        { name: 'Алекс Перейра', url: 'Карточки бойца/alex_pereira.html' },
        { name: 'Ислам Махачев', url: 'Карточки бойца/islam_makhachev.html' },
        { name: 'Леон Эдвардс', url: 'Карточки бойца/leon_edwards.html' },
        { name: 'Джон Джонс', url: 'Карточки бойца/jon_jones.html' },
        { name: 'Брэндон Ройвал', url: 'Брэндон Ройвал.html' }
    ];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestions.innerHTML = '';
        if (query.length > 0) {
            const filteredFighters = fighters.filter(fighter => fighter.name.toLowerCase().includes(query));
            filteredFighters.forEach(fighter => {
                const suggestion = document.createElement('div');
                suggestion.textContent = fighter.name;
                suggestion.addEventListener('click', () => {
                    window.location.href = fighter.url;
                });
                suggestions.appendChild(suggestion);
            });
        }
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        const fighter = fighters.find(fighter => fighter.name.toLowerCase() === query);
        if (fighter) {
            window.location.href = fighter.url;
        } else {
            alert('Боец не найден!');
        }
    });
});

function toggleDetails(fightId) {
    const details = document.getElementById(fightId);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const closeButton = document.querySelector('.close');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const videoUrl = item.getAttribute('data-video-url');
            videoFrame.src = videoUrl;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        videoFrame.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            videoFrame.src = '';
        }
    });
});
