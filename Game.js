//SCP game :3

var decision1 = prompt("You are now in a corridor with 2 ways, on the left is a doorway, on the right of it is an elevator. Where do you go? (answer with left or right)");
if(decision1 =="left") {
    alert("As you went through the doorway you see a dead scientist with a level 3 keycard, you take the scientists key card and continue forward for 10 hallways.");
 
    var decision2 = prompt("After the ten hallways you see a sign that says:'scp-914' and another doorway (say left or right)");
    if(decision2 == "left"){
        alert("As you use the level 3 keycard on the door it opens and you start upgrading your keycard through 914. After upgrading you decide to continue through the doorway.");
        alert("after you open the doorway you see a guard running followed by him falling on the ground after that he is viciously and horrible ripped apart and eaten by SCP-096")
        alert("but as soon as you saw SCP-096 you look away and check the doors around you facing away from SCP-096")
        alert("the door on the left when opened showed a collapsed hallway so you left it the middle doorway was a storage room with a medkit you take the medkit.")
        alert("the last doorway contained a brutal sight of ripped guts and torn body parts with blood everywhere presumed from former guards, but you close the door behind you and go through it.")

        var decision4 = prompt("You come across a locked room that requiers a level 3 keycard to open you see it is scp-012. what do you do? ( write continue or enter)")
        
        if(decision4 == "continue"){
            alert("You ignore it and continue your journey through the facility")

            var decision5 = prompt("while you you scouring through the hallways you came across another SCP room this time it says it is SCP-714, what do you do?(write continue or enter)")
            if(decision5 = "continue"){
                alert("you ignored the SCP and moved one")
            }
            else if(decision5 = "enter"){
                alert("you grab your keycard and go in its containment you grab it and you see it's document, you now know that is gives you resiliance to damage at the cost of reaction time when worn. After grabbing the ring you continue your journey.")
            }
                var decision6 = prompt("After like 10 hallways you encounter SCP-035 containment what do you do?(write continue or enter)")
                if(decision6 == "continue"){
                    alert("you ignored it and moved on")

                    alert("You then see a checkpoint out of light containment you run to it and open the doors followed by you going in an elevator to the heavy containment zone but then while you are walking you hear an old dark laugh") you turn around and it is 106! You run through what seems like endless corridors.")
                    alert("you turn around and it is 106! You run through what seems like endless corridors.")
                    
                }
                else if("enter"){
                    alert("you go in and see a man in white covered in some kind of black goo he asks you to open the door but you refuse and see the documents afterwards you gas him and he escapes with you being killed in the process.")
                        document.write("you died to being overwhelmed by the goo that melted you."+"<br>"+"<a href='http://www.scp-wiki.net/scp-035'")
                }
            
        }
    
        else if(decision4 == "enter"){
            alert("as you go in to see the SCP you come across a button. You press the button and the door opens as you go in you see a paper,")
            alert("you go to it and continue writing it with your blood but you die to blood loss as you keep pushing your nails in to your body so you can wright with it."+"<br>"+"<a href='http://www.scp-wiki.net/scp-012'")
            document.write("You died to losing too much blood while writing on SCP-012"+"<br>"+"<a href='http://www.scp-wiki.net/scp-012'")
        }



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
   