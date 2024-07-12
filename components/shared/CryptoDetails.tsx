/* "use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CoinDetails {
  id: string;
  name: string;
  symbol: string;
  image: { large: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
  };
  description: { en: string };
}

export default function CryptoDetails({ id }: { id: string }) {
  const fetchCoinDetails = async () => {
    const { data } = await axios.get<CoinDetails>(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return data;
  };

  const {
    data: coin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coin", id],
    queryFn: fetchCoinDetails,
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

    if (!coin) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <img
            src={coin.image.large}
            alt={coin.name}
            className="w-8 h-8 mr-2"
          />
          {coin.name} ({coin.symbol.toUpperCase()})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Current Price</h3>
            <p>${coin.market_data.current_price.usd.toFixed(2)}</p>
          </div>
          <div>
            <h3 className="font-bold">24h Change</h3>
            <p
              className={
                coin.market_data.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
          <div>
            <h3 className="font-bold">Market Capitalization</h3>
            <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="font-bold">24h Volume</h3>
            <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Description</h3>
          <p className="mt-2">{coin.description.en}</p>
        </div>
      </CardContent>
    </Card>
  );
}
 */  
/* coin type error */

"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CoinDetails {
  id: string;
  name: string;
  symbol: string;
  image: { large: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
  };
  description: { en: string };
}

export default function CryptoDetails({ id }: { id: string }) {
  const fetchCoinDetails = async () => {
    const { data } = await axios.get<CoinDetails>(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return data;
  };

  const {
    data: coin,
    isLoading,
    isError,
  } = useQuery<CoinDetails, Error>({
    queryKey: ["coin", id],
    queryFn: fetchCoinDetails,
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
        <CardTitle className="flex items-center">
          <img
            src={coin?.image?.large ?? ''}
            alt={coin?.name ?? ''}
            className="w-8 h-8 mr-2"
          />
          {coin?.name ?? ''} ({coin?.symbol?.toUpperCase() ?? ''})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Current Price</h3>
            <p>${coin?.market_data?.current_price?.usd?.toFixed(2) ?? 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-bold">24h Change</h3>
            <p
              className={
                (coin?.market_data?.price_change_percentage_24h ?? 0) > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {coin?.market_data?.price_change_percentage_24h?.toFixed(2) ?? 'N/A'}%
            </p>
          </div>
          <div>
            <h3 className="font-bold">Market Capitalization</h3>
            <p>${coin?.market_data?.market_cap?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-bold">24h Volume</h3>
            <p>${coin?.market_data?.total_volume?.usd?.toLocaleString() ?? 'N/A'}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Description</h3>
          <p className="mt-2">{coin?.description?.en ?? 'No description available.'}</p>
        </div>
      </CardContent>
    </Card>
  );
}