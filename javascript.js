let ele=1;
let everyTime011=
` <span>our courses</span>
`  ,
everyTime012=
`
<span>Online learning</span>
`,
everyTime013=
`<span>best result</span>`;
let everyTime021=
` <h1>
With Scholar <br>
Teachers, <br>
Everything is <br>
Easier
</h1>
`  ,
everyTime022=
`
<h1>
    online learning <br>
  helps you save the  <br>
time  </h1>
`,
everyTime023=
`<h1>
get the best result   <br>
out of your effort  <br>
</h1>`;
function nextPhoto(){//23 31 12
    if(ele===1){
        document.getElementById(`photos`).style.backgroundImage = 'url("../Images/banner-item-02.jpg")';
        ele++;
        document.getElementById(`photos`).style.transitionDuration="0.5s";
        document.getElementById(`everytime-01`).innerHTML = everyTime012;
        document.getElementById(`everytime-02`).innerHTML = everyTime022;
    }
    else if(ele===2){
        document.getElementById(`photos`).style.backgroundImage = 'url("../Images/banner-item-03.jpg")';
        ele++;
        document.getElementById(`photos`).style.transitionDuration="0.5s";
        document.getElementById(`everytime-01`).innerHTML = everyTime013;
        document.getElementById(`everytime-02`).innerHTML = everyTime023;
    }
    else {
        document.getElementById(`photos`).style.backgroundImage = 'url("../Images/banner-item-01.jpg")';
        ele=1;
        document.getElementById(`photos`).style.transitionDuration="0.5s";
        document.getElementById(`everytime-01`).innerHTML = everyTime011;
        document.getElementById(`everytime-02`).innerHTML = everyTime021;
    }
}
function backPhoto(){//23 31 12
    
    if(ele===1){
        document.getElementById(`photos`).style.backgroundImage = 'url("../Images/banner-item-03.jpg")';
        ele=3;
        document.getElementById(`photos`).style.transitionDuration="0.5s";
        document.getElementById(`everytime-01`).innerHTML = everyTime013;
        document.getElementById(`everytime-02`).innerHTML = everyTime023;
    }
    else if(ele===2){
        document.getElementById(`photos`).style.backgroundImage = 'url("../Images/banner-item-01.jpg")';
        ele--;
        document.getElementById(`photos`).style.transitionDuration="0.5s";
        document.getElementById(`everytime-01`).innerHTML = everyTime011;
        document.getElementById(`everytime-02`).innerHTML = everyTime021;
    }
    else {
        document.getElementById(`photos`).style.backgroundImage = 'url("../Images/banner-item-02.jpg")';
        ele--;
        document.getElementById(`photos`).style.transitionDuration="0.5s";
        document.getElementById(`everytime-01`).innerHTML = everyTime012;
        document.getElementById(`everytime-02`).innerHTML = everyTime022;
    }
}
let mi=`<img src="../Images/minus.png" alt="minus" >` ,
pl=`<img src="../Images/plus.png" alt="plus" >`;
let drop1=0 , drop2=0 , drop3=0 , drop4=0;
let dontDrop=`
Lorem ipsum dolor sit amet 
consectetur adipisicing elit. 
Ducimus tempora consequatur animi 
 repudiandae aut,
 iure hic rem aspernatur aliquam 
 ad eos earum at dolor nostrum 
maiores eius quis velit minima.
`
function down(s){//        0 1 0 0
    if(s[1]==='1'){     // 1 2 3 4
        //every hight
        document.getElementById('q2').style.height="4em";
        document.getElementById('q3').style.height="4em";
        document.getElementById('q4').style.height="4em";
        //everyplus
        document.getElementById(`plus3` ).innerHTML=pl;
        document.getElementById( `plus2`).innerHTML=pl;
        document.getElementById(`plus4`).innerHTML=pl;
        //every color black
        document.getElementById(`ques3`).style.color="black";
        document.getElementById(`ques2`).style.color="black";
        document.getElementById(`ques4`).style.color="black";
        //every answer
        document.getElementById(`answer2`).innerHTML="";
        document.getElementById(`answer3`).innerHTML="";
        document.getElementById(`answer4`).innerHTML="";

        drop1++;
        drop2=0 , drop3=0 , drop4=0;
        if(drop1===1){
            document.getElementById(`q-and-a`).style.height="40em";
            document.getElementById(`move`).style.marginTop="80px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
            document.getElementById(`plus1`).innerHTML=mi;
            document.getElementById(`about-us`).style.height="35em";
            document.getElementById(s).style.height="10em";
            document.getElementById(`ques${s[1]}`).style.color="rgb(122, 106, 218)";
            document.getElementById(`answer${s[1]}`).innerHTML=dontDrop;
            document.getElementById(`answer${s[1]}`).style.opacity="1";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
        }
        else {
            document.getElementById(`q-and-a`).style.height="30em";
            document.getElementById(`plus1`).innerHTML=pl;
            document.getElementById(`about-us`).style.height="25em";
            document.getElementById(s).style.height="4em";
            document.getElementById(`ques${s[1]}`).style.color="black";
            document.getElementById(`answer${s[1]}`).innerHTML="";
            document.getElementById(`answer${s[1]}`).style.opacity="0";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
            drop1=0;
            document.getElementById(`move`).style.marginTop="0px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
        }
    }
    else if(s[1]==='2'){
        //every hight
        document.getElementById('q1').style.height="4em";
        document.getElementById('q3').style.height="4em";
        document.getElementById('q4').style.height="4em";
        //everyplus
        document.getElementById(`plus3` ).innerHTML=pl;
        document.getElementById( `plus1`).innerHTML=pl;
        document.getElementById(`plus4`).innerHTML=pl;
        //every color black
        document.getElementById(`ques3`).style.color="black";
        document.getElementById(`ques1`).style.color="black";
        document.getElementById(`ques4`).style.color="black";
        //every answer
        document.getElementById(`answer1`).innerHTML="";
        document.getElementById(`answer3`).innerHTML="";
        document.getElementById(`answer4`).innerHTML="";
        drop2++;
        drop1=0 , drop3=0 , drop4=0;
        if(drop2===1){
            document.getElementById(`q-and-a`).style.height="40em";
            document.getElementById(`about-us`).style.height="35em";
            document.getElementById(`move`).style.marginTop="80px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
            document.getElementById(`about-us`).style.transitionDuration="0.5s";
            document.getElementById(`plus2`).innerHTML=mi;
            document.getElementById(s).style.height="10em";
            document.getElementById(`ques${s[1]}`).style.color="rgb(122, 106, 218)";
            document.getElementById(`answer${s[1]}`).innerHTML=dontDrop;
            document.getElementById(`answer${s[1]}`).style.opacity="1";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
        }
        else {
            document.getElementById(`q-and-a`).style.height="30em";
            document.getElementById(`about-us`).style.height="25em";
            document.getElementById(s).style.height="4em";
            document.getElementById(`plus2`).innerHTML=pl;
            document.getElementById(`ques${s[1]}`).style.color="black";
            document.getElementById(`answer${s[1]}`).innerHTML="";
            document.getElementById(`answer${s[1]}`).style.opacity="0";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
            document.getElementById(`move`).style.marginTop="0px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
            drop2=0;
        }
    }
    else if(s[1]==='3'){
        //every hight
        document.getElementById('q2').style.height="4em";
        document.getElementById('q1').style.height="4em";
        document.getElementById('q4').style.height="4em";
        //everyplus
        document.getElementById(`plus1` ).innerHTML=pl;
        document.getElementById( `plus2`).innerHTML=pl;
        document.getElementById(`plus4`).innerHTML=pl;
        //every color black
        document.getElementById(`ques1`).style.color="black";
        document.getElementById(`ques2`).style.color="black";
        document.getElementById(`ques4`).style.color="black";
        //every answer
        document.getElementById(`answer2`).innerHTML="";
        document.getElementById(`answer1`).innerHTML="";
        document.getElementById(`answer4`).innerHTML="";
        drop3++;
        drop2=0 , drop1=0 , drop4=0;
        if(drop3===1){
            document.getElementById(`q-and-a`).style.height="40em";
            document.getElementById(`about-us`).style.height="35em";
            document.getElementById(`move`).style.marginTop="80px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
            document.getElementById(`plus3`).innerHTML=mi;
            document.getElementById(s).style.height="10em";
            document.getElementById(`ques${s[1]}`).style.color="rgb(122, 106, 218)";
            document.getElementById(`answer${s[1]}`).innerHTML=dontDrop;
            document.getElementById(`answer${s[1]}`).style.opacity="1";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
        }
        else {
            document.getElementById(`q-and-a`).style.height="30em";
            document.getElementById(`about-us`).style.height="25em";
            document.getElementById(s).style.height="4em";
            document.getElementById(`ques${s[1]}`).style.color="black";
            document.getElementById(`answer${s[1]}`).innerHTML="";
            document.getElementById(`plus3`).innerHTML=pl;
            document.getElementById(`answer${s[1]}`).style.opacity="0";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
            document.getElementById(`move`).style.marginTop="0px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
            drop3=0;
        }
    }
    else{
        //every hight
        document.getElementById('q2').style.height="4em";
        document.getElementById('q3').style.height="4em";
        document.getElementById('q1').style.height="4em";
        //everyplus
        document.getElementById(`plus3` ).innerHTML=pl;
        document.getElementById( `plus2`).innerHTML=pl;
        document.getElementById(`plus1`).innerHTML=pl;
        //every color black
        document.getElementById(`ques3`).style.color="black";
        document.getElementById(`ques2`).style.color="black";
        document.getElementById(`ques1`).style.color="black";
        //every answer
        document.getElementById(`answer2`).innerHTML="";
        document.getElementById(`answer3`).innerHTML="";
        document.getElementById(`answer1`).innerHTML="";
        drop4++;
        drop2=0 , drop3=0 , drop1=0;
        if(drop4===1){
            document.getElementById(`q-and-a`).style.height="40em";
            document.getElementById(`about-us`).style.height="35em";
            document.getElementById(`move`).style.marginTop="80px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
            document.getElementById(`plus4`).innerHTML=mi;
            document.getElementById(s).style.height="10em";
            document.getElementById(`ques${s[1]}`).style.color="rgb(122, 106, 218)";
            document.getElementById(`answer${s[1]}`).innerHTML=dontDrop;
            document.getElementById(`answer${s[1]}`).style.opacity="1";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
        }
        else {
            document.getElementById(`q-and-a`).style.height="30em";
            document.getElementById(`about-us`).style.height="25em";
            document.getElementById(s).style.height="4em";
            document.getElementById(`ques${s[1]}`).style.color="black";
            document.getElementById(`answer${s[1]}`).innerHTML="";
            document.getElementById(`plus4`).innerHTML=pl;
            document.getElementById(`answer${s[1]}`).style.opacity="0";
            document.getElementById(`answer${s[1]}`).style.transitionDelay="0.1s";
            document.getElementById(`answer${s[1]}`).style.transitionDuration="0.5s";
            document.getElementById(`q-and-a`).style.transitionDuration="0.5s";
            document.getElementById(s).style.transitionDuration="0.5s";
            document.getElementById(`move`).style.marginTop="0px";
            document.getElementById(`move`).style.transitionDuration="0.5s";
            drop4=0;
        }
    }
    
}
let coursesWeb = 
`
<div id="c1">
                        <img src="../Images/course-01.jpg" alt="">
                        <br> <br>
                        <span>Stella Blair</span>
                        <h1>Learn Web Design</h1>
                        <div id="price">
                            <h1>$340</h1>
                            </div>
                    </div>
                    <div id="c3">
                    <img src="../Images/course-03.jpg" alt="">
                    <br> <br>
                    <span>David Huston</span>
                    <h1>Latest Web Trends</h1>
                    <div id="price">
                        <h1>$160</h1>
                        </div>
                </div>
                <div id="c6">
                <img src="../Images/course-06.jpg" alt="">
                <br> <br>
                <span>David Huston</span>
                <h1>Full Stack Developer</h1>
                <div id="price">
                    <h1>$160</h1>
                    </div>
            </div>
`;
let showAll1 = 
`
<div id="c1">
                        <img src="../Images/course-01.jpg" alt="">
                        <br> <br>
                        <span>Stella Blair</span>
                        <h1>Learn Web Design</h1>
                        <div id="price">
                            <h1>$340</h1>
                            </div>
                    </div>
                    <div id="c2">
                        <img src="../Images/course-02.jpg" alt="">
                        <br> <br>
                        <span>Cindy Walker</span>
                        <h1>Web Development Tips</h1>
                        <div id="price">
                            <h1>$640</h1>
                            </div>
                    </div>
                    <div id="c3">
                        <img src="../Images/course-03.jpg" alt="">
                        <br> <br>
                        <span>David Huston</span>
                        <h1>Latest Web Trends</h1>
                        <div id="price">
                            <h1>$160</h1>
                            </div>
                    </div>
`;
let showAll2 = 
`
<div id="c4">
                        <img src="../Images/course-04.jpg" alt="">
                        <br> <br>
                        <span>Stella Blair</span>
                        <h1>Online Learning Steps</h1>
                        <div id="price">
                        <h1>$450</h1>
                        </div>
                    </div>
                    <div id="c5">
                        <img src="../Images/course-05.jpg" alt="">
                        <br> <br>
                        <span>Sophia Rose</span>
                        <h1>Be a Wordpress Master</h1>
                        <div id="price">
                            <h1>$320</h1>
                            </div>
                    </div>
                    <div id="c6">
                        <img src="../Images/course-06.jpg" alt="">
                        <br> <br>
                        <span>David Huston</span>
                        <h1>Full Stack Developer</h1>
                        <div id="price">
                            <h1>$160</h1>
                            </div>
                    </div>
`;
let coursesDev = 
`
<div id="c2">
                        <img src="../Images/course-02.jpg" alt="">
                        <br> <br>
                        <span>Cindy Walker</span>
                        <h1>Web Development Tips</h1>
                        <div id="price">
                            <h1>$640</h1>
                            </div>
                    </div>
                    <div id="c4">
                        <img src="../Images/course-04.jpg" alt="">
                        <br> <br>
                        <span>Stella Blair</span>
                        <h1>Online Learning Steps</h1>
                        <div id="price">
                        <h1>$450</h1>
                        </div>
                    </div>
                    <div id="c5">
                        <img src="../Images/course-05.jpg" alt="">
                        <br> <br>
                        <span>Sophia Rose</span>
                        <h1>Be a Wordpress Master</h1>
                        <div id="price">
                            <h1>$320</h1>
                            </div>
                    </div>
`;
let coursesWord = 
`
<div id="c3">
<img src="../Images/course-03.jpg" alt="">
<br> <br>
<span>David Huston</span>
<h1>Latest Web Trends</h1>
<div id="price">
    <h1>$160</h1>
    </div>
</div>
<div id="c5">
<img src="../Images/course-05.jpg" alt="">
<br> <br>
<span>Sophia Rose</span>
<h1>Be a Wordpress Master</h1>
<div id="price">
    <h1>$320</h1>
    </div>
</div>
<div id="c6">
<img src="../Images/course-06.jpg" alt="">
<br> <br>
<span>David Huston</span>
<h1>Full Stack Developer</h1>
<div id="price">
    <h1>$160</h1>
    </div>
</div>
`;
function WebCourses(){
    document.getElementById(`course1`).innerHTML = coursesWeb;
    document.getElementById(`course2`).innerHTML = "";
    document.getElementById(`course2`).style.height= "0px";
    document.getElementById(`Teams`).style.marginTop= "400px";
    document.getElementById(`course1`).style.opacity= "1";
}
function DevCourses(){
    document.getElementById(`course1`).innerHTML = coursesDev;
    document.getElementById(`course2`).innerHTML = "";
    document.getElementById(`course2`).style.height= "0px";
    document.getElementById(`Teams`).style.marginTop= "400px";
    document.getElementById(`course1`).style.opacity= "1";
}
function WordCourses(){
    document.getElementById(`course1`).innerHTML = coursesWord;
    document.getElementById(`course2`).innerHTML = "";
    document.getElementById(`course2`).style.height= "0px";
    document.getElementById(`Teams`).style.marginTop= "400px";
    document.getElementById(`course1`).style.opacity= "1";
}
function ShowAll(){
    document.getElementById(`course1`).innerHTML = showAll1;
    document.getElementById(`course2`).innerHTML = showAll2;
    document.getElementById(`Teams`).style.marginTop= "700px";
    document.getElementById(`course2`).style.height= "350px";
}