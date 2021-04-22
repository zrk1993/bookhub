import BaseModel from './base';

export const tableName = 'read_progress';
export interface ITableStructure {
    [propname: string]: any
};

export class ProgressModel extends BaseModel<ITableStructure> {

    constructor() {
        super({ tableName, primaryKey: 'id' });
    }

    async getByBookId(v) {
        return await this.$db.query('SELECT * FROM t_read_progress WHERE book_id = ?', [v])
    }

}

export default new ProgressModel();