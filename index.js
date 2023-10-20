





document.addEventListener('DOMContentLoaded', () => {

    const con1 = document.querySelector('.con1');
    const con2 = document.querySelector('.con2');
    const con3 = document.querySelector('.con3');
  
    const section = document.querySelector('.mysection');
    const sectionTop = section.offsetTop;
  
    const duration = 2000;

    
  
    function animateValue(div, start, end, duration) {
   
        start = Number(start);
        end = Number(end);
        
        let startTimestamp = null;
        
        const step = (timestamp) => {
           
           if (!startTimestamp) startTimestamp = timestamp;
           
           const progress = Math.min((timestamp - startTimestamp) / duration, 1);  
           
           div.textContent = Math.floor(progress * (end - start) + start);
           
           if (progress < 1) {
             window.requestAnimationFrame(step);
           }
         };
       
         
         window.requestAnimationFrame(step);
     
      };
  
      let animated = false;

    window.addEventListener('scroll', () => {
      
      const scrollPos = window.scrollY;
      

      if(!animated && scrollPos >= sectionTop) {
        animateValue(con1, 0, 500, duration);  
        animateValue(con2, 0, 100, duration);
        animateValue(con3, 0, 348, duration); 
          animated = true; 
      }
       
        
      }

     
    );
  
  });

  const email = document.querySelector('.email_input');

  const submit = document.querySelector('.getbtn');

  submit.addEventListener('click', () => {
    email.value = 'Thank you for Registering';
  })