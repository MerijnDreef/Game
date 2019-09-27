//SCP game :3

var decision1 = prompt("You are now in a corridor with 2 ways, on the left is a doorway, on the right of it is an elevator. Where do you go? (answer with left or right)");
if(decision1 =="left") {
    alert("As you went through the doorway you see a dead scientist with a level 3 keycard, you take the scientists key card and continue forward for 10 hallways.");
 
    var decision2 = prompt("After the ten hallways you see a sign that says:'scp-914' and another doorway (say left or right)");
    if(decision2 == "left"){
        alert("As you use the level 3 keycard on the door it opens and you start upgrading your keycard through 914. After upgrading you decide to continue through the doorway.");
    }

    else if(decision2 =="right"){
            alert("As you go through the doorway you enter a room with 3 other doorways")
            alert("You first check the left doorway, as you open it the hallway has collapsed and seems no way through it.")
            alert("You try the middle door, it is a dead end with a medkit and you take it with you")
            alert("as you go to the last door you see guards running away from the doorway while SCP-096 screams at the top of his lungs, you accidently look at his face and you are concidered dead.")
            document.write("You have been eaten by SCP-096 with only leaving blood as your remains"+"<br>"+"<a href='http://www.scp-wiki.net/scp-096'>")
    }

}
else if(decision1 =="right"){
    document.write("You went down the elevator, when it arrived you went out and encountert SCP-049 (aka the plague doctor). As you tried to get away from him you got cornered, he then made physical contact with you, followed by you perishing and being turned into a 'cured' "+"<br>"+"<a href='http://www.scp-wiki.net/scp-049'");
}
   