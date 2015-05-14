// Setting a default quantity and it's type selector.
app.run(function(formlyConfig) {
	// Set type of quantity amount.
	formlyConfig.setType({
		name: 'quantityAmount',
		extends: 'lx-input',
		defaultOptions: {
			templateOptions: {
				label: 'Quantity',
				type: 'number'
			}
		}
	});

	// Set type of quantity type.
	formlyConfig.setType({
		name: 'quantityType',
		extends: 'lx-select',
		defaultOptions: {
			wrapper: 'lx-wrapper-div',
			templateOptions: {
				div: {
					style: {
						position: 'relative',
						top: '-11.5px',
						'margin-left': '10px'
					}
				},
				placeholder: 'Quantity Type',
				selected: 'type',
				choice: 'type',
				options: [
					{ 'type': 'g'},
					{ 'type': 'mg'},
					{ 'type': 'kg'}
				],
			}
		}
	});
});

app.controller('introductionController', ['$scope', function($scope) {
	$scope.formData = {}; // the data object
	$scope.formOptions = {}; // optional form parameters
	
	// An array holding all the form fields
	$scope.formFields = [{
			key: 'medicineName',
			type: 'lx-input',
			wrapper: 'lx-wrapper-errors',
			templateOptions: {
				type: 'text',
				label: 'Medicine Name',
				required: true
			}
		},
		{	
			template: '<br /><h5>Medicine Shape</h5>'
		},
		{
			key: 'medicineShape',
			type: 'lx-select',
			wrapper: 'lx-wrapper-div',
			templateOptions: {
				div: {
					style: {
						'margin-top': '-25px'
					}
				},
				placeholder: 'Choose a medicine type',
				selected: 'type',
				choice: 'type',
				options: [
					{ 'type': 'TYPE 1'},
					{ 'type': 'TYPE 3'},
					{ 'type': 'TYPE 3', value: 'type_3'}
				],
				fixedLabel: true
				
			}
		},
		{	
			template: '<br /><h5>Medicine Strength</h5>'
		},
		{
			key: 'medicineStrength',
			type: 'lx-flex',
			templateOptions: {
				flex: {
					container: 'row',
					align: 'space-between left left',
					item: 3
				},
				fields: [{
					type: 'quantityAmount'
				},
				{
					type: 'quantityType'
				}]
			}
		},
		{
			template: '<br /><h5>Active Drugs</h5>'
		},
		{
			key: 'activeDrugs',
			type: 'multiInput',
			templateOptions: {
				label: 'active drugs',
				inputOptions: {
					type: 'lx-flex',
					templateOptions: {
						flex: {
					      container: 'row',
					      align: 'space-between left',
					      item: 3
					    },
					    fields: [{
					    	key: 'activeDrug',
					    	type: 'lx-input',
					    	templateOptions: {
					    		label: 'Component'
					    	}
					    },
					    {
					    	key: 'quantityAmount_activeDrugs',
					    	type: 'quantityAmount'
					    },
					    {
					    	key: 'quantityType_activeDrug',
					    	type: 'quantityType'
					    }
					    ]
					}
				}
			}
		},
		{
			template: '<br />'
		},
		{
			key: 'docPrescription',
			type: 'lx-checkbox',
			templateOptions: {
				label: 'Require Doctor Prescription'
			}
		},
		{
			key: 'diseaseTreatment',
			type: 'lx-checkbox',
			templateOptions: {
				label: 'Disease Treatment'
			}
		},
		{
			key: 'applicationForDoc',
			type: 'lx-checkbox',
			templateOptions: {
				label: 'Require Application For Doctor'
			}
		},
		{	// Appears only if checkbox above is selected
			key: 'applicationForDoc_after',
			type: 'lx-input',
			templateOptions: {
				label: 'After How Much Time?',
				required: true
			},
			expressionProperties: {
				hide: '!model.applicationForDoc'
			}
		},
		{
			template: '<br /><h4>Gender & Age</h4>'
		},
		{
			key: 'minAge',
			type: 'lx-input',
			templateOptions: {
				label: 'Minimum Age',
				type: 'number'
			}
		},
		{
			key: 'maxAge',
			type: 'lx-input',
			templateOptions: {
				label: 'Maximum Age',
				type: 'number'
			}
		},
		{
			key: 'appropriateGender',
			type: 'lx-select',
			wrapper: 'lx-wrapper-div',
			templateOptions: {
				div: {
					style: {
						position: 'relative',
						top: '-17px',
					}
				},
				placeholder: 'Appropriate Gender',
				selected: 'type',
				choice: 'type',
				options: [
					{ 'type': 'Male'},
					{ 'type': 'Female'}
				],
				searchFilter: false
			}
		},
		{
			key: 'introduction',
			type: 'lx-textarea',
			templateOptions: {
				label: 'Introduction'
			}
		}
		];
}]);