const container = document.getElementById("container");
const header = document.getElementById("header");

const picked = "bg-blue-500";
const notPicked = "bg-gray-400";

const days = ["mon", "tue", "wed", "thu", "fri", "sat"];
const date = new Date();
console.log(date.getHours());

const dayButtons = [];
for (let i=0;i<6;i++) {
    let button = document.getElementById(days[i]);

    dayButtons.push(button);

    button.addEventListener('click', () => { changeDay(i) });
}

const times = ['8:25', '9:25', '10:35', '11:35', '12:35', '1:35', '2:35', '3:35', '4:35', '5:35'];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const section = window.location.pathname.replace("/", "").replace("/", "");
header.textContent = section;

function changeDay(day) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    console.log("hello");

    for (let i=0;i<dayButtons.length;i++) {
        dayButtons[i].classList.remove(picked);
        dayButtons[i].classList.add(notPicked);
    }

    dayButtons[day].classList.remove(notPicked);
    dayButtons[day].classList.add(picked);

    const dayData = tt1.filter((line) => line[0] == section)[day];

    dayData.forEach((data, index) => {
        if (data == section || data == "FREE" || data == "LUNCH") return;

        const classDiv = document.createElement('div');
        classDiv.className = 'flex place-content-between items-center my-1 w-full bg-purple-700 text-white p-4';
        // if ((hours[index] < date.getHours() || (hours[index] == date.getHours() && date.getMinutes() > 30)) && day == date.getDay() - 1) {
        //     classDiv.classList.add("bg-purple-500");
        // } else {
        //     classDiv.classList.add("bg-purple-700");
        // }

        const subjectP = document.createElement('p');
        subjectP.className = 'text-l';
        subjectP.textContent = data;

        
        const timeP = document.createElement('p');
        timeP.className = 'text-right';
        timeP.textContent = times[index - 1];
        
        classDiv.appendChild(subjectP);

        if ((hours[index - 1] == date.getHours() && date.getMinutes() > 30) || (hours[index] == date.getHours() && date.getMinutes() <= 30)) {
            const statusP = document.createElement('p');
            statusP.className = 'text-right bg-purple-500 rounded-md px-2 mx-1';
            statusP.textContent = "NOW";
            classDiv.appendChild(statusP);
        }

        classDiv.appendChild(timeP);

        container.appendChild(classDiv);
    });
}

changeDay(date.getDay() - 1);