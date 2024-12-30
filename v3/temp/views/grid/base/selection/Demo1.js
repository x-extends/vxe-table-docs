import Vue from 'vue';
import { VxeUI } from 'vxe-table';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            height: 300,
            rowConfig: {
                isCurrent: true,
                isHover: true
            },
            radioConfig: {
                labelField: 'name',
                trigger: 'row'
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
        selectAllChangeEvent({ checked }) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                const records = $grid.getCheckboxRecords();
                console.log(checked ? '所有勾选事件' : '所有取消事件', records);
            }
        },
        selectChangeEvent({ checked }) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                const records = $grid.getCheckboxRecords();
                console.log(checked ? '勾选事件' : '取消事件', records);
            }
        },
        toggleSelectRow(row) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.toggleCheckboxRow(row);
            }
        },
        setSelectRow(rows, checked) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setCheckboxRow(rows, checked);
            }
        },
        selectAllEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setAllCheckboxRow(true);
            }
        },
        clearSelectEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.clearCheckboxRow();
            }
        },
        getSelectEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                const selectRecords = $grid.getCheckboxRecords();
                VxeUI.modal.alert(`${selectRecords.length}条数据`);
            }
        }
    }
});
