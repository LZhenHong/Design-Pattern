export default class Book {
    private mName: string = "";
    public get name(): string {
        return this.mName;
    }

    constructor(name: string) {
        this.mName = name;
    }
}
