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
                { field: 'name', title: 'Name', minWidth: 200, editRender: {}, slots: { edit: 'edit_name', default: 'default_name' } },
                { field: 'sex', title: '下拉框', width: 200, editRender: {}, slots: { edit: 'edit_sex', default: 'default_sex' } },
                { field: 'sexList', title: '下拉框多选', width: 200, editRender: {}, slots: { edit: 'edit_sexList', default: 'default_sexList' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
            ]
        };
        const sexOptions = [
            { label: '女', value: 'Women' },
            { label: '男', value: 'Man' }
        ];
        return {
            gridOptions,
            sexOptions
        };
    },
    methods: {
        formatSexLabel(sexList) {
            if (sexList) {
                return sexList.map(sex => {
                    const item = this.sexOptions.find(item => item.value === sex);
                    return item ? item.label : sex;
                }).join(',');
            }
            return '';
        }
    }
});
