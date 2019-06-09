export interface IIndicator {
    name: string
    color: string
    value: string | number
}

export interface IChartData {
    name: string
    value: string | number
}

export interface IChartProps {
    data: IChartData[]
    subtitle: string
}

export interface ICardChartProps {
    data: IChartData[]
    subtitle: string
    title: string
}
