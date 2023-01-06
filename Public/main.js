const btn = document.querySelector('input')
const body = document.querySelector('body')
btn.onclick = e => {
      
    body.classList.toggle('active') 
    
   
    console.log("excutando")
}