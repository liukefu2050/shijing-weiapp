var server  = 'https://www.jajayun.com',
    root = server + '/',
    imgRoot = server + '/';

var apiPath = {
  getBannerList: root + '/ad/adList', // 获取Banner轮播图
  getCaseList: root + '/ad/adList', // 获取成功案例列表
    contact: root + '/suggest/post.json' // 提交联系信息
};
var getImgFullPath = function(imgPath){
    return imgRoot + '/' + imgPath.replace(/^\// , '');
}

module.exports.apiPath = apiPath;
module.exports.getImgFullPath = getImgFullPath;

