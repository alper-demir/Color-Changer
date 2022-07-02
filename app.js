const button = document.getElementById('change-button');
const text = document.getElementById('hexa');
const html = document.getElementById('html');
const copy = document.getElementById('copy');
const history = document.getElementById('history');
const history_list = document.querySelector('#history ul')
$(document).ready(()=>{
    let values = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let colors = []
    const randomize = ()=>{
        hexa = '#'
        for(let i =0;i<6;i++){
            var item = Math.floor(Math.random()*values.length);
            hexa+=values[item]
        }
        text.innerText = hexa;
        html.style.backgroundColor = hexa;
    }    
    randomize()
    
    button.addEventListener('click',()=>{
        randomize()
    });

    copy.addEventListener('click',()=>{
        navigator.clipboard.writeText(text.innerText);
        history.className = 'd-block'
        if(colors.length <7){
            colors.push(text.innerText)
            createHistory()
        }
        else{
            colors.shift()
            history_list.firstChild.remove()
            colors.push(text.innerText)
            createHistory()
        }
        console.log(colors)
    })

    createHistory = ()=>{
        const div = document.createElement('div')
        const a = document.createElement('a')
        const li = document.createElement('li')

        colors.forEach((item)=>{
            div.className = 'inner-bg'
            div.style.background = item
            a.setAttribute('href','#')
            a.setAttribute('class','text')
            a.innerText = item
            li.appendChild(div)
            li.appendChild(a)
            history_list.appendChild(li)
        })
    }

    history_list.addEventListener('click',(e)=>{
        if(e.target.className == 'text'){
            navigator.clipboard.writeText(e.target.innerText);
            console.log(e.target.innerText)
            copyInfo()
        }

        if(e.target.className == 'inner-bg'){
            navigator.clipboard.writeText(e.target.parentNode.children[1].innerText)
            console.log(e.target.parentNode.children[1].innerText)
            copyInfo()
        }
    })

    copyInfo = ()=>{
        $('#info').show("slow");
            setTimeout(()=>{
            $('#info').hide('slow')
        },3000)
    }
    $('#copy').click(copyInfo)

});