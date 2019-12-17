document.addEventListener("DOMContentLoaded", function(event){


    console.log('loaded');

    const groups = [

        {
            titre:"JEAN BOIN",
            comments:"Ingénieur TELECOM",
            id: 1,
            firstname:"Jean",
            lastname:"Boin",
            age:"34 ans",
            town:"- Paris - ",
            country:" France",
            img: "https://i.goopics.net/ELLxj.jpg"
        },
        {
            titre:"PAUL POT",
            comments:"Mucisien Professionnel",
            id: 2,
            firstname:"Paul",
            lastname:"Pot",
            age:"23 ans",
            town:"- Lille - ",
            country:" France",
            img:"https://i.goopics.net/2jAre.jpg"
        },
        {
            titre:"ROBERT RABOT",
            comments:"Directeur Artistique",
            id:3,
            firstname:"Robert",
            lastname:"Rabot",
            age:"65 ans",
            town:"- Madrid - ",
            country:" Espagne",
            img:"https://i.goopics.net/5jybY.jpg"
    
        },
        {
            titre:"GÉRARD GROS",
            comments:"Commercial",
            id: "4",
            firstname:"Gerard",
            lastname:"Gros",
            age:"42 ans",
            town:"- Bruxelle - ",
            country:" Belgique",
            img:"https://i.goopics.net/jj8wR.jpg"
        },
        {
            titre:"THIERRRY FORT",
            comments:"Développeur WEB",  
            id: 5,
            firstname:"Thierry",
            lastname:"Fort",
            age:"18 ans",
            town:"- Bordeaux - ",
            country:" France",
            img:"https://i.goopics.net/KLJkY.jpg"
        },
        {
            titre:"LAURENT BLAZE",
            comments:"Ingénieur informatique",
            id: 6,
            firstname:"Laurent",
            lastname:"Blaze",
            age:"36 ans",
            town:"- Toulouse - ",
            country:" France",
            img:"https://i.goopics.net/lpkNJ.jpg"
        },
        {
            titre:"CHARLES BINOT",
            comments:"Médecin",
            id: 7,
            firstname:"Charles",
            lastname:"Binot",
            age:"58 ans",
            town:"- Lyons - ",
            country:" France",
            img:"https://i.goopics.net/oy3Je.jpg"
        },
        {
            titre:"NICOLAS REZE",
            comments:"Ingénieur informatique",
            id: 8,
            firstname:"Nicolas",
            lastname:"Reze",
            age:"45 ans",
            town:"- Montpellier - ",
            country:" France",
            img:"https://i.goopics.net/y94Kb.jpg"
        }
    ];

    //console.log('group', group)

[]
    for(let i = 0 ; i < groups.length ; i++) {

        //console.log("i", i)
        //console.log(groups[i])
        

        const group = document.getElementById('group')
        const article = document.getElementsByClassName('article')[0]
        const clone = article.cloneNode(true)
        clone.id = 'member' + groups[i].id.toString()// bonus ajouter id unique a chaque clone

        const title = document.createElement("h2");// création nvlle element h2 ds variable
        title.innerHTML = groups[i].titre

        const comments = document.createElement("h3")
        comments.innerHTML = groups[i].comments

        const elem = document.createElement("p");// créer nvelle element p ds variable
        elem.innerHTML =/*groups[i].id + ' ' + groups[i].firstname + ' ' 
        + groups[i].lastname + ' ' + */groups[i].age + ' ' + groups[i].town + ' ' 
        + groups[i].country // ajout contenu nvelle utilisateur en cours

        const elemimg = document.createElement("img");// créer nvelle element image ds variable
        elemimg.src = groups[i].img

        clone.appendChild(title);// injection de l'élément title ds le clone
        clone.appendChild(elemimg);// injection de l'élément img ds le clone
        clone.appendChild(comments);// injection élément comments ds le clone
        clone.appendChild(elem); // injection de l'element ds le clone
        group.appendChild(clone);//injection du clone ds DOM
        clone.classList.remove('hidden');//RETIRE HIDDEN AU CLONE
        

    }
})


