const wonder = JSON.parse(localStorage.getItem('wonderData'));

document.getElementById('wonder-name').textContent = wonder.name;
document.getElementById('wonder-summary').textContent = wonder.summary;
document.getElementById('wonder-location').textContent = wonder.location;
document.getElementById('wonder-build-year').textContent = wonder.build_year;
document.getElementById('wonder-time-period').textContent = wonder.time_period;


