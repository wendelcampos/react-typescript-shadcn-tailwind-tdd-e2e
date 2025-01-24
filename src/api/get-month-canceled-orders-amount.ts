import { api } from "@/lib/axios";

export interface GetCanceledOrdersAmountResponse {
    amount: number;
    diffFromLastMonth: number;
}

export async function getMonthCanceledOrdersAmount() {

    const response = await api.get<GetCanceledOrdersAmountResponse>('/metrics/month-canceled-orders-amount');

    return response.data;

}