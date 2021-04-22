<template>
  <div>
         
        <section class="jumbotron text-center">
            <div class="container">
            <h1> <strong> Contact List </strong> </h1>                     
            </div>
        </section>
      
        <table class="table table-hover">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>Subject</th>
              <th>Message</th>
              </tr>     
            </thead>
            <tbody>
                <tr v-for="contact in contact" :key="contact._id">
                  <td><strong>{{ contact._id }}</strong></td>
                  <td>{{ contact.name }}</td>
                  <td>{{ contact.email }}</td>
                  <td class="orange"><strong>{{ contact.subject }}</strong></td>
                  <td>{{ contact.message }}</td>
                 <td><button class="btn btn-danger deleteBtn" @click.prevent="deleteContact(contact._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>

  export default {
      data() {
        return {
          contact: []
        }
      },
    created() {
      let uri = 'http://localhost:8000/contact/list';
    //  let uri = 'contact/list';
      this.axios.get(uri).then(response => {
        this.contact = response.data;
      });
    },
    methods: {
      deleteContact(id)
      {
        let uri = `http://localhost:8000/contact/delete/${id}`;
       // let uri = `contact/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.contact.splice(this.contact.indexOf(id), 1);
          return response
        });
      }
    }
  }

</script>