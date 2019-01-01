let n 
init()
let timer = setInterval(()=>{
    makeLeave(getImg(n)).one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImg(n+1))
    n +=1
},1000)

document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(()=>{
            makeLeave(getImg(n)).one('transitionend',(e)=>{
                makeEnter($(e.currentTarget))
            })
            makeCurrent(getImg(n+1))
            n +=1
        },1000)
    }
})

















function getImg(n){
    if(n>5){
        n = n%5
        if(n===0){
            n=5
        }
    }
    return $(`.images > img:nth-child(${n})`)
}

function init(){
    n = 1
    getImg(n).addClass('current').siblings().addClass('enter')
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    $node.removeClass('enter enter').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
}