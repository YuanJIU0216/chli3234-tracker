import images from './images/thumbnails/*.gif';
console.log(images)


// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");


// Handle form submission, using input values to add new task
form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask(
        form.elements.taskName.value,
        form.elements.taskWeight.value,
        form.elements.taskDuration.value,
        form.elements.taskType.value,
        form.elements.taskStrength.value,
    )
})


// General function for fetching tasks from localStorage and rendering to screen
function displayTasks() {

    // Clear the tasklist <ul> element's content
    tasklist.innerHTML = "";

    // Fetch and parse tasks array from localStorage
    let localTasks = JSON.parse(localStorage.getItem('tasks'))

    // If there are tasks (localStorage item exists)
    if (localTasks !== null) {

        // Loop through all tasks in the array
        localTasks.forEach(function (task) {

            let taskImage = null;
            let taskImage2 = null;
            switch (task.type) {
                case 'Warm up':
                    taskImage = images['warmUp']
                    break;
                case 'Swimming':
                    taskImage = images['swimming']
                    break;
                case 'Other':
                    taskImage = images['other']
                    break;
                default:
                    break;
            }

            switch (task.strength) {
                case 'Light':
                    taskImage2 = images['light']
                    break;
                case 'Moderate':
                    taskImage2 = images['moderate']
                    break;
                case 'Heavy':
                    taskImage2 = images['heavy']
                    break;
                default:
                    break;
            }

            // Create new list item and populate with content (including data attribute for ID)
            let item = document.createElement("li");
            item.setAttribute("data-id", task.id);

            // set listItem as li attribute, I can make it beauty in scss
            item.setAttribute("class", "listItem");

            // item.innerHTML = `<p><strong>${task.name}</strong><br>${task.type}</p><img src='${taskImage}' width='50'/>`;
            item.innerHTML = `<h1>Suggest</h1><p><strong>${task.name}'s ${task.type} exercise</strong></p><img src='${taskImage}' width='50'/ class="planImage"><br><p>The plan duration is <strong>${task.duration} min</strong><br>
            The chosen intensity is <strong>${task.strength}</strong></p><img src='${taskImage2}' class="planImage" width='50'/><br><p>Claories Burned will burned:<br> <strong>"${task.burned}"calories per minute.</strong> </p>`
            tasklist.appendChild(item);

            // Clear the value of the input once the task has been added to the page
            form.reset();

            // Setup delete button DOM elements
            let delButton = document.createElement("button");
            let delButtonText = document.createTextNode("Delete");
            delButton.appendChild(delButtonText);
            delButton.setAttribute("class","DelPlanBtn")
            item.appendChild(delButton); // Adds a delete button to every task

            // Listen for when the delete button is clicked
            delButton.addEventListener("click", function (event) {

                // Loop through all the tasks to find the matching ID and remove it from the array
                localTasks.forEach(function (taskArrayElement, taskArrayIndex) {
                    if (taskArrayElement.id == item.getAttribute('data-id')) {
                        localTasks.splice(taskArrayIndex, 1)
                    }
                })

                // Update localStorage with the newly spliced array (converted to a JSON string)
                localStorage.setItem('tasks', JSON.stringify(localTasks))

                item.remove(); // Remove the task item from the page when button clicked
                // Because we used 'let' to define the item, this will always delete the right element

            })
        })

    }

}

// here set delete all button which can quickly clean storage
const DelAllBtn = document.getElementById('cleanPlan');
DelAllBtn.addEventListener("click",function(event){
    localStorage.removeItem('tasks');
    displayTasks();
})


// This function is to get Calories which calculate auto
function calculateCaloriesBurned(weight, duration, strength) {
    let Intensity;
    if(strength == "Light"){
        Intensity = 5;
    }else if (strength == "Moderate"){
        Intensity = 8;
    }else if (strength == "Heavy"){
        Intensity = 12;
    }

    const K = 3.5; // Calories normal
    // hours * Intensity * kg * 3.5 / 
    const caloriesBurned = duration/60 * Intensity * weight * K / 200;
    return caloriesBurned;
  }


// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the taskList array

function addTask(name, weight, duration, type, strength) {

    // Creating the object, directly passing in the input parameters
    let task = {
        name,
        weight,
        id: Date.now(),
        date: new Date().toISOString(),
        duration,
        type,
        strength,
        burned: calculateCaloriesBurned(weight,duration,strength)
    }

    // Fetch and parse tasks array from localStorage 
    let localTasks = JSON.parse(localStorage.getItem('tasks'))

    // If no tasks exist in local storage, create a new array using the current task
    if (localTasks == null) {
        localTasks = [task]
    } else {
        // Otherwise check to see if a task with the same ID already exists (just in case)
        if (localTasks.find(element => element.id === task.id)) {
            console.log('Task ID already exists')
        } else {
            // If not, push the new task to the array
            localTasks.push(task);
        }
    }

    // Update localStorage with the array (converted to a JSON string)
    localStorage.setItem('tasks', JSON.stringify(localTasks))

    // Call function to display the tasks on the DOM
    displayTasks();

}

