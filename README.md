#Portfolio

Mon portfolio en html/css/js

##Module de traduction
###Mettre en place
```javascript
const languages = {
    gb: {},
    fr: {}
}//Objet contenant tous les langues
const default_Language = languages.gb; //langue par defaut
const comboBox_Language = document.getElementById("comboBox__icon__select");//combobox pour selectionner la langue
new translator(languages,default_Language,comboBox_Language);
```
###Ajouter une langue
```javascript
const languages = {
    gb: {},
    fr: {},
    es: {}
}
```
###Ajouter une traduction
```javascript
const languages = {
    gb: {
        translateOne:"Hello world",
        translateTwo:"Nothing",
    },
    fr: {
        translateOne:"Bonjour tous le monde",
        translateTwo:"Rien"
    },
    es: {
        translateOne:"Hola mundo",
        translateTwo:"Nada"
    }
}
```