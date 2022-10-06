

    form.onsubmit = function () 
    {
    event.preventDefault();
    const namePlayer = document.getElementById("firstname").value;
    const niveau = document.getElementById("niveau").value;
    console.log(namePlayer)
    const random = Math.floor(Math.random() * 100) + 1;
    console.log(random)
    let firstValue
    let compteur = 0;
                while (firstValue !== random) 
                {
                        /*incrément du compteur*/
                        compteur = compteur + 1
                        /*console.log ( compteur );*/
                        firstValue = prompt("choisir un numero entre 1 et 100");
                        /*sortir si annuler*/
                        if (firstValue === null){
                               alert ("Au revoir.")
                         {break}
                        }
                                if (firstValue > random) {
                                    alert ("c'est moins")
                                }
                                if (firstValue < random) {
                                    alert ("c'est plus")
                                } 
                                if (firstValue == random) {
                                    alert (`${namePlayer} tu as gagné en ${compteur} coups`)
                                    {break}
                                }
                                if (compteur > niveau - 1) {
                                    alert ("Game Over, le nombre à deviner était : " + random)
                                    {break}
                                }
                }
            }