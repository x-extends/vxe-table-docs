import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            columnConfig: {
                resizable: true
            },
            resizableConfig: {
                dragMode: 'fixed'
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: '最小列宽', minWidth: '20%' },
                { field: 'age', title: 'Age' },
                { field: 'time', title: 'Time' },
                { field: 'address', title: 'Address' }
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
