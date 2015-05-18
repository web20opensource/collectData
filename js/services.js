/**
 * Created by Familia on 20/03/2015.
 */
var getReportServices = angular.module('getReportServices',['ngResource']);

getReportServices.factory('Record',['$resource',
    function($resource){
        return $resource(
            'https://remas.website:33333/records.json',
            {},
            {'query':{'method':'GET' , isArray: true}}
        );
    }
]);