//change 5 to the total number of questions
var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Who composed the Moonlight Sonata?"
choice1[1]="Beethoven"
choice1[2]="Mozart"
choice1[3]="Chopin"
choice1[4]="Bach"

question[2]="Which key is C major scale starting on?"
choice2[1]="C"
choice2[2]="D"
choice2[3]="G"
choice2[4]="A"

question[3]="Which of the following instruments is part of the string family?"
choice3[1]="Flute"
choice3[2]="Violin"
choice3[3]="Trumpet"
choice3[4]="Timpani"

question[4]="What is the Italian term for 'soft' in music dynamics?"
choice4[1]="Forte"
choice4[2]="Piano"
choice4[3]="Allegro"
choice4[4]="Crescendo"

question[5]="How many notes are in a standard octave?"
choice5[1]="5"
choice5[2]="6"
choice5[3]="7"
choice5[4]="8"

solution[1]="a"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="d"

