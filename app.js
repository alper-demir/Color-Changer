const button = document.getElementById('change-button');
const text = document.getElementById('hexa');
const html = document.getElementById('html');
const copy = document.getElementById('copy');
$(document).ready(()=>{
    let values = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let hexa = '#';

        const randomize = ()=>{
            for(let i =0;i<6;i++){
                var item = Math.floor(Math.random()*values.length);
                hexa+=values[item]
            }
            text.innerText = hexa;
            html.style.backgroundColor = hexa;
        }
    randomize()
    
    button.addEventListener('click',()=>{
        hexa = '#'
        randomize()
    });

    copy.addEventListener('click',()=>{
        navigator.clipboard.writeText(hexa);
    })

    $('#copy').click(function(){
            $('#info').show("slow");
            setTimeout(()=>{
            $('#info').hide('slow')
            },3000)
    });

});