import { create } from "zustand";

import { devtools, persist } from 'zustand/middleware';

const policyStore = (set) => ({
    policies: [],
    fetchPolicies: async () => {
        set({policies: [fetch(`http://localhost:8080/policies/agent_id/6`).then((res) => 
        res.json()
        )]})
    }
})

const usePolicyStore = create(
    devtools(
        persist(policyStore, {
            name: 'policies',
        })
    )
)

export default usePolicyStore;