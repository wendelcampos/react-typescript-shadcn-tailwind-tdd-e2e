import { http, HttpResponse } from 'msw'
import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', async () => {
    return HttpResponse.json({
        name: 'John Doe',
        id: 'custom-user-id',
        email: 'jonhdoe@wxample.com',
        phone: '1234567890',
        role: "manager",
        createdAt: new Date(),
        updatedAt: null
    })
})