var app = angular.module('news', []);

app.controller('NewsController', [function() {
    this.currentTopic = 'World';
    this.selectedNew = null;

    this.isSelected = function (topic) {
        return this.currentTopic === topic;
    };

    this.news = [
        {
            topic: "World",
            header: "Some news",
            text: "This is some news",
            summary: "This is some summary",
            comments: [
                {
                    text: "This is some comment",
                    author: "joe@mail.ru",
                    date: "01.01.2016"
                }
            ]
        },
        {
            topic: "Sport",
            header: "Some sport news",
            text: "This is some sport news",
            summary: "This is some sport summary"
        },
        {
            topic: "Weather",
            header: "Some weather news",
            text: "This is some weather news",
            summary: "This is some weather summary"
        },
        {
            topic: "World",
            header: "Some news #2",
            text: "This is some news #2",
            summary: "This is some world summary #2"
        },
        {
            topic: "World",
            header: "Another world news",
            text: "This is another world news",
            summary: "This is another world summary"
        },
        {
            topic: "Sport",
            header: "Another sport news",
            text: "This is another sport news",
            summary: "This is some sport summary"
        }
    ];
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

app.controller("CommentController", [function() {
    this.comment = {};

    this.addComment = function(news) {
        news.comments.push(this.comment);
        this.comment = {};
    };
}]);

