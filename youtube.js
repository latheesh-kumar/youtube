var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Youtube = (function () {
    function Youtube(title, published, category, license, comments, commentsCount, subscribe, view, channelName, share, playList) {
        var _this = this;
        this.getComments = function () {
            return _this.comments;
        };
        this.getCommentsCount = function () {
            return _this.commentsCount;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        // acccess Private values
        this.getView = function () {
            return _this.view;
        };
        this.setView = function (view) {
            _this.view = view;
        };
        this.title = title;
        this.published = published;
        this.category = category;
        this.license = license;
        this.comments = comments;
        this.commentsCount = commentsCount;
        this.subscribe = subscribe;
        this.view = view;
        this.channelName = channelName;
        this.share = share;
        this.playList = playList;
    }
    return Youtube;
}());
var PlayListVideos = (function (_super) {
    __extends(PlayListVideos, _super);
    function PlayListVideos(title, published, category, license, comments, commentsCount, subscribe, view, channelName, share, playList) {
        var _this = _super.call(this, title, published, category, license, comments, commentsCount, subscribe, view, channelName, share, playList) || this;
        _this.playListCount = function () {
            return _this.playList;
        };
        return _this;
    }
    return PlayListVideos;
}(Youtube));
var youtubeObject = new Youtube("cricket", "May-5-2018", "sports", "Standard YouTube License", "Nice Video", 1500, 23, 23000, "CricVideos");
var playListCountObject = new PlayListVideos("cricket", "May-5-2018", "sports", "Standard YouTube License", "Nice Video", 1500, 2000000, 23000, "CricVideos", '', '2.5k');
var comments = youtubeObject.getComments();
console.log(comments);
console.log(youtubeObject.getChannelName());
var commentsCount = youtubeObject.getCommentsCount();
console.log(commentsCount);
//Access Inheritance properties
playListCountObject.playListCount();
console.log(playListCountObject.playListCount());
//Access private value
var view = youtubeObject.getView();
console.log(view);
//set the view value
var modifyView = youtubeObject.setView(56000);
console.log(youtubeObject.getView());