//make sure even though we not input any data
//but we still can see the storage 
displayTasks();



// Every day Tips part
const list = document.querySelector(".Tips_content ul");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");


// add EventListener in every Item
button1.addEventListener("click", function(event) {
    console.log("Button 1 clicked");

    // Dind't know the reason why image can't load 
    // let Img1 = document.createElement('img')
    // Img1.src='./images/thumbnails/Tips1.jpg'
    // Img1.alt="Tips1";
    // Img1.width= 200;
    // Img1.height=150;

    // create header element
    let header1 = document.createElement('h1')
    header1.innerHTML = 'Eating and Exercise'

    // create Text element
    let text1 = document.createElement('p')
    text1.innerHTML=
    `<p>1.Swimming after eating is a topic that has generated various opinions. While the "wait one hour after eating before swimming"
    <br>
    rule is commonly mentioned, it is not entirely accurate. 
    <br><br>
    2.Digestion varies from person to person, and there is no fixed timeframe 
    that applies to everyone. 
    <br>
    However, <strong>it is generally advisable to wait 
    at least 30 minutes to an hour before 
    swimming after a substantial meal. 
    <br>
    This allows your body to focus on 
    digestion rather than diverting blood flow to your muscles.</strong> 
    <br><br>
    3.It is important to listen to your body and assess your comfort level.
    <br>
    If you feel bloated, heavy, or experience cramps, it is best to wait a little longer. 
    <br><br>
    4.Ultimately, it is essential to prioritize your safety and well-being when deciding how 
    long to wait before swimming after eating.<p>`;

    // add li to store the All element
    let listItem1= document.createElement("li")
    listItem1.setAttribute("class","Tips_detail")
    // listItem1.appendChild(Img1);
    listItem1.appendChild(header1);
    listItem1.appendChild(text1);

    // Call updateDtails function to add "li" in to "ul"
    updateDetails(listItem1);

});

button2.addEventListener("click", function(event) {
    console.log("Button 2 clicked");

    // create header element
    let header2 = document.createElement('h1')
    header2.innerHTML = 'Why warm-up important'

    // create Text element
    let text2 = document.createElement('p')
    text2.innerHTML=
    `<p>1. <strong>Injury Prevention</strong>: Warm-up exercises increase blood flow to the muscles, 
           improving their flexibility and reducing the risk of injury during swimming.
    <br><br>
    2. <strong>Enhanced Performance</strong>: A proper warm-up helps activate the cardiovascular system,
       increasing heart rate and oxygen delivery to the muscles, leading to improved performance in the water.
    <br><br>
    3. <strong>Muscle Activation</strong>: Warm-up exercises engage specific muscle groups used in swimming,
       enhancing their responsiveness and efficiency during the swim.
    <br><br>
    4. <strong>Mental Preparation</strong>: Warm-up allows swimmers to focus mentally, improving concentration,
       coordination, and reaction time in the water.
    <br><br>
    5. <strong>Improved Technique</strong>: Warm-up drills help refine swimming technique, allowing swimmers to 
       perform with better form, efficiency, and speed.<p>`;

    // add li to store the All element
    let listItem2= document.createElement("li")
    listItem2.setAttribute("class","Tips_detail")
    listItem2.appendChild(header2);
    listItem2.appendChild(text2);

    // Call updateDtails function to add "li" in to "ul"
    updateDetails(listItem2);
});

button3.addEventListener("click", function(event) {
    console.log("Button 3 clicked");

    // create header element
    let header3 = document.createElement('h1')
    header3.innerHTML = '5 reason why swimming'

    // create Text element
    let text3 = document.createElement('p')
    text3.innerHTML=
    `<p>1. <strong>Swimming is a low-impact exercise</strong> that puts minimal stress on joints, 
    making it suitable for individuals with joint pain or injuries.
    <br><br>
    2. It provides a <strong>full-body workout</strong>, engaging muscles from head to toe and 
    promoting overall strength and endurance.
    <br><br>
    3. Swimming is an <strong>excellent cardiovascular exercise</strong> that improves heart 
    health and lung capacity.
    <br><br>
    4. Regular swimming can <strong>help with weight management and contribute to 
    maintaining a healthy body composition</strong>.
    <br><br>
    5. It is a great way to <strong>relieve stress and promote mental well-being</strong>, 
    offering a calming and meditative experience.<p>`;

    // add li to store the All element
    let listItem3= document.createElement("li")
    listItem3.setAttribute("class","Tips_detail")
    listItem3.appendChild(header3);
    listItem3.appendChild(text3);

    // Call updateDtails function to add "li" in to "ul"
    updateDetails(listItem3);
});


// Tips part for add detail into ul  
function updateDetails(listItem){
    list.innerHTML="";
    list.appendChild(listItem); 
}

// Tips part for delete all Tip details in the ul
const clearButton = document.getElementById('Tips_detailClear');

clearButton.addEventListener("click",function(event){
    // remove all li element in ul
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
})