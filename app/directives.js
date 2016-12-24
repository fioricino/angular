(function() {
    var app = angular.module("directives", []);
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
})();