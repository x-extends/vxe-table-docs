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
                { field: 'name', title: 'Name', minWidth: 180, editRender: {}, slots: { edit: 'edit_name' } },
                { field: 'num', title: '数字', width: 180, editRender: {}, slots: { edit: 'edit_num' } },
                { field: 'integer', title: '整数', width: 180, editRender: {}, slots: { edit: 'edit_integer' } },
                { field: 'float', title: '小数', width: 180, editRender: {}, slots: { edit: 'edit_float' } },
                { field: 'date', title: '日期', width: 180, editRender: {}, slots: { edit: 'edit_date' } },
                { field: 'year', title: '年份', width: 180, editRender: {}, slots: { edit: 'edit_year' } },
                { field: 'quarter', title: '季度', width: 180, editRender: {}, slots: { edit: 'edit_quarter', default: 'default_quarter' } },
                { field: 'month', title: '月份', width: 180, editRender: {}, slots: { edit: 'edit_month' } },
                { field: 'week', title: '周', width: 180, editRender: {}, slots: { edit: 'edit_week', default: 'default_week' } },
                { field: 'time', title: '时间', width: 180, editRender: {}, slots: { edit: 'edit_time' } },
                { field: 'datetime', title: '日期带时间', width: 180, editRender: {}, slots: { edit: 'edit_datetime' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: '', integer: '', float: '', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: '22', integer: '23', float: '22.35', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: '32', integer: '', float: '', date: '2024-06-06', time: '10:30:45', year: '2024', quarter: '2024-01-01', month: '2024-06', week: '2024-06-03', datetime: '2024-06-06 10:30:45', address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        formatQuarterLabel(date) {
            if (date) {
                return XEUtils.toDateString(date, 'yyyy 年第 q 季度');
            }
            return '';
        },
        formatWeekLabel(date) {
            if (date) {
                return XEUtils.toDateString(date, 'yyyy 年第 WW 周');
            }
            return '';
        }
    }
});
