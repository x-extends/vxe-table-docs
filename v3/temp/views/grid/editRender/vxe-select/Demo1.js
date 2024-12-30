import Vue from 'vue';
export default Vue.extend({
    data() {
        const sexEditRender = {
            name: 'VxeSelect',
            options: [
                { label: '女', value: 'Women' },
                { label: '男', value: 'Man' }
            ]
        };
        const sexListEditRender = {
            name: 'VxeSelect',
            props: {
                multiple: true
            },
            options: [
                { name: '女', code: 'Women' },
                { name: '男', code: 'Man' }
            ],
            optionProps: {
                label: 'name',
                value: 'code'
            }
        };
        const typeEditRender = {
            name: 'VxeSelect',
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
        const typeListEditRender = {
            name: 'VxeSelect',
            props: {
                multiple: true
            },
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
        const roleEditRender = {
            name: 'VxeSelect',
            props: {
                filterable: true
            },
            options: []
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
                { field: 'sex', title: '下拉单选', width: 200, editRender: sexEditRender },
                { field: 'sexList', title: '下拉多选', width: 200, editRender: sexListEditRender },
                { field: 'type', title: '下拉分组单选', width: 200, editRender: typeEditRender },
                { field: 'typeList', title: '下拉分组多选', width: 200, editRender: typeListEditRender },
                { field: 'role', title: '大数据量选项', width: 200, editRender: roleEditRender }
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
            sexListEditRender,
            typeEditRender,
            typeListEditRender,
            roleEditRender
        };
    },
    created() {
        // 模拟后端接口
        setTimeout(() => {
            const list = [];
            for (let i = 0; i < 10000; i++) {
                list.push({
                    value: `role${i}`,
                    label: `角色${i}`
                });
            }
            this.roleEditRender.options = list;
        }, 100);
    }
});
