// Object composition: kode yang distructurkan berdasarkan kemampuan yang dapat dilakukan

class Developer {
    constructor(name) {
        this.name = name
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`)
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI..`)
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API`)
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer))
}


function createBackendDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildAPI(developer))
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer),canBuildAPI(developer), canDeployApp(developer) )
}

const frontEndDeveloper = createFrontEndDeveloper('Nona Valen')
frontEndDeveloper.commitChanges()
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer)

const backEndDeveloper = createBackendDeveloper('Niel');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI()
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer)

const devOpsDeveloper = createDevOps('Angel')
devOpsDeveloper.commitChanges()
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer)

const fullStackDeveloper = createFullStackDeveloper('Daniel Siahaan')
fullStackDeveloper.commitChanges();
fullStackDeveloper.buildUI()
fullStackDeveloper.buildAPI()
fullStackDeveloper.deployApp()
console.log(`${fullStackDeveloper.name} developer?`, fullStackDeveloper instanceof Developer)