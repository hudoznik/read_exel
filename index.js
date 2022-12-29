const Excel = require('exceljs');
const workbook = new Excel.Workbook();
let main = async () => {
        await workbook.xlsx.readFile('/home/hudoznik/Загрузки/Telegram Desktop/для MySQL WB.xlsx');
        let worksheet = workbook.getWorksheet();
        let _rows = worksheet._rows;
        let colums = [];
        _rows[0]._cells.forEach((el) => {
                        colums[el._address] = el.value
        })
        debugger;
        _rows.forEach((row,i) => {
                if (i == 0) return
                colums.forEach((c,i) => {
                        let rc = row._cells.find(rc => rc._address == i)
                        console.log(c, rc)
                })
            // console.log(i)
        })
        debugger;
        process.exit();
}
main()