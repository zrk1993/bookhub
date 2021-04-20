import BaseModel from './base';

export const tableName = 'book';
export interface ITableStructure {
    [propname: string]: any
};

export class BookModel extends BaseModel<ITableStructure> {

    constructor() {
        super({ tableName });
    }

}

export default new BookModel();