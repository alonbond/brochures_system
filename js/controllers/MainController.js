app.controller('MainController', ['$scope', function($scope) {
	$scope.formData = {}; // the data object
	$scope.formOptions = {}; // optional form parameters
	
	// An array holding all the form fields
	$scope.formFields = [
		{
			key: 'email', // ng-model name, saved in formData
			type: 'lx-input',
			// In this case, 'lx-input' options
			templateOptions: {
				type: 'email',
				label: 'Email',
				required: true
			},
			wrapper: 'lx-wrapper-errors',
			validation: {
		        messages: {
		            name: 'required',
		            message: 'Email is required.'
		        }
    		}
		}
	];
}]);