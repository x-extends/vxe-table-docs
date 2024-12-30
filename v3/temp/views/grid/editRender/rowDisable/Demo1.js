import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            editConfig: {
                trigger: 'click',
                mode: 'row',
                beforeEditMethod({ rowIndex }) {
                    if (rowIndex === 1) {
                        return false;
                    }
                    return true;
                }
            },
            columns: [
                { type: 'seq', width: 50 },
                { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
                { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
                { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
                { field: 'address', title: 'Address', editRender: { name: 'VxeInput' } }
            ],
            data: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        editDisabledEvent() {
            console.log('禁止编辑');
        }
    }
});
