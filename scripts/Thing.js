export default class Thing {

    /**
     * @param {String} name - the name of this
     * @param {String} desc - the description of this
     */
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.id = Thing.id++;
    }

}

Thing.id = 1;