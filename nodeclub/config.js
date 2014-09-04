/**
 * config
 */

var path = require('path');
var pkg = require('./package.json');

var debug = true;

var config = {
  // debug 为 true 时，用于本地调试
  debug: debug,

  mini_assets: !debug, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: '给力社区', // 社区名字
  description: '用来聊一下给力的产品', // 社区的描述

  // 添加到 html head 中的信息
  site_headers: [
    // '<meta name="author" content="EDP@TAOBAO" />',
  ],
  site_logo: '<img src="/public/images/logo.png" title="给力社区" />', // default is `name`
  site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    ['/about', '关于'],
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: 'UA-41753901-5',

  // mongodb 配置
  db: 'mongodb://mongodb/node_club_dev',
  db_name: 'node_club_dev',


  session_secret: 'sadfasdfdf11sdf', // 务必修改
  auth_cookie_name: 'gl',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 2000,

  // RSS配置
  rss: {
    title: '给力社区',
    link: 'http://zhangskills.xicp.net',
    language: 'zh-cn',
    description: '给力社区',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // site links
  site_links: [],

  // 邮箱配置
  mail_opts: {
    // host: 'smtp.126.com',
    // port: 25,
    // auth: {
    //   user: 'club@126.com',
    //   pass: 'club'
    // }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: {
    user_login_name: true
  },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '0d1d0dab43184816671f',
    clientSecret: '6469ac905aae2fae5a3d30124c556fd75626a807',
    callbackURL: 'http://club.zhangskills.xicp.net/auth/github/callback',
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // newrelic 是个用来监控网站性能的服务
  newrelic_key: 'yourkey'
};

module.exports = config;
module.exports.config = config;