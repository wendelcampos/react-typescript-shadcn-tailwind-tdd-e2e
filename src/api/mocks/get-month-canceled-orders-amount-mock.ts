import { http, HttpResponse } from 'msw'
import { GetCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<never, never, GetCanceledOrdersAmountResponse>('/metrics/month-canceled-orders-amount', async () => {
    return HttpResponse.json({
        amount: 5,
        diffFromLastMonth: -5
    })
})