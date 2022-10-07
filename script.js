

    form.onsubmit = function () 
    {
    event.preventDefault();
    /*pour charger la valeur du prenom*/
    let namePlayer = document.getElementById("firstname").value;
            /*le prenom commence par une majuscule*/
            function majFirst(maj) {
                return maj.charAt(0).toUpperCase() + maj.slice(1)
                }
                namePlayer = majFirst(namePlayer)  
                document.getElementById("firstname").value = namePlayer
                console.log(namePlayer);
            /*pour charger le niveau de tour(s)*/        
            const niveau = document.getElementById("niveau").value;
            /*le random*/
            const random = Math.floor(Math.random() * 100) + 1;
            console.log(random);
        
        let firstValue
        let compteur = 0;
                while (firstValue !== random)
                {
                        /*incrément du compteur*/
                        compteur = compteur + 1
                            /* Teste si la saisie au prompt est un nombre compris entre 1 et 100 */
                            function verif(saisie)
                                {
                                    if(isNaN(saisie) || saisie.length===0 || saisie < 1 || saisie > 100)
                                    {      
                                    saisie = verif(prompt("Recommence, ce n'est pas un nombre entre 1 et 100 !"));
                                    }
                                    return saisie;
                                }
                        /*console.log ( compteur );*/
                        firstValue = verif(prompt("choisir un numero entre 1 et 100"));
                        /*sortir si annuler*/
                        if (firstValue === null){
                            alert (`Au revoir ${namePlayer}.`);
                            break;
                        }
                                if (firstValue > random) {
                                    alert ("c'est moins");
                                }
                                if (firstValue < random) {
                                    alert ("c'est plus");
                                } 
                                if (firstValue == random) {
                                    alert (`${namePlayer} c'était bien ${random}. Tu as gagné en ${compteur} coup(s).`);
                                    break;
                                }
                                if (compteur > niveau - 1) {
                                    alert (`Game Over, le nombre à deviner était : ${random}.`);
                                    break;
                                }
                }
    }