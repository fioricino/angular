(function() {
    var app = angular.module('news', ['directives']);

    app.service('newsService', function() {
        this.getTopics = function() {
            return topics;
        };

        this.getNews = function() {
            return news;
        }
    });

app.controller('NewsController', function(newsService) {
    this.currentTopic = 'World';
    this.selectedNew = null;

    this.isSelected = function (topic) {
        return this.currentTopic == topic;
    };

    this.news = newsService.getNews();
    this.topics = newsService.getTopics();

    this.selectTopic = function(topic) {
        this.currentTopic = topic;
        this.filteredNews = this.news.filter(function(n) {
            return n.topic == topic;
        });
    };

    this.selectTopic(topics[0]);

    this.selectNews = function(nnew) {
        this.selectedNew = nnew;
    };
});


app.controller("CommentController", [function() {
    this.comment = {};

    this.addComment = function(news) {
        news.comments.push(this.comment);
        this.comment = {};
    };
}]);


})();