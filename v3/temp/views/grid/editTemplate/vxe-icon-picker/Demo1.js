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
                { field: 'name', title: 'Name', minWidth: 180, editRender: { autoFocus: 'input' }, slots: { edit: 'edit_name', default: 'default_name' } },
                { field: 'icon', title: '图标', width: 100, editRender: {}, slots: { edit: 'icon_edit', default: 'icon_default' } }
            ],
            data: [
                { id: 10001, name: 'Test1', icon: '', iconList: [] },
                { id: 10002, name: 'Test2', icon: 'vxe-icon-home', iconList: [] }
            ]
        };
        return {
            gridOptions
        };
    }
});
