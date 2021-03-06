var Excel = require('exceljs');
const fs = require('file-system');
const result = "./uploads/result.dvm";

    function readFile(file, description="",dvmName="DefaultName"){

        var workBook = new Excel.Workbook();
        let name= file.split('/')
        let fileName = name[2]
        let header=`<?xml version='1.0' encoding='UTF-8' ?>\n<!-- Generated by Oracle DVM Editor version 1.0 at [${new Date()}] -->\n`;
        let parameters=`<dvm name='${dvmName}' xmlns='http://xmlns.oracle.com/dvm'>\n  <description>${description}</description>\n<columns>`
        let data="";
        let columns = ""

        workBook.xlsx.readFile(`./uploads/${fileName}`).then(function(){
            
          var sheet = workBook.getWorksheet("Hoja1");
          //ROWS 1.0
            for (i= 1; i <= sheet.rowCount; i++) {
           
                //COLUMNS
                if (i==1)
                {    
                    for(k=1; k<=sheet.columnCount; k++){
                        
                        columns=`${columns}\n\t<column name='${sheet.getRow(i).getCell(k).value}'/>`
                    }
                    columns=`${columns}\n</columns>\n<rows>`
                }
               else{
                    data=`${data}\n\t<row>\n`
                    for (j=1; j<=sheet.columnCount; j++){
               
                        data=`${data}\t\t<cell>${sheet.getRow(i).getCell(j).value}</cell>\n`
                    }
                    data=`${data}\t</row>`
                }
            }

            data=`${header}${parameters}${columns}${data}\n</rows>`
            fs.appendFileSync(result,data,'utf8',(err,result)=>{
                if(err){
                    console.log(err);
                }
            });
    });
}
module.exports= {
    readFile
    }
