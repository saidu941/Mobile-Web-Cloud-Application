


angular.module('toDoApp', [])
    .controller('toDoController', ['$scope', function($scope) {
        $scope.tasks = ['Do the laundry'];
        $scope.completed = [];
        $scope.newTaskName = '';
        $scope.addTask = function() {
            var name = $scope.newTaskName;
            if (name && $scope.tasks.indexOf(name) == -1
                && $scope.completed.indexOf(name)) {
                $scope.tasks.push(name);
                $scope.newTaskName = '';
            }
        };
        $scope.transferTo = function(index, start, end) {
            end.push(start[index]);
            start.splice(index, 1);
        }
    }]);


/*


var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.items = [];

    // Write code to push new item

    $scope.submitNewItem = function () {

    };

    // Write code to complete item
    $scope.completeItem = function (index) {

    };

    // Write code to delete item

    $scope.deleteItem = function (index) {

    };
}]);


*/