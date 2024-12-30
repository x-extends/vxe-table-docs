import Vue from 'vue';
export default Vue.extend({
    data() {
        const icon2EditRender = {
            name: 'VxeIconPicker',
            options: [
                'home', 'company', 'comment', 'setting', 'send', 'envelope', 'envelope-open', 'bell', 'search', 'print', 'pc', 'goods', 'chart-line', 'edit', 'delete', 'save', 'sunny', 'rmb', 'usd', 'user'
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
                { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput', props: { clearable: true } } },
                { field: 'icon1', title: '图标1', width: 100, editRender: { name: 'VxeIconPicker' } },
                { field: 'icon2', title: '图标2', width: 100, editRender: icon2EditRender }
            ],
            data: [
                { id: 10001, name: 'Test1', icon1: '', icon2: 'vxe-icon-home' },
                { id: 10002, name: 'Test2', icon1: 'vxe-icon-home', icon2: '' }
            ]
        };
        return {
            gridOptions,
            icon2EditRender
        };
    }
});
