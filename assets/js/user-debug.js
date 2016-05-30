$( document ).ready(function() {

   var table = $('#dataTables').DataTable({
      responsive: false,
      //processing: true,
      serverSide: true,
      searching: false,
      ordering: true,
      "ajax": "/user/table",
      columns: [
         { data: 'id' },
         { data: 'name' },
         { data: 'email' },
         //{ data: 'username' },
         //{ data: 'phone1' },
         //{ data: 'phone2' },
         //{ data: 'password' },
         //{ data: 'active' },
          {
              "targets": -1,
              "data": null,
              "defaultContent": "<button>Editar</button>"
          }
      ],
   });

    $('#dataTables tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        window.location="/user/edit/id/"+data.id;
    } );
});

