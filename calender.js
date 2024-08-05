const calendar = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
};

document.addEventListener('DOMContentLoaded', () => {
    updateCalendar();
    document.getElementById('prev').addEventListener('click', prevMonth);
    document.getElementById('next').addEventListener('click', nextMonth);
});

function updateCalendar() {
    const monthYearDisplay = document.getElementById('month-year');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthYearDisplay.textContent = `${monthNames[calendar.currentMonth]} ${calendar.currentYear}`;
    displayDays();
}

function prevMonth() {
    if (calendar.currentMonth === 0) {
        calendar.currentMonth = 11;
        calendar.currentYear--;
    } else {
        calendar.currentMonth--;
    }
    updateCalendar();
}

function nextMonth() {
    if (calendar.currentMonth === 11) {
        calendar.currentMonth = 0;
        calendar.currentYear++;
    } else {
        calendar.currentMonth++;
    }
    updateCalendar();
}

function displayDays() {
    const daysContainer = document.getElementById('days');
    daysContainer.innerHTML = '';
    const daysInMonth = new Date(calendar.currentYear, calendar.currentMonth + 1, 0).getDate();
    const firstDay = new Date(calendar.currentYear, calendar.currentMonth, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        daysContainer.appendChild(dayDiv);
    }
}
