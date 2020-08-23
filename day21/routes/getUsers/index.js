import readFileList from "../../utils/readFileList";
import {addUserListPath} from "../../global";

function getUsers(req, res, next) {
  //1:读取数据
  let dataList = readFileList(addUserListPath);
  //2:返回给客户端
  res.send(dataList);
}

export default getUsers;