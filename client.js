$(document).ready(readyNow);

var dataSubmit = []; //array for data submit to DOM

function readyNow(){
  $('.submitButton').on('click', submitData); //button event

  function submitData(){ //submit function
    console.log('submit clicked');
    //variables for array
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var idNumber = $('.idNumber').val();
    var jobTitle = $('.jobTitle').val();
    var salary = $('.salary').val();
    //array for submitting data
    dataSubmit = [firstName, lastName, idNumber, jobTitle, salary];
    console.log(dataSubmit);
    //submitting data to DOM
    $('.employeeDisplay').append(dataSubmit);
    $('.salaryTotal').append(dataSubmit[4]);//how do I get this to total?
    clearData();
    }

      function clearData(){
        $('.input').val('');
      
      }

}
