export enum ToastNotificationType {
  APPLICATION_ERROR = 'ApplicationErrorNotification',
}

export interface ToastNotificationPropsBase {
  dateAndTime: Date;
  visible: boolean;
  onClose: () => void;
  onHide: () => void;
  onRemove: () => void;
}

export interface ToastNotificationBase<
  Type extends ToastNotificationType,
  Props extends ToastNotificationPropsBase,
> {
  id: string;
  type: Type;
  props: Props;
}

export interface ApplicationErrorNotificationNotificationProps
  extends ToastNotificationPropsBase {
  title: string;
  message: string;
}

export type ApplicationErrorNotificationNotification = ToastNotificationBase<
  ToastNotificationType.APPLICATION_ERROR,
  ApplicationErrorNotificationNotificationProps
>;

export type AnyToastNotification = ApplicationErrorNotificationNotification;
