module.exports = function($scope, BookService) {
    $scope.data = {};
    $scope.activeBookId = null;
    $scope.navigateToPage = page => {
        $scope.data = BookService.paginate(5, page);
    };
    $scope.showDescription = id => {
        $scope.activeBookId = $scope.activeBookId === id ? null : id;
    };
    $scope.navigateToPage(1);
};
