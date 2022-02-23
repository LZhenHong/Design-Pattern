import Singleton from "../src/Singleton";

export default abstract class Main {
    public static run() {
        let singleton1 = Singleton.instance;
        let singleton2 = Singleton.instance;

        console.log(singleton1 === singleton2);
    }
}
