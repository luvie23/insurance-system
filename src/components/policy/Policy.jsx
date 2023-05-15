import React from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { useQuery } from '@tanstack/react-query';
import Spinner from '../utility/Spinner';

export default function Policy() {
    const {policyNumber} = useParams();

    const { isLoading: isLoadingPolicy, error: errorPolicy, data: policy} = useQuery({

        queryKey: ['policy'],
        queryFn: () =>
            fetch(`http://localhost:8080/policy/${policyNumber}`).then(
            (res) => res.json(),
            ),

    });

    if (isLoadingPolicy){
        return <Spinner/>
    }
    console.log(policy[0])
  return (
<div class="flex flex-col justify-center items-center h-[100vh]">
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    { policy[0].first_name + ' ' +  policy[0].last_name + ' | ' + policy[0].policy_number  }
                    </h4>
                    <p class="mt-2 px-2 text-base text-gray-600">
                        { policy[0].bill_number + ' | ' + moment(policy[0].inception_date).format('MMM DD, YYYY') + ' to ' + moment(policy[0].expiry_date).format('MMM DD, YYYY')} 
                    </p>
                    <p class="mt-2 px-2 text-base text-gray-600">
                    { policy[0].address}
                    </p>
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Own Damage</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].own_damage).toLocaleString("en-US") + " - ₱" + Number(policy[0].own_damage_premium).toLocaleString("en-US")}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Acts of God/Nature</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].acts_of_nature).toLocaleString("en-US") + " - ₱" + Number(policy[0].acts_of_nature_premium).toLocaleString("en-US")} 
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Bodily Injury and Property Damage</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].bi_pd).toLocaleString("en-US") + " - ₱" + Number(policy[0].bi_premium).toLocaleString("en-US") + " and ₱" + Number(policy[0].pd_premium).toLocaleString("en-US")}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Auto Passenger</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].auto_passenger).toLocaleString("en-US") + " - ₱" + Number(policy[0].auto_passenger_premium).toLocaleString("en-US")}
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Taxes</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].taxes).toLocaleString("en-US")}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Gross Premium</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].gross_premium).toLocaleString("en-US")}
                    </p>
                    </div>
                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Total Premium</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].total_premium).toLocaleString("en-US")}
                    </p>
                    </div>
                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Paid</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].paid_premium).toLocaleString("en-US")}
                    </p>
                    </div>
                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Balance</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {Number(policy[0].balance).toLocaleString("en-US")}
                    </p>
                    </div>
                </div>
            </div>  
            <p class="font-normal text-navy-700 mt-20 mx-auto w-max">test</p>  
        </div>
  )
}
