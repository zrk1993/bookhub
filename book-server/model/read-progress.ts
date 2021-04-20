import BaseModel from './base';

export const tableName = 'read_progress';
export interface ITableStructure {
    [propname: string]: any
};

export class ProgressModel extends BaseModel<ITableStructure> {

    constructor() {
        super({ tableName, primaryKey: 'id' });
    }

}

export default new ProgressModel();