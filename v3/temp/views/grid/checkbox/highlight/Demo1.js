import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            height: 500,
            rowConfig: {
                isHover: true
            },
            checkboxConfig: {
                labelField: 'name',
                highlight: true
            },
            columns: [
                { type: 'checkbox', title: 'Name', width: 300 },
                { field: 'id', title: 'ID' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    }
});
