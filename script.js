function myFunction() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let fail = 0;
    const lis = [0,1,4];
    for(let i=0;i<lis.length;i++){
        if((user[lis[i]]<'a' || user[lis[i]]>'z') && (user[lis[i]]<'A' || user[lis[i]]>'Z')){
            fail++;
            alert("Invalid username");
            break;
        }
    }
    const lis2 = [2,3,5,6,7];
    for(let i=0;i<lis2.length;i++){
        if(user[lis2[i]]<'0' || user[lis2[i]]>'9'){
            fail++;
            alert("Invalid username");
            break;
        }
    }

    if(fail==0){
        html_1 = "<h style='color:blue'>Processing request...</h>";
        document.getElementById("enter-user").innerHTML = html_1;
        document.getElementById("sec1").style.display='block';
    }
}