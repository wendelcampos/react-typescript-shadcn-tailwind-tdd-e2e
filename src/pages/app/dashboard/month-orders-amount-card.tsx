import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthOrdersAmountCard() {

    const { data: monthOrderAmount } = useQuery({
        queryFn: getMonthOrdersAmount,
        queryKey: ['metrics', 'month-order-amount']
    })
    
    return (
        <Card>
            <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
                <CardTitle className="text-base font-semibold">Pedidos (mês) </CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent className="space-y-1">
            { monthOrderAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            { monthOrderAmount.amount.toLocaleString('pt-BR') }
                        </span>
                        <p className="text-xs text-muted-foreground">
                           { monthOrderAmount.diffFromLastMonth >= 0 ? (

                            <>
                                <span className="text-emerald-500 dark:text-emerald-400">+{ monthOrderAmount.diffFromLastMonth}%</span> em relação ao mês passado
                            </>
                                
                           ) : (

                            <>
                                <span className="text-rose-500 dark:text-rose-400">{ monthOrderAmount.diffFromLastMonth}%</span> em relação ao mês passado
                            </>
                                
                           )}
                        </p>
                    </>
                ) : (
                    <MetricCardSkeleton />
                )
            }
                
            </CardContent>
        </Card>
    )
}

