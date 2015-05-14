app.controller('medicineDestinyController', ['$scope', function($scope){
	$scope.formData = {}; // the data object
	$scope.formOptions = {}; // optional form parameters
	
	// An array holding all the form fields
	$scope.formFields = [{
		key: 'mainIndication',
		type: 'lx-input',
		templateOptions: {
			label: 'Main Indication'
		}
	},
	{
		key: 'treatmentGroup',
		type: 'lx-input',
		templateOptions: {
			label: 'Treament Group'
		}
	},
	{
		key: 'treatmentExplenation',
		type: 'lx-textarea',
		templateOptions: {
			label: 'Treament Explenation'
		}
	},
	{
		key: 'diagnosticAlone',
		type: 'lx-checkbox',
		templateOptions: {
			label: 'Diagnostic Alone'
		}
	},
	{
		key: 'otherIndications',
		type: 'lx-textarea',
		templateOptions: {
			label: 'Other Indications'
		}
	}
	];
}]);