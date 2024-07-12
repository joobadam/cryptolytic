"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartData {
  prices: [number, number][];
}

const timeRanges = [
  { label: "24 h", value: "1" },
  { label: "7 days", value: "7" },
  { label: "30 days", value: "30" },
  { label: "90 days", value: "90" },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
};

export default function CryptoChart() {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [timeRange, setTimeRange] = useState("7");

  const fetchChartData = async () => {
    const { data } = await axios.get<ChartData>(
      `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=${timeRange}`
    );
    return data.prices.map(([timestamp, price]) => ({
      date: new Date(timestamp).toLocaleDateString(),
      price: price,
    }));
  };

  const supportedCryptos = [
    { id: "bitcoin", name: "Bitcoin" },
    { id: "ethereum", name: "Ethereum" },
    { id: "ripple", name: "Ripple" },
    { id: "cardano", name: "Cardano" },
    { id: "dogecoin", name: "Dogecoin" },
    { id: "polkadot", name: "Polkadot" },
    { id: "binancecoin", name: "Binance Coin" },
    { id: "solana", name: "Solana" },
  ];

  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["chartData", selectedCoin, timeRange],
    queryFn: fetchChartData,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen font-bold">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen font-bold">
        An error occurred during the loading process
      </div>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {supportedCryptos.find((crypto) => crypto.id === selectedCoin)
            ?.name || "Cryptocurrency"}{" "}
          Exchange Rate
        </CardTitle>
        <div className="flex space-x-4">
          <Select onValueChange={(value) => setSelectedCoin(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="cryptocurrency" />
            </SelectTrigger>
            <SelectContent>
              {supportedCryptos.map((crypto) => (
                <SelectItem key={crypto.id} value={crypto.id}>
                  {crypto.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setTimeRange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              {timeRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 5)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value.toFixed(2)}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
