"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { toast } from "sonner";

const NotificationButton = () => {
  const [permissionStatus, setPermissionStatus] = useState<NotificationPermission | null>(null);

  useEffect(() => {
    // Check if the browser supports notifications
    if ('Notification' in window) {
      setPermissionStatus(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      toast.error("This browser does not support desktop notifications");
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setPermissionStatus(permission);
      
      if (permission === 'granted') {
        sendNotification();
      } else if (permission === 'denied') {
        toast.error("Notification permission denied");
      }
    } catch (error) {
      toast.error("Error requesting notification permission");
      console.error(error);
    }
  };

  const sendNotification = () => {
    try {
      const notification = new Notification("Welcome to DiGiLABS!", {
        body: "Thank you for enabling notifications. We'll keep you updated with the latest news and features.",
        icon: "/icons/icon-192x192.png",
        badge: "/icons/icon-192x192.png",
        tag: "welcome-notification",
        renotify: true,
        requireInteraction: true,
        silent: false,
        timestamp: Date.now(),
        data: {
          url: window.location.origin,
        },
      });
      
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      
      toast.success("Notification sent successfully!");
    } catch (error) {
      toast.error("Error sending notification");
      console.error(error);
    }
  };

  const handleClick = () => {
    if (permissionStatus === 'granted') {
      sendNotification();
    } else {
      requestPermission();
    }
  };

  if (!('Notification' in window)) {
    return null;
  }

  return (
    <Button 
      onClick={handleClick} 
      variant="outline" 
      size="icon" 
      className="h-10 w-10 rounded-full relative"
      title={permissionStatus === 'granted' ? 'Send Notification' : 'Enable Notifications'}
    >
      <Bell className="h-5 w-5" />
      {permissionStatus === 'granted' && (
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
      )}
      <span className="sr-only">
        {permissionStatus === 'granted' ? 'Send Notification' : 'Enable Notifications'}
      </span>
    </Button>
  );
};

export default NotificationButton;