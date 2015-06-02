function MoviesController($scope){
  $scope.movies=[
    {name:"The Pacifier", description:"Disgraced Navy SEAL Shane Wolfe is handed a new assignment...", 
    poster:"http://ecx.images-amazon.com/images/I/51Y3PK5Q9VL.jpg"},
    {name:"Mrs.Doubtfire", description:"After a bitter divorce, an actor disguises himself as a female housekeeper to spend time with his children...", 
    poster:"http://upload.wikimedia.org/wikipedia/en/5/5a/Mrs_Doubtfire.jpg"},
    {name:"Hocus Pocus", description:"After three centuries, three witch sisters are resurrected in Salem Massachusetts on Halloween night...", 
    poster:"http://musingsfromus.com/wp-content/uploads/2011/10/Hocus-Pocus-1993-Cover-Art.jpg"},
    {name:"Chronicles of Riddick", description:"5 years after Pitch Black, the wanted criminal Riddick arrives on a planet called Helion Prime...", 
    poster:"http://www.jdemirdjian.com/Movies/Movies/Chronicles%20Of%20Riddick.jpg"}
  ];



  $scope.formVisibility=false;

  $scope.Save=function(){
    $scope.movies.push({name:$scope.newTitle.name, description:$scope.newTitle.description, poster:$scope.newTitle.poster});
    $scope.formVisibility=false;
    console.log($scope.formVisibility);
  }

  $scope.ShowForm=function(){
    $scope.formVisibility=true;
    console.log($scope.formVisibility);
  }

}