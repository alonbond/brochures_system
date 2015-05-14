// Setting a default quantity and it's type selector.
app.run(function(formlyConfig) {
	// Set type of MULTI-INPUT
	formlyConfig.setType({
    	name: 'multiInput',
      	templateUrl: 'multiInput.html',
      	defaultOptions: {
        	noFormControl: true,
        	// wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        	templateOptions: {
          		inputOptions: {
            		// wrapper: null
          		}
        	}
      	},
      	controller: /* @ngInject */ function($scope) {
        	$scope.copyItemOptions = copyItemOptions;

        	function copyItemOptions() {
          		return angular.copy($scope.to.inputOptions);
	        }
	    }
    });

	// Set type of quantity QUANTITY.
	formlyConfig.setType({
		name: 'drugQuantity',
		extends: 'lx-input',
		defaultOptions: {
			templateOptions: {
				label: 'Quantity',
				type: 'number'
			}
		}
	});

	// Set type of quantity TYPE.
	formlyConfig.setType({
		name: 'drugType',
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

	// Set a combination type of quantity amount and type.
	formlyConfig.setType({
		name: 'lx-quantityAndType',
		extends: 'lx-flex',
		defaultOptions: {
			templateOptions: {
				flex: {
					container: 'row',
					align: 'space-between left left',
					item: 3
				},
				fields: [{
					type: 'drugQuantity'
				},
				{
					type: 'drugType'
				}]
			} 
		}
	})
});

app.controller('introductionController', ['$scope', function($scope) {
	$scope.onSubmit = onSubmit;

	$scope.model = {
		activeDrugs: []
	}; // the data object

	// $scope.FormOptions = {}; // optional form parameters
	
	// An array holding all the form fields
	$scope.fields = [{
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
			template: '<br /><h4>Medicine Shape</h4>'
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
			template: '<br /><h4>Medicine Strength</h4>'
		},
		{
			key: 'medicineStrength',
			type: 'lx-quantityAndType',
			templateOptions: {
				fields: [{
					key: 'medicineStrength_qunatity'
				},
				{
					key: 'medicineStrength_type'
				}]
			}
		},
		{
			template: '<br /><h4>Active Drugs</h4>'
		},
		/* {
		    key: 'activeDrugs',
		    type: 'multiInput',
		    templateOptions: {
		    	inputOptions: {
		        	type: 'lx-quantityAndType',
		        	templateOptions: {
		   				fields: [{
		   					key: 'model.medicineShape.type'
		   				},
		   				{
		   					key: 'asda'
		   				}]
					} 
		        }
		     }
		    
		}, */
		{
			key: 'activeDrugs',
			type: 'multiInput',
			templateOptions: {
				inputOptions: {
					type: 'lx-input'
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
				]
			}
		},
		{
			key: 'introduction',
			type: 'lx-textarea',
			templateOptions: {
				label: 'Introduction Text'
			}
		}
		];

	function onSubmit() {
		console.log("ACTIVE DRUGS LENGTH: ", $scope.model.activeDrugs.length, $scope.model.activeDrugs);
	}
}]);