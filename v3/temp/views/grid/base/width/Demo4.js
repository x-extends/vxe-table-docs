import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            columns: [
                { type: 'seq', width: '10%' },
                { field: 'name', title: 'Name', width: '30%' },
                { field: 'role', title: 'Role', width: '20%' },
                { field: 'sex', title: 'Sex', width: '20%' },
                { field: 'date', title: 'Date', width: '20%' }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    }
});
