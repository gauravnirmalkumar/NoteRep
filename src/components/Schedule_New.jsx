import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const subjects = [
  {
    date: 'Physics Cycle',
    dateTime: 'I SEMESTER',
    summary: 'I SEMESTER',
    timeSlots: [
      {
        border: 1,
        name: 'Advanced Calculus',
        description: 'MA11 | Mathematics',
        start: '9:00AM',
        end: '10:00AM',
        link: 'https://drive.google.com/drive/folders/1ocboxyZqKUF8PcoPQCNcN1qW6_98s8py',
      },
      {
        name: 'Communicative English',
        description: 'HS12 | Humanities',
        start: '10:00AM',
        end: '11:00AM',
        link: 'https://drive.google.com/drive/folders/1wZFskaydriaWIrOeHMSNutNtV-55fqFx?usp=sharing',
      },
      {
        name: 'Basic Electrical Engineering',
        description: 'EE13 | Electrical & Electronics',
        start: '11:00AM',
        end: '12:00PM',
        link: 'https://drive.google.com/drive/folders/1oetzNGC020UfqQ8hMeyIxFRcO2fdJhVZ?usp=sharing',
      },
      {
        name: 'Basics Of Civil Engineering & Mechanics',
        description: 'CV14 | Civil Engineering',
        start: '12:00AM',
        end: '1:00PM',
        link: 'https://drive.google.com/drive/folders/1hfv8E8kByN9KcDElYJI1ZWqPIZYZmavg',
      },
      {
        name: 'Design Thinking',
        description: 'AEC26',
        start: '1:00PM',
        end: '2:00PM',
        link: 'https://drive.google.com/drive/folders/1aPjpHh6apHApF2sW9U88KFEn28csTpUh?usp=sharing',
      },
      {
        name: 'Engineering Physics',
        description: 'PY15 | Physics',
        start: '2:00PM',
        end: '3:00PM',
        link: 'https://drive.google.com/drive/folders/1HfYqOlmGppRU_lFEqcJ1SwkDxiRfUxKN?usp=sharing',
      },
      {
        name: 'Computer Aided Engineering Drawing',
        description: 'MEL17 | Mechanical Engineering',
        start: '3:00PM',
        end: '4:00PM',
        link: 'https://drive.google.com/drive/folders/1n9pDB2weAQ2qyuPfwA_69XmtO5wbN9wd?usp=sharing',
      },
      {
        name: 'Engineering Physics Laboratory',
        description: 'PYL18 | Physics',
        start: '4:00PM',
        end: '5:00PM',
        link: 'https://drive.google.com/drive/folders/1Hd-LMODhxKe3Vogyl2tdBGLpj_sv79Ms?usp=sharing',
      },
    ],
  },
  {
    date: 'Chemistry Cycle',
    dateTime: 'I SEMESTER',
    summary: 'I SEMESTER',
    timeSlots: [
      {
        border: 1,
        name: 'Multivariate Calculus & Differential Equations',
        description: 'MA21 | Mathematics',
        start: '9:00AM',
        end: '10:00AM',
        link: 'https://drive.google.com/drive/folders/1nDwJtyynb8V-N0afwfSuXWDCQK9MFyFt?usp=sharing',
      },
      {
        name: 'Fundamentals Of Mechanical Engineering',
        description: 'ME22 | Mechanical Engineering',
        start: '10:00AM',
        end: '11:00AM',
        link: 'https://drive.google.com/drive/folders/14UBANxwD6X3w7R4z_LbGxlx8bL7iizwW?usp=sharing',
      },
      {
        name: 'Basic Electronics',
        description: 'EC23 | EC/ET',
        start: '11:00AM',
        end: '12:00PM',
        link: 'https://drive.google.com/drive/folders/16hJtglzOMFIZgi1I4CmmWvNVTzfEa_lz?usp=sharing',
      },
      {
        name: 'Computing Fundamentals And C Programming',
        description: 'CS24 | CSE/ISE',
        start: '12:00PM',
        end: '1:00PM',
        link: 'https://drive.google.com/drive/folders/1qR61EoAEOu2kaTtDUoV7NQY3dGl326AP?usp=sharing',
      },
      {
        name: 'Engineering Chemistry',
        description: 'CY25 | Chemistry',
        start: '1:00PM',
        end: '2:00PM',
        link: 'https://drive.google.com/drive/folders/1PwOQv5aGNb7A-YBq9Jg3GEca_3D12IlJ?usp=sharing',
      },
      {
        name: 'A Scientific Approach To Health',
        description: 'AEC26',
        start: '2:00PM',
        end: '3:00PM',
        link: 'https://drive.google.com/drive/folders/1hhpslVlioi_ctjRHd9yBdFfFDteq0zFP?usp=sharing',
      },
      {
        name: 'Engineering Chemistry Laboratory',
        description: 'CYL27 | Chemistry',
        start: '3:00PM',
        end: '4:00PM',
        link: 'https://drive.google.com/drive/folders/1PhVaeiy233wPPst8t6kBf05YdyMfn9Cf?usp=sharing',
      },
      {
        name: 'C Programming Laboratory',
        description: 'CSL28 | CSE/ISE',
        start: '4:00PM',
        end: '5:00PM',
        link: 'https://drive.google.com/drive/folders/11hGw83CGCKOnAg_gvmEzzpxilcXVJYeB?usp=sharing',
      },
      {
        name: 'Workshop Practice',
        description: 'MEL29 | Mechanical Engineering',
        start: '5:00PM',
        end: '6:00PM',
        link: 'https://drive.google.com/drive/folders/1RSYS98m7xz8JcRRuxHubaZZvYLfuRNjE?usp=sharing',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          subjects.map((day, dayIndex) => (
            <div
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {subjects.map((day, index) => (
          <Tab.Panel
            key={day.index}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <h3 className="text-center text-2xl font-semibold tracking-tight text-blue-900 dark:text-white">
      <p>{day.date}</p>
    </h3>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 rounded-4xl bg-white/60 py-14 px-5 text-center shadow-num_l backdrop-blur dark:bg-[#0b1120] dark:shadow-num_d'
      )}
    >
      {day.timeSlots.map((timeSlot) => (
        <div>
          {!timeSlot.border && (
            <div className="mx-auto mb-5 h-px w-48 bg-indigo-500/10 dark:bg-slate-50" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900 dark:text-indigo-50">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900 dark:text-blue-200">
              {timeSlot.description}
            </p>
          )}
          <button className="mt-4 rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-lg shadow-blue-900/50 hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 dark:bg-blue-700">
            <a href={timeSlot.link}>View</a>
          </button>
        </div>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      {subjects.map((day, index) => (
        <section key={index}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule_New() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-indigo-50 pt-5 pb-10 dark:bg-slate-900 sm:pt-5 lg:pb-16"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-8">
          <div className="relative mt-5 sm:mt-10">
            <Container className="relative">
              <ScheduleTabbed />
              <ScheduleStatic />
            </Container>
          </div>
        </div>
      </div>
    </section>
  )
}
