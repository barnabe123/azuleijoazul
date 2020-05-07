function toCount(){
    let sta = document.getElementById('txts')
    let end = document.getElementById('txte')
    let step = document.getElementById('txtst')
    let res = document.getElementById('res')

    if(sta.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        res.innerHTML = 'Impossible to count'
        alert('[Error] Data is missing!')
    }else{  
        res.innerHTML = 'Counting: <br>'
        let s = Number(sta.value)
        let e = Number(end.value)
        let st = Number(step.value)

        if(st == 0){
            alert('Invalid step! Considering Step: 1')
            st = 1
        }

        if(s < e){
            for(let i = s; i <= e; i += st){
                res.innerHTML += `${i} \u{1F603} \u{1F449}`
            }
        }else{
            for(let i = s; i >= e; i -= st ){
                res.innerHTML += `${i} \u{1F603} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}