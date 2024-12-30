import Vue from 'vue';
export default Vue.extend({
    data() {
        const color2EditRender = {
            name: 'VxeColorPicker',
            options: [
                '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD', '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF', '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371', '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500'
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
                { field: 'color1', title: '颜色1', width: 100, editRender: { name: 'VxeColorPicker' } },
                { field: 'color2', title: '颜色2', width: 100, editRender: color2EditRender }
            ],
            data: [
                { id: 10001, name: 'Test1', color1: '', color2: '#FF00FF' },
                { id: 10002, name: 'Test2', color1: '#409eff', color2: '' }
            ]
        };
        return {
            gridOptions,
            color2EditRender
        };
    }
});
