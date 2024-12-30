import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            columnConfig: {
                resizable: true
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', width: 300 },
                { field: 'role', title: 'Role', width: 300 },
                { field: 'sex', title: 'Sex', width: 200 },
                { field: 'age', title: 'Age', width: 200 },
                { field: 'address', title: 'Address', width: 400 }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    }
});
