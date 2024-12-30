import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            height: 300,
            rowConfig: {
                isHover: true
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', sortable: true },
                { field: 'role', title: 'Role', sortable: true },
                { field: 'age', title: 'Age', sortable: true },
                { field: 'num', title: '字符串', sortable: true, sortType: 'string' },
                { field: 'num2', title: '数值', sortable: true, sortType: 'number' },
                { field: 'address', title: 'Address', sortable: true }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        sortEvent(field, order) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.sort({ field, order });
            }
        },
        clearSortEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.clearSort();
            }
        }
    }
});
