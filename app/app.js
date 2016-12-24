(function() {
    var app = angular.module('news', ['directives']);

app.controller('NewsController', [function() {
    this.currentTopic = 'World';
    this.selectedNew = null;

    this.isSelected = function (topic) {
        return this.currentTopic == topic;
    };

    this.news = data;

    this.selectTopic = function(topic) {
        this.currentTopic = topic;
        this.filteredNews = this.news.filter(function(n) {
            return n.topic == topic;
        });
    };

    this.selectTopic("World");

    this.selectNews = function(nnew) {
        this.selectedNew = nnew;
    };
}]);


app.controller("CommentController", [function() {
    this.comment = {};

    this.addComment = function(news) {
        news.comments.push(this.comment);
        this.comment = {};
    };
}]);

})();