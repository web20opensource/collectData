/**
 * Created by Familia on 20/03/2015.
 */

var getReportControllers = angular.module('getReportControllers',[]);

getReportControllers.controller('ReporterCtrl',
['$scope','Record',
    function($scope, Record) {
        $scope.records = Record.query();
        $scope.orderBy = 'RID';
    }
]);