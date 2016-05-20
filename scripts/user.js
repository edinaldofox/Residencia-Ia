$( document ).ready(function() {

   $('#dataTables').DataTable({
      responsive: true,
      processing: true,
      serverSide: true,
      searching: false,
      ordering: true,
      "ajax": "/user/table",
      columns: [
         { data: 'id' },
         { data: 'name' },
         { data: 'email' },
         { data: 'foneOne' },
         { data: 'foneTwo' },
         { data: 'username' },
         { data: 'password' },
         { data: 'active' }
      ]
   });
});

