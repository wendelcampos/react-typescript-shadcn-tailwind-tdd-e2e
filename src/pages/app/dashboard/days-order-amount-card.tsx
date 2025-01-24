import { getDayOrderAmount } from "@/api/get-day-order-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function DaysOrdersAmountCard() {

    const { data: dayOrderAmount } = useQuery({
        queryFn: getDayOrderAmount,
        queryKey: ['metrics', 'day-order-amount']
    })

    return (
        <Card>
            <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
                <CardTitle className="text-base font-semibold">Pedidos (dia) </CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent className="space-y-1">

                { dayOrderAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            { dayOrderAmount.amount.toLocaleString('pt-BR') }
                        </span>
                        <p className="text-xs text-muted-foreground">
                           { dayOrderAmount.diffFromYesterday >= 0 ? (

                            <>
                                <span className="text-emerald-500 dark:text-emerald-400">+{ dayOrderAmount.diffFromYesterday}%</span> em relação a ontem
                            </>
                                
                           ) : (

                            <>
                                <span className="text-rose-500 dark:text-rose-400">{ dayOrderAmount.diffFromYesterday}%</span> em relação a ontem
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

