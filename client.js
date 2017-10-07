$(document).ready(readyNow);

function readyNow(){
  $('.submitButton').on('click', submitData); //button event

  function submitData(){ //submit function
    console.log('submit clicked');

    //var deleteButton = $('.deleteButton');
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var idNumber = $('.idNumber').val();
    var jobTitle = $('.jobTitle').val();
    var salary = parseInt($('.salary').val());
    //add sytling for deleteButton
    var tableRow = $('<tr class="dataRow"><td>' + "<button class='deleteButton'>Delete</button>" + '</td><td>' + firstName + ' ' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td>' + '</td><td>' + salary +'</td>');
    $(tableRow).data('salary', salary);//stores the salary to that row

    //submitting data to DOM
    $('.table').append(tableRow);

    //attaches event handler to delete button???
    $('.deleteButton').on('click', deleteRow);

    function totalSalary(){
      var t = 0;
      var rows = $('tr.dataRow'); //creates array of rows that are created
      for (var i = 0; i < rows.length; i++) {
        t += $(rows[i]).data('salary');
      }
      $('span.salaryTotal').text(t);
    }
    //$($('tr.dataRow')[0]).data()
    clearData();
    totalSalary();



  function clearData(){ //clears form inputs
    $('.input').val('');
  }


  function deleteRow(e){
    console.log('delete button clicked');
    $(e.target.parentElement.parentElement).remove();
    totalSalary();
  }
  }
}
