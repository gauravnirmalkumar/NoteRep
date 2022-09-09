import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import LogoImage from '@/images/logos/msrlogo_1.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header className="relative z-50 pb-1 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-5 lg:mt-0 lg:grow lg:basis-0">
          {/* <Logo src={LogoImage} alt="Keynote" width={200} height={50} /> */}
          {/* <Logo className="h-12 w-auto text-slate-900" /> */}
          <Image
            className="h-12 w-auto text-slate-900"
            src={LogoImage}
            alt="NoteRep"
          />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center space-x-4 px-4">
            <p>
              Notes Repository
              {/* <time dateTime="2022-04-04">04</time>- */}
              {/* <time dateTime="2022-04-06">StudyConf - An Open-Source Notes</time> */}
            </p>
            <svg
              aria-hidden="true"
              className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
            >
              <path
                d="M3 0L6 3L3 6L0 3Z"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </svg>
            <br></br>
            <p>An Open-Source Notes Sharing Platform</p>
          </div>
        </div>
        {/* <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <ButtonLink href="#">Get your tickets</ButtonLink>
        </div> */}
      </Container>
    </header>
  )
}
