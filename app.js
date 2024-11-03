const apiUrl = 'https://www.world-wonders-api.org/v0/wonders';
const wondersContainer = document.getElementById('wonders-container');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(wonder => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${wonder.links.images[0]}" alt="${wonder.name}">
                <div class="card-content">
                    <h2>${wonder.name}</h2>
                    <p>${wonder.location}</p>
                    <p>${wonder.summary.substring(0, 60)}...</p>
                    <div class="quick-links">
                        <a href="${wonder.links.wiki}" target="_blank"><img src="icons/wikipedia.png" alt="Wikipedia"></a>
                        <a href="${wonder.links.google_maps}" target="_blank"><img src="icons/map.png" alt="Map"></a>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                localStorage.setItem('wonderData', JSON.stringify(wonder));
                window.location.href = 'detail.html';
            });

            wondersContainer.appendChild(card);
        });
    });
