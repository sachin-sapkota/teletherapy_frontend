import React from 'react'
import Breathing from '../components/Breathing'
import Layout from '../components/Layout/Layout'

export default function BreathingTimer() {
    return (
        <Layout>
            <div className='flex items-center justify-center min-h-screen'>
                <Breathing />
            </div>
        </Layout>
    )
}
