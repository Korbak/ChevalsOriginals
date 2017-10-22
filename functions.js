function genererNom(typePremierMot,typeSecondMot,liaison) {

    var premierMot = '';
    var secondMot = '';
    var tabVerbes = ['Mange:n',
        'Avale:n',
        'Baise:n',
        'Lèche:n',
        'Broute:n',
        'Saint:m',
        'Sainte:f',
        'File:n',
        'Court:n',
        'Vole:n',
        'Double:n',
        'Gagne:n',
        'Prend:n',
        'Triple:n',
        'Quadruple:n',
        'Perfuse:n',
        'Dope:n',
        'Chante:n',
        'Mord:n',
        'Balance:n',
        'Mache:n',
        'Bisouille:n',
        'Donne:n',
        'Porte:n',
        'Fait:n',
        'Déboite:n',
        'Allume:n'    
    ];

    var tabNoms = ['Napoléon:m',
        'Gaspard:m',
        'Simone:f',
        'Hyppolite:m',
        'Gland:m', 
        'Vulve:f',
        'Vagin:m',
        'Bisounours:m',
        'Grenouille:f',
        'Lèpre:f',
        'Cloaque:m',
        'Verrue:f',
        'Gingivite:f',
        'Dentiste:m',
        'Péridurale:f',
        'Chaton:m',
        'Petit Chien:m',
        'Mensonge:m',
        'Caca:m',
        'Bilboquet:m',
        'Fesse:f',
        'Biberon:m',
        'Mycose:f',
        'Prolapsus:m',
        'Autopsie:f',
        'Poil:m',
        'Poignard:m',
        'Concombre:m',
        'Aubergine:f',
        'Péritonite:f',
        'Bébé:m',
        'Chinchilla:m',
        'Barbarie:f',
        'Macroniste:m',
        'Masochiste:m',
        'Savon:m',
        'Orteil:m',
        'Moustique:m',
        'Hippopotame:m',
        'Paparazzi:m',
        'Pompier:m',
        'Danseuse:f',
        'Danseur:m',
        'Caramel:m',
        'Ratatouille:f',
        'Gâteau:m',
        'Fraisier:m',
        'Moutarde:f',
        'Fourchette:f',
        'Oignon:m',
        'Libertin:m',
        'Libertine:f',
        'Gourgandin:m',
        'Gourgandine:f',
        'Clitoris:m',
        'Pirate:n',
        'Ciboulette:f',
        'Samoussa:m',
        'Golfeur:m',
        'Golfeuse:f',
        'Torture:f',
        'Tortionnaire:m',
        'Flocon:m',
        'Neige:f',
        'Robot:m',
        'Nuit:f',
        'Jarret:m',
        'Sabot:m',
        'Crinière:f',
        'Stevie:m',
        'Artichaud:m',
        'Rappeur:m',
        'Rappeuse:f',
        'Koala:m',
        'Yaourt:m',
        'Chouquette:f',
        'Robe:f',
        'Menstruation:f',
        'Macabée:m',
        'Escargot:m',
        'Limace:f',
        'Viking:m',
        'Visigoth:m',
        'Hypocampe:m',
        'Meringue:f',
        'Culotte:f',
        'Cheval:m',
        'Jument:f',
        'Canasson:m',
        'Clavicule:f',
        'Ténia:m',
        'Diarrhée:f',
        'Paquerette:f',
        'Marteau:m',
        'Grogonzola:m',
        'Cacahuète:f',
        'Équarisseur:m',
        'Équarisseuse:f',
        'Taxydermiste:n'
    ];

    var tabAdjectifs = ['fabuleux:m',
        'fabulous:m',
        'fabuleuse:f',
        'mélancolique:n',
        'joufflu:m',
        'joufflue:f',
        'anarchiste:n',
        'macroniste:n',
        'bubonique:n',
        'rose:n',
        'violet:m',
        'violette:f',
        'boiteux:m',
        'boiteuse:f',
        'colérique:n',
        'musclé:m',
        'musclée:f',
        'hypocondriaque:n',
        'mythomane:n',
        'mignon:m',
        'mignonne:f',
        'transcendantale:n',
        'quantique:n',
        'poilu:m',
        'poilue:f',
        'dodu:m', 
        'dodue:f', 
        'paranoïaque:n',
        'soyeux:m', 
        'soyeuse:f', 
        'électrique:n',
        'cannibal:m',
        'cannibale:f',
        'complotiste:n',
        'sexy:n',
        'insomniaque:n',
        'moisi:m',
        'moisie:f',
        'rapide:n',
        'mascu:n',
        'échangiste:n',
        'branlant:m',
        'branlante:f',
        'lépreuse:f',
        'lépreux:m',
        'tout Doux:m', 
        'toute Douce:f',
        'bavard:m',
        'bavarde:f', 
        'cramé:m',
        'cramée:f',
        'mou:m',
        'molle:f',
        'turquoise:n',
        'fasciste:n',
        'contaminé:m',
        'contaminée:f',
        'frisé:m',
        'frisée:f',
        'libidineux:m',
        'libidineuse:f',
        'célibataire:n',
        'de droite:n',
        'bourgeois:m',
        'bourgeoise:f',
        'salé:m',
        'salée:f',
        'sucré:m',
        'sucrée:f',
        'original:m',
        'originale:f',
        'préhistorique:n',
        'cinéphile:n',
        'trotskyste:n',
        'fégnant:m',
        'féignante:f',
        'fénéant:m',
        'fénéant:f',
        'cynique:n',
        'extrémiste:n',
        'courtois:m',
        'courtoise:f',
        'périmé:m',
        'périmée:f',
        'jetable:n',
        'garou:n',
        'indomptable:n',
        'mouillé:m',
        'mouillée:f',
        'gonflé:m',
        'gonflée:f',
        'ventru:m',
        'ventrue:f',
        'défraichi:m',
        'défraichie:f',
        'lyophylisé:m',
        'lyophylisée:f',
        'en cube:n',
        'allumé:m',
        'allumée:f',
        'déboité:m',
        'déboité:f'
    ];

    if(typePremierMot == 'verbe') {
        premierMot = tabVerbes[Math.floor(Math.random()*tabVerbes.length)];
    }
    else if(typePremierMot == 'nom') {
        premierMot = tabNoms[Math.floor(Math.random()*tabNoms.length)];
    }
    else if(typePremierMot == 'adjectif') {
        premierMot = tabAdjectifs[Math.floor(Math.random()*tabAdjectifs.length)];
    }

    var genrePremierMot = premierMot[premierMot.length -1];
    var genreSecondMot = '';

    while(genrePremierMot != genreSecondMot || premierMot == secondMot) {
        if(typeSecondMot == 'nom') {
            secondMot = tabNoms[Math.floor(Math.random()*tabNoms.length)];
        }
        else if(typeSecondMot == 'adjectif') {
            secondMot = tabAdjectifs[Math.floor(Math.random()*tabAdjectifs.length)];
        }

        genreSecondMot = secondMot[secondMot.length -1];

        if(genreSecondMot == 'n'|| genrePremierMot == 'n') {
            genreSecondMot = genrePremierMot;
        }
    }
    
    premierMot = premierMot.slice(0, -2);
    secondMot = secondMot.slice(0, -2);

    premierMot = premierMot.charAt(0).toUpperCase() + premierMot.slice(1);
    secondMot = secondMot.charAt(0).toUpperCase() + secondMot.slice(1);

	return premierMot + liaison + secondMot;

}

function generer() {

	var typePremierMot, typeSecondMot, liaison;
	var nomCheval = '';
	var typeNomCheval = (Math.floor(Math.random()*3) + 1);

	if(typeNomCheval == 1 || typeNomCheval == 2) {
		typePremierMot = 'nom';
		if(typeNomCheval == 1) {
			typeSecondMot = 'nom';
			liaison = ' de ';
        }
		else {
			typeSecondMot = 'adjectif';
			liaison = ' ';
        }
    }
	else {
		typePremierMot = 'verbe';
		typeSecondMot = 'nom';
		liaison = '-';
			
	}

	while(nomCheval == '' || nomCheval.length > 18) {
		nomCheval = genererNom(typePremierMot,typeSecondMot,liaison);
	}

	var divPoney = document.getElementById('NomPoney');
	divPoney.innerHTML = nomCheval;
}
