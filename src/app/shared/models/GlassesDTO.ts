export interface BodyGlassesDTO {
    content: GlassesDTO[]
}

export interface GlassesDTO {
        identifier: string
        title: string
        pic: string
        available: boolean
        quantityInStock: number
        model: string
        frame: string
        color: string
        brand: string
        price: number
}

