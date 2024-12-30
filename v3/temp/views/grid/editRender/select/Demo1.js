import Vue from 'vue';
export default Vue.extend({
    data() {
        const sexEditRender = {
            name: 'select',
            options: [
                { label: '女', value: 'Women' },
                { label: '男', value: 'Man' }
            ]
        };
        const typeEditRender = {
            name: 'select',
            optionGroups: [
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
                { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'input' } },
                { field: 'sex', title: '下拉框', width: 200, editRender: sexEditRender },
                { field: 'type', title: '下拉框分组', width: 200, editRender: typeEditRender }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
            ]
        };
        return {
            gridOptions,
            sexEditRender,
            typeEditRender
        };
    }
});
