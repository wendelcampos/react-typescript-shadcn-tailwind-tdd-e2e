import { api } from "@/lib/axios";

export interface FetchDailyRevenueInPeriodQuery { 
    from?: Date
    to?: Date
}

export interface GetDailyRevenueInPeriodResponse {
    date: string 
    receipt: number
}[]

export async function getDailyRevenueInPeriod({ from, to }: FetchDailyRevenueInPeriodQuery) {

    const response = await api.get<GetDailyRevenueInPeriodResponse>(
        '/metrics/daily-receipt-in-period', {
            params: {
                from,
                to
            }
        });

    return response.data;

}