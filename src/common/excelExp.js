import XLSX from 'xlsx';
import intl from 'react-intl-universal';


  // 导出xlsx
const excelUtil = (headers, data, fileName = '记录表.xlsx') => {
    const _headers = headers
      .map((item, i) => Object.assign({}, { key: item.key, title: item.title, position: String.fromCharCode(65 + i) + 1 }))
      .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { key: next.key, v: next.title } }), {});
  
    const _data = data
      .map((item, i) => headers.map((key, j) => Object.assign({}, { content: item[key.key], position: String.fromCharCode(65 + j) + (i + 2) })))
      // 对刚才的结果进行降维处理（二维数组变成一维数组）
      .reduce((prev, next) => prev.concat(next))
      // 转换成 worksheet 需要的结构
      .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.content } }), {});
  
    // 合并 headers 和 data
    const output = Object.assign({}, _headers, _data);
    // 获取所有单元格的位置
    const outputPos = Object.keys(output);
    // 计算出范围 ,["A1",..., "H2"]
    const ref = `${outputPos[0]}:${outputPos[outputPos.length - 1]}`;
  
    // 构建 workbook 对象
    const wb = {
      SheetNames: ['mySheet'],
      Sheets: {
        mySheet: Object.assign(
          {},
          output,
          {
            '!ref': ref,
            '!cols': [{ wpx: 280 },{ wpx: 100 }, { wpx: 100 }, { wpx: 100}, { wpx: 80 }, { wpx: 80 }, { wpx: 100 }, { wpx: 50 }, { wpx: 100 }, { wpx: 100 }, { wpx: 300 }, { wpx: 300 }, { wpx: 300 }],
          },
        ),
      },
    };
  
    // 导出 Excel
    XLSX.writeFile(wb, fileName);

  }

  const initColumn = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },  
  {
    title:"名前",
    dataIndex: 'name',
    key: 'name',
  }, {
    title:"予約番号",
    dataIndex: 'code',
    key: 'code',
  }, {
    title: "職業",
    dataIndex: 'job',
    key: 'job',
  },{
    title: "住址",
    dataIndex: 'address',
    key: 'address',
  },{
    title: "施設",
    dataIndex: 'constructionId',
    key: 'constructionId',
  },{
    title: "情報を完全に入力してください",
    dataIndex: 'visitorTime',
    key: 'visitorTime',
  },{
    title:"入住人数",
    dataIndex: 'visitorNum',
    key: 'visitorNum',
  },{
    title: "前住宿地",
    dataIndex: 'faccommodation',
    key: 'faccommodation',
  },{
    title: "目的地",
    dataIndex: 'destination',
    key: 'destination',
  },{
    title: '护照',
    dataIndex: 'pic1RandomName',
    key: 'pic1RandomName',
  },{
    title: '手持护照',
    dataIndex: 'pic2RandomName',
    key: 'pic2RandomName',
  },{
    title: '签名',
    dataIndex: 'signPicRandomName',
    key: 'signPicRandomName',
  }];
  export {
    excelUtil,
    initColumn
  } 

