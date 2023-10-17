const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  //BY Geven
  const img = document.getElementById("image");
  const name = document.getElementById('author');
  const job = document.getElementById('job');
  const text = document.getElementById('info');
  let iter = 0;
  const len = reviews.length;
  const left  = document.querySelector('.left');   
  const right = document.querySelector('.right');    
  const surprise = document.getElementById("surprise");
  window.addEventListener("DOMContentLoaded",function () {
    
    item = reviews[iter];
    img.src = item.img;
    name.textContent = item.name;
    job.innerText = item.job;
    text.innerText = item.text;
  })    
  
  
  left.addEventListener('click',function (){
      
      iter++;
      if(iter >= len)  {   iter = 0 ;}
      item = reviews[iter];
      img.src = item.img;
      name.textContent = item.name;
      job.innerText = item.job;
      text.innerText = item.text;
    })
  
  right.addEventListener('click',function (){
      
      iter--;
      if(iter < 0)  {   iter = len -1 ;}
      item = reviews[iter];
      img.src = item.img;
      name.textContent = item.name;
      job.innerText = item.job;
      text.innerText = item.text;
    })
  
  surprise.addEventListener('click',function (){
      
      iter = random() ;
      if(iter < 0)  {   iter = len -1 ;}
      item = reviews[iter];
      img.src = item.img;
      name.textContent = item.name;
      job.innerText = item.job;
      text.innerText = item.text;
    })
  function random(){
    return Math.floor( Math.random() * len);
  }
