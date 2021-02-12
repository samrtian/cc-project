
export interface StorageInterface {
    set(key: string, value: string): void;

    get(key: string): string;

    setObject(key: string, value: any): void;

    getObject(key: string): any;

    remove(key: string): any;
}
