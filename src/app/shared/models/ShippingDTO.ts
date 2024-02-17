export interface ShippingDTO {
    id: string
    name: string
    delivery_time: null
    price: number
    company: {
        id: number
        name: string
        pic: string
        has_error: null
    }
}