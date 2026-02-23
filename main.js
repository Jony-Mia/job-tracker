let total = document.getElementById('total')
let interviewTotal = document.getElementById('interviewTotal')
let totalAll = document.getElementById('totalAll')
let cardSection = document.getElementById('card-section');
let interviewSection = document.getElementById('interviewSection')
let rejectSection = document.getElementById('rejectSection');
let rejectTotal = document.getElementById('rejectTotal');


let jobs = [
    {
        id: 1,
        title: 'Mobile First Corp',
        subtitle: 'React Native Developer',
        info: 'Remote •Full-time •$130,000 - $175,000',
        status: 'not-applied',
        description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.'
    },
    {
        id: 2,
        title: 'WebFlow Agency',
        subtitle: 'Web Designer & Developer',
        info: 'Los Angeles, CA •Part-time •$80,000 - $120,000',
        status: 'not-applied',
        description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.'
    },
    {
        id: 3,
        title: 'DataViz Solutions',
        subtitle: 'Data Visualization Specialist',
        info: 'Boston, MA •Full-time • $125,000 - $165,000',
        status: 'applied',
        description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.'
    },
    {
        id: 4,
        title: 'CloudFirst Inc',
        subtitle: 'Backend Developer',
        info: 'Seattle, WA •Full-time •$140,000 - $190,000',
        status: 'not-applied',
        description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.'
    },
    {
        id: 5,
        title: 'Innovation Labs',
        subtitle: 'UI/UX Engineer',
        info: 'Austin, TX •Full-time •$110,000 - $150,000',
        status: 'not-applied',
        description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.'
    },
    {
        id: 6,
        title: 'MegaCorp Solutions',
        subtitle: 'JavaScript Developer',
        info: 'New York, NY •Full-time •$130,000 - $170,00',
        status: 'applied',
        description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.'
    },
    {
        id: 7,
        title: 'StartupXYZ',
        subtitle: 'Full Stack Engineer',
        info: 'Remote •Full-time •$120,000 - $160,000',
        status: 'not-applied',
        description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.'
    },
    {
        id: 8,
        title: 'TechCorp Industries',
        subtitle: 'Senior Frontend Developer',
        info: 'San Francisco, CA •Full-time •$130,000 - $175,000',
        status: 'not-applied',
        description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.'
    },
];
let interview = [];
let reject= [];


total.textContent = jobs.length
totalAll.textContent = `${jobs.length} Jobs`

function jobBox(data) {
    data.forEach(jobsCard => {
        let card = ` <div class="card shadow my-3">
                <div class="card-body">
                    <h1 class="card-title">${jobsCard.title}</h1>
                    <p class="mt-0 p-0">${jobsCard.subtitle}</p>
                    <p class="my-2">${jobsCard.info}</p>
                    <div>
                        <button class="btn uppercase bg-[#eef4ff]">${jobsCard.status}</button>
                        
                        <p class="my-2">${jobsCard.description}</p>
                    </div>
                    <div class="card-actions">
                        <button onclick="selected(${jobsCard.id})"  class="btn btn-success hover:text-white btn-outline text-success">Interview</button>
                        <button  onclick="rejected(${jobsCard.id})"  class="btn btn-error hover:text-white btn-outline text-error">Interview</button>
                    </div>
                </div>
            </div>`
        let cardBody = document.createElement('div');
        cardBody.innerHTML = card
        cardSection.appendChild(cardBody);

    })
}


function jobFilterBox(data) {
    data.forEach(jobsCard => {
        let card = ` <div class="card shadow my-3">
                <div class="card-body">
                    <h1 class="card-title">${jobsCard.title}</h1>
                    <p class="mt-0 p-0">${jobsCard.subtitle}</p>
                    <p class="my-2">${jobsCard.info}</p>
                    <div>
                        <button class="btn uppercase bg-[#eef4ff]">${jobsCard.status}</button>
                        
                        <p class="my-2">${jobsCard.description}</p>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-success hover:text-white btn-outline text-success">Interview</button>
                        <button  onclick="rejecting(${jobsCard.id})"  class="btn btn-error hover:text-white btn-outline text-error">Interview</button>
                    </div>
                </div>
            </div>`
        let cardBody = document.createElement('div');
        cardBody.innerHTML = card
       
        interviewSection.appendChild(cardBody);

    })
   
}

function rejectFilterBox(data) {
    data.forEach(jobsCard => {
        let card = ` <div class="card shadow my-3">
                <div class="card-body">
                    <h1 class="card-title">${jobsCard.title}</h1>
                    <p class="mt-0 p-0">${jobsCard.subtitle}</p>
                    <p class="my-2">${jobsCard.info}</p>
                    <div>
                        <button class="btn uppercase bg-[#eef4ff]">${jobsCard.status}</button>
                        
                        <p class="my-2">${jobsCard.description}</p>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-success hover:text-white btn-outline text-success">Interview</button>
                        <button class="btn btn-error hover:text-white btn-outline text-error">Interview</button>
                    </div>
                </div>
            </div>`
        let cardBody = document.createElement('div');
        cardBody.innerHTML = card

        rejectSection.appendChild(cardBody);

    })
}

function selected(event) {
    jobs.forEach(element => {

        if (element.id === event) {
            console.log(element);
            element.status = "Applied"
            if (!interview.includes(element.id === event)) {
                interview.push(element)
                jobFilterBox(interview)
            }
        }
        interviewTotal.textContent = interview.length
    });
}

function jobFilterBox(data) {
    data.forEach(jobsCard => {
        let card = ` <div class="card shadow my-3">
                <div class="card-body">
                    <h1 class="card-title">${jobsCard.title}</h1>
                    <p class="mt-0 p-0">${jobsCard.subtitle}</p>
                    <p class="my-2">${jobsCard.info}</p>
                    <div>
                        <button class="btn uppercase bg-[#eef4ff]">${jobsCard.status}</button>
                        
                        <p class="my-2">${jobsCard.description}</p>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-success hover:text-white btn-outline text-success">Interview</button>
                        <button class="btn btn-error hover:text-white btn-outline text-error">Interview</button>
                    </div>
                </div>
            </div>`
        let cardBody = document.createElement('div');
        cardBody.innerHTML = card

        interviewSection.appendChild(cardBody);

    })
}

function rejected(event) {
    jobs.forEach(element => {
        if (element.id === event) {
            console.log(element);
            element.status = "Rejected"
            reject.push(element)
            rejectFilterBox(reject)            
        }
        rejectTotal.textContent = reject.length
    });
}


function jobFilter(filter) {
    console.log(filter);    
}

jobBox(jobs)