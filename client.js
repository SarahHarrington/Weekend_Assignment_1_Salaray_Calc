$(document).ready(readyNow);

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
    var tableRow = $('<tr><td>' + firstName + ' ' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td>' + '</td><td>' + salary +'</td>');
    //array for submitting data
    dataSubmit = [firstName, lastName, idNumber, jobTitle, salary];
    console.log(dataSubmit);

    //submitting data to DOM
    $('.table').append(tableRow);

    //$('.salaryTotal').append(dataSubmit[4]);//how do I get this to total?
    clearData();
    }

      function clearData(){ //clears form inputs
        $('.input').val('');

      }

}
