<template>
  <div>
    <div class="input-group md-form form-sm form-1 pl-0">
      <div class="input-group-prepend">
        <span class="input-group-text primary-color lighten-3"
              id="basic-text1">
          <i class="fa fa-search text-white"
             aria-hidden="true"></i>
        </span>
      </div>
      <input class="form-control my-0 py-1"
             type="text"
             placeholder="Search"
             aria-label="Search"
             v-on:focus="showAutocomplete=true">
    </div>
    <autocomplete v-show="showAutocomplete" />
  </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete'
export default {
  data () {
    return {
      showAutocomplete: false
    }
  },
  components: {
    Autocomplete
  }
}
</script>

<style>
.md-form {
  margin-top: 0.75rem;
}
input {
  padding: 4px 0;
}

.input-group.md-form.form-sm.form-1 input {
  border: 1px solid #bdbdbd;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-2 input {
  border: 1px solid #bdbdbd;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-2 input.red-border {
  border: 1px solid #ef9a9a;
}
.input-group.md-form.form-sm.form-2 input.lime-border {
  border: 1px solid #cddc39;
}
.input-group.md-form.form-sm.form-2 input.amber-border {
  border: 1px solid #ffca28;
}
</style>
