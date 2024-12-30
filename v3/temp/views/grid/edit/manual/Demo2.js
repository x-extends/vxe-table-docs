import Vue from 'vue';
import { VxeUI } from 'vxe-table';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            keepSource: true,
            loading: false,
            height: 400,
            editConfig: {
                trigger: 'click',
                mode: 'row',
                showStatus: true,
                autoClear: false
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
                { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
                { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
                { title: '操作', slots: { default: 'action' } }
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
    },
    methods: {
        hasEditStatus(row) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                return $grid.isEditByRow(row);
            }
        },
        editRowEvent(row) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setEditRow(row);
            }
        },
        saveRowEvent(row) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.clearEdit().then(() => {
                    this.gridOptions.loading = true;
                    setTimeout(() => {
                        this.gridOptions.loading = false;
                        VxeUI.modal.message({ content: `保存成功！name=${row.name}`, status: 'success' });
                    }, 300);
                });
            }
        },
        cancelRowEvent(row) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.clearEdit().then(() => {
                    // 还原行数据
                    $grid.revertData(row);
                });
            }
        }
    }
});
