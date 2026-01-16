// 通知类型
export type NotificationStatus = "all" | "read" | "unread";

// 通知接口
export interface Notification {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

// 通知面板Props接口
export interface NotificationPanelProps {
  notifications: Notification[];
  isOpen: boolean;
  onClose?: () => void;
  onMarkAsRead?: (id: string) => void;
  onMarkAllAsRead?: () => void;
}

// 铃铛按钮Props接口
export interface NotificationBellProps {
  unreadCount: number;
  maxDisplayCount?: number;
  onClick?: () => void;
}
