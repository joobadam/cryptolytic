"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function CryptoList() {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const fetchCoins = async () => {
    const { data } = await axios.get<Coin[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
    );
    return data;
  };

  const {
    data: coins,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coins", page],
    queryFn: fetchCoins,
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

  const handleRowClick = (id: string) => {
    router.push(`/cryptos/${id}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Price (USD)</TableHead>
              <TableHead>24h Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coins?.map((coin) => (
              <TableRow
                key={coin.id}
                onClick={() => handleRowClick(coin.id)}
                className="cursor-pointer hover:bg-blue-300"
              >
                <TableCell>{coin.name}</TableCell>
                <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                <TableCell>${coin.current_price.toFixed(2)}</TableCell>
                <TableCell
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
