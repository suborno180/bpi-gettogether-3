'use client'
import { redirect, useSearchParams } from 'next/navigation';
import React from 'react'
import Verifystudent from './components/verifystudent';

const VerifyForm = () => {
    const searchParams = useSearchParams();
    const step = searchParams.get('step');
    if (!step) {
        redirect('/regestar?step=1')
    }
    return (
        <main className='w-full min-h-screen grid place-content-center'>
            {
                step === '1' && (
                    <>
                        <Verifystudent />
                    </>
                )
            }
        </main>
    )
}

export default VerifyForm
