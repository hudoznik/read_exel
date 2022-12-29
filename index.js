const Excel = require('exceljs');
const fs = require('fs');
const table = 'contragent';
const newLineChar = require('os').EOL;
fs.appendFileSync('insert.sql', `${newLineChar}`);
const workbook = new Excel.Workbook();
let main = async () => {
        await workbook.xlsx.readFile('./для MySQL WB.xlsx');
        let worksheet = workbook.getWorksheet();
        let _rows = worksheet._rows;
        let colums = {qqqqqqqqqqqqq: 'market'};
        _rows[0]._cells.forEach((el) => {
                colums[el._address.replace(/[0-9]/,'')] = el.value
        })
        let rows = [];
        debugger;
        _rows.forEach((row,i) => {
                if (i == 0) return
                if (row._cells.length == 0) return;
                // console.log(row)
                // let obj = {};
                let obj = ['wildberries'];
                Object.keys(colums).forEach((c) => {
                        if (c == 'qqqqqqqqqqqqq') return
                        let rc = row._cells.find(rc => {
                                if (rc == undefined) return false
                                console.log(c)
                                return rc._address.replace(/[0-9]/,'') == c
                        })
                        console.log(c, rc)
                        // obj[colums[c]] = (rc) ? rc.value : '';
                        obj.push((rc) ? rc.value : '');
                })
                rows.push('("'+obj.join('","')+'")')
            // console.log(i)
        })
        debugger;
        await fs.writeFileSync('insert.sql', `INSERT INTO ${table} (${ Object.keys(colums).reduce((map,el) => {
                map.push(colums[el])
                return map
        },[]).join(',')}) VALUES`)
        await fs.appendFileSync('insert.sql', `${newLineChar}${rows.join(',')};`);

        
        process.exit();
}
main()