<template>
    <div class="card p-fluid">
        <DataTable :value="products" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
            v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1"
            :globalFilterFields="['id', 'roles.name']" showGridlines>
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
            <template #empty> No account found. </template>
            <template #loading> Loading account data. Please wait. </template>
            <Column field="id" header="UsernameID" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.id }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                        placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Tên" filterField="lastName" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.lastName }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                        placeholder="Search by country" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
            </Column>
            <Column header="địa chỉ" filterField="address" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.address }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                        placeholder="Search by country" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
            </Column>

            <Column header="số điện thoại" filterField="phone" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.phone }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                        placeholder="Search by country" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
            </Column>


            <Column field="roles[0].name" header="Vai trò" :filterMenuStyle="{ width: '14rem' }"
                style="min-width: 12rem">
                <template #body="{ data }">
                    <Dropdown v-model="data.roles[0].name" @change="updateStatus(data)" :options="user_role"
                        placeholder="Chọn vai trò" class="w-full md:w-14rem" />
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
    name: 'ListAccount',
    components: {
        Dropdown
    },
    data() {
        return {
            filters1: ref(null),
            products: null,
            user_role: [
                'ROLE_ADMIN',
                'ROLE_MODERATOR',
                'ROLE_USER'
            ]
        }
    },
    methods: {
        async getProducts() {
            await axios.get('http://localhost:8081/api/users/').then((res) => {
                this.products = res.data

            })
        },
        // async updateStatus(data) {
        //     let status = data.status
        //     await axios
        //         .put('http://localhost:8081/api/bookings/update-status/' + data.bookingId, null, {
        //             params: {
        //                 status
        //             }
        //         })
        //         .then((res) => {
        //             console.log(res)
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // },
        initFilters1() {
            this.filters1 = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                id: {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
                },
                lastName: {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
                },
                address: {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
                },
                phone: {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
                },
                'roles[0].name': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
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