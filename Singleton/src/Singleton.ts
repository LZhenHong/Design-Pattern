export default class Singleton {
    private static mInstance: Singleton = new Singleton();
    public static get instance(): Singleton {
        return this.mInstance;
    }

    private constructor() {
        console.log(`Singleton constructor.`);
    }
}
