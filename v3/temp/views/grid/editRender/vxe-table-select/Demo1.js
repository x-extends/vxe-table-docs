import Vue from 'vue';
export default Vue.extend({
    data() {
        const currUserEditRender = {
            name: 'VxeTableSelect',
            props: {
                columns: [
                    { field: 'label', title: 'Name' },
                    { field: 'role', title: 'Role' },
                    { field: 'sex', title: 'Sex' },
                    { field: 'address', title: 'Address' }
                ]
            },
            options: [
                { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        };
        const currUserListEditRender = {
            name: 'VxeTableSelect',
            props: {
                multiple: true,
                columns: [
                    { field: 'label', title: 'Name' },
                    { field: 'role', title: 'Role' },
                    { field: 'sex', title: 'Sex' },
                    { field: 'address', title: 'Address' }
                ]
            },
            options: [
                { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        };
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
                { field: 'currUser', title: '下拉树单选', width: 200, editRender: currUserEditRender },
                { field: 'currUserList', title: '下拉树多选', width: 200, editRender: currUserListEditRender }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', currUser: null, currUserList: [] },
                { id: 10002, name: 'Test2', role: 'Test', currUser: 10002, currUserList: [10001] },
                { id: 10003, name: 'Test3', role: 'PM', currUser: null, currUserList: [10001, 10004] }
            ]
        };
        return {
            gridOptions,
            currUserEditRender,
            currUserListEditRender
        };
    }
});
