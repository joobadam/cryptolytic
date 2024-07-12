import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      body: "Fantastic platform with an easy-to-use interface and plenty of useful features",
      author: {
        name: "Leslie Alexander",
        handle: "lesliealexander",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      body: "Using this app was definitely one of the best decisions I`ve made. It works great and saved me a lot of time.",
      author: {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      body: "I`m very satisfied with the app, excellent features and superb customer service.",
      author: {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      body: "I love this app! It`s very intuitive and easy to use, and it`s a huge help in my daily work.",
      author: {
        name: "Leonard Krasner",
        handle: "leonardkrasner",
        imageUrl:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      body: "The functionality and design of this app are absolutely stunning. I highly recommend it to everyone!",
      author: {
        name: "Brenna Goyette",
        handle: "brennagoyette",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
        logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
      },
    },
  ];
  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        Testimonials
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full md:max-w-4xl max-w-2xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <div className="p-1">
                <Card className="glass">
                  <CardContent className="flex-center aspect-square p-6">
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl p-6 "
                    >
                      <blockquote className="">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
