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
        const res = await this.$db.query('SELECT * FROM t_read_progress WHERE book_id = ?', [v])
        return res ? res[0] : null
    }
    async updateByBookId (id, v) {
        return await this.$db.table(this.$tableName).where({ 'book_id': id }).update(v);
    }

}

export default new ProgressModel();