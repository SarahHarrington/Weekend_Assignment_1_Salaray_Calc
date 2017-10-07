$(document).ready(readyNow);

function readyNow(){
  $('.submitButton').on('click', submitData); //button event

  function submitData(){ //submit function
    console.log('submit clicked');

    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var idNumber = $('.idNumber').val();
    var jobTitle = $('.jobTitle').val();
    var salary = parseInt($('.salary').val());
    var tableRow = $('<tr><td>' + firstName + ' ' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td>' + '</td><td>' + salary +'</td>');

    //submitting data to DOM
    $('.table').append(tableRow);
    //$('.salaryTotal').append();
    clearData();
    }

    function clearData(){ //clears form inputs
      $('.input').val('');
    }
}
