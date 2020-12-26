import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';



document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
  
    let calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, googleCalendarPlugin ]
    });
  
    calendar.render();
  });