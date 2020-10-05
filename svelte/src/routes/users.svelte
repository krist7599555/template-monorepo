<script lang='ts'>
  import { link } from "svelte-spa-router";
  import { api } from "../store/api";

  type User = { 
    id: string, 
    name: string  
  }
  const promise_users = api.get('/users').then(res => res.data.data as User[])
</script>

<div class="container m-auto py-8">
  <div class="font-medium text-xl mb-4">users</div>
  {#await promise_users}
    loading...
  {:then users}
    {#each users as user (user.id)}
      <div>
        {user.id} - {user.name}
      </div>
    {/each}
  {:catch err}
    {err}
  {/await}

  <a use:link href='/'>back</a>
</div>