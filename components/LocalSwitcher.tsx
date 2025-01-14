'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }
  return (
    <label className="rounded-md border border-gray-200 border-opacity-80 outline-none focus:outline-none dark:border-gray-700">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="border-none bg-transparent py-2 text-sm focus:outline-none focus:ring-0"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="zh">中文</option>
      </select>
    </label>
  )
}
