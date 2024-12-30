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
                { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput' } },
                { field: 'num', title: '数字', width: 180, editRender: { name: 'VxeNumberInput' } },
                { field: 'integer', title: '整数', width: 180, editRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
                { field: 'float', title: '小数', width: 180, editRender: { name: 'VxeNumberInput', props: { type: 'float' } } },
                { field: 'money', title: '金额', width: 180, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: null, integer: null, float: null, money: 10000 },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: 22, integer: 23, float: 22.35, money: null },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: 32, integer: null, float: null, money: null }
            ]
        };
        return {
            gridOptions
        };
    }
});
