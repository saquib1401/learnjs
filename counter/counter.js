var count = 0;
var reset  = document.querySelector("#reset");
var btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        var styles = e.currentTarget.classList;

        if(styles.contains("decreament")){
            count--;
        }else if(styles.contains("increament")){
            count++;
        }else{
            count=0;
        }

        if(count > 0){
            reset.style.color="green";
        }else if(count < 0){
            reset.style.color="red";
        }else{
            reset.style.color="black";
        }
        reset.textContent=count;
    });
});