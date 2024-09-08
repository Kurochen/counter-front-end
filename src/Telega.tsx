import { useEffect } from "react";

const TelegramComments = () => {
  useEffect(() => {
    // Создаем скрипт
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?15";
    script.setAttribute("data-telegram-discussion", "sehouRU/15");
    script.setAttribute("data-comments-limit", "5");
    script.setAttribute("data-color", "000000"); // Цветовая схема
    script.setAttribute("data-dark", "0"); // Темная тема
    script.setAttribute("data-height", "300px"); // Высота виджета

    // Добавляем скрипт в DOM
    document.getElementById("telegram-comments")?.appendChild(script);
  }, []); // Пустой массив зависимостей, чтобы выполнить только один раз при монтировании компонента

  return <div id="telegram-comments"></div>;
};

export default TelegramComments;

//just another push github2
