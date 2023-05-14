import { socialmedia } from '@/assets/data/mock'
import Link from 'next/link'
import React from 'react'

const Homeelement = () => {
  return (
    <div id="home" className="flex w-full flex-col h-full gap-32 justify-between">
    <div className="flex justify-center mt-24 items-center gap-4 flex-col ">
      <h1 className=" text-9xl font-semibold">
        Hi ! it&apos;s <span className=" text-orange-500">Kishor.</span>
      </h1>
      <p className=" text-sm tracking-[.25em]">
        I&apos;m a Frontend Developer based in Kolkata, India.
      </p>
      <Link
        href="/about"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        About me
      </Link>
    </div>
    <div className="flex items-end justify-between ">
      <div className="flex flex-col gap-1">
        <span>let &apos; s work together</span>
        <span>
          <Link
            href="mailto:kishor.sarkar.in@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            kishor.sarkar.in@gmail.com
          </Link>
        </span>
        <span>
          <Link href={"tel:+918637317273"}>863-731-7273</Link>
        </span>
      </div>
      <div className="flex gap-2 justify-start">
        {socialmedia.map((social) => (
          <Link key={social.id} href={`${social.url}`}>
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Homeelement