<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="display-3">Create a new Meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex xs12>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex xs12>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="imageUrl"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex xs12>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="250">
            </v-flex xs12>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                multi-line
                required></v-text-field>
            </v-flex xs12>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit"> Create Meetup</v-btn>
            </v-flex xs12>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      id: '213123123',
      title: '',
      location: '',
      imageUrl: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        id: this.id,
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
