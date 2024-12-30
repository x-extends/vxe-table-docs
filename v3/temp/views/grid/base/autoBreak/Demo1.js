import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: '列头自动换行列头自动换行', width: 120 },
                { field: 'age', title: 'Age' }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: '内容自动换行内容自动换行内容自动换行内容自动换行内容自动换行', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    }
});
