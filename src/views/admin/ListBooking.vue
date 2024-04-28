<template>
  <div class="card p-fluid">
    <DataTable :value="products" :paginator="true" :rows="10" dataKey="bookingID" :rowHover="true"
      v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1"
      :globalFilterFields="['bookingID', 'status']" showGridlines>
      <template #header>
        <div class="flex justify-content-between flex-column sm:flex-row">
          <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter1()" />
          <!-- <IconField iconPosition="left">
            <InputIcon class="pi pi-search" />
            <InputText
              v-model="filters1['global'].value"
              placeholder="Keyword Search"
              style="width: 100%"
            />
          </IconField> -->
        </div>
      </template>
      <template #empty> No booking found. </template>
      <template #loading> Loading booking data. Please wait. </template>
      <Column field="bookingId" header="Booking id" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.bookingId }}
        </template>
        <template #filter="{ filterModel }">
          <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name" />
        </template>
      </Column>
      <Column header="Tên" filterField="users.lastName" style="min-width: 12rem">
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <span>{{ data.users.lastName }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country" />
        </template>
        <template #filterclear="{ filterCallback }">
          <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
        </template>
        <template #filterapply="{ filterCallback }">
          <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
        </template>
      </Column>
      <Column header="Loại xe" filterField="brand" style="min-width: 12rem">
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <!-- <img alt="flag" src="" :class="`flag flag-${data.country.code}`" style="width: 24px" /> -->
            <span>{{ data.brand }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country" />
        </template>
        <template #filterclear="{ filterCallback }">
          <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
        </template>
        <template #filterapply="{ filterCallback }">
          <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
        </template>
      </Column>

      <Column header="Ngày" filterField="bookingDate" dataType="date" style="min-width: 10rem">
        <template #body="{ data }">
          {{ data.bookingDate }}
        </template>
        <template #filter="{ filterModel }">
          <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
        </template>
      </Column>

      <Column field="status" header="Trạng thái" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
        <template #body="{ data }">
          <Dropdown v-model="data.status" @change="updateStatus(data)" :options="booking_status"
            placeholder="Chọn trạng thái" class="w-full md:w-14rem" />

          <!-- <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag> -->
        </template>
        <template #filter="{ filterModel }">
          <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter"
            :showClear="true">
            <template #value="slotProps">
              <Tag :severity="getSeverity(slotProps.value)" v-if="slotProps.value">{{ slotProps.value }}
              </Tag>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>
            <template #option="slotProps">
              <Tag :severity="getSeverity(slotProps.option)">{{
                slotProps.option.toUpperCase()
              }}</Tag>
            </template>
          </Dropdown>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { ref } from 'vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api'
// import { ProductService } from '@/service/ProductService'
import axios from 'axios'
import Dropdown from 'primevue/dropdown'
export default {
  name: 'ListBooking',
  components: {
    Dropdown
  },
  data() {
    return {
      filters1: ref(null),
      products: null,
      booking_status: [
        'Cancelled',
        'Completed',
        'Confirmed',
        'Expired',
        'In_Progress',
        'On_Hold',
        'Pending',
        'Rejected',
        'Waiting_List'
      ]
    }
  },
  methods: {
    async getProducts() {
      await axios.get('http://localhost:8081/api/bookings/').then((res) => {
        this.products = res.data
        console.log(this.products)
      })
    },
    async updateStatus(data) {
      let status = data.status
      await axios
        .put('http://localhost:8081/api/bookings/update-status/' + data.bookingId, null, {
          params: {
            status
          }
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    initFilters1() {
      this.filters1 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        bookingId: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        },
        'users.lastName': {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        },
        brand: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
        },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      }
    }
  },
  beforeMount() {
    this.initFilters1()
  },
  mounted() {
    this.getProducts()
  }
}
</script>
