let colors=['white','green','yellow','orange','pink',
    'purple','violet','red']
   let len= colors.length-1
   let buttonControl=document.getElementById('btn')
     let spanControl=document.querySelector('.color')

     buttonControl.addEventListener('click',()=>{
      let index=generateRandomIndexvalue()
    //   alert(index)
    document.body.style.backgroundColor=colors[index]
    spanControl.innerHTML=colors[index]
     })
     function generateRandomIndexvalue(){
        return Math.round(Math.random()*len)
     }