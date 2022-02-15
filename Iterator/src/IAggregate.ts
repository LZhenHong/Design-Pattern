import IIterator from "./IIterator";

export default interface IAggregate<T> {
    iterator(): IIterator<T>;
}
