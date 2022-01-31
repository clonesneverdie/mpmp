import { faSyncAlt, faCreditCard, faCoins, faArchway } from '@fortawesome/free-solid-svg-icons'
import { goto } from '$app/navigation'


export interface TokenMenu {
  title: string
  path
  icon
}

export const pathData: Array<TokenMenu> = [
  {
    title: 'Swap',
    path: () => { goto('/token/swap') },
    icon: faSyncAlt
  },
  {
    title: 'Purchase',
    path: () => { alert('coming soon') },
    icon: faCreditCard
  },
  {
    title: 'Exchange',
    path: () => { alert('coming soon') },
    icon: faCoins
  },
  {
    title: 'Bridge',
    path: () => { alert('coming soon') },
    icon: faArchway
  },
]