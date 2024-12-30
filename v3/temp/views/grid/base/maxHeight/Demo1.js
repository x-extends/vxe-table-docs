import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            maxHeight: 200,
            rowConfig: {
                isHover: true
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', sortable: true },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
            ]
        };
        return {
            gridOptions
        };
    }
});
