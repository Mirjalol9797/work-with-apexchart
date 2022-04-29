$(document).ready(function () {
  $("#daterange").daterangepicker({
    opens: "center",
    locale: {
      cancelLabel: "Clear",
      applyLabel: "Применить",
      cancelLabel: "Отмена",
      daysOfWeek: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    },
  });
});
