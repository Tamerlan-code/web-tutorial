document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("test-form");
    const modal = document.getElementById("modal");
    const resultContainer = document.getElementById("test-result");
    const closeBtn = document.querySelector(".close");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Правильные ответы на вопросы
        const answers = {
            q1: "a",  // правильный ответ на вопрос 1: "5-10 минут"
            q2: "a",  // правильный ответ на вопрос 2: "Грудные и трицепс"
            q3: "a",  // правильный ответ на вопрос 3: "Прямая спина"
            q4: "a",  // правильный ответ на вопрос 4: "Планка"
            q5: "a",  // правильный ответ на вопрос 5: "Прыжки"
            q6: "a",  // правильный ответ на вопрос 6: "3-5 раз"
            q7: "a"   // правильный ответ на вопрос 7: "Бег и прыжки"
        };
        
        let score = 0;
        let totalQuestions = Object.keys(answers).length;

        // Проверка каждого вопроса
        for (let key in answers) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            
            if (selected && selected.value === answers[key]) {
                score++;
            }
        }

        // Показать результат в модальном окне
        resultContainer.textContent = `Вы набрали ${score} из ${totalQuestions} баллов.`;
        resultContainer.style.fontSize = "18px";
        resultContainer.style.fontWeight = "bold";
        resultContainer.style.marginTop = "15px";
        resultContainer.style.color = score >= 5 ? "green" : "red";

        // Показываем модальное окно
        modal.style.display = "block";
    });

    // Закрытие модального окна
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закрытие модального окна, если пользователь кликает вне его
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});