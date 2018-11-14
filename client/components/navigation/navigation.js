const componentName = 'navigation';
const moduleName = 'my-app';

function Controller() {
    
}

let app = angular.module(moduleName);
app.component(componentName, {
    templateUrl: './client/components/navigation/navigation-template.html',
    controller: Controller,
    controllerAs: componentName
});
