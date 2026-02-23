  let card = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h1');
    let cardSubtitle = document.createElement('p');
    let cardInfo = document.createElement('p');
    let cardDetail= document.createElement('div') ;
    let button = document.createElement('button');
    let cardDescription = document.createElement('p');
    let interviewBTN= document.createElement('button')
    let rejectBTN= document.createElement('button')
    let cardAction = document.createElement('div');
    
    cardTitle.textContent= jobsCard.title;
    cardSubtitle.textContent = jobsCard.subtitle;
    cardInfo.textContent= jobsCard.info;
    button.textContent = jobsCard.status;
    cardDescription.textContent= jobsCard.description;

    interviewBTN.textContent= "Interview";
    rejectBTN.textContent= "Reject"

    if(jobsCard.status==="applied"){
        button.className='btn bg-success text-white'
    }else{
        button.className="btn uppercase bg-[#eef4ff]"
    }

    card.className="card shadow my-3"
    cardBody.className= "card-body"
    cardTitle.className= "card-title"
    cardSubtitle.className= "mt-0 p-0"
    cardDescription.className= "my-2"

  
    cardInfo.className= "my-2"
    interviewBTN.className="btn btn-success hover:text-white btn-outline text-success"
    rejectBTN.className="btn btn-error hover:text-white btn-outline text-error"
    cardAction.className='card-actions';


    rejectBTN.onclick=()=>{
        card.remove()        
    }

    interviewBTN.onclick=()=>{
        interview.push(jobsCard)
        return interview;   
    }

    cardDetail.appendChild(button);
    cardDetail.appendChild(cardDescription)
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardInfo)
    cardBody.appendChild(cardDetail);

    cardAction.appendChild(interviewBTN)
    cardAction.appendChild(rejectBTN)
    cardBody.appendChild(cardAction)