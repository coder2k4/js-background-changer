$btn = document.getElementById('btn')


$btn.addEventListener('click', ()=>{

    const direction = ['to top', 'to bottom', 'to left', 'to right']
    console.log(direction[Math.floor(Math.random()*4)])
    //${direction[Math.floor(Math.random()*3)]}

    document.body.style.background = `linear-gradient(
                                        ${direction[Math.floor(Math.random()*3)]}, 
                                        rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)}),
                                        rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)})`   // linear-gradient(to right, #0f9b0f, #000000)
})
