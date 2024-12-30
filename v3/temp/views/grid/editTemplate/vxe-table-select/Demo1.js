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
                { field: 'name', title: 'Name', minWidth: 200, editRender: { autoFocus: 'input' }, slots: { edit: 'edit_name', default: 'default_name' } },
                { field: 'currUser', title: '下拉树单选', width: 200, editRender: {}, slots: { edit: 'currUser_edit', default: 'currUser_default' } },
                { field: 'currUserList', title: '下拉树多选', width: 200, editRender: {}, slots: { edit: 'currUserList_edit', default: 'currUserList_default' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', currUser: null, currUserList: [] },
                { id: 10002, name: 'Test2', role: 'Test', currUser: 10002, currUserList: [10001] },
                { id: 10003, name: 'Test3', role: 'PM', currUser: null, currUserList: [10001, 10004] }
            ]
        };
        const currUserColumns = [
            { field: 'label', title: 'Name' },
            { field: 'role', title: 'Role' },
            { field: 'sex', title: 'Sex' },
            { field: 'address', title: 'Address' }
        ];
        const currUserOptions = [
            { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
            { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ];
        const currUserListColumns = [
            { field: 'label', title: 'Name' },
            { field: 'role', title: 'Role' },
            { field: 'sex', title: 'Sex' },
            { field: 'address', title: 'Address' }
        ];
        const currUserListOptions = [
            { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
            { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ];
        return {
            gridOptions,
            currUserColumns,
            currUserOptions,
            currUserListColumns,
            currUserListOptions
        };
    },
    methods: {
        formatCurrUserLabel(val) {
            const item = this.currUserOptions.find(item => item.value === val);
            return item ? item.label : val;
        },
        formatCurrUserListLabel(vals) {
            if (vals) {
                return vals.map(val => {
                    const item = this.currUserListOptions.find(item => item.value === val);
                    return item ? item.label : val;
                }).join(',');
            }
            return '';
        }
    }
});
