"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-transform duration-200 ease-in-out hover:scale-105",
        "bg-white shadow-md dark:bg-neutral-800 dark:shadow-lg"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
            width: "40px",
            height: "40px",
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex items-center whitespace-pre text-lg font-medium text-black dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {time}
            </span>
          </figcaption>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl w-full max-w-[500px] mx-auto",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
