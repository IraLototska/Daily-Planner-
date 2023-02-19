//The current day at the top of the calendar when a user opens the planner.
const currentDate = moment().format('dddd, MMMM Do YYYY');
const currentDay = document.getElementById('currentDay');
currentDay.textContent = currentDate;

//Timeblock based on past, present, and future when the timeblock is viewed.
function setColorForArea(textarea) {
    // Get the current hour
    const currentHour = moment().hour();
    const textareaHour = parseInt($(textarea).attr('id'));
  
    // Added the class for the textarea 
    if (textareaHour < currentHour) {
      $(textarea).addClass('past');
    } else if (textareaHour > currentHour) {
      $(textarea).addClass('future');
    } else {
      $(textarea).addClass('present');
    }
  
}
$('textarea').each(function() {
    setColorForArea(this);
  });


// Array of tasks
let tasks = [
    { hour: 9, task: '' },
    { hour: 10, task: '' },
    { hour: 11, task: '' },
    { hour: 12, task: '' },
    { hour: 1, task: '' },
    { hour: 2, task: '' },
    { hour: 3, task: '' },
    { hour: 4, task: '' },
    { hour: 5, task: '' }
  ];
  
  // Load saved tasks from local storage
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks !== null) {
    tasks = savedTasks;
    console.log(true);
  }

if (savedTasks) {
  $('textarea').each(function(index) {
    $(this).val(savedTasks[index].task);
  });
}
  
  // 
  function saveTask(button) {
   
    const taskHour = parseInt($(button).siblings('textarea').attr('id'));
  
    // Find task in array and refresh
    for (const task of tasks) {
      if (task.hour === taskHour) {
        task.task = $(button).siblings('textarea').val();
        break;
      }
    }
  
    // Save in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Click!');
  }

