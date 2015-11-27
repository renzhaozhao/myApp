/*! 18217411988@163.com (c) 2015 
	Author: Renzhao
*/
angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ScorllCtrl', function($scope,$timeout) {
    $scope.items = [];
    var base = 1;
    $scope.load_more = function(){
        $timeout(function(){
            for(var i=0;i<10;i++,base++)
                $scope.items.push(["item ",base].join(""));
            $scope.$broadcast("scroll.infiniteScrollComplete");
        },500);
    };
})

.controller('RefreshCtrl', function($scope) {
    $scope.items = [];
    var base = 1;
    $scope.doRefresh = function() {
        for(var i=0;i<10;i++,base++)
            $scope.items.unshift(["item ",base].join(""));
        // Stop the ion-refresher from spinning
        $scope.$broadcast("scroll.refreshComplete");
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('UserCtrl', function($scope, $ionicPopup, $timeout) {
    /*$scope.show = function(){
        console.log("aaaa");
    }*/
    $scope.showPopup = function() {
        $scope.data = {}

        // 一个精心制作的自定义弹窗
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: 'Enter Wi-Fi Password',
            subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
                { text: 'Cancel' },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.wifi) {
                        //不允许用户关闭，除非他键入wifi密码
                        e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                },
            ]
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); //由于某种原因3秒后关闭弹出
        }, 3000);
    };
    // 一个确认对话框
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        confirmPopup.then(function(res) {
            if(res) {
            console.log('You are sure');
            } else {
            console.log('You are not sure');
            }
        });
    };

    // 一个提示对话框
    $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
        title: '警告!',
        template: '这是一个错误'
        });
        alertPopup.then(function(res) {
            console.log(res);
        });
    };

})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        autoMoney: true,
        enableFriends: true
    };
})

