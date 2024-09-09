// Функция запуска игры
document.getElementById('start-game').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.querySelector('header').classList.add('hidden'); // Скрываем заголовок
    document.getElementById('game-section').classList.remove('hidden'); // Показываем секцию игры
});

// Логика игры
function makeChoice(choice) {
    const gameText = document.getElementById('game-text');
    const gameImage = document.querySelector('#game-image img');

    if (choice === 1) {
        gameText.innerHTML = "<p>Вы входите в гостиницу, чувствуя холодное прикосновение времени. Хозяин встречает вас мрачным взглядом...</p><p>Что вы скажете?</p>";
        gameImage.src = 'hotel.jpg'; // Измените на соответствующее изображение
        createChoices(['Спросить о комнате', 'Спросить о городе'], [3, 4]);
    } else if (choice === 2) {
        gameText.innerHTML = "<p>Переулок темен и пуст, но вы чувствуете, что кто-то наблюдает за вами из теней...</p><p>Как вы поступите?</p>";
        gameImage.src = 'alley.jpg'; // Измените на соответствующее изображение
        createChoices(['Продолжить идти', 'Остановиться и оглядеться'], [5, 6]);
    } 
}

// Создание новых кнопок выбора
function createChoices(options, choices) {
    const choicesContainer = document.querySelector('.choices');
    choicesContainer.innerHTML = ''; // Очищаем предыдущие кнопки

    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => makeChoice(choices[index]);
        choicesContainer.appendChild(button);
    });
}
