import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';


document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
  
    let calendar = new Calendar(calendarEl, {
        // prevent scroll bars appearing on calendar – size can be set dynamically after initialissation using  calendar.setOption('contentHeight', 650);
        height: 'auto',
        // load appropriate plugins
        plugins: [ dayGridPlugin, googleCalendarPlugin ]
    });
  
    calendar.render();
  });