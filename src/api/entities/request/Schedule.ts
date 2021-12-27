export interface Schedule {
    _id?: number
    day: string
    time: string
    week: number
    auditory: { id: number }
    group: { id: number }
}