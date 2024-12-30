import Vue from 'vue';
import XEUtils from 'xe-utils';
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
                { field: 'region', title: '下拉树单选', width: 200, editRender: {}, slots: { edit: 'region_edit', default: 'region_default' } },
                { field: 'regionList', title: '下拉树多选', width: 200, editRender: {}, slots: { edit: 'regionList_edit', default: 'regionList_default' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', region: '', regionList: [] },
                { id: 10002, name: 'Test2', role: 'Test', region: '2-1', regionList: ['1-2', '2-1'] },
                { id: 10003, name: 'Test3', role: 'PM', region: '', regionList: [] }
            ]
        };
        const regionOptions = [
            {
                label: '广东省',
                value: '1',
                children: [
                    { label: '深圳市', value: '1-1' },
                    { label: '广州市', value: '1-2' }
                ]
            },
            {
                label: '北京',
                value: '2',
                children: [
                    { label: '东城区', value: '2-1' },
                    { label: '西城区', value: '2-2' }
                ]
            }
        ];
        const regionListOptions = [
            {
                label: '广东省',
                value: '1',
                children: [
                    { label: '深圳市', value: '1-1' },
                    { label: '广州市', value: '1-2' }
                ]
            },
            {
                label: '北京',
                value: '2',
                children: [
                    { label: '东城区', value: '2-1' },
                    { label: '西城区', value: '2-2' }
                ]
            }
        ];
        return {
            gridOptions,
            regionOptions,
            regionListOptions
        };
    },
    methods: {
        formatRegionLabel(val) {
            const rest = XEUtils.findTree(this.regionOptions, item => item.value === val, { children: 'children' });
            return rest ? rest.item.label : val;
        },
        formatRegionListLabel(vals) {
            if (vals) {
                return vals.map(val => {
                    const rest = XEUtils.findTree(this.regionListOptions, item => item.value === val, { children: 'children' });
                    return rest ? rest.item.label : val;
                }).join(',');
            }
            return '';
        }
    }
});
