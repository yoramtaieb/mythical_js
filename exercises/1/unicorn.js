class Unicorn {
    constructor(name, color = 'white', crie) {
        this._name = name;
        this._color = color;
        this._crie = crie;
    }
    get name() {
        return this._name;
    }
    get color() {
        return this._color;
    }

    isWhite() {
        return this._color === false;
    }
    says(param) {
        return this._crie = `**;* ${param} *;**`;
    }
}

module.exports = Unicorn;