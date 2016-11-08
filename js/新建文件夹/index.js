var app=angular.module("app",[])
arr=[
		{url:"5.jpg",name:"火箭一号",price:"5.5",num:1,id:1},
		{url:"6.jpg",name:"火箭二号",price:"8.5",num:1,id:2},
		{url:"7.jpg",name:"火箭三号",price:"9.5",num:1,id:3},
		{url:"8.jpg",name:"火箭四号",price:"7.5",num:1,id:4},
	]


app.controller("cc",function($scope){
	   $scope.shop=arr;
	
     	$scope.shops={}
       
     	$scope.calc=function(){
     	
     		 $scope.total=0;
     		var l=$scope.shops
     		for(var i in l){
     			$scope.total+=l[i].price*l[i].num;
     		}
     	}
   $scope.$watch(function(){
    	return $scope.shops
    },function(){
    	$scope.calc();
    },true)

     $scope.move=function(id){

     	if($scope.shops[id]){
           $scope.shops[id].num+=1
     	}else{
     		angular.forEach($scope.shop,function(v,i){
               if(v.id==id){
               	$scope.shops[id]={
               		id:id,
               		name:v.name,
               		price:v.price,
               		num:v.num,
               		
               	}
               }
     		})
     	}
   


     }

    $scope.jia=function(id){
    	$scope.shops[id].num+=1;
    	
    }
    $scope.jian=function(id){

    	 if($scope.shops[id].num>0){
    	 $scope.shops[id].num-=1;
    	 }else if($scope.shops[id].num=0){
    	 	prompt("是否要删除")
    	 	delete $scope.shops[id].num;	
    	 }
    }
    
    $scope.dele=function(id){
    	delete $scope.shops[id]
    	
    	
    }

   
})




