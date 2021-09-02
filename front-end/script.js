
const date = new Date();
let time;
function submitForm(e){
    time=date.getHours()+":"+date.getSeconds();
    e.preventDefault();
    var name = document.forms["welcome_form"]["userName"].value;
   console.log(name);
   name1=name;
   //store player name
   localStorage.setItem("name",name);
   location.href="quiz1.html";

    console.log(name);   
}

function getans1(e){
    var q1=e.target.value;
    localStorage.setItem("answer1",q1);
    console.log(q1);
    // let userAnswer = document.querySelector("li.option.value").innerHTML;
    // console.log(userAnswer);
}
const rest=[];

// function submit(){
//     location.href='result.html';
//     onsubmit();
// }

function submit(){
    var naame =localStorage.getItem("name");
    var answer1 = localStorage.getItem("answer1");
    var answer2 = localStorage.getItem("answer2");
    const final={name :naame,answer1:answer1,answer2:answer2};
    console.log("final result is: "+final);
    axios.post('http://localhost:1000/api/setData',final)
    .then((response)=>{
        if(response.status===201){
            console.log(response.data.game);
            rest.push(JSON.stringify(response.data.game));
            console.log("rest"+rest);
            location.href='result.html';
        }else{
            throw new Error('fail to create one');
        }
    }).catch(err=>{
        console.log(err);
    })

}
function history(){
    console.log("from rest"+JSON.stringify(rest));
    axios.get('http://localhost:1000/api//fetchAllData')
    .then(response=>{
        if(response.status === 200){
            response.data.games.forEach(game=>{
                addtoUI(game);
            })
        }
        else{
            throw new Error();
        }
        // console.log("got the response");
        // console.log(response.data.games);
    }).catch(err=>console.log(err));
}

function addtoUI(game){
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const parentElement = document.getElementById('result');
console.log(parentElement);
const gameId=`Game ${game.id}`;
var n = month[date.getMonth()];
    parentElement.innerHTML+=`
    <div id="gameid">
                        <h3>${gameId}-{${date.getDate() +"th-"+ n+"-" +date.getFullYear()} ${time}}</h1>
                            <p>Name: ${game.name}</p>
                            <p>Who is best cricketer in the world</p>
                            <p>Answer: <b>${game.answer1}</b></p>
                            <br>
                            <p>what are the color in the national flag?</p>
                            <p>Answer:<b>${game.answer2}</b></p><br>
                    </div>
    `
}


var ans=[];
function getans2(event){
    ans.push(event.target.name);
    console.log(ans);
    let finalAns = [...new Set(ans)];
    console.log(finalAns.toString());
    q2ans=finalAns.toString();
    localStorage.setItem("answer2",q2ans);
   
}