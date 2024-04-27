/* for loop:*/
/* document.write("<h1> for loop: </h1>")*/

/*let sum = 0
let num = 10

for(let i = 1; i <= num; i++) {
    sum = sum + i // 15
    document.write("sum = ", sum, "<br>")
}

document.write("loop has ended <br>");*/

/* while loop:*/

// document.write("<h1> while loop: </h1>")
//      // while loop:
/* while loop ko lkhne ka ye treeqa h k iske parenthesis m hm srf stopping condition lkhte hn
bqi initialization hm loop se bahar uske upr krte hn or updation loop k undr last m krte hn */

/*let i = 1;
while(i <= 5) {
    document.write("i = ", i, "<br>")
    i++
}*/

//     // do-while loop:

// document.write("<h1> do-while loop: </h1>")
/* ab do while ko lkhne ka treeqa blkl while loop ki trhn hi h bs hm usko stopping condition
blkl last m btate hn jski wjh se hmn while loop bh last m lgana hta h or initialization or
updation jse while loop m aata hta h oosi trhn aayega. k initialization do se phle krnge or
updation loop k undr lkn do k undr blkl last m. */

/* let i = 1
do{
    document.write("i =", i, "<br>")
    i++
}
while(i <= 5) */

//      // for-of loop:

// document.write("<h1> for-of loop: </h1>")
/* ab dkhte hn k for-of loop ko lkhne ka kia treeqa h. iske lye hm phle lkhte hn for phr
paranthesis lgate hn or uske undr variable declare krte hn phr of keyword ka use krte hn or phr
hm whn us variable ka naam lkhte hn jske undr string ya array ho or us string ko hmn ek ek 
character krke print krwna ho. ab qk js trhn hm dsre loop lgate hn usmn kia hta h usmn bh hm ksi
pe loop lgate hn yni koi string hti h, koi array hta h, koi object hta h or uspe loop lgate hn
t islye abhi bh hmn jspe loop lgana hga t phle oose declare krnge yni abhi mjhe agr string pe
loop lgana h t mjhe phle string bnani pregi phr uspe loop lgaoungi t phle hm string bnate hn
phr uspe loop lgaenge. ab swl ye aata h k hmne ismn val name se variable q bnaya h t wo islye
qk hm jb array pe loop lgate th t i k name se variable bnate th qk array k index hte hn or object
pe jb loop lgate hn t key k name se variable bnaenge qk object m keys hti hn isi trhn string m 
values hti hn islye string p loop lgate wqt hm val k name se variable bnate hn. acha ab ek r bt
jb hm general loops prhte th t usmn kia hta th hmn oose print krwte wqt btana prta th k array k
index pe jao ya is trhn kch bh lkn ab ye jo special loops hn ismn kia h hmne strt m jb loop strt
kia h whin bta dia h k string ki values print krwni h t islye ab print krwte time hmn nh btana
prega k string ki values pe jao blke ab direct values lkh k print krwa dnge t wo print hjaega qk
hmne strt m btadia h k string pe jao t wo print krte time khud hi string pe chla jaega. */

// let str = "Javeria Farooq"
// let size = 0

// for(let val of str) {
//     document.write("value = ", val, "<br>")
//     size++
// }

// document.write("length of string =", size) // space bh count krta h ye.

// document.write("<h1> for-in loop: </h1>")

// let obj = {
//     fullName : "Javeria",
//     age : 20,
//     percent: 74,
//     faculty: "Information Technology",
//     isPass: true
// }

// for(let key in obj) {
//     document.write(key, "<br>")
// }
/* ab yh ek msla hgya h r wo ye k jb hm object k keys ko print krwte hn t uski keys print hti h
values nh hti js trhn string ko krwte we uski value as a character print hti hn is trhn object
ki values print nh hti t iske lye hmn kia krna prega iske lye hmn ye krna prega k js trhn hm
arrays ko print krwte time uske index ko get krte th isi trhn object ki keys ko get krnge qk
arrays or object mn multiple items hte h js wjh se uski values ko get krne k lye hmn square 
braces lgane prte h or string m multiple items nh hte islye uski values directly get hjti hn */

/* let student = {
    name : "Afnan",
    age: 10,
    faculty: "Hifz o nazra",
    isPass: true
}
for(let key in student) {
    document.write(key, " = ", student[key], "<br>")
}*/

//         // practice questions:
// qno:1

/* for(let num = 0; num <= 100; num++) {
    document.write(num, "<br>")
} */

// odd numbers:

// for(let num = 0; num <= 100; num++) {
//     if(num%2 !== 0) {
//         document.write("num = ", num, "<br>")
//     }
// }

// qno:2
// let gameNum = 25
/* let guessNum = +prompt("Guess the correct number")

for(let gameNum = 25; guessNum !== gameNum;) {
    guessNum = +prompt("you entered wrong number. guess again")
    
}
alert("Congratulations you guessed correct number") */


/*let num = 0

for(let i = 99; i > num; i--) {
    console.log(i)
}*/




































