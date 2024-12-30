import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            height: 500,
            checkboxConfig: {
                labelField: 'name',
                visibleMethod({ row }) {
                    return row.sex === 'Women';
                }
            },
            columns: [
                { type: 'checkbox', title: 'All' },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Women', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Test', sex: 'Women', age: 38, address: 'Shenzhen' },
                { id: 10007, name: 'Test7', role: 'Develop', sex: 'Women', age: 29, address: 'Shenzhen' }
            ]
        };
        return {
            gridOptions
        };
    }
});
