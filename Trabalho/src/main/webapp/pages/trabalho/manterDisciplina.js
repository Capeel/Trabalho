module = angular.module("Trabalho", []);

module.controller("trabalhoController", ["$scope", "$http", trabalhoController]);

function trabalhoController($scope, $htpp){
   
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    $scope.trabalhos = [];
    $scope.trabalho = {};
    $scope.isNovo = true;
    
    function funcaoEditar(editarei){
        $scope.trabalho = angular.copy(editarei);
        $scope.isNovo = false;
        
    }
    function funcaoExcluir(){
        $http.remove("manterDisciplina", $scope.id).success(Sucesso).error(Erro);
         
        function Sucesso(data, status){
            console.log(data);
            $scope.manterDisciplina = data;
        }
        function Erro(data, status){
            alert("Erro :(" + data);
        }
    }
    
    function funcaoSalvar(){
        if($scope.isNovo == true){
            $http.post("/manterDisciplina", $scope.salvar).success(Sucesso).error(Erro);
        }else{
            $http.put("/manterDisciplina", $scope.id).success(Sucesso).error(Erro);            
        }  
        function Sucesso(data, status){
            console.log(data);
            $scope.trabalho = {};
            $scope.manterDisciplina = data;
            $scope.isNovo = true;
        }
        function Erro(data, status){
            alert("Erro :(" + data);
        }
        
    }    
    
    function funcaoCarregar(){
        $http.get("/manterDisciplina").success(Sucesso).error(Erro);
        
        function Sucesso(data, status){
            $scope.manterDisciplina = data;
            console.log(data);
        }
        function Erro(data, status){
            alert("Erro :(" + data);
        }
    }
    function funcaoIniciar(){
        funcaoCarregar();
        console.log(">>>>>>>>>>>>>>>>>>");
    }
}