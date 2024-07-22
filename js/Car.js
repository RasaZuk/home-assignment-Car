export class Car {
    constructor(pavadinimas, modelis, spalva, kuroTalpa, vidSanaudos, isjungta, greitis) {
        this.brand = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.gasTank = kuroTalpa;
        this.usage = vidSanaudos;
        this.engineStatus = isjungta;
        this.speed = greitis;
    }

    engineOn(a) {
        if (this.engineStatus !== 0) {
            return 'Išjungto variklio išjungti negalima.';
        }
        return 'Automobilio variklis įjungiamas.';
    }

    engineOff(a) {
        if (this.engineStatus === 0) {
            return 'Įjungti variklį dar kartą negalima, sugadinsi starterį.';
        }
        return 'Automobilio variklis išjungiamas.';
    }

    start(a) {
        return `Važiavimo pradžia sunaudoja ${(a + a)} litrus kuro.`;
    }

    driving(a) {
        return `Nuvažiavus 175 km sunaudojama ${(this.usage * 2) + (this.usage * 175 / 100)} litrų kuro.`;
    }

    stop(a) {
        if (this.speed === 0) {
            return 'Automobilis sustoja.';
        }
        this.speed--;
        return `Autobobilio greitis sumažėjo iki ${this.speed} km/val.`;
    }

    gasRemainder(a) {
        return `Kuro likuris po pasivažinėjimo yra ${this.gasTank - a} litrų.`;
    }

    topUpGas(a) {
        if (a < 50) {
            return `Kai kuro bako talpa yra 50 litrų reikia užpilti ${this.gasTank - a} litrų kuro.`;
        } else
            return 'Kuro bakas pilnas.';
    }

}
