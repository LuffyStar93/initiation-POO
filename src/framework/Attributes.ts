export class Attributes<P extends object> {
    constructor(private data: P){}

    get = <K extends keyof P>(key: K) : P[K] => {
        return this.data[key]
    }

    set(update: Partial<P>){
        Object.assign(this.data, update) // {name: 'John Doe', age: 34} - {age: 56}
    }

    getAllProps(): P {
        return this.data
    }
}
