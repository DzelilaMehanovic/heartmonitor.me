(function () {
    'use strict';

    angular
        .module('app')
        .controller('Account.IndexController', Controller);

    function Controller($window, UserService,$rootScope, FlashService) {
        var vm = this;
        vm.count;
        vm.sum = 0;
        vm.average = 0;
        vm.user = null;
        vm.saveUser = saveUser;
        vm.deleteUser = deleteUser;
        vm.savePressure = savePressure;
        vm.pressure=null;
        vm.diets = null;

        initController();

        function initController() {
          UserService.GetCurrent().then(function (user) {
                vm.user = user;
                getPressure();

            });
        }

        function getPressure(){
            UserService.GetPressure(vm.user).then(function (pressure) {
                vm.pressure = pressure;
                 angular.forEach(vm.pressure, function(value, key){
                    vm.sum = vm.sum + value.value;
                });
                vm.count = Object.keys(vm.pressure).length;
                vm.average = vm.sum / vm.count;
                if(vm.count == 0){
                    vm.average = 0;
                }
            });

        }


        function savePressure(){
            if(!angular.isNumber(vm.pressure.value)){
            }
            vm.pressure = {
                value: parseInt(vm.pressure.value),
                user_id: vm.user._id
            }
          UserService.SavePressure(vm.pressure)
              .then(function () {
                initController();
                  FlashService.Success('Value saved');
                })
              .catch(function (error) {
                  FlashService.Error(error);
              });
        }

        function saveUser() {
            UserService.Update(vm.user)
                .then(function () {
                    FlashService.Success('User updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
                console.log(vm.user);
        }

        function deleteUser() {
            UserService.Delete(vm.user._id)
                .then(function () {
                    alert('hi');
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();
