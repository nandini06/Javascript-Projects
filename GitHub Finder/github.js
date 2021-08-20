//   e23c5cf203f2e396b5a8bd5f946ef277e89ff7f2

class Github {
   constructor() {
      this.client_id = 'e563728ce8e41bd52782';
      this.client_secret = 'e23c5cf203f2e396b5a8bd5f946ef277e89ff7f2';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();

      const repos = await repoResponse.json();

      return {
         profile,
         repos
      }
   }
}