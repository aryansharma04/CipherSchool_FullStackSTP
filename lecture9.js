
      let title=document.querySelector("#title")
      title.addEventListener("click",()=>{
        title.innerHTML="This is after click"
      })

      let button=document.querySelector(".btn-1")
      button.addEventListener("click",()=>{
        let date=document.createElement("div")
        date.innerHTML=new Date();
        let main=document.querySelector("main");
        main.appendChild(date);
      })

      const firstName=document.querySelector("#firstName")
      firstName.addEventListener("input",()=>{
        firstName.value=firstName.value.toUpperCase();
      })


      
    