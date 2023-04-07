<script>
  import {users} from './store'

  let name = ''
  let error

  let dateOfBirth

	const addToArray = (event) => {
    event.preventDefault()
  console.log(name)
  if (!dateOfBirth) {
    error = 'Inserire la data di nascita'
    return 
  }
		$users = [...$users, {
			name,
      dateOfBirth
		}];
	};

  const removeElement = (indexToRemove) => {
    console.log(indexToRemove)
    $users = $users.filter((item, index) => index !== indexToRemove)
  }
</script>

<main>
  <form class="container flex flex-col gap-4 mb-10 items-center">
      <h3>Crea nuovo utente</h3>

      <label><span class="font-bold">Nome:</span><input type="text" name="name" id="name" bind:value={name} class="border-2 mx-2 rounded-md px-2"></label>
      <label><span class="font-bold">Data di Nascita:</span><input type="date" name="birth" id="birth" class="mx-2 border-2 rounded-md px-2" bind:value={dateOfBirth}></label>

      {#if error}
        <div role='alert' class="text-red-500">
          {error}
        </div>
      {/if}
      <button class="btn bg-blue-500 hover:bg-blue-700 px-5 py-2.5 text-sm rounded-md font-semibold text-white w-32" type="submit" on:click={addToArray}>
        Aggiungi
      </button>
  </form>

  <table class="border-collapse table-auto w-full text-sm">
    <thead>
      <tr>
        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
          Nome
        </th>
        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
          Data Nascita
        </th>
        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
          Azioni
        </th>
      </tr>
    </thead>
    <tbody>
      {#each $users as user, i}
      <tr class="hover:bg-">
        <td>{user.name}</td>
        <td>{user.dateOfBirth}</td>
        <td><button on:click={() => removeElement(i)}>Elimina</button></td>
      </tr>
      {/each}
  </table>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
