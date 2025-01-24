import { http, HttpResponse } from 'msw'
import { GetManagerRestaurantResponse } from '../get-manager-restaurant'

export const getManagedRestaurantMock = http.get<never, never, GetManagerRestaurantResponse>('/managed-restaurant', async () => {
    return HttpResponse.json({
        name: 'Pizza Shop',
        id: 'custom-restaurant-id',
        createdAt: new Date(),
        updatedAt: null,
        description: 'Custom Restaurant description',
        managerId: 'custom-manager-id'
    })
})