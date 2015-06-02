function MoviesController($scope){
  $scope.movies=[
    {name:"The Pacifier", description:"Disgraced Navy SEAL Shane Wolfe is handed a new assignment: Protect the five Plummer kids from enemies of their recently deceased father -- a government scientist whose top-secret experiment remains in the kids' house.", 
    poster:"http://ecx.images-amazon.com/images/I/51Y3PK5Q9VL.jpg"},
    {name:"Mrs.Doubtfire", description:"After a bitter divorce, an actor disguises himself as a female housekeeper to spend time with his children held in custody by his former wife.", 
    poster:"http://upload.wikimedia.org/wikipedia/en/5/5a/Mrs_Doubtfire.jpg"},
    {name:"Hocus Pocus", description:"After three centuries, three witch sisters are resurrected in Salem Massachusetts on Halloween night, and it is up to two teen-agers, a young girl, and an immortal cat to put an end to the witches' reign of terror once and for all.", 
    poster:"http://musingsfromus.com/wp-content/uploads/2011/10/Hocus-Pocus-1993-Cover-Art.jpg"},
    {name:"Chronicles of Riddick", description:"5 years after Pitch Black, the wanted criminal Riddick arrives on a planet called Helion Prime, and finds himself up against an invading empire called the Necromongers, an army that plans to convert or kill all humans in the universe.", 
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