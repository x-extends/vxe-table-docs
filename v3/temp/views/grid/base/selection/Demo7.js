import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            rowConfig: {
                isHover: true
            },
            columns: [
                { type: 'checkbox', width: 60 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: 'Sex' },
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
    },
    methods: {
        setSelectRow(rows = [], checked) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setCheckboxRow(rows, checked);
            }
        },
        clearSelectEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.clearCheckboxRow();
            }
        }
    }
});
