var app=angular.module('myApp', []);
app.controller('MainCtrl',['$scope', '$window', function($scope,$window) {
  $scope.user={'username':'','password':''};

		    var validUsers= [ 
					{'username':'chandler@friends.com', 'password':'1234'},
					{'username':'sdhandahr08@gmail.com', 'password':'1234'},
					{'username':'joey@friends.com', 'password':'1234'},
					{'username':'rechal@friends.com', 'password':'1234'}
				];
    $scope.showError = false; // set Error flag
	$scope.showSuccess = false;
  $scope.submit=function()
  {
	if($scope.user.username && $scope.user.password)
     {
    var user=$scope.user.username;
    var pass=$scope.user.password;
    alert("welcome"+user);
   
    $scope.validUsers.push({username:user,password:pass});
     }else{
       alert("Invalid Login");
     }
  }
  $scope.authenticate = function (){
	var flag= false;
	
	for(var i in validUsers){ // loop on users array
		if($scope.user.username == validUsers[i].username && $scope.user.password == validUsers[i].password){
			flag = true;
			break;
		}
		else{
			flag = false;
		}				
	}
	//-------- set error or success flags
	if(flag){
		$scope.showError = false;
		$scope.showSuccess = true;
		$window.location.href="C:\Users\Shubham\Desktop\angularproject\loginAngularApp\views\home.html";
	}
	else{
		$scope.showError = true;
		$scope.showSuccess = false;
	}
}
}]);
