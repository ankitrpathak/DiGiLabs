"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { toast } from "sonner";

const NotificationButton = () => {
  const [permission, setPermission] = useState<NotificationPermission | null>(
    null
  );

  useEffect(() => {
    if (typeof Notification !== "undefined") {
      setPermission(Notification.permission);
    }
  }, []);

  const handleNotification = async () => {
    if (typeof Notification === "undefined") {
      toast.error("Notifications are not supported by this browser.");
      return;
    }

    if (permission !== "granted") {
      const result = await Notification.requestPermission();
      setPermission(result);
      if (result !== "granted") {
        toast.error("Notification permission denied.");
        return;
      }
    }

    try {
      const notification = new Notification("Welcome to DiGiLABS!", {
        body: "You're subscribed to updates.",
        icon: "/icons/icon-192x192.png",
        badge: "/icons/icon-192x192.png",
        tag: "welcome",
        // renotify: true,
        requireInteraction: true,
        // timestamp: Date.now(),
        data: { url: window.location.origin },
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      toast.success("Notification sent!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send notification.");
    }
  };

  if (typeof Notification === "undefined") return null;

  return (
    <Button
      onClick={handleNotification}
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full relative"
      title={
        permission === "granted" ? "Send Notification" : "Enable Notifications"
      }
    >
      <Bell className="h-5 w-5" />
      {permission === "granted" && (
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
      )}
      <span className="sr-only">
        {permission === "granted"
          ? "Send Notification"
          : "Enable Notifications"}
      </span>
    </Button>
  );
};

export default NotificationButton;
