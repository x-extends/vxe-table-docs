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
                { field: 'role', title: '大数据量选项', width: 200, editRender: {}, slots: { edit: 'edit_role', default: 'default_role' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
            ]
        };
        const roleOptions = [];
        return {
            gridOptions,
            roleOptions
        };
    },
    methods: {
        formatRoleLabel(role) {
            const item = this.roleOptions.find(item => item.value === role);
            return item ? item.label : role;
        }
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
            this.roleOptions = list;
        }, 100);
    }
});
