<template>
  <div class="card">
    <DataTable
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <Column field="name" header="Name" style="width: 25%"></Column>
      <Column field="country.name" header="Country" style="width: 25%"></Column>
      <Column field="company" header="Company" style="width: 25%"></Column>
      <Column field="representative.name" header="Representative" style="width: 25%"></Column>
    </DataTable>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { FilterMatchMode } from 'primevue/api'
// import { CustomerService } from '@/service/CustomerService'
import DataTable from 'primevue/datatable'
export default {
  name: 'ListBooking',
  components: {
    DataTable
  },
  data() {
    return {}
  }
}
</script>
