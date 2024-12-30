import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            editConfig: {
                trigger: 'click',
                mode: 'row'
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'VxeInput' } },
                { field: 'userName', title: '下拉列表', width: 200, editRender: { autoFocus: 'input' }, slots: { edit: 'userNameEdit', default: 'userNameDefault' } },
                { field: 'role', title: '下拉表格', width: 200, editRender: { autoFocus: 'input' }, slots: { edit: 'roleEdit', default: 'roleDefault' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', userName: 'test6' },
                { id: 10002, name: 'Test2', role: 'Test', userName: 'test1' },
                { id: 10003, name: 'Test3', role: 'PM', userName: 'test5' },
                { id: 10004, name: 'Test4', role: 'Test', userName: 'test5' },
                { id: 10005, name: 'Test5', role: 'Develop', userName: 'test2' },
                { id: 10006, name: 'Test6', role: 'Develop', userName: 'test1' },
                { id: 10007, name: 'Test7', role: 'PM', userName: 'test7' },
                { id: 10008, name: 'Test8', role: 'Develop', userName: 'test5' }
            ]
        };
        return {
            gridOptions
        };
    }
});
