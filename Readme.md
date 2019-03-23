Client Riche
============

Bienvenu sur mon repertoire qui regroupe les différents TD du module **Client Riche**
de l'option Web du DUT Informatique de l'Université de Caen, Ifs Campus 3.
Ils sont animés par **Jean Christophe HERON**.


Langages et framework utilisés
------------------------------
* HTML
* CSS
* JS
* MONGODB

* Ember JS - [Ember](https://emberjs.com/)
* SEMANTIC UI 2.4.2 - [Semantic](https://semantic-ui.com/)

Installer l'application
-----------------------

Pour les TD de 0 à 3
 Sur D:
 
	npm install -g ember-cli	
	set PATH=%PATH%;C:\Users\21701944\AppData\Roaming\npm	
	ember -v
	ember new ember-nom-du-projet
	cd ember-nom-du-projet
	ember serve
	
	Visualiser votre application sur le lien suivant: _http://127.0.0.1:8080/_
	
	Si le port **8080** est deja occupe par WAMP par exemple executer les commandes suivantes:
	cms en admin
	netstat -ano | findstr 8080
	taskkill / pid PIDPROCESSUS /F
	
Pour le TD 4 utilisant une base de donnees MongoDB:

**A telecharger :**

MongoDB  .zip
https://www.mongodb.com/download-center/community 

Restheart version 3.8.1
https://github.com/SoftInstigate/restheart/releases

launch_mongo_restheart.zip
https://slamwiki.kobject.net/richclient/emberjs/td4

Sur D:
	dezipper ces trois dossiers
	
	modifier le .bat afin que les chemins soit les bon
	
	ex:
		@echo off		
		cd "D:\mongodb\bin"			
		start mongod				
		ping 127.0.0.1 -n 10 > nul				
		start mongo								
		cd "D:\restheart-3.8.1"				
		start java -jar -Dfile.Encoding=UTF-8 restheart.jar				
		exit
				
	executer mongod.exe our lancer le demon (serveur)
	
	puis le .jar de restheart avec la commande suivante:
		ava -jar restheart.jar
		
	Lancer le client en double-cliquant sue le .bat launcher du TD4
	ou bien executer dans un termial :
	 D:/mongo.exe

	Ne pas oublier d'insatller ember-cli-uuid pour les clés uniques d'id
	et aussi semantic ui ou bootstrap pour le rendu client :
	* ember install semantic-ui-ember
	* ember install ember-bootstrap
	
Quelques commandes Ember
------------------------

	ember g adapter application
	ember g serializer application
	
	ember g model developer
	
	ember g route developers
	ember g route developers/new

Quelques commandes MongoDB
--------------------------

	>use dbTest
	switched to db dbTest

	> db.createCollection('Users',{})
	{ "ok" : 1 }
	
	>show collections
	Users

	> db.Users.insert({name:'DOE', age:25, client:false})
	WriteResult({ "nInserted" : 1 })
	
	>db.Users.find().pretty()
	{
		name:'DOE',
		age:25,
	}

	se rendre sur _http://127.0.0.1:8080/dbTest/Users_

Etudiant
--------

Ces TDs sont realises par Laura SCELLES, etudiant en deuxieme annee de DUT Informatique
a l'universite de Caen.














