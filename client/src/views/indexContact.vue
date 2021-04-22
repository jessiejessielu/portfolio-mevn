<template>
  <div>
         
         <!-- <div class="hero-body">
                <div class="container">                    
                    <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Sign Up to Browse Contacts</button>
                    <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</h3>                   
                </div>
        </div> -->
            
        <ContactList />

      <!-- <section class="jumbotron text-center">
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
        </table> -->
  </div>
</template>

<script>

  import ContactList from '../components/ContactList';
    export default {
        name: 'home',
        components: {
           ContactList
        },
    methods: {
        // Log the user in
        login() {
          this.$auth.loginWithRedirect();
        }
      }
    }


//   export default {
//       data() {
//         return {
//           contact: []
//         }
//       },
//     created() {
//       let uri = 'http://localhost:8000/contact/list';
//       this.axios.get(uri).then(response => {
//         this.contact = response.data;
//       });
//     },
//     methods: {
//       deleteContact(id)
//       {
//         let uri = `http://localhost:8000/contact/delete/${id}`;
//         this.axios.delete(uri).then(response => {
//           this.contact.splice(this.contact.indexOf(id), 1);
//           return response
//         });
//       }
//     }
//   }

</script>