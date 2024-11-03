const wonder = JSON.parse(localStorage.getItem('wonderData'));

document.getElementById('wonder-name').textContent = wonder.name;
document.getElementById('wonder-summary').textContent = wonder.summary;
document.getElementById('wonder-location').textContent = wonder.location;
document.getElementById('wonder-build-year').textContent = wonder.build_year;
document.getElementById('wonder-time-period').textContent = wonder.time_period;

const carouselImages = document.getElementById('carousel-images');
wonder.links.images.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    carouselImages.appendChild(img);
});

const quickLinks = document.getElementById('quick-links');
['wiki', 'britannica', 'trip_advisor'].forEach(site => {
    const link = document.createElement('a');
    link.href = wonder.links[site];
    link.target = '_blank';
    link.textContent = site.charAt(0).toUpperCase() + site.slice(1);
    quickLinks.appendChild(link);
});
