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
                { field: 'type', title: '下拉框分组', width: 200, editRender: {}, slots: { edit: 'edit_type', default: 'default_type' } },
                { field: 'typeList', title: '下拉框分组多选', width: 200, editRender: {}, slots: { edit: 'edit_typeList', default: 'default_typeList' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
            ]
        };
        const typeOptions = [
            {
                label: '分类1',
                options: [
                    { label: '苹果', value: '1-1' },
                    { label: '雪梨', value: '1-2' }
                ]
            },
            {
                label: '分类2',
                options: [
                    { label: '草莓', value: '2-1' },
                    { label: '猕猴桃', value: '2-2' }
                ]
            }
        ];
        return {
            gridOptions,
            typeOptions
        };
    },
    methods: {
        formatTypeLabel(typeList) {
            if (typeList) {
                return typeList.map(type => {
                    for (let i = 0; i < this.typeOptions.length; i++) {
                        const group = this.typeOptions[i];
                        for (let j = 0; j < group.options.length; j++) {
                            const item = group.options[j];
                            if (item.value === type) {
                                return item.label;
                            }
                        }
                    }
                    return type;
                }).join(',');
            }
            return '';
        }
    }
});
