if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  const monthLabel = document.getElementById('calendar-month');
  const daysGrid = document.getElementById('calendar-days');
  const dateLabel = document.getElementById('booking-date-label');
  const prevButton = document.getElementById('calendar-prev');
  const nextButton = document.getElementById('calendar-next');
  const feedback = document.getElementById('booking-feedback');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  let chosenDate = null;
  const dateFormatter = new Intl.DateTimeFormat('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const monthFormatter = new Intl.DateTimeFormat('it-IT', { month: 'long', year: 'numeric' });

  function renderCalendar() {
    monthLabel.textContent = monthFormatter.format(visibleMonth);
    daysGrid.replaceChildren();
    prevButton.disabled = visibleMonth.getFullYear() === today.getFullYear() && visibleMonth.getMonth() === today.getMonth();
    const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
    const offset = (firstDay.getDay() + 6) % 7;
    for (let i = 0; i < offset; i += 1) {
      const spacer = document.createElement('span');
      spacer.setAttribute('aria-hidden', 'true');
      daysGrid.append(spacer);
    }
    const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day);
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = String(day);
      button.setAttribute('aria-label', dateFormatter.format(date));
      const disabled = date < today || date.getDay() === 0;
      button.disabled = disabled;
      if (chosenDate && date.getTime() === chosenDate.getTime()) {
        button.classList.add('selected');
        button.setAttribute('aria-pressed', 'true');
      }
      button.addEventListener('click', () => {
        chosenDate = date;
        dateLabel.textContent = `Giorno scelto: ${dateFormatter.format(date)}`;
        feedback.textContent = '';
        renderCalendar();
      });
      daysGrid.append(button);
    }
  }

  prevButton.addEventListener('click', () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
    renderCalendar();
  });
  nextButton.addEventListener('click', () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const service = document.getElementById('booking-service').value;
    const time = document.getElementById('booking-time').value;
    if (!chosenDate) {
      feedback.textContent = 'Seleziona un giorno dal calendario.';
      daysGrid.querySelector('button:not(:disabled)')?.focus();
      return;
    }
    if (!service || !time || time < '15:00' || chosenDate < today || chosenDate.getDay() === 0) {
      feedback.textContent = 'Controlla trattamento, giorno e orario: sono disponibili richieste dal lunedì al sabato dopo le 15:00.';
      return;
    }
    const requestTime = new Date(chosenDate.getFullYear(), chosenDate.getMonth(), chosenDate.getDate(), Number(time.slice(0, 2)), Number(time.slice(3, 5)));
    if (requestTime <= new Date()) {
      feedback.textContent = 'Scegli un orario futuro.';
      return;
    }
    const message = `Ciao Marika, vorrei chiedere un appuntamento per ${service} il ${dateFormatter.format(chosenDate)} alle ${time}. Puoi confermarmi la disponibilità?`;
    feedback.textContent = 'Si apre WhatsApp con il testo pronto. Seleziona manualmente il contatto di Marika: il numero diretto non è ancora configurato.';
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
  renderCalendar();
}
