import Vue from 'vue';
import XEUtils from 'xe-utils';
const neList = XEUtils.shuffle(['最牛科技', '老六软件', '智能科技', '非凡科技', '发展软件', '超级元宇宙', '航天概念', '短视频概念', '东方科技', '中华科技股', '中国最强概念股', '消费概念', '农业概念', '东方智能', '传播科技', '智慧企业', '智慧科技', '智能汽车', '区块链']);
const cacheList = [];
export default Vue.extend({
    data() {
        const formatAmount = ({ cellValue }) => {
            if (cellValue) {
                return XEUtils.commafy(cellValue, { digits: 2 });
            }
            return '';
        };
        const formatWanAmount = ({ cellValue }) => {
            if (cellValue) {
                return `${XEUtils.floor(cellValue / 10000, 2)}万`;
            }
            return '';
        };
        const gridOptions = {
            border: true,
            loading: false,
            stripe: true,
            showOverflow: true,
            showFooter: true,
            height: '100%',
            columnConfig: {
                drag: true,
                resizable: true
            },
            columnDragConfig: {
                trigger: 'cell',
                showIcon: false,
                showGuidesStatus: true
            },
            rowConfig: {
                isHover: true
            },
            toolbarConfig: {
                custom: true
            },
            checkboxConfig: {
                range: true
            },
            cellStyle({ column, row }) {
                const cellValue = row[column.field];
                switch (column.field) {
                    case 'increaseRatio':
                    case 'udRatio':
                    case 'expansionRatio':
                    case 'netInflow':
                    case 'theCommittee':
                        return {
                            color: cellValue < 0 ? 'green' : 'red'
                        };
                    case 'volumeRatio':
                        return {
                            color: cellValue < 1 ? 'green' : 'red'
                        };
                    case 'maxNum':
                        return {
                            color: row.increaseRatio < 0 ? 'green' : 'red'
                        };
                    case 'minNum':
                        return {
                            color: row.expansionRatio < 0 ? 'green' : 'red'
                        };
                }
            },
            footerCellStyle({ column, row }) {
                const cellValue = row[column.field];
                switch (column.field) {
                    case 'increaseRatio':
                    case 'udRatio':
                    case 'expansionRatio':
                    case 'netInflow':
                    case 'theCommittee':
                        return {
                            color: cellValue < 0 ? 'green' : 'red'
                        };
                    case 'volumeRatio':
                        return {
                            color: cellValue < 1 ? 'green' : 'red'
                        };
                    case 'maxNum':
                        return {
                            color: row.increaseRatio < 0 ? 'green' : 'red'
                        };
                    case 'minNum':
                        return {
                            color: row.expansionRatio < 0 ? 'green' : 'red'
                        };
                }
            },
            mouseConfig: {
                selected: true
            },
            keyboardConfig: {
                isEdit: true,
                isArrow: true,
                isEnter: true,
                isBack: true,
                isDel: true,
                isEsc: true
            },
            scrollX: {
                gt: 0,
                enabled: true
            },
            scrollY: {
                gt: 0,
                mode: 'wheel',
                enabled: true
            },
            columns: [
                { field: 'name', title: '名称', fixed: 'left', width: 200 },
                { field: 'currentPrice', title: '现价', minWidth: 100, formatter: formatAmount },
                { field: 'increaseRatio', title: '涨幅', minWidth: 100 },
                { field: 'udRatio', title: '涨跌', minWidth: 100 },
                { field: 'expansionRatio', title: '涨速', minWidth: 100 },
                { field: 'transactionQuantity', title: '成交量', minWidth: 100, formatter: formatWanAmount },
                { field: 'netInflow', title: '净流入', minWidth: 100, formatter: formatWanAmount },
                { field: 'maxNum', title: '最高', minWidth: 100 },
                { field: 'minNum', title: '最低', minWidth: 100 },
                { field: 'theCommittee', title: '委比', minWidth: 100 },
                { field: 'volumeRatio', title: '量比', minWidth: 100 },
                { field: 'turnoverRate', title: '换手率', minWidth: 100 },
                { field: 'priceEarningsRatio', title: '市盈率', minWidth: 100 },
                { field: 'totalMarketValue', title: '总市值', minWidth: 100, formatter: formatWanAmount },
                { field: 'circulatingMarketValue', title: '流通市值', minWidth: 100, formatter: formatWanAmount }
            ],
            data: [],
            footerData: [
                {},
                {},
                {},
                {}
            ]
        };
        return {
            gridOptions,
            formatAmount,
            formatWanAmount,
            isStop: false,
            udTime: undefined
        };
    },
    methods: {
        loadMockData(rSize) {
            this.gridOptions.loading = true;
            setTimeout(() => {
                for (let i = cacheList.length; i < rSize; i++) {
                    const item = {
                        id: 1000000 + i,
                        name: neList[i % neList.length],
                        currentPrice: 0,
                        increaseRatio: 0,
                        udRatio: 0,
                        expansionRatio: 0,
                        transactionQuantity: 0,
                        netInflow: 0,
                        maxNum: 0,
                        minNum: 0,
                        theCommittee: 0,
                        volumeRatio: 0,
                        turnoverRate: 0,
                        priceEarningsRatio: 0,
                        totalMarketValue: 0,
                        circulatingMarketValue: 0
                    };
                    cacheList.push(item);
                }
                const footItems = [];
                for (let i = 0; i < 4; i++) {
                    const item = {
                        id: 1000000 + i,
                        name: neList[i % neList.length],
                        currentPrice: 0,
                        increaseRatio: 0,
                        udRatio: 0,
                        expansionRatio: 0,
                        transactionQuantity: 0,
                        netInflow: 0,
                        maxNum: 0,
                        minNum: 0,
                        theCommittee: 0,
                        volumeRatio: 0,
                        turnoverRate: 0,
                        priceEarningsRatio: 0,
                        totalMarketValue: 0,
                        circulatingMarketValue: 0
                    };
                    footItems.push(item);
                }
                this.gridOptions.data = cacheList.slice(0, rSize);
                this.gridOptions.footerData = footItems;
                this.gridOptions.loading = false;
                this.startUpdateData();
            }, 150);
        },
        stopUpdateData() {
            this.isStop = true;
            if (this.udTime !== undefined) {
                clearTimeout(this.udTime);
            }
        },
        startUpdateData() {
            if (this.isStop) {
                clearTimeout(this.udTime);
                this.udTime = undefined;
                return;
            }
            this.gridOptions.data.forEach(row => {
                Object.assign(row, {
                    currentPrice: XEUtils.random(99999, 999999),
                    increaseRatio: XEUtils.random(1, 999) / 100 * (XEUtils.random(0, 1) ? 1 : -1),
                    udRatio: XEUtils.random(1, 99) / 100 * (XEUtils.random(0, 1) ? 1 : -1),
                    expansionRatio: XEUtils.random(1, 99) / 100 * (XEUtils.random(0, 1) ? 1 : -1),
                    transactionQuantity: XEUtils.random(899999, 999999),
                    netInflow: XEUtils.random(1, 9999) * (XEUtils.random(0, 1) ? 1 : -1),
                    maxNum: XEUtils.random(899999, 999999),
                    minNum: XEUtils.random(99999, 109999),
                    theCommittee: XEUtils.random(1, 99) * (XEUtils.random(0, 1) ? 1 : -1),
                    volumeRatio: XEUtils.random(1, 20) / 10,
                    turnoverRate: XEUtils.random(1, 50) / 10,
                    priceEarningsRatio: XEUtils.random(99, 99999) * (XEUtils.random(0, 1) ? 1 : -1),
                    totalMarketValue: XEUtils.random(999999, 9999999),
                    circulatingMarketValue: XEUtils.random(999999, 9999999)
                });
            });
            this.gridOptions.footerData.forEach(row => {
                Object.assign(row, {
                    currentPrice: XEUtils.random(99999, 999999),
                    increaseRatio: XEUtils.random(1, 999) / 100 * (XEUtils.random(0, 1) ? 1 : -1),
                    udRatio: XEUtils.random(1, 99) / 100 * (XEUtils.random(0, 1) ? 1 : -1),
                    expansionRatio: XEUtils.random(1, 99) / 100 * (XEUtils.random(0, 1) ? 1 : -1),
                    transactionQuantity: XEUtils.random(899999, 999999),
                    netInflow: XEUtils.random(1, 9999) * (XEUtils.random(0, 1) ? 1 : -1),
                    maxNum: XEUtils.random(899999, 999999),
                    minNum: XEUtils.random(99999, 109999),
                    theCommittee: XEUtils.random(1, 99) * (XEUtils.random(0, 1) ? 1 : -1),
                    volumeRatio: XEUtils.random(1, 20) / 10,
                    turnoverRate: XEUtils.random(1, 50) / 10,
                    priceEarningsRatio: XEUtils.random(99, 99999) * (XEUtils.random(0, 1) ? 1 : -1),
                    totalMarketValue: XEUtils.random(999999, 9999999),
                    circulatingMarketValue: XEUtils.random(999999, 9999999)
                });
            });
            this.udTime = setTimeout(() => {
                this.startUpdateData();
            }, 1500);
        }
    },
    created() {
        this.loadMockData(100);
    },
    beforeDestroy() {
        this.stopUpdateData();
    }
});
