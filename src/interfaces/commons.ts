import { ReactNode } from 'react'

export interface IProps {
    children: ReactNode,
}

export interface IGetBy {
    key: string
    value: string | number
}
