import Image from 'next/image'
import { usePWAInstall } from 'react-use-pwa-install'
import React from 'react'
import { useState } from 'react'
import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import darkbackgroundImage from '@/images/background-dark.jpg'
import { check } from 'prettier'
export function Calculla() {
  return (
    <>
      <section className="relative bg-indigo-50 py-7 pb-10 dark:bg-gray-900 sm:py-10">
        <div className="relative mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <div className="mb-5 rounded-lg bg-blue-700 px-6 py-6 text-center">
              <a
                href="https://gpaestimator.streamlit.app/"
                className="grad_button2 border border-blue-600 py-2 px-4 font-semibold drop-shadow-lg"
                target="_blank"
              >
                Visit the App
              </a>
            </div>

            <iframe
              className="aspect-auto rounded-xl shadow-lg"
              src="https://gpaestimator.streamlit.app/?embed=true"
              width="100%"
              height="2000"
            ></iframe>
            <p className="border-t py-5 text-center text-slate-900 dark:text-zinc-50">
              Fill The form to become a beta Tester
            </p>
            <iframe
              className="h-screen w-full"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdxrUxh3jr3XVfxv7y2_fDKdsathdKOySCzessIypgUaUgW5Q/viewform?embedded=true"
              height="1024"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </>
  )
}
