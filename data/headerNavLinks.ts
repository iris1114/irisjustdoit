import { useLocale } from 'next-intl'

const HeaderNavLinks = () => {
  const locale = useLocale()

  const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: `${locale}/tags/life`, title: 'Life' },
    { href: `${locale}/tags/tech`, title: 'Tech' },
    { href: `${locale}/tags`, title: 'Tags' },
    { href: `${locale}/about`, title: 'About' },
  ]

  return headerNavLinks // Or render it directly
}

export default HeaderNavLinks
