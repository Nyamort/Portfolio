//Translate page
class translator{
    //languages object
    _languages;
    //current language
    _currentLanguage;
    //combobox language
    _comboBox;

    constructor(languages,currentLanguage,comboBox) {
        this._languages = languages;
        this._comboBox = comboBox;
        this.currentLanguage = currentLanguage;
        this.buildComboBox(comboBox);
        //detect combobox selection change and execute currentLanguage with new language
        comboBox.addEventListener("change", () => this.currentLanguage = this._languages[this._comboBox.value]);
    }

    //translate all word
    translate(){
        Object.getOwnPropertyNames(this._currentLanguage).forEach((title) => {
            document.getElementById(title).textContent = this._currentLanguage[title];
        })
    }

    //change current language
    set currentLanguage(newLanguage){
        this._currentLanguage = newLanguage;
        this.translate();
    }

    //build combobox with languages
    buildComboBox(comboBox){
        Object.getOwnPropertyNames(this._languages).forEach(language => {
            let option = document.createElement("option");
            option.setAttribute("value",language);
            option.setAttribute("data-icon","flag-icon flag-icon-squared flag-icon-rounded fa-2x flag-icon-"+language);
            comboBox.append(option)
        })
    }
}

const languages = {
    gb: {
        header__home: "home",
        header__about: "about",
        header__skills: "skills",
        home__welcome: "Hi, I'm Romain, web developer",
        home__jobs: "front-end developer / back-end developer"
    },
    fr: {
        header__home: "accueil",
        header__about: "a propos",
        header__skills: "compétences",
        home__welcome: "Bonjour, Je m'appelle Romain, developpeur web",
        home__jobs: "développeur front-end / développeur back-end"
    }
}
const default_Language = languages.gb;
const comboBox_Language = document.getElementById("comboBox__icon__select");

new translator(languages,default_Language,comboBox_Language);







