export interface ResponseModel<T> {
    info: InfoModel;
    results: T;
}

interface InfoModel {
    count: number;
    pages: number;
    next: string;
    prev: any;
}
