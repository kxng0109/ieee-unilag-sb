export interface EventCardType {
    id: string,
    image: string,
    title: string,
    description: string,
    location: string,
}
export interface EventsSectionProps {
    data: EventCardType
}