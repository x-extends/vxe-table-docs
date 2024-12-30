import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            columns: [
                { type: 'checkbox', width: 60, slots: { header: 'checkbox_header', checkbox: 'checkbox_cell' } },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: 'Sex' },
                { field: 'num', title: 'Number' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address' }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        toggleAllCheckboxEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.toggleAllCheckboxRow();
            }
        },
        toggleCheckboxEvent(row) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.toggleCheckboxRow(row);
            }
        },
        selectRowEvent(row, checked) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setCheckboxRow(row, checked);
            }
        }
    }
});
