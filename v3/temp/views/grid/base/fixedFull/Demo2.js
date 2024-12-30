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
                { field: 'seq', type: 'seq', width: 70 },
                { field: 'name', title: 'Name', width: 300 },
                { field: 'role', title: 'Role', minWidth: 300 },
                { field: 'sex', title: 'Sex', minWidth: 500 },
                { field: 'date', title: 'Date', minWidth: 600 },
                { field: 'action', title: '操作', width: 200, slots: { default: 'action' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
                { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 26, address: 'test abc' },
                { id: 10010, name: 'Test10', role: 'Develop', sex: 'Man', age: 38, address: 'test abc' },
                { id: 10011, name: 'Test11', role: 'Test', sex: 'Women', age: 29, address: 'test abc' },
                { id: 10012, name: 'Test12', role: 'Develop', sex: 'Man', age: 27, address: 'test abc' },
                { id: 10013, name: 'Test13', role: 'Test', sex: 'Women', age: 24, address: 'test abc' },
                { id: 10014, name: 'Test14', role: 'Develop', sex: 'Man', age: 34, address: 'test abc' },
                { id: 10015, name: 'Test15', role: 'Test', sex: 'Man', age: 21, address: 'test abc' },
                { id: 10016, name: 'Test16', role: 'Develop', sex: 'Women', age: 20, address: 'test abc' },
                { id: 10017, name: 'Test17', role: 'Test', sex: 'Man', age: 31, address: 'test abc' },
                { id: 10018, name: 'Test18', role: 'Develop', sex: 'Women', age: 32, address: 'test abc' },
                { id: 10019, name: 'Test19', role: 'Test', sex: 'Man', age: 37, address: 'test abc' },
                { id: 10020, name: 'Test20', role: 'Develop', sex: 'Man', age: 41, address: 'test abc' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        toggleFixedColumn(field, type) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                const column = $grid.getColumnByField(field);
                if (column) {
                    if (column.fixed) {
                        $grid.clearColumnFixed(column);
                    }
                    else {
                        $grid.setColumnFixed(column, type);
                    }
                }
            }
        }
    }
});
