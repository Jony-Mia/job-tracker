let totalAll = document.getElementById('totalAll')
let cardSection = document.getElementById('cardSection')
let interviewSection = document.getElementById('interviewSection')
let rejectSection = document.getElementById('rejectSection');
let btn = document.querySelectorAll('button.btn')
let total = document.getElementById('total')
let interviewTotal = document.getElementById('interviewTotal')
let rejectTotal = document.getElementById('rejectTotal')


let all = document.getElementById('all')
let interFilter = document.getElementById('interFilter')
let rejectFilter = document.getElementById('rejectFilter')


let jobs = [
{
    id: 1,
    title: 'Mobile First Corp',
    subtitle: 'React Native Developer',
    info: 'Remote •Full-time •$130,000 - $175,000',
    state: 'not-applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.'
},
{
    id: 2,
    title: 'WebFlow Agency',
    subtitle: 'Web Designer & Developer',
    info: 'Los Angeles, CA •Part-time •$80,000 - $120,000',
    state: 'not-applied',
    description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.'
},
{
    id: 3,
    title: 'DataViz Solutions',
    subtitle: 'Data Visualization Specialist',
    info: 'Boston, MA •Full-time • $125,000 - $165,000',
    state: 'not-applied',
    description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.'
},
{
    id: 4,
    title: 'CloudFirst Inc',
    subtitle: 'Backend Developer',
    info: 'Seattle, WA •Full-time •$140,000 - $190,000',
    state: 'not-applied',
    description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.'
},
{
    id: 5,
    title: 'Innovation Labs',
    subtitle: 'UI/UX Engineer',
    info: 'Austin, TX •Full-time •$110,000 - $150,000',
    state: 'not-applied',
    description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.'
},
{
    id: 6,
    title: 'MegaCorp Solutions',
    subtitle: 'JavaScript Developer',
    info: 'New York, NY •Full-time •$130,000 - $170,00',
    state: 'not-applied',
    description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.'
},
{
    id: 7,
    title: 'StartupXYZ',
    subtitle: 'Full Stack Engineer',
    info: 'Remote •Full-time •$120,000 - $160,000',
    state: 'not-applied',
    description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.'
},
{
    id: 8,
    title: 'TechCorp Industries',
    subtitle: 'Senior Frontend Developer',
    info: 'San Francisco, CA •Full-time •$130,000 - $175,000',
    state: 'not-applied',
    description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.'
}, ];

let filterState = "all";

function clearDashboard() {
    total.textContent = jobs.length;
    interviewTotal.textContent = jobs.filter(job => job.state === "interview").length;
    rejectTotal.textContent = jobs.filter(job => job.state === "rejected").length;
    totalAll.textContent = `${jobs.length}`
}

function renderJob() {
    interviewSection.innerHTML = "";
    let filter = jobs;
    
    if (filterState !== "all") {
        filter = jobs.filter(job => job.state === filterState);
    }
    if (filter.length === 0) {
        interviewSection.innerHTML = ` <div id="emptyCard" class="card">
                <div class="card-body m-auto">
                    <img class="m-auto" src="assignment_7959593 1.png" width="60" alt="">
                    <h1  class="card-title  text-center block">No jobs available</h1>
                    <p >Check back soon for new job opportunities</p>

                </div>
            </div>`;
        return;
    }
    
    filter.forEach(jobsCard => {
        let card = document.createElement('div');
        card.className = "card shadow my-3";
        
        
        let cardBody = `
            <button class="btn btn-circle btn-error btn-soft text-white absolute top-2 right-2" onclick="deleteJob(${jobsCard.id})">
            <i class="fa-solid fa-trash"></i> </button>
                <div class="card-body">
                    <h1 class="card-title">${jobsCard.title}</h1>
                    <p class="mt-0 p-0">${jobsCard.subtitle}</p>
                    <p class="my-2">${jobsCard.info}</p>
                    <div>
                        <button class="btn uppercase bg-[#eef4ff]">${jobsCard.state}</button>
                        
                        <p class="my-2">${jobsCard.description}</p>
                    </div>
                    <div class="card-actions">
                        <button   onclick="setState(${jobsCard.id},'interview')" class="btn btn-success hover:text-white btn-outline text-success">Interview</button>
                         <button  onclick="setState(${jobsCard.id},'rejected')"  class="btn btn-error hover:text-white btn-outline text-error">Reject</button>
                    </div> 
            </div>`;
        card.innerHTML = cardBody;
        
        interviewSection.appendChild(card);
    })
    
    
}

function setState(id, state) {
    jobs = jobs.map(task => {
        
        return task.id === id ? { ...task, state } : task;
    })
    
    clearDashboard();
    renderJob()
}

/*function filterJob(type) {
    
    if (type === 'interview')
    {
        totalAll.textContent = `${jobs.filter(job=>job.state==="interview").length} of 8`
        interviewFilter.className = 'btn btn-info text-white'
        
        all.className = 'btn text-black'
        rejectedFilter.className = 'btn text-black'
        
    }
    else if (type === 'rejected') {
        totalAll.textContent = `${jobs.filter(job=>job.state==="rejected").length}of  8`;
        interviewFilter.className = 'btn text-black'
        
        rejectedFilter.className = 'btn  btn-info text-white'
        
        all.className = 'btn text-black'
        
    } else {
        totalAll.textContent = jobs.length
        all.className = 'btn text-white btn-info'
        interviewFilter.className = 'btn text-black'
        rejectedFilter.className = 'btn text-black'
    }
    
    
    
    
    filterState = type;
    renderJob()
}*/

function filterJob(type){

      if (type==='interview')
         {
            totalAll.textContent= `${jobs.filter(job=>job.state==="interview").length} of 8`;
            all.className="btn text-black"
            interFilter.className="btn btn-info text-white";
            rejectFilter.className="btn text-black"

        } 
        else if(type==='rejected'){
            totalAll.textContent= `${jobs.filter(job=>job.state==="rejected").length} of 8`;
            all.className="btn text-black"
            rejectFilter.className="btn btn-info text-white";
            interFilter.className="btn text-black"    
        }else{
            totalAll.textContent=jobs.length;
            interFilter.className="btn text-black"
            all.className="btn btn-info text-white";
            rejectFilter.className="btn text-black"
        }
        
    
    filterState= type;
    renderJob()
}

function updateStats() {
    
    total.innerHTML = jobs.length
    interview.innerText = jobs.filter(job => job.stage == 'interview').length
    rejected.innerText = jobs.filter(job => job.stage == 'rejected').length
}


function setStage(id, stage) {
    jobs.forEach(job => {
        if (job.id == id) {
            job.stage = stage
        }
    })
    updateStats()
    showJobs(filter)
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id)
    
    clearDashboard();
    renderJob()
}
clearDashboard();
renderJob()
