var app = angular.module('news', []);

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

app.directive("newsContainer", function() {
    return {
        restrict: 'E',
        templateUrl: 'news-container.html'
    };
});

app.directive("newsPreview", function() {
    return {
        restrict: 'E',
        templateUrl: 'news-preview.html'
    };
});

app.directive("newsFull", function() {
    return {
        restrict: 'E',
        templateUrl: 'news-full.html'
    };
});

app.directive("commentInput", function() {
    return {
        restrict: 'E',
        templateUrl: 'comment-input.html'
    };
});

app.directive("comment", function() {
    return {
        restrict: 'E',
        templateUrl: 'comment.html'
    };
});

app.controller("CommentController", [function() {
    this.comment = {};

    this.addComment = function(news) {
        news.comments.push(this.comment);
        this.comment = {};
    };
}]);

