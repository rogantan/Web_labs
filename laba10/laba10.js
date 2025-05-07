const API = 'e8f668e2e0c7fd4731ff5863616c9b6f';
const CITY = 'Novosibirsk';
const DAYS_TO_SHOW = 5; // кол-во дней для показа

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let slides = [];
    let currentIndex = 0;
    let isLoading = true;

    // функция форматирования даты
    function formatDate(dateString) {
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        return new Date(dateString).toLocaleDateString('ru-RU', options);
    }

    // группировка данных по дням с ограничением количества дней
    function groupByDay(data) {
        const days = {};

        data.forEach(item => {
            const date = new Date(item.dt * 1000);
            const day = date.toISOString().split('T')[0];

            if (!days[day]) {
                days[day] = [];
            }
            days[day].push(item);
        });

        return Object.entries(days)
            .slice(0, DAYS_TO_SHOW) // указываем кол-во дней
            .map(([date, items]) => {
                const temps = items.map(i => i.main.temp);
                const max = Math.max(...temps);
                const min = Math.min(...temps);
                const weather = items[0].weather[0];
                return { date, max, min, weather };
            });
    }

    function createSlides(data) {
        slidesContainer.innerHTML = '';
        isLoading = false;

        slides = data.map(day => {
            const slide = document.createElement('div');
            slide.className = 'slide-container';
            slide.setAttribute('aria-hidden', 'true');

            slide.innerHTML = `
                <h3>${formatDate(day.date)}</h3>
                <img src="https://openweathermap.org/img/wn/${day.weather.icon}@2x.png" alt="${day.weather.description}" >
                <div>
                    <p>Макс: ${Math.round(day.max)}°C</p>
                    <p>Мин: ${Math.round(day.min)}°C</p>
                    <p class="weather-desc">${day.weather.description}</p>
                </div>
            `;
            slidesContainer.appendChild(slide);
            return slide;
        });

        currentIndex = 0;
        updateSlides();
    }

    // Обновление отображения слайдов
    function updateSlides() {
        slides.forEach((slide, index) => {
            const isActive = index === currentIndex;
            slide.style.display = isActive ? 'block' : 'none';
            slide.setAttribute('aria-hidden', !isActive);
        });
    }
    function setupEventListeners() {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlides();
            }
        });
        nextBtn.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlides();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (isLoading) return;
            switch(e.key) {
                case 'ArrowLeft':
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateSlides();
                    }
                    break;
                case 'ArrowRight':
                    if (currentIndex < slides.length - 1) {
                        currentIndex++;
                        updateSlides();
                    }
                    break;
            }
        });
    }
    async function fetchWeatherData() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API}&units=metric&lang=ru`);

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json();
            const groupedData = groupByDay(data.list);
            createSlides(groupedData);
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
            slidesContainer.innerHTML = `
                <div class="slide active error">
                    <h2>Ошибка при загрузке данных</h2>
                    <p>Пожалуйста, попробуйте позже</p>
                </div>
            `;
        } finally {
            isLoading = false;
            updateSlides();
        }
    }
    setupEventListeners();
    fetchWeatherData();
});