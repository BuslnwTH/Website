function roll(total, idname, step) {
    let n = 0;
    return function () {
        n = (n + step) >= total ? total : (n + step);
        if (n <= total) {
            document.getElementById(idname).innerHTML = n;
        }
    }
}
function start(index, idname, step, runtime = 2000){
    let rolling = roll(index, idname, step)
    runtime = (runtime >= 300) ? runtime : 2000;
    for (let i = 0; i < (index/step); i++) {
        let timer = setTimeout(rolling, (runtime/index)*i*step)
    }
    clearTimeout(timer);
}

var a = document.getElementById("num1").innerText

start(a,'num1', 4,)
