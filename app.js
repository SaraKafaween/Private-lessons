 var name = prompt("what is you name?")
 console.log(name)
 alert("wlecome to my website " + name + " :)" )

 var subject = prompt("what is your subject want? (math , physics)")

while(subject != "math" && subject != "physics"){
  subject = prompt("what is your subject want? (math , physics)")
}



function subjectfun()
{



if( subject == "math" ){
var times= prompt("how many time you wish to see it on my page ")
while(times > 10){
  times = prompt("please enter less than 10 time to see you subject")
}
for(var i = 0 ; i < times; i++) {
document.write("<div>" + "<h3>" + subject +"</h3>" + "<img src='https://th.bing.com/th/id/R0ab3cc9933bae5bba3af8cf391331c53?rik=tD16PJ8%2flhUUyg&riu=http%3a%2f%2fwww.niutoday.info%2fwp-content%2fuploads%2f2016%2f02%2fmath.jpg&ehk=vYIr3iPobA7dMHZ5Be3j1rWxFcdupxIY8Fn28sTZFCA%3d&risl=&pid=ImgRaw' alt='math'>" + "</div>")
}

}
else if (subject == "physics"){
  var times= prompt("how many time you wish to see it on my page ")
while(times > 10){
  times = prompt("please enter less than 10 time to see you subject")
}
for(var i = 0 ; i < times; i++) {
document.write("<div>" + "<h3>" + subject +"</h3>" + "<img src='https://th.bing.com/th/id/OIP.XuHaqlIzTRPwW37MtcjouQAAAA?w=252&h=189&c=7&o=5&pid=1.7' alt='physics'>" + "</div>")
}
}
else{
  alert("we don't support this subject")
}
 console.log(subject)

 if (subject != null)
 {document.write("<h4>" + subject + "</h4>")}
 
 else{
   alert("you didn't input anything")
 }
}
subjectfun() 

function stars() 
{
var stars = parseInt(prompt('How stars rate the website from (1-5)'))
  for(var i = 0 ; i < stars; i++) {
document.write("<img src='https://th.bing.com/th/id/OIP.PhTult-iqJf0_IDlixPfNAHaHa?pid=ImgDet&w=600&h=600&rs=1' alt='stars'>")
}
}

stars() 