import BaseModel from './base';

export const tableName = 'appearance';
export interface ITableStructure {
    [propname: string]: any
};

export class AppearanceModel extends BaseModel<ITableStructure> {

    constructor() {
        super({ tableName,primaryKey: 'id' });
    }

}

export default new AppearanceModel();