import { http, HttpResponse } from 'msw'
import { GetDayOrderAmountResponse } from '../get-day-order-amount'

export const getDayOrderAmountMock = http.get<never, never, GetDayOrderAmountResponse>('/metrics/day-orders-amount', async () => {
    return HttpResponse.json({
        amount: 20,
        diffFromYesterday: -5
    })
})