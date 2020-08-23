import fs from "fs";

function readFileList(filePath) {
  let dataList = fs.readFileSync(filePath, 'utf-8');
  if (!dataList) {
    dataList = [];
  } else {
    dataList = JSON.parse(dataList)
  }

  return dataList;
}


export default readFileList;